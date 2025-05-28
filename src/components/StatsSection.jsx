import React from "react";

const stats = [
    { value: "10+", label: "Active Clients" },
    { value: "96%", label: "Client Retention" },
    { value: "50+", label: "Projects Delivered" },
];

const StatsSection = () => (
    <section className="w-full bg-white flex flex-col items-center justify-center py-0">
        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-[#00e187] flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-16 md:py-20 gap-12 md:gap-0">
            {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center flex-1">
                    <span className="text-5xl md:text-6xl font-extrabold text-[#1a0a2d]">{stat.value}</span>
                    <span className="block text-xl md:text-2xl font-medium text-[#1a0a2d] mt-2">{stat.label}</span>
                </div>
            ))}
        </div>
    </section>
);

export default StatsSection; 