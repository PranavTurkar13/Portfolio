import { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Navbar from './components/Navbar';
import 'remixicon/fonts/remixicon.css'
import WantedLevel from './components/WantedLevel';
import HUD from './components/HUD';

const App = () => {
  const [showContent, setShowContent] = useState(false)
  useGSAP(()=>{
    let t1 = gsap.timeline();

    t1.to("#vi-mask-group",{
      rotate:10,
      duration:3,
      transformOrigin:"50% 50%",
      ease:"Power4.easeInOut"
    }).to("#vi-mask-group",{
      scale:10,
      duration:3,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress() >= 0.9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(() => {
   const main = document.querySelector(".main");
   main?.addEventListener("mousemove",function(e){
    const xMove = (e.clientX / window.innerWidth -0.5)*20;
    gsap.to(".imagesdiv .hero",{x:`${xMove * 0.4}%`});
    gsap.to(".imagesdiv .clouds", {x:xMove});
    gsap.to(".imagesdiv .back" ,{x:xMove});
   })

  }, [showContent]);
  return (
    <>
      <div className='svg flex items-center justify-center w-full h-screen overflow-hidden fixed top-0 left-0 z-[100] bg-[#000]'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id ="viMask">
              <rect width="100%" height="100%" fill='black' />
              <g id="vi-mask-group">
                <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor='middle'
                fill='white'
                dominantBaseline='middle'
                fontFamily='Arial Black'>
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image 
          href="./bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && 
      (<div className='main w-full'>
        <WantedLevel/>
        <HUD />
        <div className='landing w-full h-screen bg-black overflow-hidden'> 
          <Navbar />
          <div className='imagesdiv relative w-full h-screen'>
            <img className='clouds absolute scale-[1.2] top-0 left-0 w-full h-full object-cover' src="./clouds.png" alt="" />
            <img className='back absolute scale-[1.2] top-0 left-0 w-full h-full object-cover'  src="./bg.png" alt="" />
            <div className='hero absolute top-1/2 left-40 -translate-y-1/2 z-10 text-white px-8 py-6 rounded-2xl' style={{
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
      }}>
              <p className='text-2xl tracking-widest text-gray-300'>Hi, I'M</p>
              <h1 className='text-9xl font-bold tracking-wide mt-1'>PRANAV <br/> TURKAR</h1>
              <p className='text-4xl text-purple-500 tracking-widest mt-2'>Full Stack Developer</p>
              <p className='text-2xl text-gray-800 mt-3 max-w-xs leading-wildest'>
                I build things for the web.
              </p>
              <div className='flex gap-4 mt-6'>
                <button className='px-6 py-2 bg-gray-300 hover:bg-gray-900 text-black hover:text-white rounded-full text-lg tracking-widest transition-all duration-300'>
                  View Missions
                </button>
                <button className='px-6 py-2 border border-white hover:bg-white hover:text-black text-white rounded-full text-lg tracking-widest transition-all duration-300' style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(7px)",
                    WebkitBackdropFilter: "blur(7px)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                  }}>
                  Resume
                </button>
              </div>
            </div>
            <img className='absolute bottom-0 right-25 w-[40%] max-w-[400px] object-contain object-bottom' src="./character_gta.png" alt="" />
          </div>
          <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent'>
            <div className='scroll absolute bottom-0 left-0 flex items-center gap-3 text-white px-5'>
              <i className="ri-arrow-down-circle-line text-2xl"></i>
              <div className='text-md font-["Helvetica"]'> Scroll Down</div>
            </div>
            <div className='absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <img className='h-[38px]' src="ps5.png" alt="" />
            </div>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default App
