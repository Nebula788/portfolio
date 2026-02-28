
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-40"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8"
        >
          About Me
        </motion.h2>

        {/* Main Description */}
        <motion.div
          variants={item}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-base sm:text-lg xl:text-xl text-slate-400 leading-relaxed mb-6">
            I'm a junior front-end developer focused on building clean,
            responsive, and user-friendly web interfaces. I enjoy solving
            problems through code and continuously improving my development
            workflow.
          </p>
          <p className="text-base sm:text-lg xl:text-xl text-slate-400 leading-relaxed">
            My goal is to grow into a strong front-end engineer by writing
            maintainable code, understanding performance optimization, and
            collaborating on meaningful real-world projects.
          </p>
        </motion.div>

        
      </motion.div>
    </section>
  );
}

export default About;