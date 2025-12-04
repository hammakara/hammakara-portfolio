import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const navItems = [
    { label: 'Home', url: '#home' },
    { label: 'About', url: '#about' },
    { label: 'Skills', url: '#skills' },
    { label: 'Projects', url: '#projects' },
    { label: 'Experiences', url: '#experiences' },
    { label: 'Contact', url: '#contact' },
];
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <div>
                    <a href="" className="text-3xl font-bold text-white">
                        Makara <span className="text-purple">Ham</span>
                        <div className="w-4 h-4 bg-purple rounded-full"></div>
                    </a>
                </div>
                {/* menu items */}
                <div className="hidden md:flex space-x-10">
                    {navItems.map((nav) => (
                        <a
                            key={nav}
                            href={nav.url}
                            className="group relative text-white/80 transition duration-300 hover:text-purple"
                        >
                            <span>{nav.label}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
                {/* mobile button  */}
                <div className="md:hidden">
                    {showMenu ? (
                        <FaXmark
                            className="text-2xl cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    ) : (
                        <FaBars
                            className="text-2xl cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    )}
                </div>
            </div>
            {/* mobile menu */}
            {showMenu && (
                <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
                    {navItems.map((nav) => (
                        <a
                            onClick={() => setShowMenu(!showMenu)}
                            key={nav}
                            href={nav.url}
                            className="group relative text-white/80 transition duration-300 hover:text-purple"
                        >
                            <span>{nav.label}</span>
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
