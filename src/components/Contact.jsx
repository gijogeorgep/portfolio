import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquare } from "lucide-react";

const InputField = ({ label, icon: Icon, name, value, onChange, type = "text", textarea = false }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative mb-6">
            <label className={`block text-xs font-mono uppercase tracking-widest mb-2 transition-colors duration-300 ${isFocused ? 'text-neon-primary' : 'text-gray-500'}`}>
                {label}
            </label>
            <div className={`flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border transition-all duration-300 ${isFocused ? 'border-neon-primary bg-neon-primary/5' : 'border-white/10 hover:border-white/20'}`}>
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
                        className="w-full bg-transparent border-none outline-none text-white font-sans resize-none"
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
                        className="w-full bg-transparent border-none outline-none text-white font-sans"
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
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-neon-bg relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
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
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                Let's <span className="text-neon-primary">Connect</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-neon-primary/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-neon-primary/10 flex items-center justify-center text-neon-primary">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-mono tracking-widest">Email</p>
                                        <p className="text-white font-medium">gijo.george@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-neon-secondary/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-neon-secondary/10 flex items-center justify-center text-neon-secondary">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-mono tracking-widest">Location</p>
                                        <p className="text-white font-medium">Kerala, India</p>
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
                            className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl"
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
