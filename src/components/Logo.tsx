import React from "react";
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  iconSize?: number;
  textColor?: string;
}

export default function Logo({
  className = "",
  showText = true,
  iconSize = 40,
  textColor = "text-white",
}: LogoProps) {
  const isLarge = iconSize > 50;

  return (
    <div className={`flex items-center select-none cursor-pointer ${className}`}>
      {showText && (
        <span
          className={`font-display font-black tracking-tight uppercase select-none transition-colors duration-300 ${
            isLarge
              ? "text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-[0_0_24px_rgba(251,191,36,0.35)]"
              : "text-lg md:text-xl text-white hover:text-amber-400"
          }`}
        >
          SouthStack <span className="text-amber-400 font-extrabold text-glow">Studio</span>
        </span>
      )}
    </div>
  );
}
