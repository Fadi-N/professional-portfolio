"use client"; // jeśli używasz Next.js 13+ z app router

import {motion, useScroll, useTransform} from "framer-motion";
import {FaArrowRight} from "react-icons/fa6";
import Image from "next/image";
import React from "react";

export default function OverlappingCards() {
    const {scrollYProgress} = useScroll();

    const cards = [
        {
            cardY: useTransform(scrollYProgress, [0.4, .95], [100, -160]),
            bgColor: "bg-[#ccb987]",
            year: "2024",
            shortcut: "Website | 3D Model",
            title: "Bringing the iPhone to life in 3D",
            subtitle: "An immersive, real-time 3D experience built with Three.js & React Three Fiber",
            description1: {
                title: "360° Exploration",
                description: "Interact with a fully-rendered iPhone model, exploring every detail from any angle."
            },
            description2: {
                title: "Smooth Animations & UI",
                description: "GSAP-powered animations ensure seamless transitions and a dynamic user experience"
            },
            stack: "JavaScript, React, Three.js, React Three Fiber, GSAP, Tailwind CSS",
            src: "/sample.jpg"
        },
        {
            cardY: useTransform(scrollYProgress, [0.3, .95], [280, -120]),
            bgColor: "bg-[#79a978]",
            year: "2023",
            shortcut: "Website | PIM",
            title: "Transforming Content Creation with PIM Editor",
            subtitle: "A dynamic tool for building product pages, blogs, and fully customizable views",
            description1: {
                title: "Limitless Customization",
                description: "Prebuilt components, sliders, and flexible content blocks allow for unique layouts."
            },
            description2: {
                title: "JSON-Driven & Real-Time Rendering",
                description: "Every structure is powered by JSON, seamlessly converting into fully-rendered HTML."
            },
            stack: "JavaScript, React, Redux, Bootstrap 5, JSON",
            src: "/sample.jpg"
        },
        {
            cardY: useTransform(scrollYProgress, [0.45, .95], [340, -80]),
            bgColor: "bg-[#74b5a5]",
            year: "2022",
            shortcut: "Website | RentMe",
            title: "A Seamless Property Rental Experience",
            subtitle: "Effortless booking, secure authentication, and personalized listings in one platform.",
            description1: {
                title: "Smart Authentication & Filtering",
                description: "NextAuth.js enables secure login and OAuth (Google & GitHub), while advanced filters and \"Favorites\" help users find and save top listings."
            },
            description2: {
                title: "Smooth Reservations & Performance",
                description: "Easily book, cancel, and track trips. Built with Next.js and Prisma for seamless routing, authentication, and data management."
            },
            stack: "JavaScript, React, Next.js, Tailwind, Prisma",
            src: "/sample.jpg"
        },
        {
            cardY: useTransform(scrollYProgress, [0.6, .95], [380, -40]),
            bgColor: "bg-[#6ba6ef]",
            year: "2025",
            shortcut: "Website | Your Waiter | Coming soon",
            title: "Bringing the iPhone to life in 3D",
            subtitle: "An immersive, real-time 3D experience built with Three.js & React Three Fiber",
            description1: {
                title: "360° Exploration",
                description: "Interact with a fully-rendered iPhone model, exploring every detail from any angle."
            },
            description2: {
                title: "Smooth Animations & UI",
                description: "GSAP-powered animations ensure seamless transitions and a dynamic user experience"
            },
            stack: "JavaScript, React, Three.js, React Three Fiber, GSAP, Tailwind CSS",
            src: "/sample.jpg"
        },
        {
            cardY: useTransform(scrollYProgress, [0.75, .95], [420, 0]),
            bgColor: "bg-[#9c9cf8]",
            year: "2025",
            shortcut: "Website | AI Gen | Comming soon",
            title: "Bringing the iPhone to life in 3D",
            subtitle: "An immersive, real-time 3D experience built with Three.js & React Three Fiber",
            description1: {
                title: "360° Exploration",
                description: "Interact with a fully-rendered iPhone model, exploring every detail from any angle."
            },
            description2: {
                title: "Smooth Animations & UI",
                description: "GSAP-powered animations ensure seamless transitions and a dynamic user experience"
            },
            stack: "JavaScript, React, Three.js, React Three Fiber, GSAP, Tailwind CSS",
            src: "/sample.jpg"
        }
    ]

    return (
        <div className="overlapping-cards">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    style={{y: card.cardY}}
                    className="sticky top-0 h-screen flex items-center justify-center z-30"
                >
                    <div className={`overlapping-card text-white ${card.bgColor}`}>
                        <div className="overlapping-card-header">
                            <p>{card.year}</p>
                            <p>{card.shortcut}</p>
                        </div>
                        <div className="overlapping-card-body">
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center justify-between">
                                    <h1>{card.title}</h1>
                                    <FaArrowRight
                                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl transform transition-transform duration-300 hover:-rotate-45"/>
                                </div>
                                <h3>{card.subtitle}</h3>
                            </div>
                            <div className="flex md:space-x-10 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
                                <div>
                                    <h4>{card.description1.title}</h4>
                                    <p>{card.description1.description}</p>
                                </div>
                                <div>
                                    <h4>{card.description2.title}</h4>
                                    <p>{card.description2.description}</p>
                                </div>
                            </div>
                            <p>Tech Stack – {card.stack}</p>
                            <div className="flex-1">
                                <Image
                                    src={card.src}
                                    alt="react.png"
                                    fill={true}
                                    className="rounded-md xl:rounded-lg 2xl:rounded-xl !relative !h-[510px]"
                                />
                            </div>
                        </div>
                    </div>

                </motion.div>
            ))}
        </div>
    );
}
