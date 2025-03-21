"use client";
import { motion } from "framer-motion";
import {tecladosLista} from "./tecladosLista"
import ProductoCarta from "../../components/ProductosCartas"

export default function TecladosPagina() {

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Teclados
      </motion.h2>

      <div className="space-y-8">
        {tecladosLista.map((producto) => (
          <ProductoCarta key={producto.id} producto={producto}/>
        ))}
      </div>
    </section>
  );
}
