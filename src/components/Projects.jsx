import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Zap, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Gear box",
        description: "Full-stack rental platform for camera equipment with secure payment integration and real-time availability tracking.",
        tech: ["React", "Node", "MongoDB", "Razorpay"],
        links: { demo: "https://gearbox-frontend.onrender.com/", github: "#" },
        accent: "indigo"
    },
    {
        title: "Taskin AI",
        description: " Task management with predictive scheduling and neural-network prioritization flow.",
        tech: ["Next.js", "GPT-4", "Redis"],
        links: { demo: "#", github: "#" },
        accent: "purple"
    },
    {
        title: "CV Craft",
        description: "Intelligent resume builder with real-time preview and export to PDF/Json formats for modern professionals.",
        tech: ["React", "Firebase", "Canvas"],
        links: { demo: "#", github: "#" },
        accent: "emerald"
    },
    {
        title: "Cookaro",
        description: "Social recipe sharing platform with intelligent search and social gourmet feeds for food enthusiasts.",
        tech: ["Vue.js", "Appwrite", "Vuex"],
        links: { demo: "#", github: "#" },
        accent: "orange"
    },
    {
        title: "Synapse Eduhub",
        description: "Neural data engine for multi-cloud monitoring and real-time anomaly detection at scale.",
        tech: ["Three.js", "WebGL", "Rust"],
        links: { demo: "#", github: "#" },
        accent: "cyan"
    },

];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: (i) => ({
        opacity: 0,
        y: 100,
        x: i % 2 === 0 ? -50 : 50,
        rotate: i % 2 === 0 ? -10 : 10,
        scale: 0.8,
        z: -100
    }),
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        z: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

const MagneticCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const lightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const lightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
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

    const pulseClasses = {
        indigo: "pulse-indigo border-indigo-500/20 group-hover:bg-indigo-500/[0.05]",
        purple: "pulse-purple border-purple-500/20 group-hover:bg-purple-500/[0.05]",
        emerald: "pulse-emerald border-emerald-500/20 group-hover:bg-emerald-500/[0.05]",
        orange: "pulse-orange border-orange-500/20 group-hover:bg-orange-500/[0.05]",
        cyan: "pulse-cyan border-cyan-500/20 group-hover:bg-cyan-500/[0.05]"
    };

    const accentText = {
        indigo: "text-indigo-400",
        purple: "text-purple-400",
        emerald: "text-emerald-400",
        orange: "text-orange-400",
        cyan: "text-cyan-400"
    };

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            ref={cardRef}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative group h-[320px] w-full glass-premium rounded-[2.5rem] overflow-hidden border transition-all duration-700 ${pulseClasses[project.accent]} p-8 flex flex-col justify-between perspective-1000`}
        >
            <motion.div
                style={{
                    background: `radial-gradient(circle at ${lightX} ${lightY}, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                }}
                className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${accentText[project.accent]}`}>Entry 0{index + 1}</span>
                            <div className={`h-px w-8 bg-current ${accentText[project.accent]} opacity-20`}></div>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:translate-x-1 transition-transform duration-500 tracking-tight">{project.title}</h3>
                    </div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 90 }} className="p-2 bg-white/5 rounded-xl border border-white/10">
                        <Zap size={18} className={accentText[project.accent]} />
                    </motion.div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity font-medium line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-[9px] px-3 py-1 bg-black/40 rounded-full text-white/50 border border-white/5 uppercase font-bold tracking-widest group-hover:border-white/20 group-hover:text-white transition-all">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex justify-between items-center" style={{ transform: "translateZ(20px)" }}>
                <motion.a
                    whileHover={{ x: 5 }}
                    href={project.links.demo}
                    className="flex items-center gap-2 text-xs font-black text-white hover:text-white transition-colors uppercase tracking-[0.4em]"
                >
                    Preview <ArrowUpRight size={14} className={accentText[project.accent]} />
                </motion.a>
                <div className="flex gap-4">
                    <a href={project.links.github} className="text-[10px] font-bold text-white/20 hover:text-white/60 transition-all uppercase tracking-widest">
                        Source
                    </a>
                </div>
            </div>

            <div className="absolute -bottom-6 -right-4 text-9xl font-black text-white/[0.01] pointer-events-none select-none italic group-hover:text-white/[0.02] transition-all duration-1000" style={{ transform: "translateZ(-20px)" }}>
                0{index + 1}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="py-32 px-6 md:px-20 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-5 mb-6"
                        >
                            <div className="h-px w-12 bg-neon-primary"></div>
                            <span className="text-neon-primary font-mono text-xs tracking-[0.5em] uppercase font-black italic">The_Collection</span>
                        </motion.div>
                        <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter italic leading-[0.8] uppercase select-none">
                            Project <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-accent">Archive</span>
                        </h2>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <MagneticCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
