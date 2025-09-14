'use client'

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import {FaGithub, FaLinkedinIn} from "react-icons/fa6";

import {DefaultReveal} from "@/components/ui/DefaultReveal";
import {LinkWithIcon} from "@/components/ui/LinkWithIcon";
import {Section} from "@/components/ui/Section";
import { EXTERNAL_LINKS, CONTACT_INFO } from "@/constants";

const aboutData = {
    hero: {
        title: "Frontend Developer, <br/> Graduated in Computer Science, <br/> Building modern web apps.",
        descriptions: [
            "I'm Fadi, a Frontend Developer who loves building smooth, fast, and good-looking web apps. I am pursuing my Master's degree at the Warsaw University of Technology.",
            "I mainly work with React and Next.js, creating scalable UX/UI and making sure everything runs fast and looks great. I enjoy working with different teams, improving web performance, and bringing ideas to life through clean and efficient code."
        ],
        image: {
            src: "/about-picture.jpg",
            alt: "Fadi Nachawati"
        }
    },
    skills: {
        title: "Skills and Interest",
        paragraphs: [
            "I'm always learning and looking for new ways to solve challenges. I enjoy working with ambitious teams that care about innovation, clean code, and creating great user experiences.",
            "My frontend journey has taken me through all kinds of areas—building interactive UIs, optimizing performance, and working with design systems to make products more user-friendly. I also enjoy playing around with web animations, accessibility, and crafting smooth, responsive layouts.",
            "Next.js has pushed me beyond just frontend, getting me into fullstack development—handling APIs, improving backend logic, and making sure everything runs smoothly from start to finish. I love building fast, scalable, and user-friendly web apps that just work.",
            "Outside of coding, I'm all about traveling, watching sports, and gaming. Whether I'm exploring new places, cheering for my favorite teams, or getting lost in a great game, I always find ways to stay curious and have fun."
        ]
    },
    experience: {
        title: "Experience",
        items: [
            {
                company: "Digital Bunch",
                period: "2025 - ",
                description: "Frontend Developer • React web apps • UI development • Performance optimization • Global collaboration on UX"
            },
            {
                company: "Schoenberger Germany Enterprises",
                period: "2022 - 2025",
                description: "Frontend Developer • React web apps • UI development • Performance optimization • Global collaboration on UX"
            },
            {
                company: "Spółdzielnia Mieszkaniowa Kopernik",
                period: "2019 - 2019",
                description: "Service Desk Consultant • IT support and troubleshooting • Assisting users with tech issues • Keeping systems running smoothly"
            }
        ]
    },
    education: {
        title: "Education",
        items: [
            {
                institution: "Warsaw University of Technology",
                period: "2023 - ",
                degree: "Master of Science • Computer Science"
            },
            {
                institution: "Nicolaus Copernicus University",
                period: "2019 - 2023",
                degree: "Bachelor of Engineering • Computer Science"
            }
        ]
    },
    contact: {
        title: "Contact and Socials",
        email: CONTACT_INFO.EMAIL,
        socials: [
            {
                name: "LinkedIn",
                url: EXTERNAL_LINKS.LINKEDIN,
                icon: FaLinkedinIn
            },
            {
                name: "GitHub", 
                url: EXTERNAL_LINKS.GITHUB,
                icon: FaGithub
            }
        ]
    }
};

const AboutPage = () => {
    return (
        <div className="flex flex-col pt-10 lg:gap-20 lg:pt-20">
            {/* Hero Section */}
            <Section className="flex flex-1 flex-col justify-between gap-6 pb-10 lg:flex-row lg:gap-20 lg:pb-0">
                <DefaultReveal className="relative aspect-[3/4] flex-shrink-0 rounded-lg lg:flex lg:w-2/5">
                    <Image
                        src={aboutData.hero.image.src}
                        alt={aboutData.hero.image.alt}
                        layout="fill"
                        className="pointer-events-none inset-0 rounded-xl object-cover"
                    />
                </DefaultReveal>
                <div className="flex flex-1 flex-col gap-4 py-4 lg:gap-10 lg:py-0">
                    <DefaultReveal delay={0.2}>
                        <h1 
                            className="leading-[130%]"
                            dangerouslySetInnerHTML={{ __html: aboutData.hero.title }}
                        />
                    </DefaultReveal>
                    <div className="flex flex-col gap-4 lg:gap-6">
                        {aboutData.hero.descriptions.map((description, index) => (
                            <DefaultReveal key={index} delay={0.3 + index * 0.1}>
                                <p className="text-base font-light lg:text-xl">
                                    {index === 0 ? (
                                        <>
                                            I&apos;m Fadi, a <span className="text-[#bd80b8]">Frontend Developer</span> who loves building
                                            smooth, fast, and good-looking web apps.
                                            I am pursuing my Master&apos;s degree at the Warsaw University of Technology.
                                        </>
                                    ) : (
                                        description
                                    )}
                                </p>
                            </DefaultReveal>
                        ))}
                    </div>

                </div>
            </Section>

            {/* Details Section */}
            <Section className="flex flex-1 flex-col justify-between gap-8 lg:flex-row lg:gap-0 lg:gap-x-16">
                {/* Skills */}
                <DefaultReveal className="flex flex-1 flex-col gap-2 lg:gap-4">
                    <h4>{aboutData.skills.title}</h4>
                    <div className="flex flex-col gap-2 text-sm lg:gap-4">
                        {aboutData.skills.paragraphs.map((paragraph, index) => (
                            <div key={index}>
                                <p className="font-light leading-[160%]">{paragraph}</p>
                            </div>
                        ))}
                    </div>
                </DefaultReveal>

                {/* Experience & Education */}
                <DefaultReveal className="flex flex-1 flex-col gap-8 lg:gap-10" delay={0.2}>
                    <div className="flex flex-col gap-2 lg:gap-4">
                        <h4>{aboutData.experience.title}</h4>
                        <div className="flex flex-col gap-2 text-sm lg:gap-4">
                            {aboutData.experience.items.map((item, index) => (
                                <div key={index} className="flex flex-col gap-1.5">
                                    <h6>{item.company}</h6>
                                    <div>
                                        <p className="font-light">{item.period}</p>
                                        <p className="font-light leading-[160%]">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-4">
                        <h4>{aboutData.education.title}</h4>
                        <div className="flex flex-col gap-2 text-sm lg:gap-4">
                            {aboutData.education.items.map((item, index) => (
                                <div key={index} className="flex flex-col gap-1.5">
                                    <h6>{item.institution}</h6>
                                    <div>
                                        <p className="font-light">{item.period}</p>
                                        <p className="font-light leading-[160%]">{item.degree}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </DefaultReveal>

                {/* Contact */}
                <DefaultReveal className="flex flex-1 flex-col gap-2 lg:gap-4" delay={0.3}>
                    <h4>{aboutData.contact.title}</h4>
                    <div className="flex flex-col gap-2 text-sm lg:gap-4">
                        <div className="flex flex-col gap-1.5">
                            <h6>Email</h6>
                            <LinkWithIcon href={EXTERNAL_LINKS.EMAIL} title={CONTACT_INFO.EMAIL}/>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <h6>Social</h6>
                            <div className="flex space-x-2">
                                {aboutData.contact.socials.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <Link
                                            key={index}
                                            className="transition-colors duration-300 hover:text-[#74b5a5]"
                                            href={social.url}
                                        >
                                            <IconComponent className="text-base lg:text-xl"/>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </DefaultReveal>
            </Section>
        </div>
    );
};

export default AboutPage;