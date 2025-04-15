"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contacto() {
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  // Estado para manejar el envío del formulario
  const [enviado, setEnviado] = useState(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a un servidor o API
    console.log("Datos del formulario:", formData);
    setEnviado(true);
    // Resetear el formulario después de enviar
    setFormData({ nombre: "", correo: "", mensaje: "" });
    // Ocultar el mensaje de éxito después de 3 segundos
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="container mx-auto px-6 py-12 min-h-screen relative">
      {/* Toast de éxito */}
      {enviado && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 text-green-800 p-4 rounded-lg shadow-md flex items-center space-x-2 max-w-sm"
        >
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>¡Mensaje enviado con éxito!</span>
        </motion.div>
      )}

      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white text-center mb-8"
      >
        Contáctanos
      </motion.h1>

      {/* Formulario de Contacto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Envíanos un mensaje
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-medium mb-1"
            >
              Nombre
            </label>
            <motion.input
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full text-gray-600 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>

          {/* Campo Correo */}
          <div>
            <label
              htmlFor="correo"
              className="block text-gray-700 font-medium mb-1"
            >
              Correo Electrónico
            </label>
            <motion.input
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@correo.com"
            />
          </div>

          {/* Campo Mensaje */}
          <div>
            <label
              htmlFor="mensaje"
              className="block text-gray-700 font-medium mb-1"
            >
              Mensaje
            </label>
            <motion.textarea
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full text-gray-600 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue--channel://discordapp.com/channels/1085298755687473192/1085298755687473195/1302430990931030067
500 resize-none"
              rows={5}
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* Botón de Envío */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Enviar
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}