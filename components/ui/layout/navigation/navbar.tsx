"use client"

import React, {useState} from 'react';
import Link from "next/link";
import {FaBars, FaXmark} from "react-icons/fa6";
import { ROUTES, EXTERNAL_LINKS, CONTACT_INFO } from "@/constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="items-center justify-between bg-transparent px-4 lg:px-10 py-4 lg:py-6 text-base lg:text-xl border-b border-b-black/20 hidden lg:flex h-20">
                <div>
                    {CONTACT_INFO.NAME}
                </div>
                <div className="flex-1">
                    <div className="flex-1 flex justify-center space-x-3 lg:space-x-6">
                        <Link href={ROUTES.HOME} className="transition-colors duration-300 hover:text-[#74b5a5]">HOME</Link>
                        <Link href={ROUTES.ABOUT} className="transition-colors duration-300 hover:text-[#74b5a5]">ABOUT</Link>
                        <Link href={ROUTES.CONTACT} className="transition-colors duration-300 hover:text-[#74b5a5]">CONTACT</Link>
                    </div>
                </div>
                <div>
                    <div className="flex-1 flex justify-center space-x-3 lg:space-x-6">
                        <Link href={EXTERNAL_LINKS.RESUME_PDF} download className="transition-colors duration-300 hover:text-[#74b5a5]">RESUME</Link>
                        <Link href={EXTERNAL_LINKS.LINKEDIN} className="transition-colors duration-300 hover:text-[#74b5a5]">LINKEDIN</Link>
                        <Link href={EXTERNAL_LINKS.GITHUB} className="transition-colors duration-300 hover:text-[#74b5a5]">GITHUB</Link>
                    </div>
                </div>
            </nav>

            <nav className="flex items-center justify-between bg-transparent px-4 lg:px-10 py-4 lg:py-6 text-base lg:text-lg border-b border-b-black/20 lg:hidden">
                <div>
                    {CONTACT_INFO.NAME}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
                    {isOpen ? <FaXmark className="text-[#bd80b8]"/> : <FaBars />}
                </button>
            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform transition-transform duration-300 lg:hidden flex flex-col items-center justify-center space-y-6 text-[#bd80b8] text-2xl z-10 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Link
                    href={ROUTES.HOME}
                    onClick={() => setIsOpen(false)}
                >
                    HOME
                </Link>
                <Link
                    href={ROUTES.ABOUT}
                    onClick={() => setIsOpen(false)}
                >
                    ABOUT
                </Link>
                <Link
                    href={ROUTES.CONTACT}
                    onClick={() => setIsOpen(false)}
                >
                    CONTACT
                </Link>
                <Link
                    href={EXTERNAL_LINKS.RESUME_PDF}
                    onClick={() => setIsOpen(false)}
                    download
                >
                    RESUME
                </Link>
                <Link
                    href={EXTERNAL_LINKS.LINKEDIN}
                    onClick={() => setIsOpen(false)}
                >
                    LINKEDIN
                </Link>
                <Link
                    href={EXTERNAL_LINKS.GITHUB}
                    onClick={() => setIsOpen(false)}
                >
                    GITHUB
                </Link>
            </div>
        </>
    );
};

export default Navbar;