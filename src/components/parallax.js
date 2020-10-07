import React, {useEffect, useRef, useState, useContext} from "react";
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
// import { Container } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import "../style/main.scss"
import { gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger); 
}
// gsap.registerPlugin(ScrollTrigger);


const Parallax = () => {
  const { hero } = useContext(PortfolioContext);
  // const { title, name, subtitle, cta } = hero;
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
  
  // wrapper.current = 
  gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth)
    tl.to
      (layer, 
        {y: movement, 
          ease: "none"}, 0
      )
      
  });
},[wrapper])

  return (
    <>
    {/* <Container> */}
    {/* <div className ='container' >  */}
  <div id='hero' ref={wrapper}>
  
  <div className='layer-bg layer parallax' data-depth='0.10'></div>
  
  <div className='layer-1 layer parallax' data-depth='0.20'></div>
  <div className='layer-2 layer parallax' data-depth='0.30'></div>
  <div className='layer-3 layer parallax' data-depth='0.40'></div>
  <div className='layer-4 layer parallax' data-depth='0.50'></div>
  <div className='layer-5 layer parallax' data-depth='0.70'></div>
  <div className='layer-overlay layer parallax' data-depth='0.80'></div> 
  <Fade top duration={1000} delay={500} distance="60px">
    <div className="wrapper">
      {/* <Container> */}
        <div className="scroll-btn">
          
          {/* <Link to="#projects" smooth duration={1000}>  */}
            <span>
              przewiń stronę powoli w dół
              </span>
            
          {/* </Link>  */}
        </div>
        <div className="hero-line"> </div>
            </div>
      {/* </Container> */}
            
    </Fade>
  <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
    <div className="wrapper">
    {/* <Container> */}
        <p className="hero-title">Zapraszamy</p>
    <p className="hero-title">w</p>
    <p className="hero-title">Beskid</p>
    <p className="hero-title">Wyspowy</p>
    </div>
    {/* </Container> */}
    </Fade>

  
  
  

{/* </div> */}

{/* <div id='content' >
  
  
    <section className='first-section'>
      <div className='row'>
        <div className='col-sm-6'>
          <h1>You cannot hide the soul. Through all his unearthly tattooings, I thought I saw the traces of a simple honest heart.</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6'>
          <h4>And besides all this, there was a certain lofty bearing about the Pagan, which even his uncouthness could not
             altogether maim. He looked like a man who had never cringed and never had had a creditor. Whether it was, too, 
             that his head being shaved, his forehead was drawn out in freer and brighter relief, and looked more expansive 
             than it otherwise would, this I will not venture to decide; but certain it was his head was phrenologically an
              excellent one.</h4>
          <h3>It may seem ridiculous, but it reminded me of General Washington's head, as seen in the popular busts of him. It 
            had the same long regularly graded retreating slope from above the brows, which were likewise very projecting, like 
            two long promontories thickly wooded on top. Queequeg was George Washington cannibalistically developed.</h3>
          <h3>Whilst I was thus closely scanning him, half-pretending meanwhile to be looking out at the storm from the casement, 
            he never heeded my presence, never troubled himself with so much as a single glance; but appeared wholly occupied with
             counting the pages of the marvellous book. Considering how sociably we had been sleeping together the night previous, 
             and especially considering the affectionate arm I had found thrown over me upon waking in the morning, I thought 
             this indifference of his very strange. But savages are strange beings; at times you do not know exactly how to take 
             them.</h3>
        </div>
      </div> */}
      {/* <div className='layer'></div> */}
    {/* {/* </section> */}
  </div>
{/* </div> */}
{/* </Container> */}

 </>
)

  }

export default Parallax