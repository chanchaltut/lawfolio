import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { handleContactSubmission, showWarningModal } from "../utils/modalUtils";

const ContactFooterSection = ({ id }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const leftVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        if (formData.phone && !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
            newErrors.phone = "Phone number is invalid";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            showWarningModal("Please Complete All Required Fields!", "Fill in your name, email, and message to send us your details.");
            return;
        }

        // Show loading state
        setIsSubmitted(true);

        // Use our modal submission handler
        const success = await handleContactSubmission(formData);

        if (success) {
            // Reset form on success
            setFormData({ name: "", email: "", phone: "", project: "", message: "" });
            setErrors({});
            // Keep success state for a bit longer
            setTimeout(() => {
                setIsSubmitted(false);
            }, 2000);
        } else {
            // Reset submission state on error
            setIsSubmitted(false);
        }
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id={id}
            className="w-full bg-gray-50 pt-16 md:pt-24 md:pt-32 pb-4"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h4 className="text-[#00e187] text-lg font-semibold tracking-widest mb-4 uppercase">Get In Touch</h4>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a0a2d] leading-tight mb-6">
                        Let's Build Something Amazing Together
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Ready to bring your idea to life? We'd love to hear about your project and show you how we can help.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {/* Left - Contact Info */}
                    <motion.div className="space-y-8" variants={leftVariants}>
                        <div>
                            <h3 className="text-2xl font-bold text-[#1a0a2d] mb-6 text-left">Let's Start the Conversation</h3>
                            <p className="text-gray-600 text-lg mb-8 text-left">
                                Whether you need a new website, mobile app, or want to discuss your next big idea,
                                we're here to help. Get in touch and let's make it happen.
                            </p>
                        </div>

                        {/* Contact Items */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#00e187] rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-white text-lg" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-[#1a0a2d] text-lg mb-1">Our Location</h4>
                                    <p className="text-gray-600">Balangir, Odisha, India</p>
                                    <p className="text-gray-500 text-sm">Serving clients worldwide</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#00e187] rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-white text-lg" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-[#1a0a2d] text-lg mb-1">Email Us</h4>
                                    <a href="mailto:contact@codeyouridea.com" className="text-[#00e187] hover:underline text-lg">
                                        contact@codeyouridea.com
                                    </a>
                                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#00e187] rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaWhatsapp className="text-white text-lg" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-[#1a0a2d] text-lg mb-1">WhatsApp</h4>
                                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-[#00e187] hover:underline text-lg">
                                        +91 98765 43210
                                    </a>
                                    <p className="text-gray-500 text-sm">Quick chat about your project</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#00e187] rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaClock className="text-white text-lg" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-[#1a0a2d] text-lg mb-1">Working Hours</h4>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM IST</p>
                                    <p className="text-gray-500 text-sm">Weekend support for urgent projects</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold text-[#1a0a2d] text-lg mb-4 text-left">Follow Our Work</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-gray-200 hover:bg-[#0077B5] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <FaLinkedin className="text-xl" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-200 hover:bg-[#1877F2] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <FaFacebook className="text-xl" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-200 hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#C13584] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <FaInstagram className="text-xl" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-200 hover:bg-[#FF0000] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <FaYoutube className="text-xl" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-200 hover:bg-black text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <FaTwitter className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div variants={rightVariants}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#1a0a2d] mb-6">Send Us a Message</h3>

                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-[#00e187] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-[#1a0a2d] mb-2">Message Sent!</h4>
                                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name *"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 bg-white ${errors.name ? "border-red-400" : "border-gray-200"} focus:border-[#00e187] focus:outline-none text-gray-700 placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-md`}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email *"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 bg-white ${errors.email ? "border-red-400" : "border-gray-200"} focus:border-[#00e187] focus:outline-none text-gray-700 placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-md`}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 bg-white ${errors.phone ? "border-red-400" : "border-gray-200"} focus:border-[#00e187] focus:outline-none text-gray-700 placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-md`}
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                        </div>
                                        <div className="relative">
                                            <select
                                                name="project"
                                                value={formData.project}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 pr-10 rounded-xl border-2 bg-white border-gray-200 text-gray-700 focus:border-[#00e187] focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer appearance-none"
                                            >
                                                <option value="" disabled hidden className="text-gray-500">Select Project Type</option>
                                                <option value="website" className="text-gray-700 py-2">Website Development</option>
                                                <option value="app" className="text-gray-700 py-2">Mobile App Development</option>
                                                <option value="both" className="text-gray-700 py-2">Website + App</option>
                                                <option value="consultation" className="text-gray-700 py-2">Just a Consultation</option>
                                                <option value="undecided" className="text-gray-700 py-2">Not specific or decided yet</option>
                                            </select>
                                            {/* Custom dropdown arrow */}
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your project *"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border-2 bg-white ${errors.message ? "border-red-400" : "border-gray-200"} focus:border-[#00e187] focus:outline-none text-gray-700 placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-md resize-none`}
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#00e187] hover:bg-[#00c76a] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Slim & Attractive Footer */}
            <div className="max-w-7xl mx-auto px-4 md:px-12 mt-12 pt-6 border-t border-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-3">
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-bold text-[#1a0a2d] mb-1">
                            Code<span className="text-[#00e187]">Your</span>Idea
                        </h4>
                        <p className="text-gray-600 font-medium">Turning Ideas into Digital Reality ✨</p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-gray-600 font-medium">© 2024 Code Your Idea. All rights reserved.</p>
                        <p className="text-[#00e187] font-semibold text-sm flex items-center justify-center md:justify-end gap-1">
                            Made with <span className="text-red-500 text-base">❤️</span> in India
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactFooterSection; 