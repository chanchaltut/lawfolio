import React from "react";

const progressData = [
    { label: "Website Development", value: 95 },
    { label: "Mobile App Development", value: 90 },
    { label: "React", value: 92 },
    { label: "React Native", value: 88 },
];

const GrowthSection = () => (
    <section className="w-full bg-[#f4f7fb] flex flex-col md:flex-row items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[475px] py-8 px-4">
        {/* Left Side */}
        <div className="flex-1 max-w-xl md:pl-24 mb-12 md:mb-0 text-left">
            <h5 className="text-[#00e187] text-lg font-semibold tracking-widest mb-2 uppercase text-left">Our Expertise</h5>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a2d] mb-6 leading-tight text-left">We Focus on What<br />We Do Best</h2>
            <p className="text-lg text-gray-500 text-left">Specializing in website and app development means we deliver exceptional quality in everything we build.</p>
        </div>
        {/* Right Side: Progress Bars */}
        <div className="flex-1 w-full max-w-xl md:pr-24">
            {progressData.map((item, idx) => (
                <div key={item.label} className="mb-8 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-medium text-[#1a0a2d] text-left">{item.label}</span>
                        <span className="text-[#00e187] text-lg font-bold text-left">{item.value}%</span>
                    </div>
                    <div className="w-full h-3 bg-[#e0f7ef] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-[#00e187] to-[#00c76a] rounded-full transition-all duration-700"
                            style={{ width: `${item.value}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default GrowthSection; 