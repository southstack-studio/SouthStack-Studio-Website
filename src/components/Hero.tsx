import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, MessageSquare, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [videoError, setVideoError] = useState(false);

  // Parallax scrolling effects
  const { scrollY } = useScroll();
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleText = useTransform(scrollY, [0, 400], [1, 0.92]);
  const yText = useTransform(scrollY, [0, 400], [0, 50]);
  const yBg = useTransform(scrollY, [0, 600], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize position from -1 to 1 for subtle 3D translation
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [videoSrc, setVideoSrc] = useState("https://res.cloudinary.com/dgukev6sm/video/upload/v1780058941/c_e_a_b_e_f_fbc_c_mp__ihnykv.mp4");
  const fallbackUrl = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3cbbec2ba3316ee2fae041e1b78297b83&profile_id=139&oauth2_token_id=57447761";

  const handleVideoError = () => {
    if (videoSrc !== fallbackUrl) {
      setVideoSrc(fallbackUrl);
    } else {
      setVideoError(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#050B18] text-white overflow-hidden pt-16"
    >
      {/* Background Video Layer with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        {!videoError ? (
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            onError={handleVideoError}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 select-none pointer-events-none gpu-accelerated"
            style={{ opacity: 1.0, willChange: "transform, opacity" }}
          >
            <source src={videoSrc} type="video/mp4" />
            <div className="bg-[#050B18] w-full h-full" />
          </video>
        ) : (
          /* High-end decorative background gradient if video fails */
          <div className="absolute inset-0 bg-[#050B18]" />
        )}

        {/* CSS-based particle and wire mesh overlay to create depth even without video */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-25" />
      </motion.div>

      {/* Futuristic Glowing atmospheric background elements (soft subtle gradient on edges) */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none z-10 select-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[145px] pointer-events-none z-10 select-none" />

      {/* Glowing Neon Lights Floating in Background */}
      <motion.div
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{ type: "smooth", damping: 15 }}
        className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-400/5 blur-[130px] rounded-full pointer-events-none z-10 select-none"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
        }}
        transition={{ type: "smooth", damping: 15 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none z-10 select-none"
      />

      {/* Localized Darkening Ambient Mask behind central content to optimize readability and contrast of labels while keeping background video fully visible at 100% opacity */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[340px] md:h-[400px] bg-[#050B18]/50 blur-[60px] md:blur-[80px] rounded-full pointer-events-none z-10 select-none" />

      {/* Visual Overlay Details from Immersive UI */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12 opacity-35 select-none pointer-events-none z-20">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <span className="rotate-90 origin-center text-[10px] tracking-[0.5em] uppercase whitespace-nowrap text-blue-100/60">Scroll Explorer</span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>

      {/* Hero Content Grid (Parallax Enabled) */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center z-20 pt-12 md:pt-0">
        <motion.div
          style={{ opacity: opacityText, scale: scaleText, y: yText }}
          className="flex flex-col items-center select-none"
        >
          {/* Nested Content Wrapper for Continuous Floating Animation */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            {/* Tagline Badge - Styled according to Immersive UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-[0.2em] mb-8 rounded-full drop-shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Premium Digital Agency</span>
            </motion.div>

            {/* Golden Highlight Heading with Outlined Symbols */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase leading-[1.05] text-white mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,1)]"
            >
              Build <span className="text-amber-400 font-extrabold">•</span> Design <span className="text-amber-400 font-extrabold">•</span> Scale
            </motion.h1>

            {/* Subheading with Immersive theme styling */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="max-w-2xl text-amber-50 sm:text-white font-sans text-lg sm:text-xl md:text-2xl font-bold leading-relaxed tracking-wide mb-12 drop-shadow-[0_4px_20px_rgba(0,0,0,1)] px-4"
            >
              Complete Digital Solutions for Businesses & Students
            </motion.p>

            {/* Action CTAs - Styled according to Immersive UI: sharp block edges 'rounded-sm' */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <button
                onClick={onExplore}
                className="relative w-full sm:w-auto overflow-hidden group px-8 py-4 bg-amber-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-[0_10px_30px_rgba(250,204,21,0.35)] hover:shadow-[0_0_35px_rgba(251,191,36,0.95)] hover:translate-y-[-2px] focus:outline-none interactive-hover"
              >
                <div className="absolute inset-0 w-full h-full bg-white/25 transform -skew-x-[30deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10">Start Project</span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onContact}
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/25 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] hover:translate-y-[-2px] interactive-hover drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              >
                <span>View Work</span>
                <MessageSquare className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Animated Mouse Wheel Indicator at the Bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          onClick={onExplore}
          className="flex flex-col items-center gap-1 cursor-pointer pointer-events-auto"
        >
          <span className="font-mono text-[9px] text-amber-400 opacity-60 uppercase tracking-[0.25em] mb-1.5">
            Scroll to discover
          </span>
          <div className="w-[18px] h-7 rounded-full border border-amber-400/40 flex justify-center p-[3px]">
            <div className="w-[3px] h-[3px] bg-amber-400 rounded-full animate-bounce" />
          </div>
          <ArrowDown className="w-3.5 h-3.5 text-amber-400/40 mt-1" />
        </motion.div>
      </div>

      {/* Bottom section transition mask - fade into plain dark navy page */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050B18] to-transparent pointer-events-none z-10" />
    </section>
  );
}
