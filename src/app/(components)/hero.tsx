
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Github, Linkedin, Mail } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section
      id="hero"
      className="
      relative w-full min-h-screen
      flex items-center overflow-hidden
      px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-40
      py-16 md:py-0
      "
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] opacity-10 pointer-events-none" />

      {/* Animated radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 
          w-[700px] h-[700px] 
          -translate-x-1/2 -translate-y-1/2 
          bg-gradient-radial 
          from-blue-500/15 via-indigo-500/10 to-transparent 
          blur-[140px]"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
        grid md:grid-cols-2 
        gap-12 xl:gap-24 
        items-center 
        w-full 
        relative z-10
        "
      >
        {/* LEFT SIDE */}
        <div className="max-w-xl xl:max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">
              Learning & Building
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.h2
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-slate-400 mb-3 flex items-center gap-3"
          >
            Hi, I'm{" "}
            <span className="text-white font-semibold">Gantulga</span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 1.5,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block text-2xl"
            >
              👋
            </motion.span>
          </motion.h2>

          {/* Title */}
          <motion.h1
            variants={item}
            className="
            text-4xl 
            sm:text-5xl 
            md:text-6xl 
            xl:text-7xl 
            2xl:text-8xl 
            font-bold 
            leading-[1.05] 
            tracking-tight 
            text-white 
            mb-6
            "
          >
            Front-end{" "}
            <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg xl:text-xl text-slate-400 mb-8 leading-relaxed"
          >
            Junior front-end developer passionate about creating clean,
            responsive interfaces and continuously improving through real
            projects and hands-on practice.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button
              size="lg"
              className="
              w-full sm:w-auto 
              bg-linear-to-r from-blue-500 to-indigo-500 
              hover:from-blue-600 hover:to-indigo-600 
              text-white shadow-lg shadow-blue-500/40 
              transition-all duration-300 hover:scale-105
              "
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
              w-full sm:w-auto 
              border-slate-700 text-slate-400 
              hover:bg-slate-800/70 backdrop-blur-sm 
              transition-all duration-300 hover:scale-105
              "
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* Social */}
          <motion.div variants={item} className="flex gap-4">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="
                p-3 rounded-full bg-slate-800/70 
                border border-slate-700 
                hover:border-blue-500/50 
                hover:bg-slate-700 
                transition-all duration-300 text-slate-300
                "
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE — Visible only md+ */}
        <motion.div
          variants={item}
          className="
          hidden md:block
          relative 
          max-w-md 
          xl:max-w-xl 
          2xl:max-w-2xl 
          mx-auto
          "
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="
            relative bg-slate-900/80 backdrop-blur-xl
            border border-slate-700 
            rounded-2xl 
            p-6 xl:p-8 2xl:p-10 
            shadow-2xl
            "
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <pre className="text-sm xl:text-base 2xl:text-lg text-blue-400 font-mono leading-relaxed">
{`const developer = {
  name: "Gantulga",
  role: "Junior Front-end Developer",
  focus: "Learning & Building",
  stack: ["React", "Next.js", "Tailwind"]
}`}
            </pre>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;