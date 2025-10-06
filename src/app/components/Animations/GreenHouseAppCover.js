// GreenhouseAppCover.jsx
import React from "react";
import { motion } from "framer-motion";

const BUBBLE_COUNT = 6;
const BAR_VALUES = [20, 40, 60, 35, 70, 55];

export default function GreenhouseAppCover({ title = "Greenhouse Emissions App" }) {
  return (
    <div
      role="img"
      aria-label={title}
      className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden px-4 py-6"
    >
      {/* Bar chart (bottom-right) */}
      <div className="absolute right-3 bottom-3 w-28 h-20 flex items-end gap-1">
        {BAR_VALUES.map((v, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{ background: "linear-gradient(180deg,#fef08a, #f97316)" }}
            initial={{ height: "6%" }}
            animate={{ height: `${10 + v}%` }}
            transition={{ repeat: Infinity, duration: 3 + i * 0.4, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}
      </div>

      {/* Rising CO2 bubbles (left area) */}
      {[...Array(BUBBLE_COUNT)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          initial={{ y: "80%", opacity: 0, scale: 0.6 }}
          animate={{ y: ["80%", "0%"], opacity: [0, 0.9, 0], scale: [0.6, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 4 + i * 0.6, delay: i * 0.4 }}
          style={{
            left: `${10 + (i % 3) * 12}%`,
            width: `${8 + (i % 3) * 4}px`,
            height: `${8 + (i % 3) * 4}px`,
            background: "rgba(250,204,21,0.18)",
            border: "1px solid rgba(250,204,21,0.32)",
          }}
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
