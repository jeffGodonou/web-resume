"use client"
import { motion } from "framer-motion";
// import  ThemeToggle  from "./ThemeToggle";

export default function Hero() {
    const shapes = [
        { type: "circle", size: 40, top: "10%", left: "80%" },
        { type: "triangle", size: 30, top: "50%", left: "60%" },
        { type: "square", size: 50, top: "30%", left: "20%" },
        { type: "hexagon", size: 40, top: "80%", left: "90%" }
    ]

    return (
        <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-16 overflow-hidden">
            {/*}
            <div className="absolute top-6 right-6 z-20 inset-0">
                <ThemeToggle />
            </div>
            */}
            <div className="z-10 max-w-lg text-left">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Jeff Godonou
                </h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                    Creative Developer & Problem Solver
                </p>
                <p className="mt-6 text-gray-500 dark:text-gray-400">
                    I’m passionate about building interactive experiences and solving complex problems with clean, efficient code.
                </p>
                <div className="mt-8 flex gap-4">
                    <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700" href="#projects">
                        View My Work
                    </a>
                    <a href="#Contact" className="px-6 py-3 border border-gray-400 rounded-lg text-gray-700 dark:text-gray-300 hover:border-gray-600">
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="relative w-full md:w-1/2 flex justify-center items-center">

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    className="absolute w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-70"
                ></motion.div>

                {shapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        className={`absolute`}
                        style={{
                            top: shape.top,
                            left: shape.left,
                            width: shape.size,
                            height: shape.size,
                        }}
                        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 10 + i * 2,
                            ease: "easeInOut",
                        }}
                    >
                        {shape.type === "circle" && (
                            <div className="w-full h-full bg-yellow-400 rounded-full opacity-70"></div>
                        )}
                        {shape.type === "triangle" && (
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderLeft: `${shape.size / 2}px solid transparent`,
                                    borderRight: `${shape.size / 2}px solid transparent`,
                                    borderBottom: `${shape.size}px solid #4ADE80`,
                                    opacity: 0.7,
                                }}
                            ></div>
                        )}
                        {shape.type === "hexagon" && (
                            <div
                                className="bg-pink-500 opacity-70"
                                style={{
                                    clipPath:
                                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                                    width: "100%",
                                    height: "100%",
                                }}
                            ></div>
                        )}
                        {shape.type === "square" && (
                            <div 
                                className="w-full h-full bg-blue-500 opacity-70"
                                style={{
                                    clipPath:
                                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                                    width: "100%",
                                    height: "100%",
                                }}
                            ></div>
                        )}
                    </motion.div>
                ))}

                <div className="relative z-10 w-64 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900 opacity-80 rounded-lg">
                        <motion.img
                            src="/2BEDBB56-D005-48AC-B329-2C04E420CA16.PNG"
                            className="relative z-10 w-64 h-64 object-contain"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}