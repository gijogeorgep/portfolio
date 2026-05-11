import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Rocket, Code, GraduationCap } from "lucide-react";

const experienceData = [
    {
        id: 1,
        title: "Full Stack Developer (MERN)",
        company: "Current Role",
        period: "Present",
        description: "Leading the development of scalable web applications using the MERN stack. Focused on optimizing performance, implementing complex state management, and designing intuitive user experiences.",
        icon: <Rocket size={24} className="text-white" />,
        color: "bg-neon-primary",
        skills: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
        isCurrent: true
    },
    {
        id: 2,
        title: "MERN Stack Intern",
        company: "Internship",
        period: "Previous",
        description: "Gained hands-on experience in full-stack development. Built various features for live projects, learned industry best practices, and mastered the core principles of the MERN ecosystem.",
        icon: <Code size={24} className="text-white" />,
        color: "bg-neon-secondary",
        skills: ["JavaScript", "React", "Node.js", "API Integration", "Database Design"],
        isCurrent: false
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden transition-colors duration-500">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 dark:opacity-20">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-neon-primary/10 dark:bg-neon-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neon-secondary/10 dark:bg-neon-secondary/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">
                        Career <span className="text-neon-primary italic">Roadmap</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My journey from learning the ropes as an intern to building complex systems as a full-stack developer.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* The Roadmap Path (Vertical Line) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-primary via-neon-secondary to-transparent md:-translate-x-1/2">
                        <motion.div
                            className="w-full bg-neon-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] dark:bg-white dark:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />
                    </div>

                    <div className="space-y-12 md:space-y-20">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Roadmap Node */}
                                <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full border-4 border-[var(--bg-color)] z-20 md:-translate-x-1/2 flex items-center justify-center overflow-hidden shadow-lg">
                                    <div className={`w-full h-full ${item.color} flex items-center justify-center ${item.isCurrent ? 'animate-pulse' : ''}`}>
                                        {item.icon}
                                    </div>
                                    {item.isCurrent && (
                                        <div className="absolute inset-0 rounded-full ring-4 ring-neon-primary animate-ping opacity-25"></div>
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                                    <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-black/10 dark:border-white/10 p-8 rounded-[2rem] hover:border-neon-primary/30 dark:hover:border-white/20 transition-all duration-500 group relative shadow-xl dark:shadow-none">
                                        {/* Status Tag */}
                                        <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-4 border ${item.isCurrent ? "bg-neon-primary/20 border-neon-primary text-neon-primary" : "bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/20 text-gray-600 dark:text-gray-400"}`}>
                                            {item.period}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-neon-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="text-neon-secondary dark:text-cyan-400 font-mono text-sm mb-4">
                                            {item.company}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium dark:font-normal">
                                            {item.description}
                                        </p>

                                        {/* Skills Tags */}
                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            {item.skills.map(skill => (
                                                <span key={skill} className="px-3 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] text-gray-700 dark:text-gray-300 font-mono">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
