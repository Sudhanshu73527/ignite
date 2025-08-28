import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import hero1 from "../../assets/image4.avif";
import hero2 from "../../assets/image2.jpg";
import hero3 from "../../assets/image3.jpg";

const slides = [
  {
    image: hero1,
    heading: "Transform Into a Certified Safety Leader",
    text: "Master fire protection, industrial safety & risk management with real-world training that builds careers and saves lives.",
  },
  {
    image: hero2,
    heading: "Step Into the Future of Workplace Safety",
    text: "Learn occupational health, audits, and compliance from top experts and become the professional industries rely on.",
  },
  {
    image: hero3,
    heading: "Create Safer Industries, Protect Every Life",
    text: "From construction to manufacturing, gain the skills that reduce hazards, ensure compliance, and safeguard people at work.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Image Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        transitionTime={1200}
        showArrows={false}
        onChange={(index) => setCurrentIndex(index)}
      >
        {slides.map((slide, i) => (
          <div key={i}>
            <img
              src={slide.image}
              alt={slide.heading}
              className="h-[90vh] w-full object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 flex flex-col items-center justify-center text-center text-white px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-wide">
              {slides[currentIndex].heading.split(" ").map((word, idx) =>
                word.toLowerCase().includes("safety") ||
                word.toLowerCase().includes("leader") ||
                word.toLowerCase().includes("life") ? (
                  <span
                    key={idx}
                    className="text-yellow-400 drop-shadow-md animate-pulse"
                  >
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>

            <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              {slides[currentIndex].text}
            </p>

            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-bold shadow-2xl hover:shadow-yellow-500/50 hover:bg-yellow-500 transition duration-300"
            >
               Enroll Today
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
