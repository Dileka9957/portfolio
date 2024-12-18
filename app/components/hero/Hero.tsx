'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import confetti from "canvas-confetti";
import { motion } from 'framer-motion'
import { Typography } from '../common/Typography'
import useScrollToSection from '../hooks/SmoothScroll'
import { HeroHighlight, Highlight } from '../components/ui/hero-highlight'

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
      <div className="z-50 mt-20 flex w-full flex-col items-center justify-center px-4 text-center">
        <HeroHighlight>
          <div className="space-y-3 text-4xl font-medium text-white md:text-5xl">
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
          <div className="mt-10 flex flex-col items-center justify-center sm:flex-row sm:gap-3">
            <Button
              className="mt-10 rounded-full border border-white bg-white py-1 text-xl text-black hover:border-white focus:border-white active:border-white"
              onPress={handleButtonPress}
            >
              Let&apos;s connect
            </Button>
            <Button 
              className="mt-4 rounded-full border border-white bg-black border-opacity-50 py-1 text-xl text-white hover:border-opacity-100 focus:border-opacity-100 active:border-opacity-100 sm:mt-10"
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
