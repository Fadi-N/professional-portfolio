"use client"; // jeśli używasz Next.js 13+ z app router

import {motion, useScroll, useTransform} from "framer-motion";
import {FaArrowRight} from "react-icons/fa6";
import Image from "next/image";
import React from "react";

export default function OverlappingCards() {
    const {scrollYProgress} = useScroll();

    const card1Y = useTransform(scrollYProgress, [0.15, .95], [260, -160]);
    const card2Y = useTransform(scrollYProgress, [0.3, .95], [280, -120]);
    const card3Y = useTransform(scrollYProgress, [0.45, .95], [340, -80]);
    const card4Y = useTransform(scrollYProgress, [0.6, .95], [380, -40]);
    const card5Y = useTransform(scrollYProgress, [0.75, .95], [420, 0]);

    return (
        <div className="overlapping-cards">
            <motion.div
                style={{y: card1Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div className="overlapping-card bg-[#c59172] text-white">
                    <div className="overlapping-card-header">
                        <p>2024</p>
                        <p>Website | 3D Model</p>
                    </div>
                    <div className="overlapping-card-body">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between">
                                <h1>Bringing the iPhone to life in 3D</h1>
                                <FaArrowRight
                                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl transform transition-transform duration-300 hover:-rotate-45"/>
                            </div>
                            <h3>An immersive, real-time 3D experience built with Three.js & React Three Fiber</h3>
                        </div>
                        <div className="flex md:space-x-10 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
                            <div>
                                <h4>360° Exploration</h4>
                                <p>
                                    Interact with a fully-rendered iPhone model, exploring every detail from any angle.
                                </p>
                            </div>
                            <div>
                                <h4>Smooth Animations & UI</h4>
                                <p>
                                    GSAP-powered animations ensure seamless transitions and a dynamic user experience.
                                </p>
                            </div>
                        </div>
                        <p>Tech Stack – JavaScript, React, Three.js, React Three Fiber, GSAP, Tailwind CSS</p>
                        <div className="flex-1">
                            <Image
                                src="/sample.jpg"
                                alt="react.png"
                                fill={true}
                                className="rounded lg:rounded-md xl:rounded-lg 2xl:rounded-xl !relative"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                style={{y: card2Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div className="w-full h-[800px] bg-[#ccb987] text-white flex items-center justify-center rounded-lg">
                    Card 2
                </div>
            </motion.div>

            <motion.div
                style={{y: card3Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div
                    className="w-full h-[800px] bg-[#79a978] text-white flex items-center justify-center rounded-lg">
                    Card 3
                </div>
            </motion.div>
            <motion.div
                style={{y: card4Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div
                    className="w-full h-[800px] bg-[#6ba6ef] text-white flex items-center justify-center rounded-lg">
                    Card 4
                </div>
            </motion.div>
            <motion.div
                style={{y: card5Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div
                    className="w-full h-[800px] bg-[#9c9cf8] text-white flex items-center justify-center rounded-lg">
                    Card5
                </div>
            </motion.div>
        </div>
    );
}
