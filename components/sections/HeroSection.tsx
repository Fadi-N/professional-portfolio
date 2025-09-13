import React from 'react';
import {motion} from "motion/react";
import Image from "next/image";
import {Section} from "@/components/ui/Section";

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

export const HeroSection = () => {
    return (
        <Section className="flex flex-col items-center justify-between space-y-10 pt-10 md:pt-0 space-y-8">
                <div className="flex items-center">
                    <motion.p
                        className="flex text-5xl md:text-[7rem] lg:text-[8.5rem] xl:text-[11.25rem] 2xl:text-[14rem] leading-8 md:leading-[7.5rem] lg:leading-[9rem] xl:leading-[12rem] 2xl:leading-[15rem]"
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
                        className="items-center md:mx-14 hidden md:flex"
                        initial={{rotate: 0, opacity: 0}}
                        animate={{rotate: 360, opacity: 1}}
                        transition={{
                            opacity: {delay: 2, duration: 0.5, ease: "easeOut"},
                            rotate: {delay: 2, duration: 4, ease: "linear", repeat: Infinity},
                        }}
                    >
                        <Image src="/react.png" alt="react.png" width={150} height={150}/>
                    </motion.div>
                </div>

                <div>
                    <motion.p
                        className="flex text-5xl md:text-[7rem] lg:text-[8.5rem] xl:text-[11.25rem] 2xl:text-[14rem] leading-8 md:leading-[7.5rem] lg:leading-[9rem] xl:leading-[12rem] 2xl:leading-[15rem]"
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
                        className="flex text-5xl md:text-[7rem] lg:text-[8.5rem] xl:text-[11.25rem] 2xl:text-[14rem] leading-8 md:leading-[7.5rem] lg:leading-[9rem] xl:leading-[12rem] 2xl:leading-[15rem]"
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
                        className="absolute end-0 bottom-0 hidden md:block"
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

                <div className="flex items-center gap-2 text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl;">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00AC3A]"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-[#00CA50]"></span>
                    </span>
                    <p>Open to Work</p>
                </div>
            </Section>
    );
};