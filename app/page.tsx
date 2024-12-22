// import { BackgroundGradientAnimation } from "./components/components/ui/background-gradient-animation";

import { AboutUs } from './components/about/AboutUs'
import { ScrollToTop } from './components/common/ScrollTop'
import { Contact } from './components/contactus/Contact'
import { Experience } from './components/experience/Experience'
import { Hero } from './components/hero/Hero'
import { FloatingNavDemo } from './components/navbar/FloatingNavBar'
import { Projects } from './components/projects/Projects'

export default function Home() {
  return (
    <div className="mx-auto w-full">
      {/* <BackgroundGradientAnimation> */}
      <ScrollToTop />
      <div>
        <div className="mx-auto w-full max-w-[1440px] overflow-hidden pb-40 sm:pb-[48px] px-4">
          <FloatingNavDemo/>
        </div>

        <Hero />

        <div className="top-gap bottom-gap">
          <AboutUs />
        </div>

        <div className="top-gap bottom-gap">
          <Projects />
        </div>

        <Experience />

        <div className="top-gap bottom-gap" id="contact">
          <Contact />
        </div>

        {/* </BackgroundGradientAnimation> */}
      </div>
    </div>
  )
}
