import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-transparent">
            <div className="navbar-logo">
                FADI NACHAWATI
            </div>
            <div className="navbar-links">
                <div className="flex-1 flex justify-center space-x-10">
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
                </div>
            </div>
            <div className="navbar-socials">
                <div className="flex-1 flex justify-center space-x-10">
                    <a href="">LINKEDIN</a>
                    <a href="">GITHUB</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;