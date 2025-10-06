// BixiAppCover.jsx
import React from "react";
import { motion } from "framer-motion";

const SPOKES = 8;

export default function BixiAppCover({ title = "Bixi Usage Prediction" }) {
  return (
    <div
      role="img"
      aria-label={title}
      className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden flex items-center justify-center"
    >
      {/* wheel container */}
      <motion.div
        className="relative"
        style={{ width: 140, height: 140 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        {/* outer rim */}
        <div className="absolute inset-0 rounded-full border border-gray-600" />

        {/* spokes */}
        {[...Array(SPOKES)].map((_, i) => {
          const angle = (i / SPOKES) * Math.PI * 2;
          const x = 70 + Math.cos(angle) * 48;
          const y = 70 + Math.sin(angle) * 48;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: 2,
                height: 48,
                background: "rgba(99,102,241,0.85)",
                transform: `rotate(${(i / SPOKES) * 360}deg) translateY(-24px)`,
                transformOrigin: "center 24px",
                borderRadius: 2,
                opacity: 0.95,
              }}
            />
          );
        })}

        {/* small forecast nodes (orbiting) */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{ left: 70, top: 18 + i * 16, background: "rgba(99,102,241,0.9)" }}
            animate={{ scale: [0.8, 1.4, 0.9] }}
            transition={{ repeat: Infinity, duration: 2 + i * 0.5, delay: i * 0.2 }}
          />
        ))}
      </motion.div>

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
