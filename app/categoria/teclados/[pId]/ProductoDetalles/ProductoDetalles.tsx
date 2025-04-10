"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { productoType } from "@/app/types/productoType";
import { useAppDispatch } from "@/lib/hooks";
import { addProductToCart } from "@/lib/features/cart/cartSlice";
import { useState } from "react";

export default function ProductDetails({ product }: { product: productoType }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showToast, setShowToast] = useState(false); // Estado para controlar el aviso

  const videoId = product.videoYT
    ? new URL(product.videoYT).searchParams.get("v") ||
      product.videoYT.split("/").pop()
    : null;

  const handleBackClick = () => {
    router.push("/categoria/teclados");
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(product)); // Despachamos la acción
    setShowToast(true); // Mostramos el aviso
    setTimeout(() => setShowToast(false), 3000); // Ocultamos el aviso después de 3 segundos
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative">
        {/* Aviso (Toast) */}
        {showToast && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 opacity-100 z-50">
            ¡Producto agregado al carrito!
          </div>
        )}

        <div className="mb-8">
          <button
            onClick={handleBackClick}
            className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors duration-200 flex items-center cursor-pointer"
          >
            <span className="mr-2">←</span> Volver a Teclados
          </button>
        </div>

        <div className="text-center md:text-left mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            {product.titulo}
          </h1>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
            {product.descripcion}
          </p>
          <div className="mt-4">
            <span className="text-4xl md:text-5xl font-bold text-indigo-600">
              ${product.precio.toLocaleString()}
            </span>
            <span className="ml-2 text-sm text-gray-500 align-top">MXN</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={product.imagen}
              alt={product.titulo}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>

          {videoId && (
            <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden border border-gray-200">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={product.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className="mt-12 space-y-10 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
              Descripción
            </h2>
            <p className="text-gray-700 text-base">{product.descripcion}</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
              Especificaciones
            </h2>
            <ul className="space-y-2 text-gray-700 text-base">
              {product.especificaciones.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center md:text-left">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-indigo-600 text-white text-base font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}