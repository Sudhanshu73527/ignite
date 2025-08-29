import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/ignite1.png"; // ✅ your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "About", "Courses", "Gallery", "Contact"];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion Variants
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-red-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo + Name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer space-x-2"
        >
          <img
            src={logo}
            alt="Ignite Institute Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-white font-bold text-xl tracking-wide uppercase">
            IGNITE <span className="text-yellow-500">INSTITUTE</span>
          </span>
        </motion.div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-white font-medium absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              whileHover={{
                scale: 1.1,
                color: "#FFD700",
              }}
              className="relative transition-all duration-300 cursor-pointer group"
            >
              {link}
              {/* Underline hover animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Log In Button (Right Side) */}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-red-700 text-white flex flex-col space-y-4 px-6 py-4 overflow-hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:text-yellow-300 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#enroll"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition text-center"
            >
              Log in
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
