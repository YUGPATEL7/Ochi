
import React, { useEffect, useState,useRef } from 'react'

const Eyes = () => {
const [rotation, setRotation] = useState(0);
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let x = e.clientX;
      let y = e.clientY;

      let deltaX =  x - window.innerWidth / 2;
      let deltaY =  y - window.innerHeight / 2 ;
      var  angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotation(angle-180);

  }) });
  return (
    <div className='w-full  h-full outline-hidden bg-[#f6f6f6] mt-0 pt-0 relative'>
      <div data-scroll data-scroll-speed="-.9" className="relative  w-full h-full bg-cover bg-center bg-[url('/imgs/EyesBackground.jpg')]">
      <div className="absolute flex  gap-10 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

      <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
        <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full items-center justify-center">
        <div style={{transform:`translate(0%,0%) rotate(${rotation}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 "> 
        <div className="w-10 h-10 bg-zinc-100 rounded-full  ">
        </div>
        </div>
        </div>
      </div>
      <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
        <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full items-center justify-center">
        <div style={{transform:`translate(0%,0%) rotate(${rotation}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10  ">
        <div className="w-10 h-10 bg-zinc-100 rounded-full ">
        </div>
        </div>
        </div>
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default Eyes
