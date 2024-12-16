
// import { BackgroundGradientAnimation } from "./components/components/ui/background-gradient-animation";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/NavBar";

export default function Home() {
  return (
    <div className="w-full">
      {/* <BackgroundGradientAnimation> */}
        <div className=" overflow-hidden w-full mx-auto max-w-4xl">
          <Navbar/>
        </div>
        <div className="">
          <Hero/>
        </div>
        {/* </BackgroundGradientAnimation> */}
    </div>
  );
}
