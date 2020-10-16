import React, {useEffect, useRef, useState} from "react";
import Fade from 'react-reveal/Fade';
import "../style/main.scss"
import { gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const Parallax = () => {
  const wrapper = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

    const tl = gsap.timeline({
      scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
  });

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    // TweenMax.to(app, 0, {css: {visibility: 'visible'}})

  gsap.from('body', {
      duration:1,
      // backgroundColor: '#27b50b',
      opacity:0,
      ease: 'none'
      }
  )
  
  gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth)
    tl.to
      (layer, 
        {y: movement, 
          ease: "none"}, 0
      )

  });
  // gsap.fromTo(['.hero-title'], 
  //   {opacity: 0, 
  //   }
  //   ,
  //   {   opacity:1, 
  //       duration: 2.6,      
  //       ease: 'power1.out', 
  //       stagger: 0.2
  //       // yoyo:true
  //   })

},[wrapper])

  return (
    <>
    <div id='hero' ref={wrapper}>
    
      <div className='layer-bg layer parallax' data-depth='0.10'></div>
      <div className='layer-1 layer parallax' data-depth='0.15'></div>
      <div className='layer-2 layer parallax' data-depth='0.25'></div>
      <div className='layer-3 layer parallax' data-depth='0.35'></div>
      <div className='layer-4 layer parallax' data-depth='0.40'></div>
      <div className='layer-overlay layer parallax' data-depth='0.45'></div> 
      <Fade top duration={1000} delay={500} distance="60px">
        <div className="wrapper">
            <div className="scroll-btn">
              <span>
                przewiń stronę powoli w dół
              </span>
            </div>
            <div className="hero-line"> </div>
        </div>
      </Fade>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <div className="wrapper">
          <p className="hero-title">Zapraszamy</p>
          <p className="hero-title">w</p>
          <p className="hero-title">Beskid</p>
          <p className="hero-title">Wyspowy</p>
        </div>
      </Fade>
    </div>
  </>
  )}

export default Parallax