import React from 'react';

const AboutPage = () => {
    return (
        <main className="about">
            <div className="about-intro">
                <div className="flex-1 bg-gray-300 h-[600px] flex justify-center items-center rounded-xl">
                    <h3>Picture</h3>
                </div>
                <div className="flex-1 flex flex-col py-6 space-y-10">
                    <div className="flex-1">
                        <h1>Frontend Developer, </h1>
                        <h1>Graduated in Computer Science, </h1>
                        <h1>Building modern web apps.</h1>
                    </div>
                    <div className="flex-1 flex flex-col space-y-8">
                        <p>
                            I'm Fadi, a <span className="font-semibold">Frontend Developer</span> who loves building
                            smooth, fast, and good-looking web apps.
                            I am pursuing my Master's degree at the Warsaw University of Technology.
                        </p>
                        <p>
                            I mainly work with React and Next.js, creating scalable UX/UI and making sure everything
                            runs
                            fast and looks great.
                            I enjoy working with different teams, improving web performance, and bringing ideas to life
                            through clean and efficient code.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-details">
                <div className="flex-1 flex flex-col space-y-2">
                    <h6>Skills and Interest</h6>
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
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                    <h6>Experience</h6>
                    <div className="flex flex-col space-y-4 text-sm">
                        <div>
                            <p className="font-semibold">Schoenberger Germany Enterprises</p>
                            <p>03.2022 - </p>
                            <p>
                                Frontend Developer • React web apps • UI development • Performance optimization • Global
                                collaboration on UX
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">Spółdzielnia Mieszkaniowa Kopernik</p>
                            <p>2019 - 2019</p>
                            <p>
                                Service Desk Consultant • IT support and troubleshooting • Assisting users with tech
                                issues • Keeping systems running smoothly
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                    <h6>Education</h6>
                    <div className="flex flex-col space-y-4 text-sm">
                        <div>
                            <p className="font-semibold">Warsaw University of Technology</p>
                            <p>2023 - </p>
                            <p>Computer Science</p>
                        </div>
                        <div>
                            <p className="font-semibold">Nicolaus Copernicus University</p>
                            <p>2019 - 2023</p>
                            <p>Computer Science</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                    <h6>Contact and Socials</h6>
                    <div className="flex flex-col space-y-4 text-sm">
                        <div>
                            <p className="font-semibold">Email</p>
                            <p>fadinachawati17@gmail.com</p>
                        </div>
                        <div>
                            <p className="font-semibold">Social</p>
                            <p>linkedin</p>
                            <p>github</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;