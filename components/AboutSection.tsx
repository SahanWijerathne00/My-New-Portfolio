"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black py-16 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-500"
        >
          <Image
            src="/about.jpg"
            alt="Profile Image"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-indigo-500">Me</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I’m <span className="font-semibold text-indigo-500">John Doe</span>,
            a passionate Frontend Developer with a strong focus on building
            elegant and high-performance web applications. I enjoy crafting user
            experiences that are both functional and visually appealing.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I specialize in technologies like <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, with
            experience integrating backend services and APIs for scalable
            solutions.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Beyond development, I’m passionate about continuous learning,
            exploring new frameworks, and improving my design and
            problem-solving skills every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
