import React from "react";
import avatar from "../assets/images/testimonial/testimonial-one.png";

const TestimonialSection = () => (
    <section className="w-full flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-[#00e187] flex flex-col items-center justify-center px-8 md:px-20 py-16">
            <h5 className="text-[#1a0a2d] text-lg font-semibold tracking-[0.3em] mb-2 uppercase text-center">Testimonials</h5>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a2d] mb-10 text-center">What People Say</h2>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-start w-full max-w-3xl mx-auto mb-8">
                    <span className="text-[6rem] leading-none text-[#1a0a2d] font-bold mr-4 -mt-8">"</span>
                    <p className="text-2xl md:text-3xl italic text-[#1a0a2d] font-normal text-left">
                        I recently worked with your team on a website project, and it was exceptional. Your Team's excellent communication and quick issue resolution make them highly recommended for web design and development services. I'm very satisfied and would work with them again.
                    </p>
                </div>
                <div className="flex flex-col items-center mt-4">
                    <img src={avatar} alt="Robert Schutz" className="w-16 h-16 rounded-full object-cover mb-2" />
                    <div className="flex items-center gap-2">
                        <span className="text-[#1a0a2d] font-bold text-lg">Robert Schutz</span>
                        <span className="text-[#1a0a2d]/70 text-base">Product Manager</span>
                    </div>
                </div>
                <div className="flex items-center gap-12 mt-8">
                    <button className="text-3xl text-[#1a0a2d] hover:text-white transition-all">&#8592;</button>
                    <button className="text-3xl text-[#1a0a2d] hover:text-white transition-all">&#8594;</button>
                </div>
            </div>
        </div>
    </section>
);

export default TestimonialSection; 