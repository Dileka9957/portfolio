'use client'
import React from 'react'

import { Typography } from '../common/Typography'
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'

export function Skills() {
  return (
    <div className="container">
        <Typography variant="title" className="mb-4">
            Skills
        </Typography>
        <div className="mt-6 rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
        </div>
    </div>
  )
}

const testimonials = [
    
      {
        src:'/images/skills/html.png' ,
        name: "HTML",
      },
      {
        src:'/images/skills/css.png' ,
        name: "CSS",
      },
      {
        src:'/images/skills/js.png' ,
        name: "Javascript",
      },
      {
        src:'/images/skills/ts.png' ,
        name: "Typescript",
      },
      {
        src:'/images/skills/reactjs.png' ,
        name: "ReactJs",
      },
      {
        src:'/images/skills/redux.png' ,
        name: "Redux",
      },
      {
        src:'/images/skills/nextjs.webp' ,
        name: "NextJS",
      },
      {
        src:'/images/skills/tailwind.png' ,
        name: "Tailwind CSS",
      },
      {
        src:'/images/skills/three-js.webp' ,
        name: "Three JS",
      },
      {
        src:'/images/skills/nodejs.png' ,
        name: "NodeJs",
      },
      {
        src:'/images/skills/express-js.png' ,
        name: "Express JS",
      },
      {
        src:'/images/skills/nestjs.png' ,
        name: "Nest Js",
      },
      {
        src:'/images/skills/mongodb.png' ,
        name: "MongoDB",
      },
      {
        src:'/images/skills/postgresql.png' ,
        name: "PostgreSQL",
      },
  
    
  ];


  

