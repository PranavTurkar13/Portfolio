// src/pages/Home.jsx
import { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Navbar from '../components/Navbar';
import 'remixicon/fonts/remixicon.css'
import WantedLevel from '../components/WantedLevel';
import HUD from '../components/HUD';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects'; 
import {  useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home = () => {
  
  const [showContent, setShowContent] = useState(false)
  const [showSVG, setShowSVG] = useState(true)

  useGSAP(()=>{
    let t1 = gsap.timeline();
    t1.to("#vi-mask-group",{
      rotate:10, duration:3,
      transformOrigin:"50% 50%",
      ease:"Power4.easeInOut"
    }).to("#vi-mask-group",{
      scale:10, duration:3, delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress() >= 0.9){
          setShowSVG(false)
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(() => {
    if(!showContent) return;
    gsap.to(".main",{ rotate:0, scale:1, duration:2, delay:-1, ease:"Expo.easeInOut" })
    gsap.to(".back",{ rotate:0, scale:1, duration:2, delay:-.8, ease:"Expo.easeInOut" })
    gsap.to(".clouds",{ rotate:0, scale:1, duration:2, delay:-.8, ease:"Expo.easeInOut" })
    gsap.to(".character",{ rotate:0, scale:1, bottom:"0%", duration:2, delay:-.8, ease:"Expo.easeInOut" })

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 20;
      gsap.to(".imagesdiv .hero", { x:`${xMove * 0.4}%` });
      gsap.to(".imagesdiv .clouds", { x:xMove });
      gsap.to(".imagesdiv .back", { x:xMove });
    })
  }, [showContent]);

  useEffect(() => {
  return () => {
    gsap.killTweensOf("*")
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}, [])

  return (
    <>
      {showSVG && (
        <div className='svg flex items-center justify-center w-full h-screen overflow-hidden fixed top-0 left-0 z-[100] bg-[#000]'>
                <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
                <defs>
                    <mask id="viMask">
                    <rect width="100%" height="100%" fill='black' />
                    <g id="vi-mask-group">
                        <text x="50%" y="50%" fontSize="250" textAnchor='middle' fill='white' dominantBaseline='middle' fontFamily='Arial Black'>
                        VI
                        </text>
                    </g>
                    </mask>
                </defs>
                <image href="./bg.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" mask="url(#viMask)" />
                </svg>
        </div>
      )}
      

      {showContent && (
        <>
          <Navbar />
          <div className='main w-full rotate-[-10deg] scale-[1.7]'>
            <WantedLevel/>
            <div id="home" className='landing w-full h-screen bg-black overflow-hidden'>
              <div className='imagesdiv relative w-full h-screen'>
                <img className='clouds absolute scale-[1.2] rotate-[-15deg] top-0 left-0 w-full h-full object-cover' src="./clouds.png" alt="" />
                <img className='back absolute scale-[1.8] rotate-[-3] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
                <div className='hero absolute top-1/2 left-40 -translate-y-1/2 z-10 text-white px-8 py-6 rounded-2xl' style={{
                  background:"rgba(255,255,255,0.08)",
                  backdropFilter:"blur(14px)",
                  WebkitBackdropFilter:"blur(14px)",
                  borderBottom:"1px solid rgba(255,255,255,0.15)",
                }}>
                  <p className='text-2xl tracking-widest text-gray-300'>Hi, I'M</p>
                  <h1 className='text-9xl font-bold tracking-wide mt-1'>PRANAV <br/> TURKAR</h1>
                  <p className='text-4xl text-purple-500 tracking-widest [-webkit-text-stroke:1px_rgba(200,200,200,0.8)] mt-2'>Full Stack Developer</p>
                  <p className='text-2xl text-gray-800 mt-3 max-w-xs [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]'>I build things for the web.</p>
                  <div className='flex gap-4 mt-6'>
                    <button 
                    onClick={() => {
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className='px-6 py-2 bg-gray-300 hover:bg-gray-900 text-black hover:text-white rounded-full text-lg tracking-widest transition-all duration-300'>
                      View Missions
                    </button>
                    <a 
                    href="/Pranav_resume.pdf"
                    target='_blank'
                    rel='noreferrer'
                    className='px-6 py-2 border border-white hover:bg-white hover:text-black text-white rounded-full text-lg tracking-widest transition-all duration-300' style={{
                      background:"rgba(255,255,255,0.08)",
                      backdropFilter:"blur(7px)",
                    }}>
                      Resume
                    </a>
                  </div>
                </div>
                <img className='character absolute bottom-[-40%] right-25 w-[40%] max-w-[400px] scale-[2] object-contain object-bottom' src="./character_gta.png" alt="" />
                <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent'>
                  <div className='scroll absolute bottom-0 left-0 flex items-center gap-3 text-white px-5'>
                    <i className="ri-arrow-down-circle-line text-2xl"></i>
                    <div className='text-md font-["Helvetica"]'>Scroll Down</div>
                  </div>
                  <div className='absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <img className='h-[38px]' src="ps5.png" alt="" />
                  </div>
                  <HUD />
                </div>
              </div>
            </div>
            <About/>
            <Skills/>
            <Projects/> 
          </div>
        </>
      )}
    </>
  )
}

export default Home