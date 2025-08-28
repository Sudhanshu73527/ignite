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
    descMobile:
      "Essential training for managers to handle workplace safety risks.",
    descDesktop:
      "This internationally recognized program equips managers and supervisors with essential knowledge and practical tools to handle workplace safety. It focuses on identifying risks, implementing controls.",
    icon: ShieldCheck,
  },
  {
    name: "NEBOSH IGC",
    descMobile:
      "Prestigious safety qualification covering risks & legal duties.",
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
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Course = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-white to-yellow-50 animate-gradient-x"></div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-wide"
        >
          Our <span className="text-yellow-600">Courses</span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          // ✅ Now mobile shows 2 cards, tablet 2, desktop 3
          className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.08,
                  rotate: [0, 1.5, -1.5, 0],
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
                }}
                className="relative group p-6 bg-white/70 backdrop-blur-md border border-white/30 
                rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center"
              >
                {/* Glow Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/30 via-transparent to-yellow-400/20 opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl"></div>

                {/* Floating Icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4 shadow-inner"
                >
                  <Icon className="w-8 h-8 text-yellow-600" />
                </motion.div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-gray-900 relative">
                  {course.name}
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-500"></span>
                </h3>

                {/* Mobile vs Desktop Desc */}
                <p className="mt-3 text-gray-600 text-xs sm:text-sm block md:hidden">
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
