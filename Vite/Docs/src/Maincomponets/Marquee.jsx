import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 bg-[#004D43] rounded-t-3xl"> 
        <div className=" text border-t-2 border-b-2 border-[#477f77] flex   whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{duration: 9, repeat: Infinity, ease: "linear"}} className="text-[21vw] leading-none font-['anton'] pr-20">WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{duration: 9, repeat: Infinity, ease: "linear"}} className="text-[21vw] leading-none font-['anton'] pr-20">WE ARE OCHI</motion.h1>
        </div>

      </div>
    </>
  )
}

export default Marquee
