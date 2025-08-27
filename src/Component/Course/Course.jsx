import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  Factory,
  BookOpen,
  Briefcase,
  HeartPulse,
} from "lucide-react";

const courses = [
  {
    name: "IOSH",
    descMobile: "Essential training for managers to handle workplace safety risks.",
    descDesktop:
      "This internationally recognized program equips managers and supervisors with essential knowledge and practical tools to handle workplace safety. It focuses on identifying risks, implementing controls.",
    icon: ShieldCheck,
  },
  {
    name: "NEBOSH IGC",
    descMobile: "Prestigious safety qualification covering risks & legal duties.",
    descDesktop:
      "The NEBOSH International General Certificate is a prestigious qualification for health and safety professionals. It covers hazard identification, risk assessment, and legal responsibilities.",
    icon: BookOpen,
  },
  {
    name: "Fire & Safety",
    descMobile: "Learn fire prevention & emergency response procedures.",
    descDesktop:
      "This course provides in-depth training on fire prevention techniques, fire protection systems, and emergency response procedures.",
    icon: Flame,
  },
  {
    name: "Industrial Safety",
    descMobile: "Training to reduce workplace hazards & risks in industries.",
    descDesktop:
      "Designed for industrial environments, this course trains professionals to minimize workplace hazards and risks. It includes machine safety, chemical handling, PPE usage.",
    icon: Factory,
  },
  {
    name: "First Aid & CPR",
    descMobile: "Basic life-saving skills for workplace emergencies.",
    descDesktop:
      "This essential training provides life-saving skills for emergencies. Participants learn to perform CPR, treat injuries, and respond quickly during workplace accidents.",
    icon: HeartPulse,
  },
  {
    name: "Diploma in Safety Management",
    descMobile: "Advanced diploma for career growth in safety management.",
    descDesktop:
      "An advanced qualification that prepares learners for leadership roles in health and safety. It covers safety policies, risk management, audits, and compliance.",
    icon: Briefcase,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

const Course = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-yellow-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}  // ✅ animate on load
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          <span className="relative inline-block">
            Our Courses
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-yellow-500 rounded-full"></span>
          </span>
        </motion.h2>

        {/* Grid of Courses */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"   // ✅ animate on load (no scroll trigger)
          className="grid gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.07, rotate: [0, 1.5, -1.5, 0] }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                  className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-yellow-100 rounded-full mb-6 shadow-inner"
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
                </motion.div>

                {/* Title */}
                <h3 className="text-base md:text-xl font-semibold text-gray-800 relative">
                  {course.name}
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-500"></span>
                </h3>

                {/* Different text for mobile vs desktop */}
                <p className="mt-3 text-gray-600 text-xs md:text-sm block md:hidden">
                  {course.descMobile}
                </p>
                <p className="mt-3 text-gray-600 text-sm hidden md:block">
                  {course.descDesktop}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Course;
