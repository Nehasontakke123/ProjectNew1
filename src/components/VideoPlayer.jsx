// import React from "react";

// import video1 from "../assets/video/Rings.mp4";
// import video2 from "../assets/video/DIAMOND.mp4";
// import video3 from "../assets/video/Jewellery Promotional video 1.mp4";
// import Video4 from "../assets/video/Enchanting Bridal Collections.mp4"; 
// import Video5 from '../assets/video/SARAVANA.mp4';
// import Video6 from '../assets/video/The rose gold ring.mp4';

// import "../assets/css/VideoPlayer.css"; // ✅ Don't forget this line

// const videoList = [
//   { title: "Video 1 - Funny Cat", src: video1 },
//   { title: "Video 2 - Nature View", src: video2 },
//   { title: "Video 3 - Tech Talk", src: video3 },
//   { title: "Downloaded Video - April 7", src: Video4 },
//   { title: "Video 5 - April 7", src: Video5 }, 
//   { title: "Video 6 - April 7", src: Video6 }, 
// ];

// const VideoPlayer = () => {
//   return (
//     <div className="video-player-container">
//       <h1 className="video-gallery-title">📹 My Video Gallery</h1>

//       <div className="video-grid">
//         {videoList.map((video, index) => (
//           <div key={index} className="video-card">
//             <h2 className="video-title">{video.title}</h2>

//             <video controls className="video-frame" preload="metadata">
//               <source src={video.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             <div className="video-actions">
//               <a href={video.src} download className="download-btn">⬇️ Download</a>
//               <span className="video-speed">Speed: 1x</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;




// import React from "react";

// import video1 from "../assets/video/Rings.mp4";
// import video2 from "../assets/video/DIAMOND.mp4";
// import video3 from "../assets/video/Jewellery Promotional video 1.mp4";
// import Video4 from "../assets/video/Enchanting Bridal Collections.mp4"; 
// import Video5 from '../assets/video/SARAVANA.mp4';
// import Video6 from '../assets/video/The rose gold ring.mp4';

// import "../assets/css/VideoPlayer.css"; // 🔗 Link to CSS

// const videoList = [
//   { title: "Video 1 - Rings Collection", src: video1 },
//   { title: "Video 2 - Diamond Shine", src: video2 },
//   { title: "Video 3 - Golden Elegance", src: video3 },
//   { title: "Bridal Jewellery - April 7", src: Video4 },
//   { title: "Royal Style - April 7", src: Video5 }, 
//   { title: "Rose Gold Beauty - April 7", src: Video6 }, 
// ];

// const VideoPlayer = () => {
//   return (
//     <div className="video-player-container">
//       <h1 className="video-gallery-title">💎 Enchanted Video Gallery</h1>

//       <div className="video-grid">
//         {videoList.map((video, index) => (
//           <div key={index} className="video-card">
//             <video className="video-frame" controls preload="metadata">
//               <source src={video.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <div className="video-overlay">
//               <h2 className="video-title">{video.title}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;




// import React from "react";
// import "../assets/css/VideoPlayer.css";

// import video1 from "../assets/video/Rings.mp4";
// import video2 from "../assets/video/DIAMOND.mp4";
// import video3 from "../assets/video/Jewellery Promotional video 1.mp4";
// import Video4 from "../assets/video/Enchanting Bridal Collections.mp4";
// import Video5 from '../assets/video/SARAVANA.mp4';
// import Video6 from '../assets/video/The rose gold ring.mp4';

// const videoList = [
//   { title: "Rings Collection", src: video1 },
//   { title: "Diamond Shine", src: video2 },
//   { title: "Golden Elegance", src: video3 },
//   { title: "Bridal Jewellery", src: Video4 },
//   { title: "Royal Style", src: Video5 },
//   { title: "Rose Gold Beauty", src: Video6 },
// ];

// const VideoPlayer = () => {
//   return (
//     <div className="carousel-container">
//       {videoList.map((video, index) => (
//         <div key={index} className="carousel-card">
//           <video
//             className="carousel-video"
//             src={video.src}
//             controls
//             muted
//             loop
//             preload="metadata"
//           ></video>
//           <div className="carousel-caption">
//             <p>{video.title}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoPlayer;





import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../assets/css/VideoCarousel.css";

import video1 from "../assets/video/Rings.mp4";
import video2 from "../assets/video/DIAMOND.mp4";
import video3 from "../assets/video/Jewellery Promotional video 1.mp4";
import video4 from "../assets/video/Enchanting Bridal Collections.mp4";
import video5 from "../assets/video/SARAVANA.mp4";
import video6 from "../assets/video/The rose gold ring.mp4";

const videoList = [
  { title: "Rings Collection", src: video1 },
  { title: "Diamond Shine", src: video2 },
  { title: "Golden Elegance", src: video3 },
  { title: "Bridal Jewellery", src: video4 },
  { title: "Royal Style", src: video5 },
  { title: "Rose Gold Beauty", src: video6 },
];

const VideoCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  return (
    <div className="video-carousel-wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="video-swiper"
      >
        {videoList.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card" onClick={() => openModal(video.src)}>
              <video
                className="carousel-video"
                src={video.src}
                muted
                loop
                preload="metadata"
              />
              <div className="carousel-caption">
                <p>{video.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal Fullscreen Video */}
      {showModal && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>✕</button>
            <video src={currentVideo} controls autoPlay className="modal-video" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
