import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const INTRO_TEXT = "Hello, World!";

function IntroScreen({ onComplete }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = window.setInterval(() => {
      setDisplayText(INTRO_TEXT.slice(0, index + 1));
      index += 1;

      if (index >= INTRO_TEXT.length) {
        window.clearInterval(typingInterval);
      }
    }, 90);

    const cursorInterval = window.setInterval(() => {
      setShowCursor((current) => !current);
    }, 500);

    const completionTimer = window.setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      window.clearInterval(typingInterval);
      window.clearInterval(cursorInterval);
      window.clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      }}
      transition={{ duration: 0.35 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.24),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.01))]" />
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.13), transparent 22%), radial-gradient(circle at 80% 30%, rgba(99,102,241,0.25), transparent 24%), radial-gradient(circle at 50% 80%, rgba(6,182,212,0.2), transparent 28%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{
          opacity: 0,
          y: -16,
          scale: 1.03,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }}
        className="relative z-10 flex w-full items-center justify-center px-4 text-center"
      >
        <div className="relative flex flex-wrap items-center justify-center">
          {INTRO_TEXT.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="font-mono font-semibold text-white"
              style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)", letterSpacing: "clamp(0.05em, 1vw, 0.2em)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index < displayText.length ? 1 : 0 }}
              transition={{ duration: 0.06, ease: "easeOut" }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="ml-1 inline-block rounded-sm bg-white align-middle shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            style={{ height: "0.9em", width: "0.5ch" }}
            animate={{ opacity: showCursor ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default IntroScreen;
