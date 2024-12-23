'use client'
import React from 'react'


import { motion } from "framer-motion"
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import { FloatingDock } from '../components/ui/floating-dock';
import Image from 'next/image';
import intro from '../../../public/intro.webp'
import { Typewriter } from 'react-simple-typewriter';
import { Typography } from '../common/Typography';

export function AboutUs() {

  const words = ["Hi, I'm Nipun Dileka, a Fullstack Web Developer based in Sri Lanka.", "pears", "bananas"];
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "#",
    },
  
  ];

  return (
  <div className='container w-full flex flex-col-reverse md:flex-row md:items-center'>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 2,
          type: "tween",
          ease: "backOut",
        },
        y: 0,
      }}
      viewport={{ once: true }}
      className='w-full md:w-1/2'
   
    >
      <div className="w-full mx-auto flex justify-center relative overflow-hidden rounded-lg">
            <Image
              src={intro}
              alt="intro image 1"
              width={400}
              height={400}
              className="w-2/3 h-2/3 object-cover rounded-lg aspect-square sticky top-[100px] transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </div>
    </motion.div>
    <div className="w-full md:w-1/2  mb-10">
          <div className="flex flex-col justify-center items-center px-5 mx-auto">
      
              <Typography variant="hero" displayAs="h1" className="text-4xl">
                Hi there, my name is
              </Typography>
              <Typography variant="hero" displayAs="h1" className="text-4xl">
                Nipun Dileka
              </Typography>
              <div className="text-4xl px-3 text-2">
                I am a &nbsp;
                <span className="fw-bold" style={{ color: "orange" }}>
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    words={["Developer", "Blogger", "Freelancer"]}
                  />
                </span>
              </div>
            </div>
      
            <div className="flex items-center justify-center mt-10 w-full">
              <FloatingDock
                mobileClassName="translate-y-20" 
                items={links}
              />
            </div>
      </div>
    </div>
  )
}
