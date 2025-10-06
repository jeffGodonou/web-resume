// RecipeAppCover.jsx
import React from "react";
import { motion } from "framer-motion";

const ICONS = ["🍅", "🥬", "🥚", "🍞", "🧂"];

export default function RecipeAppCover({ title = "Recipe Management App" }) {
  return (
    <div
      role="img"
      aria-label={title}
      className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden flex items-center justify-center"
    >
      {/* rotating orbit container */}
      <motion.div
        className="absolute w-40 h-40 flex items-center justify-center"
        style={{ left: "50%", top: "50%", translate: "-50% -50%" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {/* central recipe card */}
        <div className="absolute w-20 h-28 bg-gray-800 border border-gray-700 rounded-md flex items-center justify-center text-xs text-white p-2">
          <div className="text-center">
            <div className="font-semibold">Recipe</div>
            <div className="mt-1 text-[10px] opacity-80">db • recipes</div>
          </div>
        </div>

        {/* ingredient icons placed around the center */}
        {ICONS.map((ico, i) => {
          const angle = (i / ICONS.length) * Math.PI * 2;
          const radius = 60;
          const left = 50 + Math.cos(angle) * radius;
          const top = 50 + Math.sin(angle) * radius;
          return (
            <motion.div
              key={ico}
              className="absolute w-8 h-8 rounded-full flex items-center justify-center text-lg"
              initial={{ scale: 0.8, opacity: 0.85 }}
              animate={{ scale: [0.9, 1.1, 0.95], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 4 + i * 0.4, delay: i * 0.15 }}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                translate: "-50% -50%",
                background: "rgba(34,197,94,0.12)",
                color: "white",
                border: "1px solid rgba(34,197,94,0.25)",
              }}
            >
              <span aria-hidden>{ico}</span>
            </motion.div>
          );
        })}
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
