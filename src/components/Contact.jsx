import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquare } from "lucide-react";
import avatar2 from "../assets/avatar2.png"
const InputField = ({ label, icon: Icon, name, value, onChange, type = "text", textarea = false }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative mb-6">
            <label className={`block text-xs font-mono uppercase tracking-widest mb-2 transition-colors duration-300 ${isFocused ? 'text-neon-primary' : 'text-gray-500'}`}>
                {label}
            </label>
            <div className={`flex items-center gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/[0.03] border transition-all duration-300 ${isFocused ? 'border-neon-primary bg-neon-primary/5' : 'border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'}`}>
                <div className={`${isFocused ? 'text-neon-primary' : 'text-gray-500'}`}>
                    <Icon size={18} />
                </div>
                {textarea ? (
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent border-none outline-none text-gray-900 dark:text-white font-sans resize-none font-medium dark:font-normal"
                        rows="4"
                        required
                    />
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent border-none outline-none text-gray-900 dark:text-white font-sans font-medium dark:font-normal"
                        required
                    />
                )}
            </div>
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Using Web3Forms - Simple and reliable
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "7f192cfe-ed44-4749-b069-6d680e62db17", // User needs to get this from web3forms.com
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                alert(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Connection error. Please check your internet and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-500">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden opacity-10 dark:opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-accent/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, type: "spring" }}
                                className="relative w-24 h-24 mb-8 group"
                            >
                                <div className="absolute inset-0 bg-neon-primary/20 rounded-3xl blur-2xl group-hover:bg-neon-primary/40 transition-colors duration-500"></div>
                                <img
                                    src={avatar2}
                                    alt="Avatar"
                                    className="relative z-10 w-full h-full object-cover rounded-[2rem] border-2 border-white/10 dark:border-white/20 shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-500"
                                />
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-primary rounded-xl flex items-center justify-center text-white shadow-lg border-2 border-white dark:border-gray-900 z-20">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                                Let's <span className="text-neon-primary">Connect</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed font-medium dark:font-normal">
                                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-6 p-5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-neon-primary/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-neon-primary/10 flex items-center justify-center text-neon-primary">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-mono tracking-widest">Email</p>
                                        <p className="text-gray-900 dark:text-white font-medium">gijogeorgep02@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-neon-secondary/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-neon-secondary/10 flex items-center justify-center text-neon-secondary">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-mono tracking-widest">Location</p>
                                        <p className="text-gray-900 dark:text-white font-medium">Kerala, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Simplified Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl dark:shadow-none"
                        >
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <InputField
                                    label="Name"
                                    icon={User}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <InputField
                                    label="Email"
                                    icon={Mail}
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <InputField
                                    label="Message"
                                    icon={MessageSquare}
                                    name="message"
                                    textarea
                                    value={formData.message}
                                    onChange={handleChange}
                                />

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-neon-primary text-white font-bold rounded-xl hover:bg-neon-primary/90 transition-all shadow-lg shadow-neon-primary/20 flex items-center justify-center gap-2 overflow-hidden relative group"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
                                            {!isSubmitting && !isSubmitted && <Send size={18} />}
                                        </span>
                                        <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
