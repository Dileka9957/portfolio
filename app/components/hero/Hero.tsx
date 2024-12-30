'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import confetti from "canvas-confetti";
import { motion } from 'framer-motion'
import { Typography } from '../common/Typography'
import useScrollToSection from '../hooks/SmoothScroll'
import { HeroHighlight, Highlight } from '../components/ui/hero-highlight'
import { FloatingNavDemo } from '../navbar/FloatingNavBar';

export function Hero() {
  const { scrollToSection } = useScrollToSection()

  function handleButtonPress() {
    scrollToSection('contact', 2500)
  }
  function handleConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  return (
    <div className="">
      <div className="z-50 flex w-full flex-col items-center justify-center text-center">
        <HeroHighlight>
        <div className="mx-auto w-full overflow-hidden pb-[12px] sm:pb-[48px] px-4">
          <FloatingNavDemo/>
        </div>
          <div className="space-y-3 text-4xl font-medium text-white md:text-5xl mt-10">
            <Typography variant="hero" displayAs="h1" className="">
              Code, Create, Innovate:
            </Typography>
            <Typography variant="hero" displayAs="h1" className="">
              Your Full Stack
            </Typography>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 md:text-4xl lg:text-5xl lg:leading-snug dark:text-white"
            >
              <Highlight className="text-white dark:text-white">Development Partner</Highlight>
            </motion.h1>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center sm:flex-row gap-2 sm:gap-3">
            <Button
              className="mt-2 rounded-full border w-[180px] border-white bg-white py-1 text-black hover:border-white focus:border-white active:border-white"
              onPress={handleButtonPress}
            >
              Let&apos;s connect
            </Button>
            <Button 
              className="mt-2 rounded-full border w-[180px] border-white bg-black border-opacity-50 py-1 text-white hover:border-opacity-100 focus:border-opacity-100 active:border-opacity-100 sm:mt-2"
              onPress={handleConfetti}
            >
              Download my CV
            </Button>
          </div>
        </HeroHighlight>
      </div>
    </div>
  )
}
