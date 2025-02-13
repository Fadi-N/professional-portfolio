'use client'

import {motion} from "motion/react";
import Image from "next/image";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const letterVariants = {
    hidden: {opacity: 0, x: -10},
    visible: {opacity: 1, x: 0},
};

export default function Home() {
    return (
        <main className="hero">
            <div className="hero-intro space-y-8">
                <div className="flex items-center">
                    <motion.p
                        className="text-[11.25rem] leading-[12rem] flex"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {"Creative".split("").map((letter, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {letter}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.5, duration: 0.5}}
                        >
                            <motion.span
                                className="ml-2"
                                animate={{opacity: [1, 0, 1]}}
                                transition={{repeat: Infinity, duration: 0.8}}
                            >
                                |
                            </motion.span>
                        </motion.span>
                    </motion.p>
                    <motion.div
                        className="flex items-center mx-14"
                        initial={{rotate: 0, opacity: 0}}
                        animate={{rotate: 360, opacity: 1}}
                        transition={{
                            opacity: {delay: 2, duration: 0.5, ease: "easeOut"},
                            rotate: {delay: 2, duration: 4, ease: "linear", repeat: Infinity},
                        }}
                    >
                        <Image src="/react.png" alt="react.png" width={100} height={100}/>
                    </motion.div>
                </div>

                <div>
                    <motion.p
                        className="text-[11.25rem] leading-[12rem] flex"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span variants={letterVariants} className="text-[#d0b880]">
                            &lt;
                        </motion.span>
                        {"FRONTEND".split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className="text-[#5db7a4]"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <motion.span variants={letterVariants} className="text-[#d0b880]">
                            /&gt;
                        </motion.span>
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.5, duration: 0.5}}
                        >
                            <motion.span
                                className="ml-2"
                                animate={{opacity: [1, 0, 1]}}
                                transition={{repeat: Infinity, duration: 0.8}}
                            >
                                |
                            </motion.span>
                        </motion.span>
                    </motion.p>
                </div>

                <div className="flex relative">
                    <motion.p
                        className="flex-1 text-[11.25rem] leading-[13rem] flex"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {"DEVEL".split("").map((letter, index) => (
                            <motion.span key={`devel-${index}`} variants={letterVariants}>
                                {letter}
                            </motion.span>
                        ))}
                        <motion.span variants={letterVariants} className="text-[#bcbec3]">
                            (
                        </motion.span>
                        {"PER".split("").map((letter, index) => (
                            <motion.span key={`per-${index}`} variants={letterVariants}>
                                {letter}
                            </motion.span>
                        ))}
                        <motion.span variants={letterVariants} className="text-[#bcbec3]">
                            )
                        </motion.span>
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.5, duration: 0.5}}
                        >
                            <motion.span
                                className="ml-2"
                                animate={{opacity: [1, 0, 1]}}
                                transition={{repeat: Infinity, duration: 0.8}}
                            >
                                |
                            </motion.span>
                        </motion.span>
                    </motion.p>
                    <motion.div
                        className="absolute end-0 bottom-0"
                        initial={{opacity: 0, x: 0, y: 0}}
                        animate={{opacity: 1, x: [0, -300, 0], y: [0, -200, 0]}}
                        transition={{
                            opacity: {delay: 2, duration: 0.5, ease: "easeInOut"},
                            x: {delay: 2, duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"},
                            y: {delay: 2, duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"},
                        }}
                    >
                        <Image src="/cursor.png" alt="cursor" width={50} height={50}/>
                    </motion.div>
                </div>

                <div className="flex items-center gap-2 text-sm text-geist-1000">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00AC3A]"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-[#00CA50]"></span>
                    </span>
                    <p>Open to Work</p>
                </div>
            </div>
        </main>
    );
}
