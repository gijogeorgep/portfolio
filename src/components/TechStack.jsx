import React from "react";
import { motion } from "framer-motion";
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiFigma,
    SiNextdotjs,
    SiTailwindcss,
    SiC
} from "react-icons/si";

const skills = [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Express", icon: <SiExpress />, color: "#888888" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "C Language", icon: <SiC />, color: "#A8B9CC" },
];

const TechIcon = ({ skill }) => (
    <motion.div
        whileHover={{ scale: 1.1, y: -10 }}
        className="group relative flex flex-col items-center justify-center mx-12 cursor-pointer"
    >
        {/* Glow Background */}
        <div
            className="absolute inset-0 blur-[30px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"
            style={{ backgroundColor: skill.color }}
        ></div>

        {/* Icon Container */}
        <div className="relative z-10 p-6 rounded-2xl bg-black/5 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 group-hover:border-black/10 dark:group-hover:border-white/20 transition-all duration-500 backdrop-blur-sm grayscale group-hover:grayscale-0">
            <div
                className="text-6xl md:text-7xl transition-transform duration-500 group-hover:scale-110"
                style={{ color: skill.color }}
            >
                {skill.icon}
            </div>
        </div>

        {/* Tactical Label */}
        <div className="absolute top-full mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-800 dark:text-white/40 whitespace-nowrap px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
                {skill.name}
            </span>
        </div>
    </motion.div>
);

const MarqueeRow = ({ items, direction = 1 }) => {
    // Duplicate items for seamless loop
    const doubledItems = [...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden py-12 select-none">
            <motion.div
                animate={{
                    x: direction > 0 ? [0, -100 * items.length] : [-100 * items.length, 0]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }
                }}
                className="flex flex-nowrap shrink-0"
            >
                {doubledItems.map((skill, index) => (
                    <TechIcon key={index} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
};

const TechStack = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-screen transition-colors duration-500">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 opacity-10 dark:opacity-5" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}></div>
                <div className="absolute inset-0 opacity-0 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}></div>
            </div>

            {/* Static Watermark Branding */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
                <h2 className="text-[20vw] font-black text-gray-900 dark:text-white italic tracking-tighter uppercase leading-none">
                    TECH <br /> INFINITY
                </h2>
            </div>

            <div className="w-full relative z-10 space-y-4">
                {/* Header Module */}
                <div className="container mx-auto px-6 mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-block"
                    >
                        <div className="flex items-center gap-4 justify-center mb-6">
                            <div className="h-[1px] w-8 bg-neon-primary opacity-30"></div>
                            <span className="text-neon-primary font-mono text-[10px] tracking-[1em] uppercase">Core_System</span>
                            <div className="h-[1px] w-8 bg-neon-primary opacity-30"></div>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter uppercase italic leading-none">
                            Technical <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-blue-600 dark:to-white">Arsenal</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Parallax Marquee Streams */}
                <div className="relative">
                    {/* Top Fade Gradient */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[var(--bg-color)] to-transparent z-20"></div>

                    <div className="-rotate-3 scale-110">
                        <MarqueeRow items={skills} direction={1} />
                        <MarqueeRow items={[...skills].reverse()} direction={-1} />
                    </div>

                    {/* Bottom Fade Gradient */}
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--bg-color)] to-transparent z-20"></div>
                </div>
            </div>

            {/* Tactical Footer Accents */}
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end px-4">
                <div className="flex flex-col gap-2">
                    <div className="h-[1px] w-24 bg-gray-900/10 dark:bg-white/10"></div>
                    <span className="text-[8px] font-mono text-gray-500 dark:text-white/20 tracking-[0.5em] uppercase">Stream_Status: SYNCED</span>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <span className="text-[8px] font-mono text-gray-500 dark:text-white/20 tracking-[0.5em] uppercase">FPS: 60.00</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-1 h-1 bg-neon-primary/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
