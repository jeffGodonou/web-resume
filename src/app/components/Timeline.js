"use client"
import { animate, motion, useInView } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export function TimelineDot ({ durationMonths }) {
    //const ref = useRef(null);
    //const inView = useInView(ref, { once: true });

    const baseSize = 12;
    const scaleFactor = 1 + durationMonths / 24; 
    const size = Math.max(baseSize * scaleFactor, 12); // Ensure minimum size

    return (
        <motion.div
            //ref={ref}
            initial = {{ scale: 0, opacity: 0 }}
            animate = {{ scale: 1, opacity: 1 }}
            transition = {{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-blue-600 rounded-full"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                margin: "0 auto"
            }}
        />
    );
}

const getDuration = (start, end) => {
    start = new Date(start);
    if (end === "Present") end = new Date();
    else end = new Date(end);

    // check if start and end are valid dates
    if (!start) return 0;
    if (!end) end = new Date();

    // check if start and end are valid dates
    if (!start || isNaN(start.getTime())) return 0;
    if (!end || isNaN(end.getTime())) end = new Date();

    // calculate duration in months
    const duration = Math.round((end - start) / (1000 * 60 * 60 * 24 * 30)); // in months
    
    return duration > 0 ? duration : 1; // Ensure at least 1 month
};

export default function Timeline({ items }) {
    const [activeIdx, setActiveIdx] = useState(null);
    
    return (
        <motion.div 
            className="relative border-l-4 border-gray-300 ml-4 mt-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {items.map((item, idx) => {
                const durationMonths = getDuration(item.start, item.end);
                const isActive = activeIdx === idx;

                return (
                    <motion.div 
                        key={idx} 
                        className="mb-10 ml-4 relative"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, zIndex: 2 }}
                        whileTap={{ scale: 1.1, zIndex: 2 }}
                        animate={isActive ? { scale: 1.1, zIndex: 2 } : { scale: 1, zIndex: 1 }}
                        onClick={() => setActiveIdx(isActive ? null : idx)}>
                        
                        <div className="absolute -left-6 top-1/2" style={{ transform: "translateY(-50%)" }}>
                            <TimelineDot durationMonths={durationMonths} />
                        </div>
                        <p className="text-sm text-gray-500">{item.date}</p>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="italic text-gray-500">{item.company}</p>
                        <p className="text-gray-600">{item.description}</p>
                        {isActive && (
                            <div className="mt-2 p-2 rounded shadow">
                                <p className="text-gray-500">{item.details}</p>
                            </div>
                        )}
                    </motion.div>
                );

            })}
        </motion.div>
    );
}
   