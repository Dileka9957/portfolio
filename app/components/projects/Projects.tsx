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
        As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I
        aim to assist you in constructing the brand of your fantasies.
      </Typography>
      {/* <HeroParallax products={products} /> */}
      <CardsGrid/>
   
    </div>
  )
}


  

