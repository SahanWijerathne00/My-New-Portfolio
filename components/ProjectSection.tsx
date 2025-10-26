"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

type Category =
  | "Web Development"
  | "Mobile App Development"
  | "Machine Learning";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
  more: string;
};

export default function Projects() {
  const categories: Category[] = [
    "Web Development",
    "Mobile App Development",
    "Machine Learning",
  ];
  const [activeCategory, setActiveCategory] =
    useState<Category>("Web Development");

  const projects: Record<Category, Project[]> = {
    "Web Development": [
      {
        title: "E-Commerce Website",
        description:
          "A fully responsive online store with product filtering, cart, and secure checkout using React and Node.js.",
        image: "/projects/ecommerce.jpg",
        tech: ["React", "Node.js", "Tailwind CSS"],
        live: "#",
        github: "#",
        more: "#",
      },
      {
        title: "Portfolio Website",
        description:
          "Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion animations.",
        image: "/projects/portfolio.jpg",
        tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
        live: "#",
        github: "#",
        more: "#",
      },
      {
        title: "Vehicle Auction System",
        description:
          "A real-time bidding system for vehicles built using React, Firebase, and Node.js backend.",
        image: "/projects/auction.jpg",
        tech: ["React", "Firebase", "Node.js"],
        live: "#",
        github: "#",
        more: "#",
      },
    ],
    "Mobile App Development": [
      {
        title: "Weather Forecast App",
        description:
          "Flutter app displaying real-time weather data and forecasts using OpenWeather API.",
        image: "/projects/weather.jpg",
        tech: ["Flutter", "Dart", "Firebase"],
        live: "#",
        github: "#",
        more: "#",
      },
      {
        title: "Mental Health Support App",
        description:
          "A mobile platform providing mental wellness tracking and chatbot support.",
        image: "/projects/mentalhealth.jpg",
        tech: ["Flutter", "Firebase", "Riverpod"],
        live: "#",
        github: "#",
        more: "#",
      },
    ],
    "Machine Learning": [
      {
        title: "Crop Recommendation System",
        description:
          "AI-driven model recommending suitable crops based on rainfall, soil type, and temperature data.",
        image: "/projects/crop.jpg",
        tech: ["Python", "Scikit-Learn", "Streamlit"],
        live: "#",
        github: "#",
        more: "#",
      },
      {
        title: "Podcast Listening Time Predictor",
        description:
          "Regression-based model predicting listener engagement using Python and XGBoost.",
        image: "/projects/podcast.jpg",
        tech: ["Python", "XGBoost", "Pandas"],
        live: "#",
        github: "#",
        more: "#",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black py-16 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects[activeCategory].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.more}
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg transition"
                    >
                      <FaInfoCircle /> View More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
