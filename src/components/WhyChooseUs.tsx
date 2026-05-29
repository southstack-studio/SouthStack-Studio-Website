import React from "react";
import { motion } from "motion/react";
import { Zap, GitMerge, Layout, ShieldAlert } from "lucide-react";

interface BenefitCard {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
  metric: string;
  badge: string;
}

const WHY_CHOOSE_US_DATA: BenefitCard[] = [
  {
    id: "choose-1",
    badge: "AGILE SPEED",
    title: "Accelerated Timelines",
    description: "We deploy robust production-ready products inside shortened sprints using pre-assembled engineering stack blocks, keeping startup cycles short.",
    Icon: Zap,
    metric: "2.4x Faster",
  },
  {
    id: "choose-2",
    badge: "HYBRID CORE",
    title: "Dual Sector Alignment",
    description: "Whether coordinating heavy enterprise level relational databases or hosting upskilling bootcamps for student collectives, we bridge both worlds seamlessly.",
    Icon: GitMerge,
    metric: "100% Sync",
  },
  {
    id: "choose-3",
    badge: "UX PHYSICS",
    title: "Premium Motion Systems",
    description: "Every single scroll reveal, drag drawer, custom magic cursor, and interactive canvas is animated using realistic physical spring forces.",
    Icon: Layout,
    metric: "60 FPS Fluid",
  },
  {
    id: "choose-4",
    badge: "SECURE blue",
    title: "Hardened Structures",
    description: "We design multi-tier API controllers with CORS configurations, standard JWT validation scopes, and automated firewalls to shield your data assets.",
    Icon: ShieldAlert,
    metric: "Military-Grade",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-[#050B18] overflow-hidden">
      {/* Structural background wire lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-10 pointer-events-none" />

      {/* Floating Ambient Glowing Halo */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-400/[0.03] blur-[150px] rounded-full pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-[0.25em] text-amber-400 mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Engineering Edge</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white uppercase leading-none mb-6">
            Why Choose <span className="text-amber-400">SouthStack</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-normal max-w-xl">
            We operate at the leading edge of modern web architecture, crafting products with visual clarity and solid engineering.
          </p>
        </div>

        {/* Bento/Flexible Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {WHY_CHOOSE_US_DATA.map((card, index) => {
            const { Icon } = card;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(251,191,36,0.25)",
                  boxShadow: "0 20px 40px -15px rgba(251,191,36,0.05)",
                }}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group transition-all duration-300 flex flex-col justify-between h-[300px] interactive-hover"
              >
                {/* Accent Highlight Corner Overlay */}
                <div className="absolute -top-12 -left-12 w-28 h-28 bg-amber-400/[0.02] group-hover:bg-amber-400/[0.05] rounded-full blur-xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Badge & Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest bg-white/[0.03] text-slate-400 px-3 py-1 rounded border border-white/[0.05]">
                      {card.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-400/90 tracking-wide">
                      {card.metric}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-white/[0.06] group-hover:border-amber-400/30 group-hover:text-amber-300 transition-colors duration-300 shrink-0">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-medium text-white group-hover:text-amber-300 transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Micro tech grid line at the card bottom */}
                <div className="w-full h-px bg-white/[0.05] relative group-hover:bg-amber-400/20 transition-colors duration-300">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
