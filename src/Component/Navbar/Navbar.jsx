import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/ignite1.png"; // ✅ your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Courses", "Gallery", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // ✅ Solid color instead of gradient
      className="fixed w-full top-0 left-0 z-50 bg-red-700 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Ignite Institute Logo"
            className="h-15 w-auto object-contain"
          />
        </motion.div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-white font-medium absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#FFD700" }}
              className="transition-all duration-300 cursor-pointer"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Enroll Now Button (Right Side) */}
        <div className="hidden md:flex">
          <motion.a
            href="#enroll"
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Log in
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden bg-red-700 text-white flex flex-col space-y-4 px-6 py-4"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="hover:text-yellow-300 transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#enroll"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition text-center"
          >
            Log in 
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
