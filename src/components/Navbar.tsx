import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Why Us", id: "why-us" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        id="southstack-navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-slate-950/75 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-[#020617]/50"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo and Brand */}
          <div onClick={() => handleClick("hero")}>
            <Logo iconSize={40} showText={true} />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/40 rounded-full border border-white/[0.04]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`relative px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider rounded-full transition-colors duration-300 ${
                      isActive ? "text-slate-950" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-amber-400 rounded-full z-0"
                        transition={{ duration: 0.38, type: "spring", stiffness: 220, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Call to action button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleClick("contact")}
              className="relative overflow-hidden group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 interactive-hover"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-slate-900/60 text-white rounded-full border border-white/[0.08]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl overflow-hidden py-8 px-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleClick(item.id)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-left font-display font-medium text-lg border ${
                    activeSection === item.id
                      ? "text-amber-400 border-amber-400/20 bg-amber-400/[0.02]"
                      : "text-slate-300 border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs opacity-40">0{index + 1}</span>
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => handleClick("contact")}
                className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/15"
              >
                <span>Call to Action</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
