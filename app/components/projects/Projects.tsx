'use client'
import React from 'react'
// import { HeroParallax } from '../components/ui/hero-parallax'
import { Typography } from '../common/Typography'
import Card from '../common/Card'


export function Projects() {
  return (
    <div className="container">
      <Typography variant="title" className="mb-4">
        Projects
      </Typography>
      <Typography variant="body2" className="mb-10 max-w-[600px]  text-neutral-600">
        As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I
        aim to assist you in constructing the brand of your fantasies.
      </Typography>
      {/* <HeroParallax products={products} /> */}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <Card/><Card/><Card/><Card/><Card/><Card/>
    </div>
    </div>
  )
}
// export const products = [
//   {
//     title: 'Moonbeam',
//     link: 'https://gomoonbeam.com',
//     thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
//   },
//   {
//     title: 'Cursor',
//     link: 'https://cursor.so',
//     thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png',
//   },
//   {
//     title: 'Rogue',
//     link: 'https://userogue.com',
//     thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png',
//   },

//   {
//     title: 'Editorially',
//     link: 'https://editorially.org',
//     thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png',
//   },


  

