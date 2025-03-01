"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { name: "Catálogo", href: "/catalogo" },
  { name: "Mercado", href: "/mercado" },
  { name: "Vende Fácil", href: "/vende-facil" },
  { name: "Acerca de", href: "/acerca-de" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Vortex
        </Link>

        {/* Desktop Menu */}
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
              {/* Hover Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
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
