"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaJsSquare,
  FaPhp,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFsharp,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiEclipseide,
  SiAndroidstudio,
  SiAmazonec2,
  SiTensorflow,
  SiApachenetbeanside,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-600" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
      { name: "C#", icon: <SiFsharp className="text-blue-600" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
      },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "ASP.NET", icon: <SiDotnet className="text-indigo-700" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Java Swing GUI", icon: <FaJava className="text-orange-500" /> },
      { name: "AI / ML", icon: <SiTensorflow className="text-orange-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: "Tools & IDEs",
    skills: [
      {
        name: "Visual Studio Code",
        icon: <BiLogoVisualStudio className="text-blue-500" />,
      },
      {
        name: "Visual Studio",
        icon: <DiVisualstudio className="text-purple-500" />,
      },
      {
        name: "Android Studio",
        icon: <SiAndroidstudio className="text-green-600" />,
      },
      { name: "Eclipse", icon: <SiEclipseide className="text-yellow-400" /> },
      {
        name: "Apache NetBeans",
        icon: <SiApachenetbeanside className="text-blue-600" />,
      },
    ],
  },
  {
    title: "Technologies & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      {
        name: "GitHub",
        icon: <FaGithub className="text-gray-800 dark:text-white" />,
      },
      {
        name: "Cloud & Deployment",
        icon: <SiAmazonec2 className="text-orange-500" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My <span className="text-indigo-500">Skills</span>
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-indigo-500 mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                  >
                    {skill.icon && (
                      <div className="text-4xl mb-2">{skill.icon}</div>
                    )}
                    <p className="text-gray-800 dark:text-gray-200 font-medium text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
