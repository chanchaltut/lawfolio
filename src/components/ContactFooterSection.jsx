import React from "react";
import locationIcon from "../assets/images/icons/icon-1.png";
import phoneIcon from "../assets/images/icons/icon-2.png";
import emailIcon from "../assets/images/icons/icon-3.png";

const contactDetails = [
    {
        icon: locationIcon,
        label: "Address",
        value: "2125 Briarcliff Ct Vienna VA 22182 United States",
    },
    {
        icon: phoneIcon,
        label: "Phone",
        value: "+1 (798) 598-3521",
    },
    {
        icon: emailIcon,
        label: "Email",
        value: "info@codeyouridea.com",
    },
];

const ContactFooterSection = () => (
    <>
        <section className="w-full bg-[#f7faff] py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-0 justify-between items-start">
                {/* Left: Contact Info */}
                <div className="flex-1 flex flex-col items-start md:pr-16">
                    <h5 className="text-[#00e187] text-lg font-semibold tracking-[0.3em] mb-2 uppercase">Contact Us</h5>
                    <h2 className="text-5xl font-extrabold text-[#2d104f] mb-6 text-left leading-tight">Tell us about your project</h2>
                    <p className="text-lg text-[#2d104f] mb-10">Want to accelerate software development at your company?</p>
                    <div className="flex flex-col gap-8 w-full">
                        {contactDetails.map((item, idx) => (
                            <div key={item.label} className="flex items-center gap-6 w-full">
                                <span className="bg-[#baf8d6] rounded-full w-16 h-16 flex items-center justify-center">
                                    <img src={item.icon} alt={item.label} className="w-7 h-7" />
                                </span>
                                <div className="flex flex-col items-start">
                                    <h4 className="text-lg font-bold text-[#2d104f] mb-1">{item.label}</h4>
                                    <p className="text-[#2d104f] text-base break-words">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right: Contact Form */}
                <form className="flex-1 flex flex-col gap-6 max-w-xl w-full mt-12 md:mt-0">
                    <h3 className="text-3xl font-extrabold text-[#2d104f] mb-2 text-left">Write A Message</h3>
                    <input type="text" placeholder="Your name" className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-[#00e187] shadow-md" />
                    <input type="email" placeholder="Your email" className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-[#00e187] shadow-md" />
                    <input type="text" placeholder="Your phone" className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-[#00e187] shadow-md" />
                    <textarea placeholder="Write your comment here" rows={4} className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-[#00e187] shadow-md resize-none" />
                    <button type="submit" className="bg-[#00e187] hover:bg-[#00c76a] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg transition-all mt-2">Submit Now</button>
                </form>
            </div>
        </section>
        {/* Footer */}
        <footer className="w-full bg-[#2d104f] py-6 text-center">
            <p className="text-white text-base">Copyright © 2025 | CodeYourIdea.Com | All Rights Reserveds</p>
        </footer>
    </>
);

export default ContactFooterSection; 