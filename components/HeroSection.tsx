"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  // Typing animation for the role text
  const roles = [
    "Full-Stack Web Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
  ];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = roles[roleIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setCurrentRole((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Wait before erasing
      const eraseTimeout = setTimeout(() => {
        setCurrentRole("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1800);
      return () => clearTimeout(eraseTimeout);
    }
  }, [charIndex, roleIndex]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[85vh] max-w-6xl mx-auto px-10 md:px-24 pt-6 md:pt-10"
    >
      {/* ===== Left Content ===== */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left flex flex-col justify-center md:pl-16"
      >
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          👋 Hello, I’m
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-3 whitespace-nowrap">
          John <span className="text-indigo-600">Doe</span>
        </h1>

        {/* Typing Text */}
        <h3 className="text-2xl md:text-3xl font-semibold text-indigo-500 mb-4 min-h-[2.5rem]">
          {currentRole}
          <span className="animate-pulse">|</span>
        </h3>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          I’m a passionate{" "}
          <span className="font-medium text-indigo-500">
            Software Developer
          </span>{" "}
          focused on creating dynamic, responsive, and accessible digital
          experiences. I love combining creativity with clean code to build
          products that delight users and solve real-world problems.
        </p>

        {/* ===== Buttons ===== */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            <FaEnvelope /> Contact Me
          </button>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
          >
            <FaDownload /> Download CV
          </Link>
        </div>
      </motion.div>

      {/* ===== Right Content (Profile Image) ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0 md:ml-10"
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-indigo-500/30 shadow-xl hover:scale-105 transition-transform duration-500">
          <Image
            src="/images/picture 01.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
