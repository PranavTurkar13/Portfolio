// components/Skills.jsx
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiMysql, SiJsonwebtokens, SiPostman, SiGithub, SiVercel, SiRender } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

gsap.registerPlugin(ScrollTrigger);

const categories = {
  frontend: {
    label: "// PRIMARY WEAPONS",
    title: "FRONTEND",
    sub: "YOUR MAIN ARSENAL",
    skills: [
      { name: "REACT.JS",     icon: <FaReact      className='text-[#61DAFB]' /> },
      { name: "JAVASCRIPT",   icon: <SiJavascript className='text-[#F7DF1E]' /> },
      { name: "TAILWIND CSS", icon: <SiTailwindcss className='text-[#38BDF8]' /> },
      { name: "HTML & CSS",   icon: <FaHtml5      className='text-[#E34F26]' /> },
    ],
  },
  backend: {
    label: "// HEAVY WEAPONS",
    title: "BACKEND",
    sub: "SERVER SIDE FIREPOWER",
    skills: [
      { name: "NODE.JS",    icon: <FaNodeJs   className='text-[#68A063]' /> },
      { name: "EXPRESS.JS", icon: <SiExpress  className='text-white'     /> },
      { name: "MONGODB",    icon: <SiMongodb  className='text-[#47A248]' /> },
      { name: "JWT AUTH",   icon: <SiJsonwebtokens className='text-[#d63aff]' /> },
    ],
  },
  languages: {
    label: "// SECONDARY WEAPONS",
    title: "LANGUAGES",
    sub: "BACKUP FIREPOWER",
    skills: [
      { name: "PYTHON", icon: <FaPython className='text-[#3776AB]' /> },
      { name: "JAVA",   icon: <FaJava   className='text-[#ED8B00]' /> },
      { name: "SQL",    icon: <SiMysql  className='text-[#4479A1]' /> },
      { name: "CSS",    icon: <FaCss3Alt className='text-[#264de4]' /> },
    ],
  },
  tools: {
    label: "// GEAR & EQUIPMENT",
    title: "TOOLS",
    sub: "MISSION EQUIPMENT",
    skills: [
      { name: "GIT",      icon: <FaGitAlt   className='text-[#e26344]' /> },
      { name: "GITHUB",   icon: <SiGithub   className='text-white'     /> },
      { name: "POSTMAN", icon: <SiPostman  className='text-[#f26f11]' /> },
      {name:"VERCEL", icon:<SiVercel className='text-[#fffefe]'/>},
      {name:"Render",icon:<SiRender className="text-[#e3dcdc]" />}
    ],
  },
}

