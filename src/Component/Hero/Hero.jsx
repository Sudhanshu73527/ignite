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
    heading: "Empowering Future Safety Engineers",
    text: "Learn industrial safety, fire protection & risk management from experts. Build a career that saves lives & creates safer workplaces.",
  },
  {
    image: hero2,
    heading: "Your Path to Industrial Safety Excellence",
    text: "Gain practical skills in occupational health, safety audits, and compliance to become an industry-ready safety professional.",
  },
  {
    image: hero3,
    heading: "Building Safer Workplaces, Saving Lives",
    text: "Get trained by certified experts and master modern safety practices that reduce risks and ensure worker well-being.",
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
        interval={4000}
        transitionTime={1000}
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
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              {slides[currentIndex].heading.split(" ").map((word, idx) =>
                word.toLowerCase().includes("safety") ? (
                  <span key={idx} className="text-yellow-400">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>

            <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto">
              {slides[currentIndex].text}
            </p>

            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
            >
              Join Now
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
