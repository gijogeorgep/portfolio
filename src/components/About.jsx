import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";


const StatCounter = ({ end, label, suffix = "+" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="text-center p-4">
            <span className="block text-4xl font-bold text-white mb-1">
                {count}{suffix}
            </span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">{label}</span>
        </div>
    );
};

const About = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="about" className="min-h-screen flex items-center bg-neon-bg py-24 relative overflow-hidden">
            {/* Geometric Background Accents */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-10 w-24 h-24 border border-neon-primary rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-neon-accent -rotate-12 animate-float"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-neon-secondary/20 blur-2xl rounded-full"></div>
            </div>

            <div className="flex flex-col items-center">

                {/* Main Tagline Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-none">
                        When <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-white cursor-help relative group">Colours<span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-neon-accent text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl shadow-neon-accent/40">The Designer</span></span> meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-secondary cursor-help relative group">Colors<span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-neon-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl shadow-neon-primary/40">The Developer</span></span>
                    </h2>
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
                </motion.div>

                {/* Dual Cards Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto relative">

                    {/* Designer Card (Colours) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-accent to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative glass p-8 md:p-12 rounded-3xl border border-white/10 h-full flex flex-col justify-between overflow-hidden">
                            {/* Design Elements Decor */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg width="120" height="120" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-neon-accent" />
                                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                                </svg>
                            </div>

                            <div>
                                <span className="text-neon-accent font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Visual Architect</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">The UI Designer</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Obsessed with the <span className="text-white font-semibold">pixel-perfect</span> harmony of aesthetics and utility. I don't just create layouts; I craft digital atmospheres that guide and delight users.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Aesthetics", "User Experience", "Typography", "Motion Design"].map((item) => (
                                        <span key={item} className="px-3 py-1 bg-neon-accent/10 border border-neon-accent/30 rounded-full text-xs text-neon-accent">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Developer Card (Colors) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-primary to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative glass p-8 md:p-12 rounded-3xl border border-white/10 h-full flex flex-col justify-between overflow-hidden">
                            {/* Code Elements Decor */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <pre className="text-[10px] leading-tight text-neon-primary font-mono">
                                    {`{
  "logic": "binary",
  "state": "active",
  "flow": "async"
}`}
                                </pre>
                            </div>

                            <div>
                                <span className="text-neon-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Logic Engineer</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">The Full Stack Dev</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Translating vision into <span className="text-white font-semibold">scalable architecture</span>. I build robust MERN ecosystems that handle the weight of functionality with elegant performance.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Scalability", "Clean Code", "Optimized DB", "Secure API"].map((item) => (
                                        <span key={item} className="px-3 py-1 bg-neon-primary/10 border border-neon-primary/30 rounded-full text-xs text-neon-primary">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Integrated Bio Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 max-w-4xl text-center"
                >
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed italic">
                        "I bridge the gap between imagination and implementation. By mastering both <span className="text-neon-accent">Form</span> and <span className="text-neon-primary">Function</span>, I create digital experiences that are truly <span className="text-white font-bold underline decoration-white/20">extraordinary</span>."
                    </p>

                    <div className="flex justify-center gap-12 mt-16">
                        <StatCounter end={2} label="Years Exp" />
                        <StatCounter end={10} label="Projects" />
                        <div className="text-center p-4">
                            <span className="block text-4xl font-bold text-white mb-1">99%</span>
                            <span className="text-sm text-gray-500 uppercase tracking-widest">Uptime Focus</span>
                        </div>
                    </div>

                    <div className="mt-16">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-neon-primary hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                Start A Collaboration
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
