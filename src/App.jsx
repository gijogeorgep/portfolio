import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, [showIntro]);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 selection:bg-neon-primary selection:text-white">
        <AnimatePresence mode="wait">
          {showIntro ? (
            <IntroScreen
              key="intro"
              onComplete={() => {
                setShowIntro(false);
                setIsContentReady(true);
              }}
            />
          ) : null}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          animate={{
            opacity: isContentReady ? 1 : 0,
            filter: isContentReady ? "blur(0px)" : "blur(12px)",
            y: isContentReady ? 0 : 20,
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
