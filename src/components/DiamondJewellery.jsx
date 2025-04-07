import React, { useState } from "react";
import "../assets/css/DiamondJewellery.css";
import img1 from "../assets/images/IMGRing1.jpg";
import img2 from "../assets/images/IMGRing2.jpg";
import img3 from "../assets/images/Braslet1.jpg";
import img4 from "../assets/images/Braslet2.jpg";
import img5 from "../assets/images/DiamondMangalsutra1.jpg";
import img6 from "../assets/images/DiamondMangalsutra2.jpg";
import img7 from "../assets/images/DiamondPendant1.jpg";
import img8 from "../assets/images/DiamondPendant2.jpg";
import img9 from "../assets/images/EarringImg1.jpg";
import img10 from "../assets/images/Earrings2.jpg";

const jewelleryData = [
  { id: 1,  images: [img1, img2] },
  { id: 2,  images: [img3, img4] },
  { id: 3,  images: [img5, img6] },
  { id: 4,  images: [img7, img8] },
  { id: 5,  images: [img9, img10] },
];

const JewelleryCard = ({ label, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="jewellery-card">
      <span className="label">{label}</span>
      <img src={images[currentIndex]} alt={label} className="jewellery-image" />
      <div className="navigation-buttons">
        <button className="nav-button" onClick={prevImage}>◀</button>
        <button className="nav-button" onClick={nextImage}>▶</button>
      </div>
    </div>
  );
};

const DiamondJewellery = () => {
  return (
    <div className="diamond-jewellery-container">
      <h1 className="heading">Diamond Jewellery</h1>
      <p className="description">
        Diamonds are one of the most precious and stunning gemstones, known for
        their brilliance and durability. They are often used in jewellery to
        symbolize love and commitment.
      </p>
      <div className="jewellery-grid">
        {jewelleryData.map((item) => (
          <JewelleryCard key={item.id} label={item.label} images={item.images} />
        ))}
      </div>
    </div>
  );
};

export default DiamondJewellery;