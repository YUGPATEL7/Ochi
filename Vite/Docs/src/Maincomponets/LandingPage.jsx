import { easeIn, easeOut, motion } from 'framer-motion'
import React from 'react'

const LandingPage = () => {
  return (
    
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-[#f1f1f1] text-[#212121] pt-1">
        <div className="textStur mt-35 p-15">
          {['WE CREATE', 'EYE-OPENING', 'PRESENTATIONS'].map((text, index) => (
           <div className="masker w-fit flex items-center justify-center" key={index}>
  {index === 1 && (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "9vw" }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
      className="h-30 bg-cover bg-center rounded-2xl" // You can adjust height
      style={{ backgroundImage: `url('/imgs/ochi.jpeg')` }}
    />
  )}
  <h1 className="text-[7vw] font-['anton'] leading-[7vw] font-medium">
    {text}
  </h1>
</div>

          ))}
          </div>

        <div className="border-t-[1px] border-zinc-700 mt-32 flex items-center justify-between px-20 py-5 ">

        {['For public and private companies','From the first pitch to IPO'].map((text,index) => (
          <p className="text-[1.3rem] font-['Neue_Montreal']  tracking-tight leading-none  ">
            {text}
          </p>
        ))}
          <div className="start">
<button class="group text-[1.3rem] font-['Neue_Montreal'] flex h-12 items-center gap-5 rounded-full bg-neutral-200 px-6 py-2 border-2 border-zinc-900 transition-all duration-300 ease-in-out hover:bg-black hover:pr-3 hover:text-white active:bg-neutral-700">
  <span>START THE PROJECT</span>
  <span class="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
      class="-translate-x-[200%] rotate-300 text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:rotate-20"
      height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </span>
</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
