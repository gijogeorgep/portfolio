import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import profilepic from "../assets/profilepic.png";
import Gcodz from "./Gcodz";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden transition-colors duration-500">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Developer Background Image */}
        <div className="absolute right-0 bottom-0 w-full md:w-4/5 h-[115%] top-16 opacity-20 dark:opacity-25 pointer-events-none transition-all duration-1000">
          <img
            src={profilepic}
            alt="Background Decor"
            className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-luminosity brightness-110 dark:brightness-90 contrast-100 dark:contrast-125 scale-125"
            style={{
              objectPosition: "center 25%",
              maskImage:
                "radial-gradient(circle at 70% 30%, black 20%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent"></div>
        </div>

        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-primary/10 dark:bg-neon-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-accent/10 dark:bg-neon-accent/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-neon-secondary dark:text-cyan-400 font-mono text-lg tracking-wider mb-4 h-8">
            <Typewriter
              options={{
                strings: ["I AM Gijo George P", "WELCOME TO MY PORTFOLIO"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName:
                  "text-neon-secondary dark:text-cyan-400 font-mono text-lg tracking-wider",
                cursorClassName:
                  "text-neon-secondary dark:text-cyan-400 animate-pulse",
              }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-neon-accent animate-pulse">{"<"}</span>
            <Gcodz />
            <span className="text-neon-accent animate-pulse">{"/>"}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 font-light">
            Freelancer Full Stack Developer (MERN) | Kochi & Kozhikode, Kerala
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium dark:font-normal">
            I build modern websites, web apps, and scalable digital products for startups and businesses across Kochi and Kozhikode. Passionate about clean code, thoughtful UX, and smooth, premium user experiences.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-neon-primary/10 border border-neon-primary text-neon-primary rounded hover:bg-neon-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] dark:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white rounded hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6 text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/gijogeorgep"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/gijo-george-p"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gijogeorgep02@gmail.com"
              className="hover:text-neon-accent transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://instagram.com/g_co_dz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/9778230292?text=Hello!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
