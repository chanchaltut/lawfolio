import React from "react";
import logo from "../assets/images/logo-img.svg";

const Navbar = () => (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-sm">
        <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1a0a2d]">Code<span className="text-[#00e187]">Your</span>Idea</span>
        </div>
        <ul className="flex gap-8 text-lg font-medium text-[#1a0a2d]">
            <li><a href="#" className="hover:text-[#00e187]">Home</a></li>
            <li><a href="#" className="hover:text-[#00e187]">About</a></li>
            <li><a href="#" className="hover:text-[#00e187]">Services</a></li>
            <li><a href="#" className="hover:text-[#00e187]">Portfolio</a></li>
            <li><a href="#" className="hover:text-[#00e187]">Contact</a></li>
        </ul>
    </nav>
);

export default Navbar; 