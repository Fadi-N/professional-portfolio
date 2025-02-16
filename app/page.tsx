'use client'

import {motion} from "motion/react";
import Image from "next/image";
import {FaArrowRight, FaReact} from "react-icons/fa6";
import {SiBootstrap, SiFigma, SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {BsBootstrap} from "react-icons/bs";
import {TbBrandNextjs, TbBrandTypescript} from "react-icons/tb";
import {RiJavascriptLine} from "react-icons/ri";

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
                        className="flex items-center mx-14"
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
                    <div className="flex space-x-16">
                        <div className="hero-stack">
                            <div
                                className="flex items-center justify-between border  md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl p-2">
                                <FaReact size={32}/>
                            </div>
                            <div className="flex-1">
                                <h5>React</h5>
                                <div className="flex items-center justify-between">
                                    <p className="hero-stack-description">A JavaScript library for building UI</p>
                                    <FaArrowRight className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </div>
                            </div>
                        </div>
                        <div className="hero-stack">
                            <div
                                className="flex items-center justify-between border md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl p-2">
                                <TbBrandNextjs size={32}/>
                            </div>
                            <div className="flex-1">
                                <h5>Next.js</h5>
                                <div className="flex items-center justify-between">
                                    <p className="hero-stack-description">The React framework for the web</p>
                                    <FaArrowRight className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-16">
                        <div className="hero-stack">
                            <div
                                className="flex items-center justify-between border md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl p-2">
                                <RiJavascriptLine size={32}/>
                            </div>
                            <div className="flex-1">
                                <h5>JavaScript</h5>
                                <div className="flex items-center justify-between">
                                    <p className="hero-stack-description">The language of the web</p>
                                    <FaArrowRight className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </div>
                            </div>
                        </div>
                        <div className="hero-stack">
                            <div
                                className="flex items-center justify-between border md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl p-2">
                                <TbBrandTypescript size={32}/>
                            </div>
                            <div className="flex-1">
                                <h5>TypeScript</h5>
                                <div className="flex items-center justify-between">
                                    <p className="hero-stack-description">JavaScript with static types</p>
                                    <FaArrowRight className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-16">
                        <div className="hero-stack">
                            <div
                                className="flex items-center justify-between border md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl p-2">
                                <BsBootstrap size={32}/>
                            </div>
                            <div className="flex-1">
                                <h5>Bootstrap</h5>
                                <div className="flex items-center justify-between">
                                    <p className="hero-stack-description">A responsive CSS framework</p>
                                    <FaArrowRight className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </div>
                            </div>
                        </div>
                        <div className="hero-stack">
                            <div
                                className="flex items-center justify-between border md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl p-2">
                                <SiTailwindcss size={32}/>
                            </div>
                            <div className="flex-1">
                                <h5>Tailwind CSS</h5>
                                <div className="flex items-center justify-between">
                                    <p className="hero-stack-description">Utility-first CSS framework</p>
                                    <FaArrowRight className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-16">
                        <div className="hero-stack">
                            <div
                                className="flex items-center justify-between border md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl p-2">
                                <SiFigma size={32}/>
                            </div>
                            <div className="flex-1">
                                <h5>Figma</h5>
                                <div className="flex items-center justify-between">
                                    <p className="hero-stack-description">Design and prototyping tool</p>
                                    <FaArrowRight className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="hero-featured-work">
                <div className="flex flex-col space-y-2">
                    <h1>Featured Works</h1>
                    <p className="text-[#bd80b8]">A selection of projects where I’ve put my skills to the test—building, designing, and refining experiences that matter.</p>
                </div>
            </div>
        </main>
    );
}
