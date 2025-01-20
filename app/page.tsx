
import { AboutUs } from './components/about/AboutUs'
import { ScrollToTop } from './components/common/ScrollTop'
import { Contact } from './components/contactus/Contact'
import { Experience } from './components/experience/Experience'
import { Hero } from './components/hero/Hero'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nipun Dileka - Portfolio',
  description: 'Professional portfolio of Nipun Dileka - Full-Stack Developer',
  keywords: ['Nipun Dileka', 'Dileka Nipun', 'Nipun portpolio', 'Nipun Dileka portfolio'],
  verification: {
    google: 'LP_DJOMZrIoXWN6EFwjYwLKcZpzogeshq_uu3Te2NkQ',
  }
}

export default function Home() {
  return (
    <div className="mx-auto w-full">

      <ScrollToTop />
      <div>
        <Hero />

        <div className="top-gap bottom-gap" id='about-section'>
          <AboutUs />
        </div>

        <div id='skills-section'>
        <Skills/>
        </div>

        <div className="top-gap bottom-gap" id='projects-section'>
          <Projects />
        </div>

        <div id='experience-section'>
          <Experience />
        </div>

        <div className="top-gap" id="contact-section">
          <Contact />
        </div>
      </div>
    </div>
  )
}
