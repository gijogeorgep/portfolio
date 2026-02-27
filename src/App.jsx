import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-neon-bg min-h-screen text-white overflow-x-hidden selection:bg-neon-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
