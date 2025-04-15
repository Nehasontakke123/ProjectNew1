import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import '../assets/css/VideoStream.css';

const socket = io("https://projectnewbackend1-1.onrender.com"); // Backend server

const VideoStream = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerConnection = useRef(null);
    const [isCalling, setIsCalling] = useState(false);
    const [incomingCall, setIncomingCall] = useState(false);
    const [incomingOffer, setIncomingOffer] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(""); // For storing phone number to send SMS

    useEffect(() => {
        socket.on("offer", async (offer) => {
            console.log("📞 Incoming call offer received");
            setIncomingOffer(offer);
            setIncomingCall(true); // Show popup
        });

        socket.on("answer", async (answer) => {
            await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.on("ice-candidate", async (candidate) => {
            try {
                await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
            } catch (error) {
                console.error("Error adding ICE candidate:", error);
            }
        });

        return () => socket.disconnect();
    }, []);

    const createPeerConnection = () => {
        peerConnection.current = new RTCPeerConnection({
            iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        });

        peerConnection.current.onicecandidate = (event) => {
            if (event.candidate) socket.emit("ice-candidate", event.candidate);
        };

        peerConnection.current.ontrack = (event) => {
            remoteVideoRef.current.srcObject = event.streams[0];
        };
    };

    const acceptCall = async () => {
        setIncomingCall(false);
        createPeerConnection();

        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(incomingOffer));
        const answer = await peerConnection.current.createAnswer();
        await peerConnection.current.setLocalDescription(answer);
        socket.emit("answer", answer);
        setIsCalling(true);
    };

    const rejectCall = () => {
        setIncomingCall(false);
        setIncomingOffer(null);
    };

    const startCall = async () => {
        createPeerConnection();
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

        const offer = await peerConnection.current.createOffer();
        await peerConnection.current.setLocalDescription(offer);
        socket.emit("offer", offer);
        setIsCalling(true);

        // Send SMS with video call link
        sendSMSWithVideoLink();
    };

    const sendSMSWithVideoLink = async () => {
        try {
            const videoCallLink = `https://yourdomain.com/video-call/${new Date().getTime()}`;
            // Send the link via backend API to trigger SMS
            await fetch("https://projectnewbackend1-1.onrender.com/api/send-sms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phoneNumber,
                    videoCallLink,
                }),
            });
            console.log("SMS sent with video call link.");
        } catch (error) {
            console.error("Error sending SMS:", error);
        }
    };

    const endCall = () => {
        if (peerConnection.current) {
            peerConnection.current.close();
            peerConnection.current = null;
        }
        localVideoRef.current.srcObject?.getTracks().forEach((track) => track.stop());
        remoteVideoRef.current.srcObject = null;
        setIsCalling(false);
    };

    return (
        <div className="video-container">
            {/* Local and Remote Video */}
            <video ref={localVideoRef} autoPlay playsInline className="video" />
            <video ref={remoteVideoRef} autoPlay playsInline className="video" />

            {/* Phone number input for sending SMS */}
            {!isCalling && (
                <div>
                    <label>Enter Phone Number to Send Call Link:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                    />
                </div>
            )}

            {/* Buttons */}
            {!isCalling ? (
                <button onClick={startCall}>Start Call</button>
            ) : (
                <button onClick={endCall}>End Call</button>
            )}

            {/* Incoming Call Popup */}
            {incomingCall && (
                <div className="call-popup">
                    <p>📞 Incoming video call request from <strong>Karagir</strong></p>
                    <button onClick={acceptCall}>✅ Accept</button>
                    <button onClick={rejectCall}>❌ Reject</button>
                </div>
            )}
        </div>
    );
};

export default VideoStream;
