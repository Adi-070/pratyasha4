// components/Carousel.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const images = [
    {src:'/static/PLAN.jpg', alt:'Image 3 description'},
    {src:'/static/INTERIOR 1.jpg', alt:'Image 3 description'},
    {src:'/static/INTERIOR 2.jpg', alt:'Image 3 description'},
    {src:'/static/INTERIOR 3.jpg', alt:'Image 3 description'},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <div className="relative w-full md:w-5/6 lg:w-4/5 md:mt-20">
      <div className="relative h-96 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill="true" 
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white text-4xl focus:outline-none"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white text-4xl focus:outline-none"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
