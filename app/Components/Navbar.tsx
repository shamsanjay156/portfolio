"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import Image from "next/image";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur-lg border-b border-[#30363d] bg-[#0d1117]/80"
    >
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center justify-center">
          <motion.div
            whileHover={{
              scale: 1.15,
              textShadow: "0 0 15px rgba(0,188,212,0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-extrabold text-2xl tracking-wider text-white select-none"
          >
            <span className="text-[#00bcd4] group-hover:text-[#00e0ff] transition-colors duration-300">
              {"<"}
            </span>
            <span className="text-white mx-1 group-hover:text-[#00bcd4] transition-colors duration-300">
              /
            </span>
            <span className="text-[#00bcd4] group-hover:text-[#00e0ff] transition-colors duration-300">
              {">"}
            </span>
          </motion.div>{" "}
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
