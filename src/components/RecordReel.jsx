import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const predefinedSongs = [
  { title: "Tum Mile", url: "https://example.com/songs/tum-mile.mp3" },
  { title: "Kesariya", url: "https://example.com/songs/kesariya.mp3" },
  { title: "Apna Bana Le", url: "https://example.com/songs/apna-bana-le.mp3" },
];

const RecordReel = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [caption, setCaption] = useState('');
  const [selectedSong, setSelectedSong] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    const initCamera = async () => {
      const streamData = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(streamData);
      if (videoRef.current) {
        videoRef.current.srcObject = streamData;
      }
    };
    initCamera();
  }, []);

  const handleSongChange = (event) => {
    const selectedSongTitle = event.target.value;
    const song = predefinedSongs.find(song => song.title === selectedSongTitle);
    setSelectedSong(selectedSongTitle);
    setSongUrl(song ? song.url : '');
  };

  const startRecording = () => {
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    const localChunks = [];

    recorder.ondataavailable = (e) => localChunks.push(e.data);

    recorder.onstop = async () => {
      const blob = new Blob(localChunks, { type: 'video/webm' });
      const formData = new FormData();
      formData.append('video', blob);
      formData.append('caption', caption);
      formData.append('songTitle', selectedSong);
      formData.append('songUrl', songUrl);

      try {
        await axios.post('https://projectnewbackend1-1.onrender.com/api/reels', formData);
        alert("Reel uploaded!");
        setCaption('');
        setSelectedSong('');
        setSongUrl('');
      } catch (error) {
        alert("Upload failed!");
      }
    };

    recorder.start();
    setIsRecording(true);
    setChunks(localChunks);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="record-container">
      <h2>🎬 Record Your Reel</h2>
      <video ref={videoRef} autoPlay muted style={{ width: '100%', borderRadius: '10px' }} />

      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      {/* Song selection */}
      <select onChange={handleSongChange} value={selectedSong}>
        <option value="">Select a song</option>
        {predefinedSongs.map((song, index) => (
          <option key={index} value={song.title}>{song.title}</option>
        ))}
      </select>

      {/* Display selected song */}
      {songUrl && <audio controls>
        <source src={songUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>}

      {!isRecording ? (
        <button onClick={startRecording}>🔴 Start Recording</button>
      ) : (
        <button onClick={stopRecording}>⏹ Stop & Upload</button>
      )}
    </div>
  );
};

export default RecordReel;
