/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import MagicCursor from "./components/MagicCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll position to update glowing navbar triggers dynamically
  useEffect(() => {
    const sections = ["hero", "services", "about", "why-us", "contact"];
    const handleScroll = () => {
      let currentActive = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Detect if the section occupies the center third of the perspective portal
          if (
            rect.top <= window.innerHeight * 0.45 &&
            rect.bottom >= window.innerHeight * 0.45
          ) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#050B18] text-white antialiased min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="portal-content" className="relative min-h-screen w-full">
            {/* Tactile trail cursor */}
            <MagicCursor />

            {/* Floating Navigation glass bar */}
            <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

            {/* Immersive motion-blur video hero */}
            <Hero
              onExplore={() => handleNavigate("services")}
              onContact={() => handleNavigate("contact")}
            />

            {/* Modular divided capabilities */}
            <Services />

            {/* Stats reveal, details, manifesto */}
            <About />

            {/* Floating advantage bento cards */}
            <WhyChooseUs />

            {/* Clean communication lines with inline toast */}
            <Contact />

            {/* Grid structure directory list */}
            <Footer onNavigate={handleNavigate} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
