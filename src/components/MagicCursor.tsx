import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function MagicCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Motion Values for smooth coordinates tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smoothed coords for trailing outer ring - optimized for fluid "butter glide" tracking dynamics
  const ringX = useSpring(cursorX, { damping: 26, stiffness: 220 });
  const ringY = useSpring(cursorY, { damping: 26, stiffness: 220 });

  useEffect(() => {
    // Detect mobile touch or simple micro-screens
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          navigator.maxTouchPoints > 0 ||
          "ontouchstart" in window
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("select") ||
          target.closest("textarea") ||
          target.closest('[role="button"]') ||
          target.closest(".interactive-hover"))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-screen">
      {/* Outer Glow Ring (Spring-smoothed trail) */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.8 : 1.0,
          borderColor: hovered ? "rgba(251, 191, 36, 0.9)" : "rgba(251, 191, 36, 0.4)",
          backgroundColor: hovered ? "rgba(251, 191, 36, 0.15)" : "rgba(251, 191, 36, 0)",
          boxShadow: hovered
            ? "0 0 16px rgba(251, 191, 36, 0.6)"
            : "0 0 4px rgba(251, 191, 36, 0.1)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="w-8 h-8 rounded-full border border-amber-400 absolute pointer-events-none z-[101]"
      />

      {/* Inner Precision Dot (Locks directly to pointer) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.5 : hovered ? 1.2 : 1.0,
          backgroundColor: hovered ? "#F59E0B" : "#FBBF24",
        }}
        transition={{ duration: 0.05 }}
        className="w-1.5 h-1.5 rounded-full absolute pointer-events-none z-[102]"
      />
    </div>
  );
}
