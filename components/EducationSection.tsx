"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, Award } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    university: "University of Technology",
    year: "2022 - Present",
    grade: "First Class (Expected)",
    keyModules:
      "Web Development, Artificial Intelligence, Data Science, Software Engineering Principles",
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    side: "right",
    type: "university",
  },
  {
    title: "Higher National Diploma in Information Technology",
    university: "Tech Institute of Computing",
    year: "2020 - 2022 (Completed)",
    grade: "Distinction",
    keyModules:
      "Database Systems, Mobile App Development, Programming Fundamentals, Project Management",
    icon: <School className="w-6 h-6 text-blue-600" />,
    side: "left",
    type: "university",
  },
  {
    title: "Diploma in Web Design & Development",
    university: "Creative Academy",
    grade: "A",
    icon: <Award className="w-6 h-6 text-blue-600" />,
    side: "right",
    type: "institute",
  },
  {
    title: "Certificate in Graphic Design",
    university: "Design Studio Institute",
    grade: "B+",
    icon: <Award className="w-6 h-6 text-blue-600" />,
    side: "left",
    type: "institute",
  },
  {
    title: "High School - Science Stream",
    university: "Springfield High School",
    keyModules: "Physics - A, Chemistry - B, Mathematics - A",
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    side: "right",
    type: "school",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Glowing timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-blue-700 animate-pulse h-full rounded-full blur-sm"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Education
        </h2>

        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex items-center w-full ${
                edu.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`relative w-1/2 ${
                  edu.side === "left" ? "pr-10" : "pl-10"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    {edu.icon}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {edu.title}
                    </h3>
                  </div>

                  <div className="text-left space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {edu.type === "school" && (
                      <>
                        <p>
                          <strong>School:</strong> {edu.university}
                        </p>
                        <p>
                          <strong>Subjects:</strong> {edu.keyModules}
                        </p>
                      </>
                    )}

                    {edu.type === "institute" && (
                      <>
                        <p>
                          <strong>Institute:</strong> {edu.university}
                        </p>
                        <p>
                          <strong>Grade:</strong> {edu.grade}
                        </p>
                      </>
                    )}

                    {edu.type === "university" && (
                      <>
                        <p>
                          <strong>University:</strong> {edu.university}
                        </p>
                        <p>
                          <strong>Year:</strong> {edu.year}
                        </p>
                        <p>
                          <strong>Grade:</strong> {edu.grade}
                        </p>
                        <p>
                          <strong>Key Modules:</strong> {edu.keyModules}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Connector Dot */}
                <span
                  className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"
                  style={{
                    [edu.side === "left" ? "right" : "left"]: "-0.6rem",
                  }}
                ></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
