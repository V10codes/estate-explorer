import "./slider.scss";
import { useState } from "react";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (!images.length) return; // Handle empty images array
    const newIndex =
      direction === "left"
        ? (imageIndex - 1 + images.length) % images.length
        : (imageIndex + 1 + images.length) % images.length;

    setImageIndex(newIndex);
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt="arrow-left"
              onClick={() => changeSlide("left")}
            />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="image" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              alt="arrow-right"
              className="right"
              onClick={() => changeSlide("right")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt="first image"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} key={index} onClick={() => setImageIndex(index)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
