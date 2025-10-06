// PaintAppCover.jsx
import React from "react";
import { motion } from "framer-motion";

export default function PaintAppCover({ title = "Paint" }) {
  return (
    <div
      role="img"
      aria-label={title}
      className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden"
    >
      {/* SVG brush path reveal */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden>
        <motion.path
          d="M10 100 C80 20, 160 140, 220 60 C280 -10, 360 120, 390 80"
          fill="none"
          stroke="#fb7185"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.6))" }}
        />
      </svg>

      {/* paint droplets */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ width: 6 + i * 3, height: 6 + i * 3, left: `${10 + i * 14}%`, top: `${20 + (i % 2) * 10}%`, background: "rgba(251,113,133,0.9)" }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1.05, 0.8] }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.4, delay: i * 0.25 }}
        />
      ))}

      <motion.h3
        className="absolute bottom-4 left-4 text-white text-sm font-medium"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {title}
      </motion.h3>
    </div>
  );
}
