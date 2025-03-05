"use client";

import { FaArrowRight } from "react-icons/fa6";
import React from "react";

export default function OverlappingCards() {
    const cards = [
        {
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
            stack: "JavaScript • React • Three.js • React Three Fiber • GSAP • Tailwind CSS",
            src: "/sample.jpg",
        },
        {

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
            stack: "JavaScript • React • Redux • Bootstrap 5 • JSON",
            src: "/sample.jpg",
        },
        {

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
            stack: "TypeScript • React • Next.js • Tailwind • Prisma",
            src: "/sample.jpg",
        },
        {

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
            stack: "TypeScript • React • Next.js • Tailwind CSS • MongoDB • Stripe",
            src: "/sample.jpg",
        },
        {

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
            stack: "React • FastAPI • Tailwind CSS • OpenAI API",
            src: "/sample.jpg",
        },
    ];

    return (
        <div className="overlapping-cards">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="sticky top-10 lg:top-20 flex items-center justify-center z-30"
                >
                    <div className={`overlapping-card group text-white ${card.bgColor}`}>
                        <div className="overlapping-card-header">
                            <p>{card.year}</p>
                            <p>{card.shortcut}</p>
                        </div>
                        <div className="overlapping-card-body">
                            <div className="space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-14">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-baseline md:items-center justify-between">
                                        <h1>{card.title}</h1>
                                        <FaArrowRight
                                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl transform transition-transform duration-300 group-hover:-rotate-45"/>
                                    </div>
                                    <div className="hidden md:block">
                                        <h3>{card.subtitle}</h3>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
                                    <div>
                                        <h4>{card.description1.title}</h4>
                                        <p>{card.description1.description}</p>
                                    </div>
                                    <div>
                                        <h4>{card.description2.title}</h4>
                                        <p>{card.description2.description}</p>
                                    </div>
                                </div>
                            </div>
                            <p>Tech Stack • {card.stack}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}