"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import keyboardImage1 from "../../../public/landing-carousel/Keyboard.jpg"; // Placeholder, replace with actual product images

export default function TecladosPagina() {
  // Sample product data for "Teclados"
  const products = [
    {
      name: "Teclado Mecánico RGB",
      price: "$1,299 MXN",
      description: "Switches rojos, iluminación personalizable.",
      image: keyboardImage1,
    },
    {
      name: "Teclado Ergonómico Silencioso",
      price: "$899 MXN",
      description: "Diseño compacto, teclas de bajo perfil.",
      image: keyboardImage1,
    },
    {
      name: "Teclado Gamer Pro",
      price: "$1,799 MXN",
      description: "Macros programables, construcción metálica.",
      image: keyboardImage1,
    },
  ];

  // Animation variants for product cards
  const productVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15, // Staggered entrance
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Teclados
      </motion.h2>

      {/* Product List */}
      <div className="space-y-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={productVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }} // Elevated hover effect
            className="flex items-center bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative w-1/3 h-40 flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Product Info */}
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-lg font-medium text-gray-900">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
