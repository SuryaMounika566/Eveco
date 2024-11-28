import React, { useState, useEffect } from "react";
import slide1 from '../assets/Slide1.png';
import slide2 from '../assets/Slide2.png';
import slide3 from '../assets/Slide3.png';
import slide4 from '../assets/Slide4.png';

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
      className="slider-container relative mx-auto"
      style={{
        width: "1150px",
        height: "520px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        margin: "20px auto",
        backgroundColor: "#f8f8f8",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Images */}
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
              width: "1150px",
              height: "520px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="left-arrow absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-200 hover:bg-gray-400 hover:text-white p-3 rounded-full cursor-pointer flex items-center justify-center"
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: 10,
          width: "40px",
          height: "40px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
        className="right-arrow absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-200 hover:bg-gray-400 hover:text-white p-3 rounded-full cursor-pointer flex items-center justify-center"
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          zIndex: 10,
          width: "40px",
          height: "40px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
