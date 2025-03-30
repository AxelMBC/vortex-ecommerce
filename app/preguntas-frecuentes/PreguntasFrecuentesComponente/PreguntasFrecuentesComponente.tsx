"use client";

import { motion } from "framer-motion";

const PreguntasFrecuentesComponente = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-powder-600 text-center mb-8"
      >
        Preguntas Frecuentes
      </motion.h1>

      {/* Pagos y Facturaciones */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 , delay: 0.2}}
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2">
          Pagos y Facturaciones
        </h2>
        <h3 className="text-black underline list-item">
          ¿Que metodos de pago aceptan?
        </h3>
        <p className="text-gray-700">
          Aceptamos tarjetas de credito y debito (Visa, Mastercard),
          transferencias bancarias, PayPal y pagos en tiendas de conveniencia
          (OXXO, 7-Eleven, etc...)
        </p>
        <h3 className="text-black underline list-item">
          ¿Es seguro realizar pagos en su página web?
        </h3>
        <p className="text-gray-700">
          Por supuesto! Utilizamos encriptacion SSL para proteger tus datos
          personales y bancarios.
        </p>
        <h3 className="text-black underline list-item">
          ¿Cuanto tiempo tengo para facturar mi compra?
        </h3>
        <p className="text-gray-700">
          La pagina te permite facturar tu compra en un lapso de 24 horas, dicha
          factura se enviara al correo registrado en tu cuenta.
        </p>
      </motion.div>

      {/* Envios */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2">
          Envios
        </h2>
        <h3 className="text-black underline list-item">
          ¿Ofrecen envios gratuitos?
        </h3>
        <p className="text-gray-700">
          Claro! Los envios gratuitos se ofrecen en pedidos superiores a $2000
          dentro de la Republica Mexicana. Para envios internacionales, aplican
          otras tarifas.
        </p>
        <h3 className="text-black underline list-item">
          ¿Cuánto tiempo tarda en llegar mi pedido?
        </h3>
        <p className="text-gray-700">
          Generalmente, los envios tardan de 7 a 10 dias habiles, dependiendo de
          la ubicacion y la opcion de entrega seleccionada.
        </p>
        <h3 className="text-black underline list-item">
          ¿Puedo cambiar la dirección de entrega después de haber realizado un
          pedido?
        </h3>
        <p className="text-gray-700">
          La pagina no cuenta con una opcion directa para realizar el cambio,
          sin embargo, puedes contactarnos via telefonica o correo electronico
          para solicitar el cambio de la direccion de entrega
        </p>
      </motion.div>

      {/* Devoluciones */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2">
          Devoluciones
        </h2>
        <h3 className="text-black underline list-item">
          ¿Cómo puedo devolver un producto?
        </h3>
        <p className="text-gray-700">
          Para devolver un producto es necesario enviar un correo electronico a
          devoluciones@vortex.com, con la siguiente informacion:
          <br />
          Nombre completo
          <br />
          Numero de pedido
          <br />
          Razon de devolucion
        </p>
        <h3 className="text-black underline list-item">
          ¿Cuánto tiempo tarda en procesarse una devolución?
        </h3>
        <p className="text-gray-700">
          El proceso de devolucion tarda de 7 a 14 dias una vez recibido el
          producto en nuestras instalaciones. Recibiras un correo con los
          detalles del rembolso.
        </p>
        <h3 className="text-black underline list-item">
          ¿Quién cubre los gastos de envío de la devolución?
        </h3>
        <p className="text-gray-700">
          Los gastos por proceso de devolucion seran cubridos por la empresa
          siempre y cuando el motivo sea por producto(s) defectuoso(s) o
          equivocado(s). En caso contrario, seran cubiertos por el cliente.
        </p>
      </motion.div>
    </section>
  );
};

export default PreguntasFrecuentesComponente;
