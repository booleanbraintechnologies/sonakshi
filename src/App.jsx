import './App.css';
import Nev from './Components/Nev';
import bg from './Assets/bg.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import Hero from './Components/Hero';
import Works from './Components/Works';
import About from './Components/About';
import Acadmic from './Components/Acadmic';
import Addons from './Components/Addons';
import Techskills from './Components/Techskills';
import Arcitecturalintrest from './Components/Arcitecturalintrest';
import Imagesshow from './Components/Imagesshow';
import Contact from './Components/Contact';
import Cursor from './Components/Cursor';
import Footer from './Components/Footer';
import Freelance from './Components/Freelance';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: ".top_page",
        start: "bottom bottom", // When the bottom of the trigger element hits the bottom of the viewport
        end: "bottom top",         // When the top of the trigger element hits the top of the viewport
        scrub: true,            // Smooth scrubbing
        // markers: true           // Show markers for debugging
      },
      // scale: 0.5, // Scale down the background image
      duration: 3,
      backgroundSize: "200%"
    });
  }, []);

  return (
    <>
      <div className='h-screen w-full fixed top-0 left-0 -z-50' style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: '100%',
        backgroundPosition: 'top center',
      }} ref={bgRef}></div>
      <div className='bg-[#000000bb] h-screen w-full top_page' id='home'>
        <Nev />
        <Hero />
      </div>
      <div className='bg-[#000000bb] w-full' id='work'>
        <Works />
      </div>
      <div className='bg-[#000000dd] w-full about_parent'>
        <About />
      </div>
      <div className='bg-[#000000bb] w-full md:h-screen'>
        <Acadmic />
      </div>
      {/* <div className='bg-[#000000bb] w-full'>
        <Freelance />
      </div> */}
      <div className='bg-[#000000bb] w-full'>
        <Addons />
      </div>
      {/* <div className='bg-[#000000bb] w-full'>
        <Techskills />
      </div> */}
      <div className='bg-[#000000bb] w-full'>
        <Arcitecturalintrest />
      </div>
      {/* <div className='bg-[#000000bb] w-full md:block hidden'>
        <Imagesshow />
      </div> */}
      <div className='bg-[#000000bb] w-full' id='contact'>
        <Contact />
      </div>
      <div className='bg-[#000000bb] w-full'>
        <Footer />
      </div>

      <Cursor />
    </>
  );
}

export default App;
