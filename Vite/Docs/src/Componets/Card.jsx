import React from 'react'
import {motion, scale} from 'framer-motion'


const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{bounceStiffness:100,bounceDamping:10}} className=' relative flex-shrink-0 w-60 h-72 rounded-[30px] mt-10 ml-5 bg-[#f0f4f8]/60 text-[#50545a] px-8 py-10 overflow-hidden'>
      <img className='w-7 '  src="/public/file.svg" alt=" file"  />
      <p className='text-sm  leading-tight mt-5 font-semibold'> {data.desc} </p>
        <div className="footer absolute w-full bottom-0 left-0 ">
            <div className="flex items-center justify-between px-8 py-3">
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <img src="public/cancel.svg" alt="close" /> : <img src="/public/download.svg" alt="" /> }
                {/* <img src="/public/file.svg" alt="" /> */}
                </span>
            </div>
            {
              // #3b72d3 dwonloed line color 
            data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ?  "bg-[#014cd5]" : "bg-[#26ae61]"} flex items-center justify-center`}>
                {data.tag.tagColor === "green" ?<h3 className='text-sm font-semibold text-[#a3efbb]'>{data.tag.tagTitle}</h3> :<div className='w-3/4 h-1 bg-[linear-gradient(to_right,#ffffff_70%,#3b72d3_50%)] m-1.5'></div>} 
            </div> )
            }

        </div>
    </motion.div>
  )
}

export default Card
