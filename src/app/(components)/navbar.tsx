"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = ["hero", "about", "skills", "experience", "projects", "contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = links
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    });

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg shadow-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.div>

        <nav className="flex gap-6">
          {links.map((id, i) => {
            const isActive = activeSection === id;

            return (
              <motion.a
                key={id}
                href={`#${id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative group text-sm font-medium hidden md:block transition-colors
                  ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 
                    bg-linear-to-r from-teal-500 to-cyan-500
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </motion.a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
