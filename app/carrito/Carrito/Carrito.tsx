// app/carrito/Carrito/Carrito.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Producto {
  id: string;
  titulo: string;
  precio: number;
  imagen: string;
}

interface Props {
  productos: Producto[];
}

const Carrito = ({ productos }: Props) => {
  console.log("Productos en el carrito:", productos);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">🛒 Mi Carrito</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Volver a la tienda
          </Link>
        </header>

        {/* Contenido del carrito */}
        {Array.isArray(productos) && productos.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">
            Tu carrito está vacío.
          </div>
        ) : (
          <ul className="space-y-4">
            {productos.map((producto) => (
              <li
                key={producto.id}
                className="flex items-center bg-gray-800 p-4 rounded-lg shadow"
              >
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src={producto.imagen}
                    alt={producto.titulo}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-md"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold">{producto.titulo}</h2>
                  <p className="text-lg text-gray-300">
                    ${producto.precio.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Botón de acción */}
        <div className="mt-8">
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Finalizar compra
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Carrito;