const Skills = () => {
  const containerRef = useRef(null)
  const [activeCat, setActiveCat] = useState("frontend")

  useGSAP(() => {
    const elements = containerRef.current.querySelectorAll(".reveal")
    elements.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, filter: "blur(10px)", y: 30 },
        {
          opacity: 1, filter: "blur(0px)", y: 0,
          duration: 0.8,
          delay: i * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      )
    })
  }, { scope: containerRef, dependencies: [] })

  const current = categories[activeCat]

  return (
    <div
      id="skills"
      ref={containerRef}
      className='w-full min-h-screen bg-[#0d0d0d] px-20 py-16'
    >
      {/* Scanline */}
      <div className='fixed inset-0 pointer-events-none z-0'
        style={{background:"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.025) 2px,rgba(0,0,0,0.025) 4px)"}}
      />

      <div className='relative z-10 max-w-5xl mx-auto'>

        {/* Header */}
        <div className='reveal flex items-center gap-4 mb-2 font-[Arial_Black]'>
          <span className='bg-purple-500 text-white text-[12px] tracking-[3px] px-1 py-1'>LOADOUT</span>
          <span className='text-[#585454] text-[10px] tracking-[4px]' >SELECT YOUR WEAPON</span>
        </div>
        <h2 className='reveal text-7xl text-white tracking-wildest [-webkit-text-stroke:2px_rgba(255,255,255,0.05)]'>
          SKILLS
        </h2>
        <div className='reveal w-20 h-[3px] bg-purple-500 mt-3 mb-12'></div>

        {/* Main Layout */}
        <div className='flex gap-12 items-start'>

          {/* LEFT — GTA Girl Image */}
          <div className='reveal w-[300px] flex flex-col gap-2'>
            <div className='relative border border-[#1e1e1e] overflow-hidden bg-[#111]' style={{aspectRatio:'3/4'}}>
              {/* corner brackets */}
              <div className='absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500 z-10'></div>
              <div className='absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-500 z-10'></div>
              <div className='absolute bottom-14 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-500 z-10'></div>
              <div className='absolute bottom-14 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500 z-10'></div>

              <img
                src='./michael.jpeg'
                alt='GTA Character'
                className='w-full h-full object-cover object-top bg-black'
              />

              {/* bottom label */}
              <div className='absolute bottom-0 left-0 right-0 bg-purple-500 px-3 py-2 font-[Arial_Black]'>
                <p className='text-[10px] text-white/60 tracking-[3px]'>Michael</p>
                <p className='text-[13px] text-white tracking-[2px] mt-1'>WEAPONS DEALER</p>
              </div>
            </div>

            {/* category quick select below image */}
            <div className='grid grid-cols-2 gap-1 mt-[1px] font-[Arial_Black]'>
              {Object.entries(categories).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setActiveCat(key)}
                  className={`py-3 px-4 text-[12px] tracking-wildest border transition-all duration-200 text-left
                    ${activeCat === key
                      ? 'border-purple-500 text-purple-400 bg-[#111]'
                      : 'border-[#1e1e1e] text-[#585454] bg-[#0f0f0f] hover:border-purple-500/50 hover:text-purple-500/50'
                    }`}
                >
                  {val.title}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Skills Panel */}
          <div className='flex flex-col gap-4 flex-1'>

            {/* active file header */}
            <div className='reveal flex justify-between items-center'>
              <p className='text-purple-500 text-2xl tracking-wildest'>{current.label}</p>
              <span className='text-[11px] tracking-[3px] border border-[#1e1e1e] px-3 py-1 text-[#585454] font-[Arial_Black]'>
                {current.skills.length} WEAPONS
              </span>
            </div>

            <div className='reveal w-full h-[1px] bg-[#1e1e1e]'></div>

            {/* active title */}
            <div className='reveal'>
              <h3 className='text-4xl text-white tracking-wildest'>{current.title}</h3>
              <p className='text-[12px] text-[#585454] tracking-wider mt-1 font-[Arial_Black]'>{current.sub}</p>
            </div>

            {/* skills list */}
            <div className='reveal flex flex-col gap-2 mt-2'>
              {current.skills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-4 border border-[#1a1a1a] px-6 py-5 hover:border-purple-500 transition-all duration-200 group font-[Arial_Black]'
                >
                  <div className='w-[6px] h-[6px] bg-purple-500 shrink-0'></div>
                  <span className='text-xl w-6 flex items-center justify-center'>
                    {skill.icon}
                    </span>
                  <span className='text-[12px] text-[#aaa] tracking-[3px] flex-1 group-hover:text-white transition-colors duration-200'>
                    {skill.name}
                  </span>
                  <span className='text-[9px] tracking-[2px] border border-[#1e1e1e] text-[#585454] px-3 py-2 group-hover:border-purple-500/50 group-hover:text-purple-500/50 transition-all duration-200'>
                    UNLOCKED
                  </span>
                </div>
              ))}
            </div>

            {/* stat boxes */}
            <div className='reveal grid grid-cols-3 gap-3 mt-2'>
              <div className='border border-[#1a1a1a] border-t-purple-500 border-t-2 p-4 bg-[#0f0f0f]'>
                <p className='text-3xl text-white'>16+</p>
                <p className='text-[8px] text-[#333] tracking-[3px] mt-2'>TOTAL WEAPONS</p>
              </div>
              <div className='border border-[#1a1a1a] border-t-purple-500 border-t-2 p-4 bg-[#0f0f0f]'>
                <p className='text-3xl text-white'>4</p>
                <p className='text-[8px] text-[#333] tracking-[3px] mt-2'>CATEGORIES</p>
              </div>
              <div className='border border-[#1a1a1a] border-t-purple-500 border-t-2 p-4 bg-[#0f0f0f]'>
                <p className='text-3xl text-purple-500'>ALL</p>
                <p className='text-[8px] text-[#333] tracking-[3px] mt-2'>UNLOCKED</p>
              </div>
            </div>

            {/* hire level */}
            <div className='reveal flex items-center justify-between border border-[#1a1a1a] px-4 py-4 bg-[#0f0f0f]'>
              <p className='text-[8px] text-[#333] tracking-[5px]'>LOADOUT STATUS</p>
              <span className='text-[9px] text-purple-500 tracking-[3px] border border-purple-500/30 px-3 py-1'>
                ● FULLY EQUIPPED
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills