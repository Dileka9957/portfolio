
// import { BackgroundGradientAnimation } from "./components/components/ui/background-gradient-animation";


import { ScrollToTop } from "./components/common/ScrollTop";
import { Contact } from "./components/contactus/Contact";
import { Experience } from "./components/experience/Experience";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/NavBar";
import { Projects } from "./components/projects/Projects";

export default function Home() {
  return (
    <div className="w-full mx-auto max-w-[1440px]">
      {/* <BackgroundGradientAnimation> */}
      <ScrollToTop/>
      <div>
        <div className="overflow-hidden w-full mx-auto max-w-4xl">
          <Navbar/>
        </div>
      
          <Hero/>
     
        <div className="top-gap bottom-gap">
          <Projects/>
        </div>

        <Experience/>
      
        <div className="top-gap bottom-gap" id="contact">
         <Contact/>
        </div>
        
        {/* </BackgroundGradientAnimation> */}
      </div>
    </div>
  );
}
