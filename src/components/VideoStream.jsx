import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import '../assets/css/VideoStream.css'

const socket = io("http://localhost:7001"); // Backend server address

const VideoStream = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerConnection = useRef(null);
    const [isCalling, setIsCalling] = useState(false);

    useEffect(() => {
        socket.on("offer", async (offer) => {
            if (!peerConnection.current) createPeerConnection();
            await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await peerConnection.current.createAnswer();
            await peerConnection.current.setLocalDescription(answer);
            socket.emit("answer", answer);
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

    const startCall = async () => {
        createPeerConnection();
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

        const offer = await peerConnection.current.createOffer();
        await peerConnection.current.setLocalDescription(offer);
        socket.emit("offer", offer);
        setIsCalling(true);
    };

    const endCall = () => {
        if (peerConnection.current) {
            peerConnection.current.close();
            peerConnection.current = null;
        }
        localVideoRef.current.srcObject?.getTracks().forEach(track => track.stop());
        remoteVideoRef.current.srcObject = null;
        setIsCalling(false);
    };

    return (
        <div className="video-container">
            <video ref={localVideoRef} autoPlay playsInline className="video" />
            <video ref={remoteVideoRef} autoPlay playsInline className="video" />
            {!isCalling ? (
                <button onClick={startCall}>Start Call</button>
            ) : (
                <button onClick={endCall} >
                    End Call
                </button>
            )}
        </div>
    );
};

export default VideoStream;
