// ConceptProjectCover.jsx
import React from "react";
import { motion } from "framer-motion";

const PIECES = [
  { id: 1, from: { x: -80, y: -40, rot: -50 } },
  { id: 2, from: { x: 120, y: -60, rot: 40 } },
  { id: 3, from: { x: -100, y: 80, rot: 70 } },
  { id: 4, from: { x: 110, y: 90, rot: -30 } },
];

export default function ConceptProjectCover({ title = "Problem Solver" }) {
  return (
    <div
      role="img"
      aria-label={title}
      className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden flex items-center justify-center"
    >
      {/* landing area where pieces will snap */}
      <div className="absolute w-36 h-28 bg-transparent" />

      {PIECES.map((p, idx) => (
        <motion.div
          key={p.id}
          className="absolute w-12 h-12 bg-indigo-500 rounded-sm flex items-center justify-center text-white font-semibold shadow"
          initial={{ x: p.from.x, y: p.from.y, rotate: p.from.rot, scale: 0.8, opacity: 0 }}
          animate={{ x: [-10 + idx * 14, -6 + idx * 14], y: [0, idx * 6], rotate: [p.from.rot, 0], scale: [0.8, 1], opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 3.4 + idx * 0.25, repeatDelay: 1, delay: idx * 0.12, ease: "easeOut" }}
          style={{ left: "50%", top: "40%", translate: "-50% -50%" }}
        >
          {/* small notch to hint puzzle piece */}
          {idx + 1}
        </motion.div>
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
