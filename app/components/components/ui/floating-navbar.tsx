"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useScrollToSection from "../../hooks/SmoothScroll";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: any;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const { scrollToSection } = useScrollToSection();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
        /* Using scrollIntoView with smooth behavior for consistency */
      });
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed max-w-[450px] sm:max-w-[500px] top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] !rounded-full dark:bg-black bg-[#0a0a0a] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] sm:px-6 py-4 items-center justify-center sm:flex-row sm:justify-center space-x-4 md:space-x-8",
          className
        )}
        style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(3px)",
            border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      > 

        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            // scroll={false}
            onClick={(e:any) => handleNavClick(e, navItem.link)}
            className={cn(
              "relative flex-col sm:flex-row items-start flex dark:hover:text-neutral-300 hover:text-[#ea580c] cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
            )}
          >
            {/* <span className="block sm:hidden">{navItem.icon}</span> */}
                {navItem.name}
           
          </Link>
        ))}
    
      </motion.div>
    </AnimatePresence>
  );
};
