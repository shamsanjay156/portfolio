"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur-lg border-b border-[#30363d] bg-[#0d1117]/80"
    >
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="relative flex items-center justify-center w-12 h-12 rounded-full 
                 bg-[#0b1118] text-[#00bcd4] font-bold text-lg shadow-[inset_0_0_10px_#00bcd4]
                 border border-[#00bcd4]/50"
          >
            <div className="absolute inset-0 rounded-full bg-[#00bcd4]/10 blur-md"></div>
            <span className="z-10">SK</span>
          </motion.div>
        </Link>
        <div className="flex flex-row gap-10 items-center justify-between">
          <Link
            href="/"
            className="hover:text-[#00bcd4] transition font-sans font-semibold text-white"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#00bcd4] transition  font-sans font-semibold text-white"
          >
            Contact
          </Link>
          <Link
            href="https://www.linkedin.com/in/sanjay-kannan-02b6471b4/"
            className="hover:text-[#00bcd4] transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white" size={20} />
          </Link>
          <Link
            href="https://github.com/shamsanjay156"
            className="hover:text-[#00bcd4] transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white" size={20} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
