"use client"

import Link from "next/link";
import React, {useState} from 'react';
import {FaBars, FaXmark} from "react-icons/fa6";

import { ROUTES, EXTERNAL_LINKS, CONTACT_INFO } from "@/constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="hidden h-20 items-center justify-between bg-transparent px-4 py-4 text-base lg:flex lg:px-10 lg:py-6 lg:text-lg">
                <div>
                    {CONTACT_INFO.NAME}
                </div>
                <div className="flex-1">
                    <div className="flex flex-1 justify-center space-x-3 lg:space-x-6">
                        <Link href={ROUTES.HOME} className="transition-colors duration-300 hover:text-[#74b5a5]">HOME</Link>
                        <Link href={ROUTES.ABOUT} className="transition-colors duration-300 hover:text-[#74b5a5]">ABOUT</Link>
                        <a href={ROUTES.CONTACT} className="transition-colors duration-300 hover:text-[#74b5a5]">CONTACT</a>
                    </div>
                </div>
                <div>
                    <div className="flex flex-1 justify-center space-x-3 lg:space-x-6">
                        <Link href={EXTERNAL_LINKS.RESUME_PDF} download className="transition-colors duration-300 hover:text-[#74b5a5]">RESUME</Link>
                        <Link href={EXTERNAL_LINKS.LINKEDIN} className="transition-colors duration-300 hover:text-[#74b5a5]">LINKEDIN</Link>
                        <Link href={EXTERNAL_LINKS.GITHUB} className="transition-colors duration-300 hover:text-[#74b5a5]">GITHUB</Link>
                    </div>
                </div>
            </nav>

            <nav className="flex items-center justify-between bg-transparent px-4 py-4 text-base lg:hidden lg:px-10 lg:py-6 lg:text-lg">
                <div>
                    {CONTACT_INFO.NAME}
                </div>
                <button onClick={() => { setIsOpen(!isOpen); }} className="text-2xl focus:outline-none">
                    {isOpen ? <FaXmark className="text-[#bd80b8]"/> : <FaBars />}
                </button>
            </nav>

            <div
                className={`
                  fixed left-0 top-0 z-10 flex h-full w-full transform flex-col items-center justify-center space-y-6 bg-black bg-opacity-90
                  text-2xl text-[#bd80b8] transition-transform duration-300
                  lg:hidden
                  ${isOpen ? `translate-x-0` : `-translate-x-full`}`}>
                <Link
                    href={ROUTES.HOME}
                    onClick={() => { setIsOpen(false); }}
                >
                    HOME
                </Link>
                <Link
                    href={ROUTES.ABOUT}
                    onClick={() => { setIsOpen(false); }}
                >
                    ABOUT
                </Link>
                <a
                    href={ROUTES.CONTACT}
                    onClick={() => { setIsOpen(false); }}
                >
                    CONTACT
                </a>
                <Link
                    href={EXTERNAL_LINKS.RESUME_PDF}
                    onClick={() => { setIsOpen(false); }}
                    download
                >
                    RESUME
                </Link>
                <Link
                    href={EXTERNAL_LINKS.LINKEDIN}
                    onClick={() => { setIsOpen(false); }}
                >
                    LINKEDIN
                </Link>
                <Link
                    href={EXTERNAL_LINKS.GITHUB}
                    onClick={() => { setIsOpen(false); }}
                >
                    GITHUB
                </Link>
            </div>
        </>
    );
};

export default Navbar;