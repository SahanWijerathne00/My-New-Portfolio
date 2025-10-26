"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/40 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ===== Logo ===== */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:drop-shadow-[0_0_6px_rgba(139,92,246,0.5)] hover:brightness-110 transition-all duration-300"
          >
            John<span className="text-indigo-500">.Portfolio</span>
          </Link>
        </motion.div>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-800 dark:text-gray-200 font-medium group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* ===== Theme Toggle & Mobile Menu ===== */}
        <div className="flex items-center gap-4">
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
        >
          <div className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-900 dark:text-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
