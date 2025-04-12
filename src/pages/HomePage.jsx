import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/jewellery_banner.jpg";
import banner2 from "../assets/images/BANNER.jpg";
import banner3 from "../assets/images/RingBanner.jpg";
import "../assets/css/HomePage.css";
import JewelleryCategory from "../components/jewelleryCategory"; // ✅ Corrected Import Path
import DiamondJewellery from "../components/DiamondJewellery";
import GoldJewellery from "../components/GoldJewellery";
import OurCollection from "../components/OurCollection";
import VideoCarousel from "../components/VideoCarousel";
import TopCollection from "../components/TopCollection";
import BridesSection from "../components/BrideSection";
import ShopByGender from '../components/ShopByGender'

const banners = [banner1, banner2, banner3];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ✅ JewelleryCategory Now Above the Banner */}
      <JewelleryCategory />

      <div className="banner-container">
        {banners.map((image, index) => (
          <div key={index} className={`banner-slide ${index === current ? "active" : ""}`}>
            <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
          </div>
        ))}

        <button className="banner-button left" onClick={() => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)}>❮</button>
        <button className="banner-button right" onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}>❯</button>

        <div className="banner-dots">
          {banners.map((_, index) => (
            <div key={index} className={`dot ${index === current ? "active" : ""}`} onClick={() => setCurrent(index)}></div>
          ))}
        </div>
      </div>
      {/* <TopCollection/> */}
      <ShopByGender/>
      {/* <VideoPlayer/> */}
      <VideoCarousel/>
      <DiamondJewellery/>
      <GoldJewellery/>
      {/* <OurCollection/> */}
      <BridesSection/>
    </div>
  );
};

export default HomePage;
