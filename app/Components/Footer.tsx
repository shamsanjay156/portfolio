"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="border-t border-[#30363d] text-center py-2 text-gray-500"
    >
      © {new Date().getFullYear()} Your Name. Built with Next.js & TailwindCSS.
    </motion.footer>
  );
}
