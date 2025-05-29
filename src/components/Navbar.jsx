import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-img.svg";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300 z-50
                ${scrolled ? "bg-white shadow-sm py-2 md:py-3" : "bg-transparent py-4 md:py-6"}
                px-4 md:px-8`}
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#1a0a2d]">Code<span className="text-[#00e187]">Your</span>Idea</span>
            </div>
            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 text-lg font-medium text-[#1a0a2d]">
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} className="hover:text-[#00e187] transition-colors duration-200">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            {/* Hamburger Icon */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 group relative z-50"
                aria-label="Open menu"
                onClick={() => setSidebarOpen((open) => !open)}
            >
                <span
                    className={`block h-0.5 w-7 bg-[#1a0a2d] rounded transition-all duration-300 ${sidebarOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                    className={`block h-0.5 w-7 bg-[#1a0a2d] rounded transition-all duration-300 my-1 ${sidebarOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                    className={`block h-0.5 w-7 bg-[#1a0a2d] rounded transition-all duration-300 ${sidebarOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
            </button>
            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
            ></div>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col pt-16 px-8 gap-8 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
                aria-label="Sidebar menu"
            >
                <ul className="flex flex-col gap-6 text-xl font-semibold text-[#1a0a2d]">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="hover:text-[#00e187] transition-colors duration-200"
                                onClick={() => setSidebarOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar; 