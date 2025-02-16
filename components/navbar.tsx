import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                FADI NACHAWATI
            </div>
            <div className="navbar-links">
                <div className="flex-1 flex justify-center space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-6">
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
                </div>
            </div>
            <div className="navbar-socials">
                <div className="flex-1 flex justify-center space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-6">
                    <a href="">LINKEDIN</a>
                    <a href="">GITHUB</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;