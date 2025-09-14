"use client";

import React from "react";

export default function OverlappingCards() {
    const cards = [
        {
            bgColor: "bg-[#ccb987]",
            year: "2025",
            shortcut: ["Website", "Your Waiter", "Coming soon"],
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
            stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "MongoDB", "Stripe"],
            src: "/sample.jpg",
        },
        {
            bgColor: "bg-[#79a978]",
            year: "2025",
            shortcut: ["Website", "AIGen"],
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
            stack: ["React", "FastAPI", "Tailwind CSS", "OpenAI API"],
            src: "/sample.jpg",
        },
        {

            bgColor: "bg-[#74b5a5]",
            year: "2024",
            shortcut: ["Website", "3D Model"],
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
            stack: ["JavaScript", "React", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
            src: "/sample.jpg",
        },
        {
            bgColor: "bg-[#6ba6ef]",
            year: "2023",
            shortcut: ["Website", "PIM"],
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
            stack: ["JavaScript", "React", "Redux", "Bootstrap 5", "JSON"],
            src: "/sample.jpg",
        },
        {
            bgColor: "bg-[#9c9cf8]",
            year: "2022",
            shortcut: ["Website", "RentMe"],
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
            stack: ["TypeScript", "React", "Next.js", "Tailwind", "Prisma"],
            src: "/sample.jpg",
        },
    ];

    return (
        <div className="relative flex h-auto flex-col gap-6 pt-4 lg:gap-10">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="sticky top-10 z-30 flex items-center justify-center lg:top-20"
                >
                    <div className={`group flex h-[30rem] w-full flex-col rounded-3xl text-white lg:h-[40rem] ${card.bgColor}`}>
                        <div className="flex justify-between border-b p-6">
                            <p className="text-sm font-light lg:text-base">{card.year}</p>
                            <div className="flex flex-wrap items-center gap-2">
                                {card.shortcut.map((item, itemIndex) => (
                                    <span key={itemIndex} className="text-sm font-light lg:text-base">
                                        {item}{itemIndex < card.shortcut.length - 1 && " |"}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex h-full flex-col justify-between p-6">
                            <div className="flex flex-col gap-8 lg:gap-16">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-start justify-between">
                                        <h1>{card.title}</h1>
                                        {/*<div className="pt-1">
                                            <FaArrowRight
                                                className="size-[30px] lg:size-12 transform transition-transform duration-300 group-hover:rotate-0 -rotate-45"/>
                                        </div>*/}
                                    </div>
                                    <div className="hidden md:block">
                                        <h3 className="max-w-3xl text-2xl">{card.subtitle}</h3>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col gap-4 lg:flex-row lg:gap-20">
                                    <div className="flex flex-1 flex-col gap-2">
                                        <h5>{card.description1.title}</h5>
                                        <p className="font-light">{card.description1.description}</p>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2">
                                        <h5>{card.description2.title}</h5>
                                        <p className="font-light">{card.description2.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="font-light lg:text-base">Tech Stack</span>
                                <span className="font-light">•</span>
                                {card.stack.map((tech, techIndex) => (
                                    <span key={techIndex} className="text-sm font-light lg:text-base">
                                        {tech}{techIndex < card.stack.length - 1 && " •"}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}