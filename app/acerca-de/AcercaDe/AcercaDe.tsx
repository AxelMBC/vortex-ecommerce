"use client";

import { motion } from "framer-motion";

const AcercaDe = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white text-center mb-8"
      >
        Acerca de Vortex
      </motion.h1>

      {/* Sección Quiénes Somos */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ¿Quiénes somos?
        </h2>
        <p className="text-gray-700">
          En <strong>Vortex</strong>, nos especializamos en la venta de equipos
          de tecnología de última generación. Ofrecemos computadoras, laptops,
          audífonos, VR headsets y pantallas al mejor precio del mercado. Nos
          esforzamos por ser el destino más confiable para los amantes de la
          tecnología, garantizando productos nuevos y seminuevos con la mejor
          relación calidad-precio.
        </p>
      </motion.div>

      {/* Sección Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Misión */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Misión</h2>
          <p className="text-gray-700">
            Brindar a nuestros clientes tecnología de vanguardia a precios
            accesibles, con una plataforma que permita tanto la compra de
            productos nuevos como la venta de artículos seminuevos sin
            comisiones excesivas. Queremos construir una comunidad de confianza
            donde la tecnología sea accesible para todos.
          </p>
        </motion.div>

        {/* Visión */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visión</h2>
          <p className="text-gray-700">
            Ser la plataforma líder en compra y venta de tecnología en
            Latinoamérica, ofreciendo precios bajos, una experiencia de usuario
            excepcional y un ecosistema donde los clientes puedan vender,
            intercambiar y comprar de manera segura.
          </p>
        </motion.div>
      </div>

      {/* Sección Políticas de Calidad */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gray-100 p-6 rounded-lg shadow-md mt-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Políticas de Calidad
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Garantizamos productos 100% funcionales, sean nuevos o seminuevos.
          </li>
          <li>
            Ofrecemos precios altamente competitivos sin comisiones ocultas.
          </li>
          <li>
            Aseguramos un proceso de compra y venta seguro y transparente.
          </li>
          <li>
            Proporcionamos envíos rápidos y opciones de garantía extendida.
          </li>
        </ul>
      </motion.div>

      {/* Sección Ubicación Física */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-white p-6 rounded-lg shadow-md mt-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ubicación Física
        </h2>
        <p className="text-gray-700">
          Nuestras oficinas principales están ubicadas en Guadalajara, donde
          atendemos a nuestros clientes y gestionamos envíos a toda la
          República.
        </p>
      </motion.div>
    </section>
  );
};

export default AcercaDe;
