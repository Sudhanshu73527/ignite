import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Verify mobile number",
    description: "Enter your mobile number to received OTP",
  },
  {
    number: "2",
    title: "Submit your details",
    description: "Fill the online form and submit",
  },
  {
    number: "3",
    title: "Registration Successful",
    description: "Get your admit card and login details",
  },
];

const RegisterSteps = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-14 tracking-wide">
        How to Register
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(37, 99, 235, 0.25)" }}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 text-center flex flex-col items-center justify-center h-56 transition-all duration-300"
          >
            {/* Circle Number */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold shadow-md mb-5">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-blue-900">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RegisterSteps;
