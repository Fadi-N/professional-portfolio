'use client'

import {motion} from "motion/react";
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa6";
import TechStack from "@/components/tech-stack";
import OverlappingCards from "@/components/overlapping-cards";

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
                        className="hero-intro-paragraph"
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
                        className="hero-intro-paragraph"
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
                        className="hero-intro-paragraph"
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
            </div>
            <div className="hero-my-stacks">
                <div className="flex flex-col space-y-2">
                    <h1>My Stacks</h1>
                    <p className="text-[#bd80b8]">Always learning and exploring new trends and techniques to keep things
                        fresh and improve my skills.</p>
                </div>

                <div className="flex flex-col space-y-4">
                    <TechStack/>
                </div>

            </div>
            <div className="hero-featured-work">
                <div className="flex flex-col space-y-2">
                    <h1>Featured Works</h1>
                    <p className="text-[#bd80b8]">A selection of projects where I’ve put my skills to the test—building,
                        designing, and refining experiences that matter.</p>
                </div>
                <OverlappingCards/>

            </div>
            <div id="contact" className="hero-featured-contact">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h1 className="text-center md:text-start">Need a Frontend Developer? Let&apos;s talk! 💬</h1>
                    <h3 className="text-center md:text-start text-[#bd80b8]">We can team up and build something great. Drop me a message!</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-center md:text-start">Contact me:</p>
                    <h4 className="text-center md:text-start">
                        <div className="flex items-center space-x-2 group ">
                            <a
                                className="transition-colors duration-300 group-hover:text-[#74b5a5]"
                                href="mailto:fadinachawati17@gmail.com"
                            >
                                fadinachawati17@gmail.com
                            </a>
                            <FaArrowRight
                                className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl transform transition-all duration-300 group-hover:-rotate-45 group-hover:text-[#74b5a5]"
                            />
                        </div>

                    </h4>
                </div>
            </div>
        </main>
    );
}
