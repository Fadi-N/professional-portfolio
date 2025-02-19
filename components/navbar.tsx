import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar hidden lg:flex">
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
    );
};

export default Navbar;