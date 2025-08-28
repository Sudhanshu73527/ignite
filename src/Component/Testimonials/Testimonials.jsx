import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rohit Kumar",
    course: "Diploma in Fire Safety",
    feedback:
      "IGNITE Institute has completely changed my career. The teachers are supportive and the practical training gave me real confidence.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    course: "Industrial Safety Management",
    feedback:
      "I loved the way faculty explained everything in detail. The workshops were very helpful for gaining real knowledge.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Sandeep Verma",
    course: "Fire & Safety Engineering",
    feedback:
      "The best institute for safety courses. I not only learned but also got placement support. Highly recommend CIHS Institute!",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-purple-50 py-16 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-yellow-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Students Say
        </motion.h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Hear directly from our students about their experience at CIHS
          Institute.
        </p>

        {/* Testimonials */}
        <div className="mt-10">
          {/* Mobile: horizontal scroll | Desktop: grid */}
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-x-0">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                className="min-w-[85%] sm:min-w-0 bg-white rounded-2xl shadow-md p-6 text-left border hover:shadow-lg transition snap-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Student Image */}
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold text-yellow-500 text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500">{t.course}</p>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-700 text-sm sm:text-base italic">
                  “{t.feedback}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
