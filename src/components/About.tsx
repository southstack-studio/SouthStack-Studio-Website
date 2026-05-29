import React from "react";
import { motion } from "motion/react";
import { Sparkles, Trophy, Users2, ShieldCheck, Cpu } from "lucide-react";
import { Stat } from "../types";

const IMPACT_STATS: Stat[] = [
  {
    id: "stat-1",
    value: "52",
    number: 52,
    suffix: "+",
    label: "Engaged Products",
    description: "Enterprise SaaS, dashboards, and student prototypes deployed flawlessly.",
  },
  {
    id: "stat-2",
    value: "99.4",
    number: 99.4,
    suffix: "%",
    label: "Client Loyalty",
    description: "Unmatched technical maintenance rating across businesses and founders.",
  },
  {
    id: "stat-3",
    value: "1.4k",
    number: 1400,
    suffix: "+",
    label: "Students mentored",
    description: "Upskilled in advanced react architectures, git pipelines, and cloud APIs.",
  },
  {
    id: "stat-4",
    value: "16",
    number: 16,
    suffix: "",
    label: "Core Specialists",
    description: "Top-tier database curators, cloud managers, and UI designers.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050B18] overflow-hidden">
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15 pointer-events-none" />

      {/* Decorative Blur Spot */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column Manifesto Block */}
          <div className="lg:col-span-5 relative group order-last lg:order-first">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Corner Grid Detail */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[radial-gradient(#facc15_1.5px,transparent_1.5px)] [background-size:8px_8px] opacity-20" />

              <Cpu className="w-10 h-10 text-amber-400 mb-8" />
              <h4 className="text-xl font-display font-semibold text-white tracking-tight mb-4">
                The SouthStack Manifesto
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-normal">
                We believe in architecting digital systems that outlive standard hype cycles. Every line of backend configuration is structured for security, and every interface is curated to capture attention.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-400/10 text-amber-400 text-xs font-bold font-mono">
                    ✓
                  </div>
                  <span className="text-slate-300 text-xs font-mono">Industrial Standard Codebase</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-400/10 text-amber-400 text-xs font-bold font-mono">
                    ✓
                  </div>
                  <span className="text-slate-300 text-xs font-mono">Cohesive Responsive Layouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-400/10 text-amber-400 text-xs font-bold font-mono">
                    ✓
                  </div>
                  <span className="text-slate-300 text-xs font-mono">Accelerated Startup Incubation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Text Reveal Block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-[0.25em] text-amber-400 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>About SouthStack Studio</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-black tracking-tight text-white uppercase leading-none">
              Merging Scale <br />
              With <span className="text-amber-400">Authentic Design</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-300 text-sm md:text-base leading-relaxed tracking-wide font-normal">
              SouthStack Studio was founded in 2024 to bridge the technical divide between fast-growing corporate enterprises and energetic collegiate startup ecosystems. We act as a high-end dev powerhouse and a design lab under one umbrella.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
              For **businesses**, we deliver hardened Cloud configurations, secure database integrations, and high-conversion landing systems. For **students**, we serve as a premier mentorship channel, hosting collaborative hackathons and direct bootcamps to foster the next generation of software co-founders.
            </motion.p>
          </div>
        </motion.div>

        {/* Counters & Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-24 md:mt-32">
          {IMPACT_STATS.map((stat, sIdx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: sIdx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 interactive-hover"
            >
              <div>
                <div className="font-display font-extrabold text-4xl md:text-5xl text-amber-400 mb-4 group-hover:text-amber-300 transition-colors duration-300 select-none">
                  {stat.value}
                  <span className="text-white font-normal">{stat.suffix}</span>
                </div>
                <h5 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  {stat.label}
                </h5>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
