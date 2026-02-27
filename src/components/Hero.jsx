import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";
import profilepic from "../assets/profilepic.jpg";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neon-bg">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Developer Background Image - Improved Visibility */}
                <div className="absolute right-0 bottom-0 w-full md:w-3/4 h-full opacity-35 pointer-events-none transition-all duration-1000">
                    <img
                        src={profilepic}
                        alt="Background Decor"
                        className="w-full h-full object-cover grayscale mix-blend-luminosity brightness-90 contrast-125 scale-110"
                        style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 80%)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neon-bg via-transparent to-transparent"></div>
                </div>

                <div className="absolute top-20 left-20 w-72 h-72 bg-neon-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-accent/20 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-neon-secondary font-mono text-lg tracking-wider mb-4 h-8">
                        <Typewriter
                            options={{
                                strings: ["HELLO WORLD, I AM", "WELCOME TO MY PORTFOLIO"],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                                wrapperClassName: "text-neon-secondary font-mono text-lg tracking-wider",
                                cursorClassName: "text-neon-secondary animate-pulse"
                            }}
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Gijo George P
                        <span className="text-neon-accent animate-pulse">_</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
                        Full Stack Developer (MERN) & UI Designer
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-10 leading-relaxed">
                        Building scalable web applications with futuristic user interfaces.
                        Passionate about bringing code to life with smooth animations and robust architecture.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-neon-primary/10 border border-neon-primary text-neon-primary rounded hover:bg-neon-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center space-x-6 text-gray-400">
                        <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
                        <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
                        <a href="#" className="hover:text-neon-accent transition-colors"><Mail size={24} /></a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
