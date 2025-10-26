"use client";
import { motion } from "framer-motion";
import {
  FaClock,
  FaBrain,
  FaBolt,
  FaLightbulb,
  FaHandsHelping,
  FaRocket,
} from "react-icons/fa";

const softSkills = [
  {
    name: "Hard Work",
    icon: <FaHandsHelping size={40} />,
    description:
      "Consistently dedicated to delivering quality work with persistence and strong work ethics.",
  },
  {
    name: "Time Management",
    icon: <FaClock size={40} />,
    description:
      "Efficiently plans, organizes, and prioritizes tasks to meet deadlines and maintain productivity.",
  },
  {
    name: "Problem Solving",
    icon: <FaBrain size={40} />,
    description:
      "Strong analytical thinking for identifying challenges and implementing creative solutions.",
  },
  {
    name: "Quick Learning",
    icon: <FaBolt size={40} />,
    description:
      "Adapts rapidly to new technologies and workflows, always eager to expand knowledge.",
  },
  {
    name: "Creativity",
    icon: <FaLightbulb size={40} />,
    description:
      "Applies innovative ideas to design efficient systems and user-centered digital experiences.",
  },
  {
    name: "Self-Motivation",
    icon: <FaRocket size={40} />,
    description:
      "Highly driven and proactive, maintaining enthusiasm to achieve goals independently.",
  },
];

export default function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Soft Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <motion.div
                  className="text-white"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
