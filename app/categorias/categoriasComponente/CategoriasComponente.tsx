"use client";
import {useRouter} from "next/navigation"
import { motion } from "framer-motion";
import Image from "next/image";
import keyboardImage from "../../../public/landing-carousel/Keyboard.jpg";
import pcImage from "../../../public/landing-carousel/PC.jpg";
import headphonesImage from "../../../public/landing-carousel/Headphones.jpg";

export default function CategoriesSection() {
  const router = useRouter()
  const categories = [
    {
      name: "Teclados",
      image: keyboardImage,
      description: "Explora teclados mecánicos y ergonómicos de alta calidad.",
    },
    {
      name: "PC",
      image: pcImage,
      description:
        "Potencia tu experiencia con nuestras computadoras de vanguardia.",
    },
    {
      name: "Audífonos",
      image: headphonesImage,
      description: "Sumérgete en el sonido con audífonos premium.",
    },
  ];

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.2, // Staggered delay for each card
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-10"
      >
        Nuestras Categorías
      </motion.h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }} // Subtle hover effect
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
            onClick={()=>router.push(`categoria/${category.name.toLocaleLowerCase()}`)}
          >
            
            
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
      
          </motion.div>
        ))}
      </div>
    </section>
  );
}
