"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const menuItems = [
  { name: "Categorias", href: "/categorias" },
  { name: "Mercado", href: "/mercado" },
  { name: "Acerca de", href: "/acerca-de" },
  // TODO: Prefuntas Frecuentes en Footer
  // { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  { name: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="relative bg-white shadow-md top-0 w-full sticky z-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-gray-900"
        >
          <Image
            src="/vx.png"
            alt="Vortex Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          Vortex
        </Link>

        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -3 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="text-gray-700 font-medium transition-colors hover:text-black"
              >
                {item.name}
              </Link>

              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ y: -3 }}
            className="relative group"
            onClick={() => router.push("/carrito")}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              color="black"
              className="cursor-pointer"
            />
          </motion.li>
        </ul>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-md"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-700 font-medium transition-colors hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
