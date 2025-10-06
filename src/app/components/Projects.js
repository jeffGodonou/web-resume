"use client"
import { motion } from "framer-motion"
import Timeline from "./Timeline"
import SmartTaskManagerCover from "./Animations/SmartTaskManagerCover"
import PortfolioWebsiteCover from "./Animations/PortfolioWebsiteCover"
import RecipeAppCover from "./Animations/RecipeAppCover"
import GreenhouseAppCover from "./Animations/GreenHouseAppCover"
import BixiAppCover from "./Animations/BixiAppCover"
import PaintAppCover from "./Animations/PaintAppCover"
import ConceptProjectCover from "./Animations/ConceptProjectCover"

const projectItems = [
    {
        type: "real",
        date: "August 2025",
        title: "Portfolio Website",
        tagline: "Showcasing My Work",
        description: "Built a personal portfolio website using React and Tailwind CSS.",
        image: <PortfolioWebsiteCover />,
        tags: ["React", "Next.js", "Tailwind CSS"],
        github: "https://github.com/jeffGodonou/web-resume.git",
        demo: "#",
        duration: 1
    },
    {
        type: "real",
        date: "April 2025",
        title: "Smart Task Manager",
        tagline: "Organize Your Tasks Efficiently",
        description: "Built a Java-based task manager with Maven, JUnit testing, and JSON-based persistence.",
        image: <SmartTaskManagerCover />,
        tags: ["Java", "Maven", "JUnit"],
        github: "https://github.com/jeffGodonou/smart-task-manager.git",
        demo: "#",
        duration: 5
    },
    {
        type: "real",
        date: "May 2024",
        title: "Recipe Management App",
        tagline: "Manage Your Favorite Recipes",
        description: "Built a recipe management app using React, allowing users to create, edit, and share their favorite recipes.",
        image: <RecipeAppCover />,
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/jeffGodonou/recipe-app.git",
        demo: "#",
        duration: 16
    },
    {
        type: "reconstructed",
        date: "2022",
        title: "Full Stack Developer - GHGSat (Capstone Project)",
        tagline: "Visualizing Emissions Data",
        description: "Developed a web application to generate and visualize greenhouse gas emissions data in space.",
        image: <GreenhouseAppCover />,
        tags: ["React", "Node.js", "MongoDB", "Express", "Docker"],
        skills: ["UI Design", "API Development", "Database Management", "Deployment"],
        duration: 6
    },
    {
        type: "real",
        date: "2020",
        title: "Mobile Developer - Bixi | Polytechnique Montréal",
        tagline: "Visualizing Bike Usage Data",
        description: "Developed a mobile application to generate and visualize bike usage data in urban areas.",
        image: <BixiAppCover />,
        tags: ["Kotlin", "Android", "Jetpack", "Retrofit", "Docker"],
        skills: ["Android Development", "Material Design", "MVVM", "UI Design", "API Development", "Database Management", "Deployment", "Testing", "Project Management", "Agile Methodologies"],
        github: "https://github.com/jeffGodonou/projet3_bixai.git",
        duration: 5
    },
    {
        type: "real",
        date: "2020",
        title: "Full Stack Developer - Polytechnique Montréal",
        tagline: "Developped a Paint Application",
        description: "Developed a web-based paint application with collaborative features.",
        image: <PaintAppCover />,
        tags: ["Angular", "TypeScript", "HTML", "SCSS", "Docker", "Node.js", "Express", "MongoDB", "Mocha"],
        skills: ["REST", "Scrum", "UI Design", "API Development", "Database Management", "Deployment", "Testing", "Project Management", "Agile Methodologies"],
        github: "https://github.com/jeffGodonou/projet2",
        duration: 5
    },
    {
        type: "concept",
        title: "Concept Project",
        tagline: "Problem Solver",
        image: <ConceptProjectCover />,
        description: "Focus on problem-solving and architecture design.",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="px-6 py-12 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
                Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    projectItems.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Front side */}
                            <div className="p-4">

                                {typeof project.image === "string" ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />
                                ) : (
                                    <div className="w-full h-64">{project.image}</div>
                                )}
                                
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">{project.tagline}</p>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* Badge for Reconstructed Projects */}
                                {project.type === "reconstructed" && (
                                    <span className="absolute top-2 right-2 px-2 py-1 bg-pink-500 text-white text-xs rounded-full">
                                        Reimagined
                                    </span>
                                )}
                            </div>

                            {/* Back side (for Real projects with links) */}
                            {project.type === "real" && (
                                <motion.div
                                    className="absolute inset-0 bg-gray-100 dark:bg-gray-700 flex flex-col justify-center items-center p-4 rounded-xl"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <a
                                        href={project.github}
                                        className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                        target="_blank"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                        target="_blank"
                                    >
                                        Live Demo
                                    </a>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
            </div>
        </section>
    );
}