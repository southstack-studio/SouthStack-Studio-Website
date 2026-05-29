import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Establishing secure link...");

  useEffect(() => {
    const statuses = [
      "Establishing secure link...",
      "Calibrating motion grid...",
      "Simulating golden circuits...",
      "Syncing with SouthStack neural engine...",
      "Preparing studio canvas...",
      "Launch sequence initialized...",
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 2;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText("Welcome to SouthStack");
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }

        // Cycle through status texts based on progress
        const statusIdx = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[statusIdx]);

        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      id="southstack-loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      {/* Futuristic Ambient Glow Centers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-amber-500/10 blur-[100px] rounded-full" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated Circuits Background - Simulated as SVG lines */}
        <div className="absolute inset-0 -top-12 -bottom-12 -left-12 -right-12 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 10,50 L 100,50 L 150,10 L 250,10 L 300,50 L 390,50"
              stroke="#F59E0B"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M 390,150 L 300,150 L 250,190 L 150,190 L 100,150 L 10,150"
              stroke="#FBBF24"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
          </svg>
        </div>

        {/* Central Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo iconSize={80} showText={true} textColor="text-gray-100" />
        </motion.div>

        {/* Cyberpunk Loading Screen elements */}
        {/* Progress Bar Container */}
        <div className="w-64 h-[3px] bg-slate-800 rounded-full overflow-hidden relative mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 shadow-[0_0_8px_#f59e0b]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <motion.div className="font-mono text-2xl font-semibold tracking-widest text-amber-400">
          {progress}%
        </motion.div>

        {/* Loading status strings */}
        <div className="h-6 mt-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-[11px] text-slate-400 tracking-wider uppercase h-6"
            >
              {statusText}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Visual cybernetic guidelines */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-slate-500 tracking-widest uppercase">
        SYS_LOAD: PASS // GRID_SYS: ONLINE
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-slate-500 tracking-widest uppercase">
        © SOUTHSTACK STUDIO
      </div>
    </motion.div>
  );
}
