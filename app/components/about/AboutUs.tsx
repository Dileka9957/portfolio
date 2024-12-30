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
  <div className='container max-w-[1440px] mx-auto w-full flex flex-col-reverse lg:flex-row lg:gap-3 lg:items-center'>
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
      className='w-full lg:w-1/2'
   
    >
      <div className="w-full mx-auto flex justify-center relative overflow-hidden rounded-lg">
            <Image
              src={intro}
              alt="intro"
              width={400}
              height={400}
              className="h-2/3 object-cover rounded-lg aspect-[1.1] sticky top-[100px] transition-transform duration-300 ease-in-out hover:scale-105"
            />
      </div>
    </motion.div>
    <div className="w-full lg:w-1/2 mb-10">
          <div className="flex flex-col justify-start items-center mx-auto">
      
              <Typography variant="title" displayAs="h1" className='!font-normal'>
                Hi there, my name is
              </Typography>
              <Typography variant="title" displayAs="h1" className='!font-normal'>
                Nipun Dileka
              </Typography>
              <Typography variant="title" displayAs="h1" className="!font-normal px-3 text-2">
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
              </Typography>
            </div>
      
            <div className="flex items-center justify-center mt-10 w-full">
              <FloatingDock
                mobileClassName="translate-y-20" 
                items={links}
              />
            </div>

            <div className="mt-6">
            <p className="px-8 text-center text-lg text-neutral-300 dark:text-neutral-300">
                Passionate and results-driven Full Stack Developer with expertise in building modern 
                web applications. I transform complex business requirements into scalable and efficient 
                solutions, focusing on creating seamless user experiences while ensuring robust backend 
                functionality.
            </p>
        </div>
      </div>
    </div>
  )
}
