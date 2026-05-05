// src/pages/AllProjects.jsx
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const statusStyle = (status) => {
  if (status === "COMPLETED")   return "text-green-400 border-green-400"
  if (status === "IN PROGRESS") return "text-yellow-400 border-yellow-400"
  return "text-gray-400 border-gray-400"
}

const filters = ["ALL", ...new Set(projects.map(p => p.type))]

const AllProjects = () => {
  const containerRef = useRef(null)
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState("ALL")
  const filtered = activeFilter === "ALL"
    ? projects
    : projects.filter(p => p.type === activeFilter)

  useGSAP(() => {
    const elements = containerRef.current.querySelectorAll(".reveal")
    elements.forEach((el, i) => {
      gsap.fromTo(el,
        { filter: "blur(8px)", y: 20 },
        {
          filter: "blur(0px)", y: 0,
          duration: 0.5,
          delay: i * 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none",
            once: true,
          }
        }
      )
    })
    setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => {
        ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, { scope: containerRef, dependencies: [] })

  return (
    <div
      ref={containerRef}
      className='w-full min-h-screen bg-[#0d0d0d] '
    >
      
      <Navbar />

      {/* scanline */}
      <div className='fixed inset-0 pointer-events-none z-0'
        style={{background:"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.025) 2px,rgba(0,0,0,0.025) 4px)"}}
      />

      <div className='relative z-10 max-w-5xl mx-auto px-10 pt-32 pb-20'>

        {/* back button */}
        <button
          onClick={() => navigate('/')}
          className='reveal flex items-center gap-2 text-[#585454] text-[10px] tracking-[4px] mb-10 hover:text-purple-500 transition-colors duration-200 font-["Arial_Black"]'
        >
          ← BACK TO HOME
        </button>

        {/* header */}
        <div className='reveal flex items-center gap-4 mb-2 font-["Arial_Black"]'>
          <span className='bg-purple-500 text-white text-[12px] tracking-[3px] px-2 py-1'>ALL MISSIONS</span>
          <span className='text-[#585454] text-[10px] tracking-[4px]'>{projects.length} TOTAL MISSIONS</span>
        </div>
        <h2 className='reveal text-7xl text-white tracking-widest [-webkit-text-stroke:2px_rgba(255,255,255,0.05)]'>
          PROJECTS
        </h2>
        <div className='reveal w-20 h-[3px] bg-purple-500 mt-3 mb-10'></div>

        {/* filter bar */}
        <div className='reveal flex gap-3 mb-10 flex-wrap font-["Arial Black"]'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[9px] tracking-[3px] px-4 py-2 border transition-all duration-200 font-["Arial_Black"]
                ${activeFilter === filter
                  ? 'border-purple-500 text-purple-400 bg-purple-500/10'
                  : 'border-[#1e1e1e] text-[#585454] hover:border-purple-500/50 hover:text-purple-500/50'
                }`}
            >
              {filter}
            </button>
          ))}
          
          <span className='text-[#2a2a2a] text-[9px] tracking-[3px] self-center ml-2'>
            {filtered.length} MISSIONS
          </span>
        </div>

        {/* cards grid */}
        <div className='grid grid-cols-3 gap-4 font font-["Arial_Black"]'>
          {filtered.map((project) => (
            <div
              key={project.id}
              className='reveal border border-[#1a1a1a] bg-[#0f0f0f] group hover:border-purple-500 transition-all duration-300 relative overflow-hidden flex flex-col'
            >
              <div className='absolute top-0 left-0 right-0 h-[2px] bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              {/* top number area */}
              <div className='w-full h-[140px] bg-[#111] relative flex items-center justify-center overflow-hidden'>
                <span className='text-[80px] font-black text-[#161616] leading-none select-none'>
                  {String(project.id).padStart(2, '0')}
                </span>
                <div className='absolute top-3 left-3 bg-purple-500 text-white text-[8px] tracking-[3px] px-2 py-1'>
                  {project.mission}
                </div>
                <div className={`absolute top-3 right-3 text-[7px] tracking-[2px] px-2 py-1 border ${statusStyle(project.status)}`}>
                  ● {project.status}
                </div>
              </div>

              {/* body */}
              <div className='p-5 flex flex-col gap-3 flex-1'>
                <div>
                  <p className='text-purple-500 text-[8px] tracking-[4px] mb-2'>// {project.category}</p>
                  <h3 className='text-white text-[13px] tracking-[2px] leading-snug'>{project.title}</h3>
                </div>
                <div className='w-full h-[1px] bg-[#1a1a1a]'></div>
                <p className='text-[#585454] text-[11px] leading-6 tracking-wide font-["Arial"] flex-1'>{project.desc}</p>

                {/* tech tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((t) => (
                    <span key={t} className='text-[7px] tracking-[2px] px-2 py-1 border border-[#1e1e1e] text-[#444] group-hover:border-purple-500/30 group-hover:text-purple-500/50 transition-all duration-300'>
                      {t}
                    </span>
                  ))}
                </div>

                <div className='w-full h-[1px] bg-[#1a1a1a]'></div>

                {/* buttons */}
                <div className='flex gap-2 flex-wrap'>
                  {(project.live || project.frontendUrl) && (
                    <a href={project.live || project.frontendUrl} target='_blank' rel='noreferrer'
                      className='flex-1 text-center text-[9px] tracking-[3px] py-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200'>
                      {project.frontendUrl ? "FRONTEND ↗" : "LIVE ↗"}
                    </a>
                  )}
                  {project.backendUrl && (
                    <a href={project.backendUrl} target='_blank' rel='noreferrer'
                      className='flex-1 text-center text-[9px] tracking-[3px] py-2 border border-blue-500/50 text-blue-400/70 hover:bg-blue-500/20 transition-all duration-200'>
                      BACKEND ↗
                    </a>
                  )}
                  <a href={project.github} target='_blank' rel='noreferrer'
                    className='flex-1 text-center text-[9px] tracking-[3px] py-2 border border-[#1e1e1e] text-[#585454] hover:border-[#555] hover:text-[#aaa] transition-all duration-200'>
                    GITHUB →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom stat bar */}
        <div className='reveal flex items-center justify-between border border-[#1a1a1a] px-5 py-4 bg-[#0f0f0f] mt-6 font-["Arial_Black"]'>
          <p className='text-[#585454] text-[9px] tracking-[4px]'>
            {filtered.length} OF {projects.length} MISSIONS DISPLAYED
          </p>
          <span className='text-[9px] text-purple-500 tracking-[3px] border border-purple-500/30 px-3 py-1'>
            ● FULLY LOADED
          </span>
        </div>

      </div>
    </div>
  )
}

export default AllProjects