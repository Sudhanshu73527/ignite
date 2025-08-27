import React from "react";
import { motion } from "framer-motion";
import { Users, ClipboardList, ShieldCheck } from "lucide-react";

const cards = [
  {
    title: "Safety Officer Mentorship",
    content:
      "Get one-on-one guidance from experienced professionals to kickstart or advance your safety career. Learn from real-world knowledge and gain the confidence to succeed in industrial safety.",
    icon: <Users className="w-14 h-14 text-green-600" />,
    gradient: "from-green-50 to-emerald-100",
    borderColor: "border-t-4 border-green-500",
    shadow: "hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)]",
  },
  {
    title: "Compliance & Certification",
    content:
      "Master industrial safety laws, proper documentation, and prepare for certifications like NEBOSH, IOSH, and more. Build a career with globally recognized credentials in occupational safety.",
    icon: <ClipboardList className="w-14 h-14 text-green-600" />,
    gradient: "from-green-100 to-lime-100",
    borderColor: "border-t-4 border-lime-500",
    shadow: "hover:shadow-[0_8px_30px_rgba(132,204,22,0.4)]",
  },
  {
    title: "Risk Management Training",
    content:
      "Develop expertise in hazard identification, risk assessment, and emergency planning. Gain practical skills that improve workplace safety and prepare you to handle real industrial challenges.",
    icon: <ShieldCheck className="w-14 h-14 text-green-600" />,
    gradient: "from-emerald-50 to-green-100",
    borderColor: "border-t-4 border-emerald-500",
    shadow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.4)]",
  },
];

const Keyoffering = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-6 md:px-20">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-wide">
          Our Key <span className="text-yellow-500">Offerings</span>
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
          Build a strong career in industrial safety with professional mentorship, 
          certification guidance, and risk management training designed to make you industry-ready.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-br ${card.gradient} ${card.borderColor} rounded-3xl shadow-lg p-10 text-center transform transition-all duration-300 ${card.shadow}`}
          >
            <div className="mb-6 flex justify-center">{card.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-4 uppercase tracking-wide">
              {card.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Keyoffering;
