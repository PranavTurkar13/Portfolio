// components/HUD.jsx
const HUD = () => {
  return (
    <div className='absolute bottom-8 right-6 z-50 flex flex-col gap-2 font-["Arial_Black"]'>

      {/* Health */}
      <div className='flex items-center gap-2'>
        <span className='text-red-500 text-xs tracking-widest font-bold w-14 text-right'>HEALTH</span>
        <div className='w-36 h-4 bg-[#1a1a1a] border border-[#555] relative overflow-hidden'>
          <div className='h-full bg-red-500 w-[80%]'>
            <div className='absolute top-0 left-0 right-0 h-[5px] bg-white/10'></div>
          </div>
        </div>
      </div>

      {/* Armor */}
      <div className='flex items-center gap-2'>
        <span className='text-blue-400 text-xs tracking-wildest font-bold w-14 text-right'>ARMOR</span>
        <div className='w-36 h-4 bg-[#1a1a1a] border border-[#555] relative overflow-hidden'>
          <div className='h-full bg-blue-400 w-[60%]'>
            <div className='absolute top-0 left-0 right-0 h-[5px] bg-white/10'></div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default HUD