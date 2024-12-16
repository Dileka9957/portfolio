'use client'
import React from "react";
import { Button } from "@nextui-org/react";
// import confetti from "canvas-confetti";
import { Typography } from "../common/Typography";
// import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";



export function Hero() {

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
        
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <Button 
            className="bg-white text-xl py-2 mt-10 text-black rounded-full 
                       border border-white hover:border-white 
                       focus:border-white active:border-white"
          >
            Let&apos;s talk
          </Button>
          <Button 
            className="text-xl py-2 mt-4 sm:mt-10 text-white rounded-full 
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
