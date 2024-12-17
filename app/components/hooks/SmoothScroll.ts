function useScrollToSection() {
    const scrollToSection = (sectionId:string, duration:number) => {
      const section = document.getElementById(sectionId);
  
      if (section) {
        const targetOffset = section.offsetTop - 100;
  
        const start = window.scrollY;
        const distance = targetOffset - start;
        let startTime:number | undefined;
  
        const animateScroll = (timestamp:number) => {
          if (!startTime) {
            startTime = timestamp;
          }
  
          const progress = (timestamp - startTime) / duration;
          const easeInOutCubic = (t:number):number =>
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          const scrollTo = start + distance * easeInOutCubic(progress);
  
          window.scrollTo(0, scrollTo);
  
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
  
        requestAnimationFrame(animateScroll);
      }
    };
  
    return { scrollToSection };
  }
  
  export default useScrollToSection;
  