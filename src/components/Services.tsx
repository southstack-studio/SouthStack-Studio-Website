import React from "react";
import { motion } from "motion/react";
import {
  Video,
  Image as ImageIcon,
  Palette,
  Megaphone,
  Tv,
  Sliders,
  Code2,
  Briefcase,
  GraduationCap,
  Layers,
  Monitor,
  Server,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const NON_TECH_SERVICES = [
  {
    id: "nt-1",
    title: "Video Editing",
    description: "Professional-grade cinematic cut creation, high-retention editing, sound mapping, and customized dynamic subtitling.",
    icon: Video,
    tag: "Production",
    benefits: ["Slick motion graphics & titles", "Engagement-optimized pacing", "Custom sound effects (SFX) layering"],
  },
  {
    id: "nt-2",
    title: "Thumbnail Making",
    description: "High-CTR, thumb-stopping visual coverings designed specifically to boost audience click ratios and visual attention.",
    icon: ImageIcon,
    tag: "Optimization",
    benefits: ["Extreme high-contrast framing", "Vibrant colors & custom textures", "Bold typography designed for mobile"],
  },
  {
    id: "nt-3",
    title: "Logo Designing",
    description: "Iconic, memorable corporate and startup emblem designs refined to capture your precise brand identity and messaging.",
    icon: Palette,
    tag: "Brand Identity",
    benefits: ["Full scalable vector source files", "Comprehensive brand identity guidelines", "Versatile light/dark color options"],
  },
  {
    id: "nt-4",
    title: "Poster Making",
    description: "Bespoke print-ready catalog advertisements, flyers, and digital showcase materials balancing typography and scale.",
    icon: Megaphone,
    tag: "Graphics",
    benefits: ["Optimized grids and columns", "Premium typographic pairing layouts", "Perfect CMYK/RGB color fidelity"],
  },
  {
    id: "nt-5",
    title: "Banner Making",
    description: "Cohesive, stunning backdrop panels and profiles across social media channels, websites, and outdoor prints.",
    icon: Tv,
    tag: "Marketing",
    benefits: ["Seamless multi-platform sizing", "Polished high-fidelity exports", "Bold visual hierarchy rules"],
  },
  {
    id: "nt-6",
    title: "Color Grading",
    description: "Advanced dynamic range adjustments, color matching, customized look-up-tables (LUTs), and cinematic ambiance.",
    icon: Sliders,
    tag: "Post-Processing",
    benefits: ["Cinematic industry-standard skin tones", "Precise scene-to-scene color correction", "Eye-catching mood atmosphere stylings"],
  }
];

const TECH_SERVICES = [
  {
    id: "t-1",
    title: "Web Development",
    description: "Breathtaking interactive fluid user experiences, extreme-search ranking optimizations, and fast server responses.",
    icon: Code2,
    tag: "Web Apps",
    benefits: ["SEO semantic architecture rules", "Fully responsive adaptive columns", "Ultra-fast Next-gen edge rendering"],
  },
  {
    id: "t-2",
    title: "Portfolio Making",
    description: "Bespoke personal portfolio websites and visual memoirs utilizing clean layouts and delicate transition mechanics.",
    icon: Briefcase,
    tag: "Careers",
    benefits: ["Dynamic custom animations", "Fully interactive showcases", "Integrated digital contact channels"],
  },
  {
    id: "t-3",
    title: "College Tech Projects Dev",
    description: "Rigorous academic project prototyping, thoroughly commented source files, and interactive instructional guides.",
    icon: GraduationCap,
    tag: "Academic Dev",
    benefits: ["Comment-supported robust codebases", "Clear, step-by-step structural guides", "Polished presentable UI designs"],
  },
  {
    id: "t-4",
    title: "Full Stack Development",
    description: "Dynamic cloud architectures combining server-side capabilities with responsive, interactive frontend Clients.",
    icon: Layers,
    tag: "Full-Stack Platforms",
    benefits: ["Instant multi-user client syncing", "Custom backend API integration points", "Reliable automated data flow paths"],
  },
  {
    id: "t-5",
    title: "Frontend Development",
    description: "Interactive visual component programming, structured frameworks, and client-level state optimizers.",
    icon: Monitor,
    tag: "Client-Side Dev",
    benefits: ["Modular responsive layouts", "Silky-smooth user interactions", "Type-safe robust frontend systems"],
  },
  {
    id: "t-6",
    title: "Backend Development",
    description: "Ultra-secure database pools, customized server pipelines, REST/GraphQL controllers, and authorization setups.",
    icon: Server,
    tag: "Services & Databases",
    benefits: ["High-efficiency database queries", "Encrypted user authority processes", "Clean, modular API architectures"],
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050B18] overflow-hidden">
      {/* Decorative Grid Mesh overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15 pointer-events-none" />

      {/* Atmospheric Soft Light Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-[0.25em] text-amber-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>EXCELLENCE IN EVERY SECTOR</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase leading-[0.95] text-white">
            OUR COMPREHENSIVE <br />
            <span className="text-amber-400">Sectors of Excellence</span>
          </h2>
          <p className="text-blue-100/60 text-sm md:text-base mt-6 max-w-xl font-normal leading-relaxed">
            From premier post-production graphic and video aesthetics to lightning-fast, secure full-stack software systems. No compromises, no hidden options — browse our full capability matrix below.
          </p>
        </div>

        {/* 🎨 NON-TECH SERVICES CATEGORY */}
        <div className="mb-24 relative">
          <div className="flex items-center gap-4 mb-8 md:mb-12 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center font-display font-bold text-amber-400 text-lg">
              🎨
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-display font-black tracking-tight uppercase text-white">
                Creative & Non-Tech Services
              </h3>
              <p className="text-xs text-blue-100/50 uppercase tracking-widest mt-1">Design, editing, and cinematic post-production</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {NON_TECH_SERVICES.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{
                    y: -8,
                    borderColor: "rgba(250,204,21,0.4)",
                    boxShadow: "0 22px 42px -12px rgba(250,204,21,0.15)",
                  }}
                  className="relative flex flex-col justify-between p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group transition-all duration-300 interactive-hover"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/[0.03] to-transparent blur-2xl rounded-full pointer-events-none group-hover:from-amber-500/[0.08]" />

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-950 border border-white/[0.06] group-hover:border-amber-400/40 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.25)] transition-all duration-300">
                        <IconComp className="w-6 h-6 text-amber-400" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md bg-amber-400/[0.05] border border-amber-400/20 text-amber-400">
                        {service.tag}
                      </span>
                    </div>

                    <h4 className="text-xl font-display font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-blue-100/60 text-xs leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="w-full h-px bg-white/[0.06] my-6" />

                    <div className="space-y-3">
                      <h5 className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-2">
                        Premium Deliverables
                      </h5>
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-[11px] leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-6 font-mono text-[10px] text-slate-700 font-bold opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    S3//nt-0{index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 💻 TECH SERVICES CATEGORY */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-8 md:mb-12 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-display font-bold text-[#3b82f6] text-lg">
              💻
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-display font-black tracking-tight uppercase text-white">
                Technical & Tech Services
              </h3>
              <p className="text-xs text-blue-100/50 uppercase tracking-widest mt-1">Full stack development, architectures, and academia buildouts</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TECH_SERVICES.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{
                    y: -8,
                    borderColor: "rgba(250,204,21,0.4)",
                    boxShadow: "0 22px 42px -12px rgba(250,204,21,0.15)",
                  }}
                  className="relative flex flex-col justify-between p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group transition-all duration-300 interactive-hover"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/[0.02] to-transparent blur-2xl rounded-full pointer-events-none group-hover:from-blue-500/[0.06]" />

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-950 border border-white/[0.06] group-hover:border-amber-400/40 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.25)] transition-all duration-300">
                        <IconComp className="w-6 h-6 text-amber-400" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                        {service.tag}
                      </span>
                    </div>

                    <h4 className="text-xl font-display font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-blue-100/60 text-xs leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="w-full h-px bg-white/[0.06] my-6" />

                    <div className="space-y-3">
                      <h5 className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-2">
                        Premium Deliverables
                      </h5>
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-[11px] leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-6 font-mono text-[10px] text-slate-700 font-bold opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    S3//t-0{index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
