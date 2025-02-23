"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: 1080, height: 1080 });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default function OverlappingCards() {
    const { scrollYProgress } = useScroll();
    const { height, width } = useWindowSize();

    // Dynamiczne skalowanie w zależności od rozmiaru ekranu
    const scaleFactor = Math.min(height / 1080, width / 1920);
    const cardSpacing = Math.min(90 * scaleFactor, 90);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const percentage = latest * 100;
        console.log(`Scroll: ${percentage.toFixed(2)}%`);
    });

    const cards = [
        {
            cardY: useTransform(scrollYProgress, [0, 0.35, 0.87], [0, 0, 0]),
            bgColor: "bg-[#ccb987]",
            year: "2024",
            shortcut: "Website | 3D Model",
            title: "Bringing the iPhone to life in 3D",
            subtitle: "An immersive, real-time 3D experience built with Three.js & React Three Fiber",
            description1: {
                title: "360° Exploration",
                description: "Interact with a fully-rendered iPhone model, exploring every detail from any angle.",
            },
            description2: {
                title: "Smooth Animations & UI",
                description: "GSAP-powered animations ensure seamless transitions and a dynamic user experience",
            },
            stack: "JavaScript, React, Three.js, React Three Fiber, GSAP, Tailwind CSS",
            src: "/sample.jpg",
        },
        {
            cardY: useTransform(
                scrollYProgress,
                [0.23, 0.35, 0.83, 0.87],
                [-cardSpacing, cardSpacing, cardSpacing, 0]
            ),
            bgColor: "bg-[#79a978]",
            year: "2023",
            shortcut: "Website | PIM",
            title: "Transforming Content Creation with PIM Editor",
            subtitle: "A dynamic tool for building product pages, blogs, and fully customizable views",
            description1: {
                title: "Limitless Customization",
                description: "Prebuilt components, sliders, and flexible content blocks allow for unique layouts.",
            },
            description2: {
                title: "JSON-Driven & Real-Time Rendering",
                description: "Every structure is powered by JSON, seamlessly converting into fully-rendered HTML.",
            },
            stack: "JavaScript, React, Redux, Bootstrap 5, JSON",
            src: "/sample.jpg",
        },
        {
            cardY: useTransform(
                scrollYProgress,
                [0.35, 0.5, 0.83, 0.87],
                [-cardSpacing * 2, cardSpacing * 2, cardSpacing * 2, 0]
            ),
            bgColor: "bg-[#74b5a5]",
            year: "2022",
            shortcut: "Website | RentMe",
            title: "A Seamless Property Rental Experience",
            subtitle: "Effortless booking, secure authentication, and personalized listings in one platform.",
            description1: {
                title: "Smart Authentication & Filtering",
                description:
                    "NextAuth.js enables secure login and OAuth (Google & GitHub), while advanced filters and \"Favorites\" help users find and save top listings.",
            },
            description2: {
                title: "Smooth Reservations & Performance",
                description:
                    "Easily book, cancel, and track trips. Built with Next.js and Prisma for seamless routing, authentication, and data management.",
            },
            stack: "TypeScript, React, Next.js, Tailwind, Prisma",
            src: "/sample.jpg",
        },
        {
            cardY: useTransform(
                scrollYProgress,
                [0.5, 0.66, 0.83, 0.87],
                [-cardSpacing * 3, cardSpacing * 3, cardSpacing * 3, 0]
            ),
            bgColor: "bg-[#6ba6ef]",
            year: "2025",
            shortcut: "Website | Your Waiter | Coming soon",
            title: "A Smart & Seamless Dining Experience",
            subtitle: "QR code ordering, instant payments, and a seamless restaurant experience.",
            description1: {
                title: "Order, Pay & Enjoy – All from Your Phone",
                description:
                    "Simply scan a QR code to explore the menu, place orders, and pay—no need to wait for a waiter",
            },
            description2: {
                title: "Optimized Workflow & Faster Service",
                description:
                    "Automated order processing, reduced wait times, and better table management for an improved dining experience.",
            },
            stack: "TypeScript, React, Next.js, Tailwind CSS, MongoDB, Stripe",
            src: "/sample.jpg",
        },
        {
            cardY: useTransform(
                scrollYProgress,
                [0.66, 0.81, 0.83, 0.87],
                [-cardSpacing * 4, cardSpacing * 4, cardSpacing * 4, 0]
            ),
            bgColor: "bg-[#9c9cf8]",
            year: "2025",
            shortcut: "Website | AIGen | Coming soon",
            title: "AI-Powered Code Documentation & Quiz Generator",
            subtitle: "Transforming code into clear documentation and interactive learning experiences.",
            description1: {
                title: "Automated Documentation Generation",
                description:
                    "Generate structured, easy-to-read technical documentation directly from your code, enhancing clarity and collaboration.",
            },
            description2: {
                title: "Interactive Quizzes & Learning",
                description:
                    "Convert documentation into quizzes to reinforce knowledge, test understanding, and improve developer engagement",
            },
            stack: "React, FastAPI, Tailwind CSS, OpenAI API",
            src: "/sample.jpg",
        },
    ];

    return (
        <div className="overlapping-cards min-h-[200vh] sm:min-h-[150vh]">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    style={{
                        y: card.cardY,
                        marginBottom: `${cardSpacing}px`
                    }}
                    className="sticky top-4 sm:top-10 lg:top-16 flex items-center justify-center z-30 px-2 sm:px-4"
                >
                    <div className={`overlapping-card group text-white ${card.bgColor} 
                        w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl
                        rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:-translate-y-1 transition-transform`}>
                        <div className="overlapping-card-header flex flex-col sm:flex-row justify-between gap-2 mb-4">
                            <p className="text-sm sm:text-base">{card.year}</p>
                            <p className="text-sm sm:text-base">{card.shortcut}</p>
                        </div>
                        <div className="overlapping-card-body space-y-4 sm:space-y-6">
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-baseline justify-between">
                                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                                        {card.title}
                                    </h1>
                                    <FaArrowRight className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl
                                        transform transition-transform duration-300 group-hover:-rotate-45"/>
                                </div>
                                <div className="hidden sm:block">
                                    <h3 className="text-sm sm:text-base lg:text-lg">
                                        {card.subtitle}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
                                <div className="flex-1">
                                    <h4 className="text-base sm:text-lg lg:text-xl">
                                        {card.description1.title}
                                    </h4>
                                    <p className="text-sm sm:text-base">
                                        {card.description1.description}
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base sm:text-lg lg:text-xl">
                                        {card.description2.title}
                                    </h4>
                                    <p className="text-sm sm:text-base">
                                        {card.description2.description}
                                    </p>
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm lg:text-base">
                                Tech Stack – {card.stack}
                            </p>
                            <div className="relative w-full h-48 sm:h-64 lg:h-80">
                                <Image
                                    src={card.src}
                                    alt={card.title}
                                    fill={true}
                                    className="rounded-xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}