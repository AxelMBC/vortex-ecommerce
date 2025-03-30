"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface listaProductosType {
  img: StaticImageData;
  alt: string;
  caption: string;
}

export default function Carousel({
  listaProductos,
}: {
  listaProductos: listaProductosType[];
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % listaProductos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [listaProductos.length]);

  const goToSlide = (index: number) => setActive(index);

  return (
    <div className="w-full max-w-3xl mx-auto" style={{ paddingBottom: "40px" }}>
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-sm">
        {listaProductos.map((item, index) => (
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
        {listaProductos.map((_, index) => (
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
