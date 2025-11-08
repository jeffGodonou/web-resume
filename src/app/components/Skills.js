"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "JavaScript / TypeScript", category: "Programming", level: 75 },
  { name: "React", category: "Frontend", level: 75 },
  { name: "C/C++", category: "Programming", level: 70 },
  { name: "Node.js", category: "Backend", level: 70 },
  { name: "Tailwind CSS", category: "Frontend", level: 75 },
  { name: "Java", category: "Programming", level: 70 },
  { name: "Python", category: "Programming", level: 65 },
  { name: "Docker", category: "Tools", level: 50 },
  { name: "AWS", category: "Cloud", level: 50 },
];

const learning = [
  { name: "GraphQL" },
  { name: "Rust" },
  { name: "Advanced AWS" },
  { name: "Kubernetes" },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Current Skills (Radial Rings) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 mb-3">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  pathColor: "#2563eb",
                  textColor: "#5a6679ff",
                  trailColor: "#e2e8f0",
                  textSize: "1.5rem",
                })}
              />
            </div>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Learning / Exploring */}
      <h2 className="text-2xl font-bold mb-4 text-center">Currently Exploring</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {learning.map((skill, idx) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-medium cursor-pointer hover:bg-blue-600 hover:text-white transition"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
