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
import { Typography } from "../../common/Typography";
import Image from "next/image";

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

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

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
          "flex flex-col fixed max-w-[460px] sm:max-w-[580px] top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg dark:bg-black bg-[#0a0a0a] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4 items-center justify-center sm:flex-row sm:justify-center sm:space-x-4 space-y-2 md:space-x-8",
          className
        )}
        style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(3px)",
            border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      > <Image
                className="top-10 invert"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={28}
                priority
              />
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 flex-col sm:flex-row items-start flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            {/* <span className="block sm:hidden">{navItem.icon}</span> */}
          
            <Typography
                variant="body2"
                displayAs="p"
                className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
            >
                {navItem.name}
            </Typography>
          </Link>
        ))}
    
      </motion.div>
    </AnimatePresence>
  );
};
