"use client";
import { motion } from "framer-motion";
import { tecladosLista } from "../tecladosLista";
import ProductoCarta from "@/app/components/ProductosCartas";
import Carousel from "@/app/components/Carousel";
import { productosTeclados } from "@/app/db/carousel";

const Teclados = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Teclados Mas Vendidos
      </motion.h2>
      <div className="w-full max-w-3xl mx-auto mb-12">
        <Carousel listaProductos={productosTeclados} />
      </div>
      <div className="space-y-8 cursor-pointer">
        {tecladosLista.map((producto) => (
          <ProductoCarta
            key={producto.id}
            producto={producto}
            tipo="teclados"
          />
        ))}
      </div>
    </section>
  );
};
export default Teclados;
