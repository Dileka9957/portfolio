"use client";

import { cn } from "@/app/lib/util";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
    rootMargin: "100px 0px",
  });

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div ref={ref}>
      {inView ? (
        <div className="fixed bottom-4 right-4 z-40 lg:bottom-10 lg:right-3">
          <button
            type="button"
            onClick={scrollToTop}
            className={cn(
              isVisible ? "opacity-100" : "opacity-0",
              " inline-flex items-center rounded-full border border-[#2b2e2c] bg-[#0a0a0a] p-[6px] md:p-[10px] text-white shadow-sm transition-opacity "
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
};
