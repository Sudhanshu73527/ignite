import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // ✅ install: npm install lucide-react

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a wide range of programs including computer science, management, arts, and vocational training.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes! Our dedicated placement cell actively works with top recruiters to ensure students get placed successfully.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply online through our official website or visit the admission office directly.",
  },
  {
    question: "Is there any scholarship program?",
    answer:
      "Yes, we provide merit-based and need-based scholarships for deserving students.",
  },
  {
    question: "Do you provide hostel facilities?",
    answer:
      "Yes, separate and fully equipped hostel facilities are available for both boys and girls.",
  },
];

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-yellow-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-700 hover:bg-yellow-50 transition"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-5 pb-5 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frequently;
