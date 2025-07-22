import React, { useRef } from 'react'
import Card from './Card'

const Froground = () => {
  const ref = useRef(null)
    const data = [
        {
            desc: 'Download your free e-book on productivity.Access the full research document in PDF format.',
            filesize:"2.5MB",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
        {
            desc: 'Learn Python with this step-by-step guide.Complete course material for beginners.',
            filesize:"2.5MB",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
                {
            desc: 'Get the newest software update now.Download the installer for your OS.',
            filesize:"245.5MB",
            close:false,
            tag:{isOpen:false,tagTitle:"Not Now",tagColor:"blue"},
        },
                        {
            desc: 'Professional resume template (Word format).Download our free project report template.',
            filesize:"9MB",
            close:true,
            tag:{isOpen:true,tagTitle:"Not Now",tagColor:"blue"},
        },
                        {
            desc: 'Admission notice for Gujarat University 2025.Latest circular from the Education Department.',
            filesize:"245.5MB",
            close:false,
            tag:{isOpen:false,tagTitle:"Not Now",tagColor:"blue"},
        }
    ]
  return (
    <div>
      <div ref={ref} className="fixed top-0 left-0 w-full z-[3] h-full  flex gap-10 flex-wrap ">
        {data.map((item, index) => (
            <Card data={item} key={index} reference={ref} />
        ))}
      </div>
    </div>
  )
}

export default Froground
