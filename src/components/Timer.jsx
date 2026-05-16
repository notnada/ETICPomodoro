import { ArrowPathIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from "react"

function Timer() {
  const modes = {
    focus: { label: "Focus", seconds: 1500 },
    break: { label: "Break", seconds: 300 },
    rest: { label: "Rest", seconds: 900 },
  }

  const [activeMode, setActiveMode] = useState("focus")
  const initialSeconds = modes[activeMode].seconds
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const toggleTimer = () => {
  setIsRunning((prev) => !prev)
}

  const switchMode = (mode) => {
    setActiveMode(mode)
    setIsRunning(false)
    setSeconds(modes[mode].seconds)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setSeconds(modes[activeMode].seconds)
  }

  useEffect(() => {
   if (!isRunning) return

  const timer = setInterval(() => {
    setSeconds((prev) => {
      if (prev <= 1) {
        setIsRunning(false)
        return 0
      }

      return prev - 1
    })
  }, 1000)

  return () => clearInterval(timer)

  }, [isRunning])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  

  return (
    <section id="timer" className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-0">
      {/* Mode tabs */}
        <div className="relative z-30 mb-[-20px] flex flex-wrap justify-center gap-2 px-2 sm:gap-3 w-full sm:w-auto">
          <button type="button" onClick={() => switchMode("focus")} className={`w-3xs sm:w-auto text-center px-6 py-3 sm:px-10 sm:py-4 rounded-[24px] shadow-md text-lg sm:text-2xl transition-all bg-white text-black ${activeMode === "focus" ? "font-bold" : "font-normal"}`}>Focus</button>
          <button type="button" onClick={() => switchMode("break")} className={`w-3xs sm:w-auto text-center px-6 py-3 sm:px-10 sm:py-4 rounded-[24px] shadow-md text-lg sm:text-2xl transition-all bg-white text-black ${activeMode === "break" ? "font-bold" : "font-normal"}`}>Break</button>
          <button type="button" onClick={() => switchMode("rest")} className={`w-3xs sm:w-auto text-center px-6 py-3 sm:px-10 sm:py-4 rounded-[24px] shadow-md text-lg sm:text-2xl transition-all bg-white text-black ${activeMode === "rest" ? "font-bold" : "font-normal"}`}>Rest</button>
        </div>

      {/* Card */}
      <div className="relative z-10 w-sm sm:w-md md:w-lg lg:w-xl xl:w-2xl rounded-[32px] bg-gradient-to-b from-[#E7BE6B] to-[#EC9E00] px-6 py-10 sm:px-12 sm:py-12 lg:px-40 lg:py-18 flex flex-col items-center gap-6 shadow-lg" >
        

      {/* Timer display */}
      <div className="text-5xl font-bold text-white leading-none sm:text-7xl lg:text-8xl">
        {formatTime(seconds)}
      </div>

      {/* Start button */}
      <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"> <button type="button" onClick={resetTimer} aria-label="Reset timer"><ArrowPathIcon className="w-5 h-5 text-white sm:w-6 sm:h-6" /></button>
      <button type="button" onClick={toggleTimer} className="w-3xs sm:w-auto bg-white text-black font-normal px-6 py-3 rounded-[24px] shadow-md text-lg sm:px-10 sm:text-2xl text-center">
        {isRunning ? "Pause" : "Start"}
        </button>
        <button type="button" aria-label="Settings" className="w-xs sm:w-auto text-center"><Cog6ToothIcon className="w-5 h-5 text-white sm:w-6 sm:h-6" /></button>
        </div>
       
      </div>

    </section>
  )
}

export default Timer
