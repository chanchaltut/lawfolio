import React from "react";
import { showQuoteModal, showLetsTalkModal } from "../utils/modalUtils";

const LetsBuildSuccessSection = () => (
    <section className="w-full flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-[linear-gradient(120deg,_#3F51B5_0%,_#000_100%)] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-8">
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start justify-center text-left">
                <h5 className="text-white text-lg font-semibold tracking-widest mb-2 uppercase">Ready to Launch Your Idea?</h5>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a2d] mb-6 leading-tight">Let's Build Your Digital Future</h2>
                <p className="text-lg text-white/90 mb-4 max-w-xl">
                    Whether you need a stunning website or a powerful mobile app, we're here to turn your ideas into reality with clean code and smart design.
                </p>
            </div>
            {/* Right: Buttons */}
            <div className="flex-1 flex items-center justify-center md:justify-end w-full">
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={showQuoteModal}
                        className="bg-white hover:bg-[#e0f7ef] text-[#1a0a2d] font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:scale-105"
                    >
                        Get a Quote
                    </button>
                    <button
                        onClick={showLetsTalkModal}
                        className="border-2 border-white text-white hover:bg-white hover:text-[#1a0a2d] font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
                    >
                        Let's Talk
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default LetsBuildSuccessSection; 