import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 flex justify-center px-6 ${scrolled ? "top-4" : "top-8"
                }`}
        >
            <div
                className={`container flex justify-between items-center px-8 py-3 rounded-2xl transition-all duration-500 border border-white/10 ${scrolled ? "max-w-5xl bg-white/5 backdrop-blur-lg shadow-2xl" : "max-w-7xl bg-white/10 backdrop-blur-md"
                    }`}
                style={{
                    boxShadow: scrolled ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : 'none',
                }}
            >
                {/* Logo */}
                <a href="#" className="text-2xl font-bold text-white tracking-tighter hover:scale-105 transition-transform">
                    Gcode<span className="text-cyan-400">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-200 hover:text-white transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <button className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-semibold text-white transition-all">
                        Resume
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 mt-4 px-6 animate-in fade-in slide-in-from-top-5 duration-300">
                        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl py-6 flex flex-col items-center space-y-6 shadow-2xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;