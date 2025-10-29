"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32">
      <motion.h1
        className="text-6xl font-bold text-[#00bcd4]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-white">Sanjay Kannan</span>
      </motion.h1>

      <motion.p
        className="text-gray-400 text-lg max-w-2xl mx-auto mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Application developer | React JS | React Native | Redux | Vite | Next js | Node JS | Building smooth, modern
        UI experiences. */}
        Application Developer specializing in building scalable,
        high-performance <span className="text-[#00bcd4]">web</span> and{" "}
        <span className="text-[#00bcd4]">mobile applications</span> using{" "}
        <span className="text-[#00bcd4]">React</span>,{" "}
        <span className="text-[#00bcd4]">Next.js</span>, and{" "}
        <span className="text-[#00bcd4]">React Native</span>.
      </motion.p>

      <motion.a
        href="/projects"
        className="mt-8 px-8 py-3 rounded-lg bg-[#00bcd4] text-black font-semibold hover:bg-[#00acc1]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Take a Look Inside
      </motion.a>
    </section>
  );
}
