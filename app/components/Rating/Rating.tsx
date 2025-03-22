"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa"; 

export default function PageRating() {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0); 
  const [submitted, setSubmitted] = useState(false); 

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto"
      style={{marginTop: "120px"}}
    >
      <h3 className="text-lg font-medium text-center mb-2">
        ¿De cuánta utilidad te ha parecido este contenido?
      </h3>

      <div className="flex justify-center mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            onClick={() => !submitted && setRating(star)} // Set rating on click
            onMouseEnter={() => !submitted && setHover(star)} // Highlight on hover
            onMouseLeave={() => !submitted && setHover(0)} // Reset hover
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} // Animation on hover
            whileTap={{ scale: 0.9 }} // Animation on click
            className="focus:outline-none"
          >
            <FaStar
              size={24}
              className={`cursor-pointer ${
                star <= (hover || rating) ? "text-yellow-400" : "text-gray-400"
              }`}
            />
          </motion.button>
        ))}
      </div>

      <p className="text-center text-sm text-gray-300">
        {submitted ? (
          "¡Gracias por tu valoración!"
        ) : (
          <>
            Haz clic en una estrella para puntuar!{" "}
            {rating > 0 && (
              <button
                onClick={handleSubmit}
                className="underline hover:text-gray-100 transition-colors duration-200"
              >
                Enviar
              </button>
            )}
          </>
        )}
      </p>

      {!submitted && (
        <p className="text-center text-xs text-gray-400 mt-2">
          Hasta ahora, no hay votos. ¡Sé el primero en puntuar este contenido!
        </p>
      )}
    </motion.div>
  );
}
