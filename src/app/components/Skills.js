"use client"
import { motion } from "framer-motion";

const skills = [
    {name: "English", category: "Languages", level: 90 },
    {name: "French", category:"Languages", level: 95},
    {name: "Spanish", category:"Languages", level: 30},
    {name: "Java", category: "Programming Languages", level: 65 },
    {name: "C++", category: "Programming Languages", level: 60 },
    {name: "Python", category: "Programming Languages", level: 60 },
    {name: "SQL", category: "Programming Languages", level: 60 },
    {name: "JavaScript / Typescript", category: "Programming Languages", level: 75 },
    {name: "React", category: "Frameworks", level: 70 },
    {name: "Node.js", category: "Frameworks", level: 70 },
    {name: "Tailwind CSS", category: "Frameworks", level: 75 },
    {name: "HTML / CSS", category: "Markup Languages", level: 70 },
    {name: "Git", category: "Tools", level: 80 },
    {name: "Docker", category: "Tools", level: 50 },
    {name: "Kubernetes", category: "Tools", level: 30 },
    {name: "AWS", category: "Cloud", level: 50 },
    {name: "TDD", category: "Methodologies", level: 60 },
    {name: "Agile", category: "Methodologies", level: 70 }
]

export default function Skills() {
    const skillCategories = skills.reduce((acc, skill) => {
        acc[skill.category] = acc[skill.category] || [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    const SkillsBar = ({ skill }) => (
        <div className="mb-3">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-blue-200 rounded">
                <motion.div
                    className="h-2 bg-blue-600 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            </div>
        </div>
    );

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{category}</h3>
                    {skills.map(skill => (
                        <SkillsBar key={skill.name} skill={skill} />
                    ))}
                </div>
            ))}
        </section>
    )
}