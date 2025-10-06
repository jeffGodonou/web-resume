// SmartTaskManagerCover.jsx
import React from "react";
import { motion } from "framer-motion";

const SmartTaskManagerCover = ({ title = "Smart Task Manager" }) => (
  <div
    role="img"
    aria-label={title}
    className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden flex items-center justify-center"
  >
    <div className="relative w-full h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 bg-teal-400 rounded-lg shadow-md flex items-center justify-center text-white font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [50, 0, 50], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.3 }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        >
          ✔
        </motion.div>
      ))}

    </div>
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

export default SmartTaskManagerCover;
