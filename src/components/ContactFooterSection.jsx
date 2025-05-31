import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
        link: "tel:+17985983521"
    },
    {
        icon: emailIcon,
        label: "Email",
        value: "contact@codeyouridea.com",
        link: "mailto:contact@codeyouridea.com"
    },
];

const initialState = { name: "", email: "", phone: "", message: "" };

const ContactFooterSection = ({ id }) => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const leftVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };
    const rightVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Name is required.";
        if (!form.email.trim()) errs.email = "Email is required.";
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email.";
        if (!form.phone.trim()) errs.phone = "Phone is required.";
        else if (!/^\+?\d[\d\s\-()]{7,}$/.test(form.phone)) errs.phone = "Invalid phone.";
        if (!form.message.trim()) errs.message = "Message is required.";
        return errs;
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            setSuccess("");
            return;
        }
        setSuccess("Thank you for contacting us! We'll get back to you soon.");
        setForm(initialState);
        setErrors({});
    };

    return (
        <>
            <motion.section
                id={id}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full bg-[#f7faff] py-8 px-4"
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-0 justify-between items-start">
                    {/* Left: Contact Info */}
                    <motion.div className="flex-1 flex flex-col items-start md:pr-16" variants={leftVariants}>
                        <h5 className="text-[#00e187] text-lg font-semibold tracking-[0.3em] mb-2 uppercase">Contact Us</h5>
                        <h2 className="text-5xl font-extrabold text-[#2d104f] mb-6 text-left leading-tight">Tell us about your project</h2>
                        <p className="text-lg text-[#2d104f] mb-10">Want to accelerate software development at your company?</p>
                        <div className="flex flex-col gap-8 w-full">
                            {contactDetails.map((item, idx) => (
                                <div key={item.label} className="flex items-center gap-6 w-full">
                                    <span className="bg-[#baf8d6] rounded-full flex items-center justify-center aspect-square min-w-[48px] min-h-[48px] w-12 h-12 md:w-16 md:h-16">
                                        <img src={item.icon} alt={item.label} className="w-6 h-6 md:w-7 md:h-7 object-contain" />
                                    </span>
                                    <div className="flex flex-col items-start">
                                        <h4 className="text-lg font-bold text-[#2d104f] mb-1">{item.label}</h4>
                                        {item.link ? (
                                            <a href={item.link} className="text-[#2d104f] text-base break-words underline hover:text-[#00e187]" target="_blank" rel="noopener noreferrer">{item.value}</a>
                                        ) : (
                                            <p className="text-[#2d104f] text-base break-words text-left">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Right: Contact Form */}
                    <motion.form
                        className="flex-1 flex flex-col gap-6 max-w-xl w-full mt-12 md:mt-0"
                        onSubmit={handleSubmit}
                        noValidate
                        variants={rightVariants}
                    >
                        <h3 className="text-3xl font-extrabold text-[#2d104f] mb-2 text-left">Write A Message</h3>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={`bg-white border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-[#00e187] shadow-md ${errors.name ? 'border-red-400' : ''}`} />
                        {errors.name && <span className="text-red-500 text-sm -mt-4">{errors.name}</span>}
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className={`bg-white border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-[#00e187] shadow-md ${errors.email ? 'border-red-400' : ''}`} />
                        {errors.email && <span className="text-red-500 text-sm -mt-4">{errors.email}</span>}
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone" className={`bg-white border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-[#00e187] shadow-md ${errors.phone ? 'border-red-400' : ''}`} />
                        {errors.phone && <span className="text-red-500 text-sm -mt-4">{errors.phone}</span>}
                        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your comment here" rows={4} className={`bg-white border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-[#00e187] shadow-md resize-none ${errors.message ? 'border-red-400' : ''}`} />
                        {errors.message && <span className="text-red-500 text-sm -mt-4">{errors.message}</span>}
                        <button type="submit" className="bg-[#00e187] hover:bg-[#00c76a] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg transition-all mt-2">Submit Now</button>
                        {success && <span className="text-green-600 text-base mt-2">{success}</span>}
                    </motion.form>
                </div>
            </motion.section>
            {/* Footer */}
            <footer className="w-full bg-[#2d104f] py-6 text-center">
                <p className="text-white text-base">Copyright © 2025 | CodeYourIdea.Com | All Rights Reserveds</p>
            </footer>
        </>
    );
};

export default ContactFooterSection; 