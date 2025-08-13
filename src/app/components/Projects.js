import Timeline from "./Timeline"

const projectItems = [
    {
        date: "August 2025",
        title: "Portfolio Website",
        description: "Built a personal portfolio website using React and Tailwind CSS.",
        duration: 1
    },
    {
        date: "April 2025",
        title: "Smart Task Manager",
        description: "Built a Java-based task manager with Maven, JUnit testing, and JSON-based persistence.",
        duration: 5
    },
    {
        date: "May 2024",
        title: "Recipe Management App",
        description: "Built a recipe management app using React, allowing users to create, edit, and share their favorite recipes.",
        duration: 16
    },
    {
        date: "2022",
        title: "Full Stack Developer - GHGSat (Capstone Project)",
        description: "Developed a web application to generate and visualize greenhouse gas emissions data in space.",
        duration: 6
    }
];

export default function Projects() {
    return (
        <section className="p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="space-y-4">
                <Timeline items={projectItems} />
            </ul>
        </section>
    )
}