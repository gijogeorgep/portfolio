import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Synapse Edu Hub",
        description:
            "A modern learning ecosystem offering personalized experiences, expert mentorship, and comprehensive resources for academic success.",
        tech: ["React", "Node.js", "MongoDB", "Firebase"],
        links: { demo: "https://www.synapseeduhub.com", github: "#" },
        accent: "#6366f1",
        category: "EdTech Platform",
        image: "/projects/synapse.png"
    },
    {
        title: "Taskin AI",
        description:
            "A productivity engine with real-time collaboration, intuitive task boards, and advanced team management features.",
        tech: ["MongoDB", "Express", "React", "Node.js", "Redis"],
        links: { demo: "https://taskin-rho.vercel.app/", github: "#" },
        accent: "#a855f7",
        category: "Productivity App",
        image: "/projects/taskin.png"
    },
    {
        title: "Gear Box",
        description:
            "Premium photography equipment rental platform with secure payments and a seamless booking workflow.",
        tech: ["MongoDB", "Express", "React", "Node.js", "Razorpay"],
        links: { demo: "https://gearbox-frontend.onrender.com/", github: "#" },
        accent: "#06b6d4",
        category: "E-Commerce",
        image: "/projects/gearbox.png"
    },
    {
        title: "CV Craft",
        description:
            "A MERN stack resume builder with customizable templates, multi-version saving, and instant high-quality document export via canvas.",
        tech: ["MongoDB", "Express", "React", "Node.js", "Canvas API"],
        links: { demo: "#", github: "#" },
        accent: "#10b981",       // emerald
        category: "Dev Tool",
        image: "/projects/cvcraft.png"
    },
    {
        title: "Cookaro",
        description:
            "A Kerala-cuisine-focused web app that generates ingredient lists by recipe and headcount, displaying items with images for easy meal planning.",
        tech: ["Vue.js", "Appwrite", "Vuex"],
        links: {
            demo: "https://cookaro.netlify.app/", github: "#"
        },
        accent: "#f97316",       // orange
        category: "Lifestyle App",
        image: "/projects/cookaro.png"
    },
    {
        title: "Mahila Vikas Samaj",
        description: "Empowering women through economic independence, skill development, and community support.",
        tech: ["React", "tailwind-css"],
        links: { demo: "https://www.mahilavikassamaj.org/", github: "#" },
        accent: "#f97316",
        category: "NGO Website",
        image: "/projects/mahilavikas.png"
    },
    {
        title: "My Portfolio",
        description: "My portfolio website",
        tech: ["React", "tailwind-css"],
        links: { demo: "#", github: "#" },
        accent: "#f97316",
        category: "Portfolio Website",
        image: "/projects/myportfolio.png"
    },
    {
        title: "My steel",
        description: "A steel company website",
        tech: ["Next.js", "tailwind-css"],
        links: { demo: "https://mysteelindia.in/", github: "#" },
        accent: "#f97316",
        category: "Company Website",
        image: "/projects/mysteel.png"
    }
];

/* ─── animation variants ─────────────────────────────────── */
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 90, damping: 18 },
    },
};

/* ─── individual card ────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
    const isLive = project.links.demo !== "#";
    const hasSource = project.links.github !== "#";

    return (
        <motion.article
            variants={cardVariants}
            whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="group relative flex flex-col bg-white dark:bg-[#0f0f0f] border border-black/[0.06] dark:border-white/[0.06] rounded-[24px] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_var(--accent-glow)]"
            style={{
                "--accent": project.accent,
                "--accent-glow": `${project.accent}15`
            }}
        >
            {/* ── image container ── */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white/[0.01]">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {isLive && (
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 bg-white text-black rounded-full shadow-2xl hover:bg-[var(--accent)] hover:text-white transition-colors duration-300"
                                title="Live Preview"
                            >
                                <ExternalLink size={20} />
                            </motion.a>
                        )}
                        {hasSource && (
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 bg-white text-black rounded-full shadow-2xl hover:bg-black hover:text-white transition-colors duration-300"
                                title="Source Code"
                            >
                                <Github size={20} />
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* category tag floating on image */}
                <div className="absolute top-5 left-5">
                    <span
                        className="px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-md border border-white/10 text-white shadow-xl"
                        style={{ background: `${project.accent}dd` }}
                    >
                        {project.category}
                    </span>
                </div>
            </div>

            {/* ── body ── */}
            <div className="flex flex-col flex-1 p-7 gap-5">
                <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                        {project.title}
                    </h3>
                    <div className="flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] font-black text-gray-400 dark:text-white tabular-nums">
                            0{index + 1}
                        </span>
                        <div className="h-px w-4 bg-[var(--accent)] mt-1" />
                    </div>
                </div>

                <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3 font-medium">
                    {project.description}
                </p>

                {/* tech stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-[10px] font-bold px-3 py-1 rounded-lg border border-black/[0.04] dark:border-white/[0.04] text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/[0.01] hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* link footer */}
            <div className="px-7 py-5 border-t border-black/[0.03] dark:border-white/[0.03] flex items-center justify-between bg-gray-50/30 dark:bg-white/[0.01]">
                <a
                    href={isLive ? project.links.demo : "#"}
                    className={`group/link flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] transition-all ${isLive ? 'text-gray-900 dark:text-white hover:text-[var(--accent)]' : 'text-gray-300 dark:text-white/10 cursor-not-allowed'
                        }`}
                >
                    Case Study
                    <div className="p-1 rounded-full bg-black/5 dark:bg-white/5 group-hover/link:bg-[var(--accent)] group-hover/link:text-white transition-all duration-300">
                        <ArrowUpRight size={14} />
                    </div>
                </a>
            </div>
        </motion.article>
    );
};

/* ─── section ─────────────────────────────────────────────── */
const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 md:px-20 relative overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-500">

            {/* dynamic grid bg */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '32px 32px' }}
            />

            <div className="container mx-auto relative z-10">

                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-[2px] w-8 bg-indigo-500" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500">Portfolio</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.85] uppercase mb-8"
                    >
                        Selected <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500">
                            Artifacts
                        </span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
