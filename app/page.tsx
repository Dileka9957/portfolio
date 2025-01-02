
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

        <div className="top-gap bottom-gap">
          <AboutUs />
        </div>

        <Skills/>

        <div className="top-gap bottom-gap">
          <Projects />
        </div>

        <Experience />

        <div className="top-gap" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  )
}
