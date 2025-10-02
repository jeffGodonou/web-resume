"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

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
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

function TimelineDot({ durationMonths }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });

    const baseSize = 12;
    const scaleFactor = 1 + durationMonths / 24;
    const size = Math.max(baseSize * scaleFactor, 12);

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={
                inView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
            }
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                margin: "0 auto",
            }}
        />
    );
}

const getDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate =
        typeof end === "string" &&
            end.toLowerCase().trim() === "present"
            ? new Date()
            : new Date(end);

    if (isNaN(startDate.getTime())) return 1;
    if (isNaN(endDate.getTime())) return 1;

    const months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    return months > 0 ? months : 1;
};

function getDurationClient(start, end) {
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    const startDate = new Date(start);
    const endDate =
      typeof end === "string" && end.toLowerCase().trim() === "present"
        ? new Date()
        : new Date(end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      setDuration(1);
      return;
    }

    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    setDuration(months > 0 ? months : 1);
  }, [start, end]);

  return duration;
}

export default function Timeline({ items }) {
    const [activeIdx, setActiveIdx] = useState(null);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const duration = getDurationClient(items[0].start, items[0].end);

    return (
        <motion.div
            ref={ref}
            className="relative border-l-4 border-gray-300 dark:border-gray-700 ml-4 mt-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {/* Animated vertical line */}
            <motion.div
                className="absolute left-0 top-0 w-1 bg-blue-500 dark:bg-blue-400"
                style={{ originY: 0 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: inView ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            {items.map((item, idx) => {
                const durationMonths = duration[idx];
                const isActive = activeIdx === idx;

                return (
                    <motion.div
                        key={idx}
                        className="mb-10 ml-4 relative"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, zIndex: 2 }}
                        whileTap={{ scale: 1.1, zIndex: 2 }}
                        animate={
                            isActive
                                ? { scale: 1.1, zIndex: 2 }
                                : { scale: 1, zIndex: 1 }
                        }
                        onClick={() => setActiveIdx(isActive ? null : idx)}
                    >
                        {/* Timeline Dot */}
                        <div
                            className="absolute -left-6 top-1/2"
                            style={{ transform: "translateY(-50%)" }}
                        >
                            <TimelineDot durationMonths={durationMonths} />
                        </div>

                        {/* Content */}
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.start} – {item.end}
                        </p>
                        <h3 className="text-lg font-semibold dark:text-white">
                            {item.title}
                        </h3>
                        <p className="italic text-gray-500 dark:text-gray-400">
                            {item.companyUrl ? (
                                <a
                                    href={item.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline hover:text-blue-500 dark:hover:text-blue-400"
                                >
                                    {item.company}
                                </a>
                            ) : (
                                item.company
                            )}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            {item.description}
                        </p>

                        {isActive && (
                            <>
                                {item.details ? (
                                    <div className="mt-2 p-2 rounded shadow bg-gray-50 dark:bg-gray-800">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {item.details}
                                        </p>
                                    </div>
                                ) : null
                                }
                            </>
                        )}
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
