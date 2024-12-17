'use client'
import React from "react";
import { Button } from "@nextui-org/react";
// import confetti from "canvas-confetti";
import { Typography } from "../common/Typography";
import useScrollToSection from "../hooks/SmoothScroll";
// import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export function Hero() {

  const { scrollToSection } = useScrollToSection();

  function handleButtonPress() {
    scrollToSection('contact', 2500);
  }

  return (
    <div className="">
      <div className="w-full mt-20 z-50 flex flex-col items-center justify-center px-4 text-center">
        <div className="text-white font-medium text-4xl md:text-5xl space-y-3">
          <Typography variant="hero" displayAs="h1" className="">
            Code, Create, Innovate:
          </Typography>
          <Typography variant="hero" displayAs="h1" className="">
            Your Full Stack
          </Typography>
          <div className="bg-[#0a0a0a] py-3 px-6">
            <Typography variant="hero" displayAs="h1" className="">
              Development Partner
            </Typography>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:gap-3 mt-10">
          <Button 
            className="bg-white text-xl py-1 mt-10 text-black rounded-full 
                       border border-white hover:border-white 
                       focus:border-white active:border-white"
                       onPress={handleButtonPress}
          >
            Let&apos;s connect
          </Button>
          <Button 
            className="text-xl py-1 mt-4 sm:mt-10 text-white rounded-full 
                       border border-white border-opacity-50 hover:border-opacity-100 
                       focus:border-opacity-100 active:border-opacity-100"
          >
            Download my CV
          </Button>
        </div>
      </div>
    </div>
  )
}
