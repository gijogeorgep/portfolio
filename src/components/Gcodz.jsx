import React from "react";
import { motion } from "framer-motion";

const letters = [
    { char: "g", color: "#6366f1", shadow: "rgba(99,102,241,0.8)" },
    { char: "c", color: "#06b6d4", shadow: "rgba(6,182,212,0.8)" },
    { char: "o", color: "#d946ef", shadow: "rgba(217,70,239,0.8)" },
    { char: "d", color: "#6366f1", shadow: "rgba(99,102,241,0.8)" },
    { char: "z", color: "#06b6d4", shadow: "rgba(6,182,212,0.8)" },
];

const Gcodz = () => {
    return (
        <span className="inline-flex items-baseline select-none gcodz-root">
            {letters.map((l, i) => (
                <motion.span
                    key={i}
                    className="gcodz-letter"
                    style={{
                        color: l.color,
                        textShadow: `0 0 12px ${l.shadow}, 0 0 30px ${l.shadow}, 0 0 60px ${l.shadow}`,
                        display: "inline-block",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1 * i,
                        type: "spring",
                        stiffness: 200,
                        damping: 14,
                    }}
                    whileHover={{
                        scale: 1.25,
                        rotate: [-4, 4, -2, 0],
                        transition: { duration: 0.3 },
                    }}
                >
                    {l.char}
                </motion.span>
            ))}

            <style>{`
                .gcodz-root {
                    font-family: 'Space Grotesk', sans-serif;
                    letter-spacing: 0.05em;
                }
                .gcodz-letter {
                    animation: gcodzGlitch 6s infinite;
                    cursor: default;
                }
                .gcodz-letter:nth-child(1) { animation-delay: 0s; }
                .gcodz-letter:nth-child(2) { animation-delay: 1.2s; }
                .gcodz-letter:nth-child(3) { animation-delay: 2.4s; }
                .gcodz-letter:nth-child(4) { animation-delay: 3.6s; }
                .gcodz-letter:nth-child(5) { animation-delay: 4.8s; }

                @keyframes gcodzGlitch {
                    0%, 90%, 100% {
                        clip-path: none;
                        transform: translate(0, 0) skew(0deg);
                    }
                    91% {
                        clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
                        transform: translate(-3px, 0) skew(-2deg);
                    }
                    92% {
                        clip-path: polygon(0 55%, 100% 55%, 100% 80%, 0 80%);
                        transform: translate(3px, 0) skew(1deg);
                    }
                    93% {
                        clip-path: none;
                        transform: translate(0, 0) skew(0deg);
                    }
                }
            `}</style>
        </span>
    );
};

export default Gcodz;
