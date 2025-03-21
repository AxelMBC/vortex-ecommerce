"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import pCImage from "../../../public/landing-carousel/PC.jpg";
import headphonesImage from "../../../public/landing-carousel/Headphones.jpg";
import keyboardImage from "../../../public/landing-carousel/Keyboard.jpg";

export default function Carousel() {
  const [active, setActive] = useState(0);
  const items = [
    { img: pCImage, alt: "Minimal Slide 1", caption: "Timeless Elegance" },
    { img: headphonesImage, alt: "Minimal Slide 2", caption: "Simple Beauty" },
    { img: keyboardImage, alt: "Minimal Slide 3", caption: "Pure Design" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index:number) => setActive(index);

  return (
    <div className="w-full max-w-3xl mx-auto">

      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-sm">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.img}
              alt={item.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span
                className={`inline-block px-4 py-1 bg-white/80 text-gray-800 text-sm font-medium rounded-full transition-opacity duration-500 ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === index ? "bg-gray-800 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}