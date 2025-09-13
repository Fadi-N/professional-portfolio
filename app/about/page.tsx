'use client'

import React from 'react';
import Image from "next/image";
import {FaArrowRight, FaGithub, FaLinkedinIn} from "react-icons/fa6";
import Link from "next/link";
import {Section} from "@/components/ui/Section";
import {DefaultReveal} from "@/components/ui/DefaultReveal";


const AboutPage = () => {
    return (
        <Section className="flex flex-col p-4 md:p-0">
            <div className="flex-1 flex justify-between md:space-x-10 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
                <DefaultReveal
                    className="hidden md:flex relative rounded xl:rounded-xl 2xl:rounded-2xl w-[300px] h-[400px] md:w-[350px] md:h-[467px] lg:w-[450px] lg:h-[600px] xl:w-[500px] xl:h-[667px] 2xl:w-[600px] 2xl:h-[800px]">
                    <Image
                        src="/about-picture.jpg"
                        alt="react.png"
                        layout="fill"
                        style={{objectFit: "cover"}}
                        className="rounded-xl"
                    />
                </DefaultReveal>
                <div className="flex-1 flex flex-col space-y-10 xl:space-y-12 2xl:space-y-14 py-4 lg:py-8 xl:py-10 2xl:py-12">
                    <DefaultReveal delay={0.2}>
                        <h1>Frontend Developer, </h1>
                        <h1>Graduated in Computer Science, </h1>
                        <h1>Building modern web apps.</h1>
                    </DefaultReveal>

                    <DefaultReveal delay={0.3}>
                        <p className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">
                            I&apos;m Fadi, a <span className="text-[#bd80b8]">Frontend Developer</span> who loves building
                            smooth, fast, and good-looking web apps.
                            I am pursuing my Master&apos;s degree at the Warsaw University of Technology.
                        </p>
                    </DefaultReveal>
                    <DefaultReveal delay={0.4}>
                        <p className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">
                            I mainly work with React and Next.js, creating scalable UX/UI and making sure everything
                            runs
                            fast and looks great.
                            I enjoy working with different teams, improving web performance, and bringing ideas to life
                            through clean and efficient code.
                        </p>
                    </DefaultReveal>
                </div>
            </div>
            <div className="flex-1 flex justify-between md:space-x-10 lg:space-x-12 xl:space-x-16 2xl:space-x-20 flex flex-col md:flex-row space-y-10 md:space-y-0 py-4 lg:py-8 xl:py-10 2xl:py-12">
                <DefaultReveal className="flex-1 flex flex-col space-y-2">
                    <h4>Skills and Interest</h4>
                    <div className="flex flex-col space-y-4 text-sm">
                        <div>
                            <p>
                                I’m always learning and looking for new ways to solve challenges. I enjoy working with
                                ambitious teams that care about innovation, clean code, and creating great user
                                experiences.
                            </p>
                        </div>
                        <div>
                            <p>
                                My frontend journey has taken me through all kinds of areas—building interactive UIs,
                                optimizing performance, and working with design systems to make products more
                                user-friendly. I also enjoy playing around with web animations, accessibility, and
                                crafting smooth, responsive layouts.
                            </p>
                        </div>
                        <div>
                            <p>
                                Next.js has pushed me beyond just frontend, getting me into fullstack
                                development—handling APIs, improving backend logic, and making sure everything runs
                                smoothly from start to finish. I love building fast, scalable, and user-friendly web
                                apps that just work.
                            </p>
                        </div>
                        <div>
                            <p>
                                Outside of coding, I’m all about traveling, watching sports, and gaming. Whether I’m
                                exploring new places, cheering for my favorite teams, or getting lost in a great game, I
                                always find ways to stay curious and have fun.
                            </p>
                        </div>
                    </div>
                </DefaultReveal>
                <DefaultReveal className="flex-1 flex flex-col space-y-10 xl:space-y-12 2xl:space-y-14" delay={0.2}>
                    <div className="flex flex-col space-y-2">
                        <h4>Experience</h4>
                        <div className="flex flex-col space-y-4 text-sm">
                            <div>
                                <h5>Schoenberger Germany Enterprises</h5>
                                <p>03.2022 - </p>
                                <p>
                                    Frontend Developer • React web apps • UI development • Performance optimization •
                                    Global
                                    collaboration on UX
                                </p>
                            </div>
                            <div>
                                <h5>Spółdzielnia Mieszkaniowa Kopernik</h5>
                                <p>2019 - 2019</p>
                                <p>
                                    Service Desk Consultant • IT support and troubleshooting • Assisting users with tech
                                    issues • Keeping systems running smoothly
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h4>Education</h4>
                        <div className="flex flex-col space-y-4 text-sm">
                            <div>
                                <h5>Warsaw University of Technology</h5>
                                <p>2023 - </p>
                                <p>Master of Science • Computer Science</p>
                            </div>
                            <div>
                                <h5>Nicolaus Copernicus University</h5>
                                <p>2019 - 2023</p>
                                <p>Bachelor of Engineering • Computer Science</p>
                            </div>
                        </div>
                    </div>
                </DefaultReveal>
                <DefaultReveal className="flex-1 flex flex-col space-y-2" delay={0.3}>
                    <h4>Contact and Socials</h4>
                    <div className="flex flex-col space-y-4 text-sm">
                        <div>
                            <h5>Email</h5>
                            <div className="flex items-center space-x-2 group ">
                                <a
                                    className="transition-colors duration-300 group-hover:text-[#74b5a5]"
                                    href="mailto:fadinachawati17@gmail.com"
                                >
                                    <p>fadinachawati17@gmail.com</p>
                                </a>
                                <FaArrowRight
                                    className="transform transition-all duration-300 group-hover:-rotate-45 group-hover:text-[#74b5a5]"
                                />
                            </div>
                        </div>
                        <div>
                            <h5>Social</h5>
                            <div className="flex space-x-2">
                                <Link
                                    className="transition-colors duration-300 hover:text-[#74b5a5]"
                                    href="https://www.linkedin.com/in/fadi-nachawati-64246b256/"
                                >
                                    <FaLinkedinIn className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </Link>
                                <Link
                                    className="transition-colors duration-300 hover:text-[#74b5a5]"
                                    href="https://github.com/Fadi-N"
                                >
                                    <FaGithub className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </DefaultReveal>
            </div>
        </Section>
    );
};

export default AboutPage;