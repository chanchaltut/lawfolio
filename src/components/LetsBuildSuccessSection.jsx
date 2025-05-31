import React from "react";

const LetsBuildSuccessSection = () => (
    <section className="w-full flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-[#00e187] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-8">
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start justify-center text-left">
                <h5 className="text-white text-lg font-semibold tracking-widest mb-2 uppercase">Ready to Elevate Your Business?</h5>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a2d] mb-6 leading-tight">Let's Build Success Together</h2>
                <p className="text-lg text-white/90 mb-4 max-w-xl">
                    We're here to turn your product vision into reality – whether it's a Minimum Viable Product, top-notch UX/UI services, or strategic scaling assistance.
                </p>
            </div>
            {/* Right: Button */}
            <div className="flex-1 flex items-center justify-center md:justify-end w-full">
                <a href="#contact" className="bg-white hover:bg-[#e0f7ef] text-[#1a0a2d] font-semibold px-10 py-4 rounded-full text-lg shadow-lg transition-all">
                    Contact Us
                </a>
            </div>
        </div>
    </section>
);

export default LetsBuildSuccessSection; 