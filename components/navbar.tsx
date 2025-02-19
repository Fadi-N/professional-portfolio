"use client"

import React, {useState} from 'react';
import Link from "next/link";
import {FaBars, FaXmark} from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar hidden md:flex">
                <div className="navbar-logo">
                    FADI NACHAWATI
                </div>
                <div className="navbar-links">
                    <div className="flex-1 flex justify-center space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-6">
                        <Link href="/">HOME</Link>
                        <Link href="/about">ABOUT</Link>
                        <Link href="/#contact">CONTACT</Link>
                    </div>
                </div>
                <div className="navbar-socials">
                    <div className="flex-1 flex justify-center space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-6">
                        <Link href="https://www.linkedin.com/in/fadi-nachawati-64246b256/">LINKEDIN</Link>
                        <Link href="https://github.com/Fadi-N">GITHUB</Link>
                    </div>
                </div>
            </nav>

            <nav className="mobile-navbar md:hidden">
                <div className="navbar-logo">
                    FADI NACHAWATI
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
                    {isOpen ? <FaXmark className="text-[#bd80b8]"/> : <FaBars />}
                </button>
            </nav>

            <div
                className={`mobile-navbar-link ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                >
                    HOME
                </Link>
                <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                >
                    ABOUT
                </Link>
                <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                >
                    CONTACT
                </Link>
                <Link
                    href="https://www.linkedin.com/in/fadi-nachawati-64246b256/"
                    onClick={() => setIsOpen(false)}
                >
                    LINKEDIN
                </Link>
                <Link
                    href="https://github.com/Fadi-N"
                    onClick={() => setIsOpen(false)}
                >
                    GITHUB
                </Link>
            </div>
        </>
    );
};

export default Navbar;