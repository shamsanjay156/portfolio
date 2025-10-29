"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] text-white text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold text-[#00bcd4] mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-lg mb-8 max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-[#00bcd4] text-black font-semibold hover:bg-[#00a6bb] transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </main>
  );
}
