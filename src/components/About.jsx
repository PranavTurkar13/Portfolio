import { useRef } from "react"
import ActiveStamp from "./ActiveStamp"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger);

const Star = () => (
  <svg
    viewBox="0 0 24 24"
    fill="white"
    className="w-5 h-5"
  >
    <path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.6L12 16.9 5.8 20l1.6-6.6-5.2-4.5 6.9-.6L12 2z"/>
  </svg>
);

const About = () => {
  const containerRef = useRef(null);
  useGSAP(()=>{
    const elements = containerRef.current.querySelectorAll(".reveal");
    elements.forEach((el,i) => {
      gsap.fromTo(el,{
        opacity: 0,
        filter: "blur(10px)",
        y: 30,
      },{
        opacity:1,
        filter:"blur(0px)",
        y:0,
        duration:0.8,
        delay:i*0.1,
        ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", 
            toggleActions: "play none none none",
        }
      })
    },{ scope: containerRef, dependencies: [] });
  });
  return (
    <div id='about' ref={containerRef}  className='w-full min-h-screen bg-[#0d0d0d] px-70 py-16'>

      {/* Header */}
      <div className='reveal flex items-center gap-4 mb-2 font-["Arial_Black"]'>
        <span className='bg-purple-500 text-white text-[12px] tracking-[3px] px-1 py-1'>LSPD FILE</span>
        <span className='text-[#585454] text-[10px] tracking-[4px]'>CASE NO. PT-2004-07-13</span>
      </div>
      <h2 className='reveal text-7xl text-white tracking-wildest [-webkit-text-stroke:2px_rgba(255,255,255,0.05)]'>ABOUT ME</h2>
      <div className='reveal w-20 h-[3px] bg-purple-500 mt-3 mb-12'></div>

      {/* Main Layout */}
      <div className='flex gap-8 items-start max-w-5xl'>

        {/* LEFT — Photo */}
        <div className='reveal flex flex-col gap-3 w-[300px] shrink-0 font-[Arial_Black]'>
          <div className='border border-[#1e1e1e] bg-[#111] relative overflow-hidden' style={{aspectRatio:'3/4'}}>
            {/* Purple corner brackets */}
            <div className='absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500'></div>
            <div className='absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-500'></div>
            <div className='absolute bottom-14 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-500'></div>
            <div className='absolute bottom-14 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500'></div>

            {/* 👇 Replace src with your actual photo */}
            <img
              src='./jailer.png'
              alt='Pranav'
              className='w-full h-full object-cover object-top'
            />

            {/* Name bar */}
            <div className='namebar absolute bottom-0 left-0 right-0 bg-purple-500 px-3 py-2'>
              <p className='text-[8px] text-white/60 tracking-[3px]'>SUSPECT</p>
              <p className='text-[13px] text-white tracking-[2px] mt-1'>PRANAV TURKAR</p>
            </div>
          </div>

          <div className="left border border-[#1e1e1e] bg-[#111] px-5 py-2">
            <div className="flex justify-between items-center px-1 ">
              <span className="text-[#585454] text-sm tracking-widest">LOCATION</span>
              <span className="text-[#d3c8c8] text-sm">PUNE, IN</span>
            </div>
            <div className="w-full h-[3px] bg-[#1e1e1e] mt-3 mb-3"></div>
            <div className="flex justify-between items-center px-1 ">
              <span className="text-[#585454] text-sm tracking-widest">CGPA</span>
              <span className="text-[#d3c8c8] text-sm">9.05</span>
            </div>
            <div className="w-full h-[3px] bg-[#1e1e1e] mt-3 mb-3"></div>
            <div className="flex justify-between items-center px-1 ">
              <span className="text-[#585454] text-sm tracking-widest">EXP</span>
              <span className="text-[#d3c8c8] text-sm">1 YR</span>
            </div>
            <div className="w-full h-[3px] bg-[#1e1e1e] mt-3 mb-3"></div>
            <div className="flex justify-between items-center px-1 ">
              <span className="text-[#585454] text-sm tracking-widest">STATUS</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#07e124]"></span>
                <span className="text-[#07e124] text-sm">AVAILABLE</span>
              </div>
            </div>
          </div>
          

        </div>

        {/* RIGHT — coming next */}
        <div className='reveal flex flex-col w-full gap-5'>
          <div className="flex justify-between">
            <p className='text-purple-500 text-2xl translate-x-0.5 translate-y-1/2 tracking-widest'>
                //Official file
            </p>
            <ActiveStamp />
          </div>
          {/* line */ }
          <div className=" w-full h-[3px] bg-[#1e1e1e]"></div>

          <div className="flex gap-3 items-center">
            <div className="w-[2px] h-[100px] bg-purple-500 mt-3 mb-3"></div>
            <p className="font-[sans_serif] text-[#d3c8c8] tracking-wider">Final-year IT Engineering student from <span className="text-purple-500">PES Modern College, Pune</span>. Specialising in full-stack web development with hands-on experience in <span className="text-purple-500">React, Node.js, Express</span> and <span className="text-purple-500">MongoDB</span>. Passionate about building scalable, user-friendly applications that solve real-world problems.</p>
          </div>

          <div className="">
            <p className="text-sm text-gray-500 tracking-[4px] mb-3">
              // KNOWN ASSOCIATES
            </p>

            <div className="flex flex-wrap gap-2 font-[Arial_Black]">
              {[
                "REACT",
                "NODE.JS",
                "EXPRESS",
                "MONGODB",
                "TAILWIND",
                "JS",
                "CSS",
                "HTML",
                "SQL",
                "JAVA",
                "PYTHON",
                "JWT",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-gray-500 text-gray-400 
                  text-xs tracking-wider font-bold 
                  inline-block w-fit 
                  hover:border-purple-500 hover:text-purple-400 
                  transition-all duration-200 
                  rounded-sm cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center w-[28%] h-35 border border-[#1e1e1e] border-t-purple-500 border-t-2 py-4">
              <p className="text-5xl text-blue-500 text-center">5+</p>
              <p className="text-lg text-[#585454] font-[Arial_Black] text-center">Missions Done</p>
            </div>
            <div className="flex flex-col items-center w-[28%] h-35 border border-[#1e1e1e] border-t-purple-500 border-t-2 py-4">
              <p className="text-5xl text-green-600 text-center">9.05</p>
              <p className="text-lg text-[#585454] font-[Arial_Black] text-center">Cgpa Score</p>
            </div>
            <div className="flex flex-col items-center w-[28%] h-35 border border-[#1e1e1e] border-t-purple-500 border-t-2 py-4">
              <p className="text-5xl text-red-500 text-center">999+</p>
              <p className="text-lg text-[#585454] font-[Arial_Black] text-center">Bugs Solved</p>
            </div>
            <div className="flex flex-col items-center w-[28%] h-35 border border-[#1e1e1e] border-t-purple-500 border-t-2 py-4">
              <p className="text-5xl text-yellow-500 text-center">∞</p>
              <p className="text-lg text-[#585454] font-[Arial_Black] text-center">Coffee Consumed</p>
            </div>
          </div>

          <div className="w-full flex justify-between items-center 
            border border-[#1e1e1e] px-4 py-6">
              <p className="font-[Arial_Black] tracking-widest text-[#585454]">
                HIRE LEVEL
              </p>
              <div className="flex gap-1">
                {Array(5).fill().map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About