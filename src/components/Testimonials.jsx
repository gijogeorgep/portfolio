import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Adithya R. Nair",
    role: "Associate Program Coordinator",
    company: "Mahila Vikas Samaj",
    quote: `We had an excellent experience working with gcodz for the development of the Mahila Vikas Samaj website. Their team was highly professional, responsive, and committed to delivering quality work. The website was developed with great attention to detail, and they were always available to address our requirements and suggestions. I highly recommend gcodz to anyone looking for reliable and high-quality web development services.`,
    image: "/Review/adithya.jpeg",
  },
  {
    name: "Amith Girish",
    role: "CEO & Founder",
    company: "Synapse Edu Hub",
    quote:
      "gcodz delivered a modern, intuitive, and high-performing e-learning platform that aligned perfectly with our vision. From planning to execution, the project was handled with professionalism, technical expertise, and attention to detail. The final platform exceeded our expectations in both design and functionality. We would confidently recommend gcodz for anyone seeking reliable and high-quality web development services.",
    image: "/Review/amith.jpeg",
  },
  {
    name: "Muhammed Fasir",
    role: "Founder",
    company: "My Steel India",
    quote: "I had my website created by Gcodz for my steel and scrap brand, and I am extremely satisfied with their work. The final website was even better than I expected. Their team maintained smooth and professional communication throughout the entire process and delivered the project on time as promised. I truly appreciate their dedication, quality of work, and commitment to customer satisfaction. Highly recommended for anyone looking for professional website development services",
    image: "/Review/fazir.jpeg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const itemsToShow = isMobile ? 1 : 2;
  const maxIndex = testimonials.length - itemsToShow;

  // Reset index if it exceeds the max index on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Auto-scroll logic (resets timer on manual slide/dot interactions)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="px-6 py-24 md:px-20 lg:px-24 bg-[#f8fafc] dark:bg-[#050505] transition-colors duration-500"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-indigo-500" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500">
              Client Reviews
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            What clients say about working with me
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden -mx-4 px-4 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * (100 / itemsToShow)}%`,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className="w-full md:w-1/2 flex-shrink-0 px-4"
              >
                <motion.article
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-[0_24px_60px_rgba(99,102,241,0.12)] dark:border-white/[0.07] dark:bg-[#0f0f0f]"
                >
                  {/* Decorative gradient blob */}
                  <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/20" />

                  {/* Top row: stars + quote icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10">
                      <Quote size={18} className="text-indigo-500" />
                    </div>
                  </div>

                  {/* Quote text — grows to fill space */}
                  <p className="mb-8 flex-1 text-[15px] leading-[1.85] text-gray-600 dark:text-gray-300">
                    "{item.quote}"
                  </p>

                  {/* Divider */}
                  <div className="mb-6 h-px w-full bg-gradient-to-r from-indigo-500/30 via-indigo-500/10 to-transparent" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-indigo-500/30"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-emerald-400 dark:border-[#0f0f0f]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-indigo-500 font-medium">
                        {item.role}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/[0.06] bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-indigo-500 hover:text-white dark:border-white/[0.07] dark:bg-[#0f0f0f] dark:text-gray-300 dark:hover:bg-indigo-500 hover:scale-105 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-indigo-500"
                    : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/[0.06] bg-white text-gray-700 shadow-sm transition-all duration-300 hover:bg-indigo-500 hover:text-white dark:border-white/[0.07] dark:bg-[#0f0f0f] dark:text-gray-300 dark:hover:bg-indigo-500 hover:scale-105 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
