"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - INFO */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Let’s Connect 🤝
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
            I’m always open to exciting opportunities like internships, trainee
            positions, or collaborative projects. Let’s build something amazing
            together! Feel free to reach out via email, phone, or my social
            links below.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-3 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
              <span className="text-sm md:text-base">johndoe@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
              <span className="text-sm md:text-base">+94 77 1234567</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            {[
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/johndoe01/",
                color: "text-blue-600 hover:text-blue-700",
              },
              {
                icon: <FaGithub />,
                href: "https://github.com/johndoe01",
                color: "text-gray-800 dark:text-gray-300 hover:text-indigo-500",
              },
              {
                icon: <FaFacebook />,
                href: "https://facebook.com",
                color: "text-blue-500 hover:text-blue-600",
              },
              {
                icon: <FaWhatsapp />,
                href: "https://wa.me/94771234567",
                color: "text-green-500 hover:text-green-600",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className={`text-2xl transition ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <motion.form
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-900 shadow-lg dark:shadow-indigo-900/30 rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full p-3 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
