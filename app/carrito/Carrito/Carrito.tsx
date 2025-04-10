"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store"; // Ajusta la ruta según tu proyecto
import { productoType } from "@/app/types/productoType"; // Ajusta la ruta según tu proyecto
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks"; // Hook para despachar
import { clearCart } from "@/lib/features/cart/cartSlice"; // Acción para limpiar

const Carrito = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch(); // Hook para despachar acciones

  // Añadimos un console.log para verificar el estado y el despacho
  const handleClearCart = () => {
    console.log("Antes de limpiar - Items en el carrito:", items);
    dispatch(clearCart());
    console.log("Después de despachar clearCart");
  };

  if (items.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10">
        Tu carrito está vacío.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-white tracking-wide">
        Tu Carrito
      </h2>
      <div className="space-y-6">
        {items.map((producto: productoType) => (
          <div
            key={producto.id}
            className="flex items-center bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300 cursor-pointer hover:bg-gray-700 hover:shadow-xl hover:scale-102"
          >
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={producto.imagen}
                alt={producto.titulo}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-white">
                {producto.titulo}
              </h3>
              <p className="text-gray-300 text-sm">${producto.precio.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end gap-4">
        <button
          onClick={handleClearCart} // Usamos la función con depuración
          className="bg-red-600 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:-translate-y-1"
        >
          Limpiar Carrito
        </button>
        <button className="bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Carrito;