
import { AboutUs } from './components/about/AboutUs'
import { ScrollToTop } from './components/common/ScrollTop'
import { Contact } from './components/contactus/Contact'
import { Experience } from './components/experience/Experience'
import { Hero } from './components/hero/Hero'
import { FloatingNavDemo } from './components/navbar/FloatingNavBar'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'

export default function Home() {
  return (
    <div className="mx-auto w-full">

      <ScrollToTop />
      <div>
        <Hero />

        <div className="top-gap bottom-gap" id='about-section'>
          <AboutUs />
        </div>

        <div className="top-gap bottom-gap" id='skills-section'>
        <Skills/>
        </div>

        {/* <div className="top-gap bottom-gap">
          <Projects />
        </div> */}

        <div className="top-gap bottom-gap" id='projects-section'>
          <Experience />
        </div>

        <div className="top-gap" id="contact-section">
          <Contact />
        </div>
      </div>
    </div>
  )
}
