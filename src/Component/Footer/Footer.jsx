import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Ignite Safety */}
        <div>
          <h2 className="text-2xl font-bold text-white">Ignite Safety</h2>
          <p className="mt-3 text-sm leading-6">
            Empowering businesses & individuals with innovative safety solutions.  
            Together, we ignite a culture of safety and responsibility.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Ignite Safety. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
