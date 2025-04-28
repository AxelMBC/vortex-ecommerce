"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { productoType } from "@/types/productoType";
import { useRouter } from "next/navigation";

const ProductoCarta = ({
  producto,
  tipo,
}: {
  producto: productoType;
  tipo: string;
}) => {
  const router = useRouter();
  // Animation variants for product cards
  const productVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
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
    <motion.div
      onClick={() => router.push(`${tipo}/${producto.id.toString()}`)}
      custom={producto.id}
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
          src={producto.imagen}
          alt={producto.titulo}
          fill
          className="object-cover"
        />
      </div>
      {/* Product Info */}
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {producto.titulo}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{producto.descripcion}</p>
        <p className="text-lg font-medium text-gray-900">{producto.precio}</p>
      </div>
    </motion.div>
  );
};

export default ProductoCarta;
