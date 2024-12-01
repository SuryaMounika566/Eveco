import React, { useState, useEffect } from "react";
import slide1 from "../assets/Slide1.png";
import slide2 from "../assets/Slide2.png";
import slide3 from "../assets/Slide3.png";
import slide4 from "../assets/Slide4.png";

const images = [slide1, slide2, slide3, slide4];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 500);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 500);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="slider-container"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "1150px",
        height: "auto",
        margin: "20px auto",
      }}
    >
      {/* Image Slider */}
      <div
        className="slider-images"
        style={{
          display: "flex",
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "auto",
              flexShrink: 0,
              objectFit: "contain", // Ensures full image is displayed
            }}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "40px",
          height: "40px",
          backgroundColor: "#fff",
          border: "2px solid black",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: "black",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: "20px", height: "20px", color: "black" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "40px",
          height: "40px",
          backgroundColor: "#fff",
          border: "2px solid black",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: "black",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: "20px", height: "20px", color: "black" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Carousel;
