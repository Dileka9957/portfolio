'use client'
import React from 'react'

import { Typography } from '../common/Typography'
import CardsGrid from '../common/Card'


export function Projects() {
  return (
    <div className="container">
      <Typography variant="title" className="mb-4">
        Personal Projects
      </Typography>
      <Typography variant="body2" className="mb-10 max-w-[600px]  text-neutral-600">
        Discover a selection of personal projects that showcase my creativity, technical skills, and passion for crafting impactful digital experiences.
      </Typography>
      <CardsGrid/>
   
    </div>
  )
}


  

