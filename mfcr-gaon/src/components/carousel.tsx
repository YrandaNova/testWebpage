/* eslint-disable @next/next/no-img-element */
// components/Carousel.js
import React, { useState, useEffect } from "react";

function Carousel({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative  overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image: { src: string; alt: string }, index: number) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full block"
            />
          </div>
        ))}
      </div>
      <div className="absolute flex justify-center items-center bg-pink-200  bottom-0 w-full p-2">
        {images.map((_, index: number) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-violet-500" : "bg-pink-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
