// PortfolioWebsiteCover.jsx
import React from "react";
import { motion } from "framer-motion";

const PortfolioWebsiteCover = ({ title = "Portfolio Website" }) => (
  // PortfolioWebsiteCover.jsx
  <div
    role="img"
    aria-label={title}
    className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden flex items-center justify-center"
  >
    <motion.svg className="w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl" viewBox="0 0 400 200">
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          cx={50 + i * 60}
          cy={100 + (i % 2 === 0 ? 20 : -20)}
          r="6"
          fill="#38bdf8"
          animate={{ r: [6, 10, 6] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <motion.line x1="50" y1="100" x2="350" y2="100" stroke="#38bdf8" strokeWidth="2"
        animate={{ pathLength: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
    </motion.svg>
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

export default PortfolioWebsiteCover;
