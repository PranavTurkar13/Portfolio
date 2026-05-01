const WantedLevel = () => {
  const wantedStars = 5;

  return (
    <div className='fixed top-20 right-4 z-50 flex flex-col items-end gap-1'>
      <p className='text-yellow-400 text-md tracking-[0.3em] font-bold'>WANTED</p> 
      <div className='flex gap-[3px]'>
        {[1,2,3,4,5,6].map((star) => (
          <svg
            key={star}
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill={star <= wantedStars ? "#ffffff" : "#3a3a3a"}
            style={{
              filter: star <= wantedStars ? "drop-shadow(0 0 4px rgba(255,255,255,0.6))" : "none",
              transition: "fill 0.2s"
            }}
          >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
    </div>
  )
}

export default WantedLevel