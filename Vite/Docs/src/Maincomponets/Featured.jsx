import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Featured = () => {
const [hovering, setHovering] = useState(false)
    const projects = [
        {
            title: "Salience Labs",
            image: "/imgs/card1.png",
            heading: "SALIENCE LABS",
            headingClass: "left-full -translate-x-1/2",
            spanClass: "inline-block z-10",
            buttonText: "BRAND IDENTITY",
        },
        {
            title: "Cardboard Spaceship",
            image: "/imgs/card2.png",
            heading: "Cardboard Spaceship",
            headingClass: "right-full translate-x-1/2 uppercase",
            spanClass: "z-10 uppercase",
            buttonText: "BRANDED TEMPLATE",
        },
        {
            title: "AH2 & Matt Horn",
            image: "/imgs/card3.png",
            heading: "AH2 & Matt Horn",
            headingClass: "left-full -translate-x-1/2",
            spanClass: "inline-block z-10",
            buttonText: "PITCH DECK",
        },
        {
            title: "Fyde",
            image: "/imgs/card4.png",
            heading: "Fyde",
            headingClass: "right-full translate-x-1/2 uppercase",
            spanClass: "z-10 uppercase",
            buttonText: "COPYWRITING",
        },
        {
            title: "Vise",
            image: "/imgs/card5.png",
            heading: "Vise",
            headingClass: "left-full -translate-x-1/2",
            spanClass: "inline-block z-10",
            buttonText: "AGENCY",
        },
        {
            title: "All Things Go",
            image: "/imgs/card6.png",
            heading: "All Things Go",
            headingClass: "right-full translate-x-1/2 uppercase",
            spanClass: "z-10 uppercase",
            buttonText: "BRAND IDENTITY",
        },
        {
            title: "Trawa",
            image: "/imgs/card7.jpg",
            heading: "Trawa",
            headingClass: "left-full -translate-x-1/2",
            spanClass: "inline-block z-10",
            buttonText: "DESIGN RESEARCH",
        },
        {
            title: "Black Book",
            image: "/imgs/card8.jpg",
            heading: "Black Book",
            headingClass: "right-full translate-x-1/2 uppercase",
            spanClass: "z-10 uppercase",
            buttonText: "REDISIGN",
        },
    ];

    return (
        <div data-scroll data-scroll-speed=".1" className='relative bg-white' >

        <div  className='w-full py-30 '>
            <div className="w-full px-20">
                <h1 className='text-[5.2rem] font-["Neue_Montreal"] text-[#212121] tracking-tight'>Featured projects</h1>
            </div>
            {/* First row */}
            <div className="cards w-full flex gap-5 py-10 px-20 relative">
                {/* Animated heading in center between cards */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90vw] flex justify-center items-center">
                    {typeof hovering === "number" && hovering < 2 && (
                        <h1
                            className={`text-[9rem] font-["anton"] text-[rgba(205,234,104,1)] leading-none whitespace-nowrap flex`}
                            style={{
                                transition: "opacity 0.18s cubic-bezier(0.22,1,0.36,1)",
                                opacity: hovering !== false ? 1 : 0,
                            }}
                        >
                            {projects[hovering].heading.split('').map((item, i) => (
                                <motion.span
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={
                                        hovering !== false
                                            ? { 
                                                y: 0, 
                                                opacity: 1,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: i * 0.06 + Math.sin(i * 0.5) * 0.08,
                                                    duration: 0.38
                                                }
                                            }
                                            : { 
                                                y: 100, 
                                                opacity: 0,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: 0,
                                                    duration: 0.18
                                                }
                                            }
                                    }
                                    key={projects[hovering].title + '-center-char-' + i}
                                    className={`${projects[hovering].spanClass} inline-block`}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                    )}
                </div>
                {projects.slice(0, 2).map((project, projectIdx) => (
                    <div
                        onMouseEnter={() => setHovering(projectIdx)}
                        onMouseLeave={() => setHovering(false)}
                        key={project.title + '-row1-' + projectIdx}
                        className="parentcard w-1/2 h-[95vh] relative flex flex-col z-10"
                    >
                        <div className="flex items-center mb-5">
                            <span className="w-3 h-3 bg-black rounded-full mt-5"></span>
                            <span className="mt-4 text text-2xl font-[Neue_Montreal] z-20 font-black bg-white/80 text-[#323232] px-3 py-1 rounded self-start">
                                {project.title}
                            </span>
                        </div>
                        <div className="childcard w-full h-full overflow-hidden rounded-2xl hover:transform hover:scale-95 transition-transform duration-500">
                            {/* Hide the heading inside card, only show in center */}
                            <h1 className="hidden" />
                            <img
                                className="w-full h-full object-cover"
                                src={project.image}
                                alt="img"
                            />
                        </div>
                        <button className="relative font-[Neue_Montreal] mt-5 max-w-[12vw] py-5 px-8 text-black text-lg font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-800 before:to-zinc-600 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                            {project.buttonText}
                        </button>
                    </div>
                ))}
            </div>
            {/* Second row */}
            <div className="cards w-full flex gap-5 py-5 px-20 relative">
                {/* Animated heading in center between cards */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90vw] flex justify-center items-center">
                    {typeof hovering === "number" && hovering >= 2 && hovering < 4 && (
                        <h1
                            className={`text-[9rem] font-["anton"] text-[rgba(205,234,104,1)] leading-none whitespace-nowrap flex`}
                            style={{
                                transition: "opacity 0.18s cubic-bezier(0.22,1,0.36,1)",
                                opacity: hovering !== false ? 1 : 0,
                            }}
                        >
                            {projects[hovering].heading.split('').map((item, i) => (
                                <motion.span
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={
                                        hovering !== false
                                            ? { 
                                                y: 0, 
                                                opacity: 1,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: i * 0.06 + Math.sin(i * 0.5) * 0.08,
                                                    duration: 0.38
                                                }
                                            }
                                            : { 
                                                y: 100, 
                                                opacity: 0,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: 0,
                                                    duration: 0.18
                                                }
                                            }
                                    }
                                    key={projects[hovering].title + '-center-char-' + i}
                                    className={`${projects[hovering].spanClass} inline-block`}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                    )}
                </div>
                {projects.slice(2, 4).map((project, projectIdx) => (
                    <div
                        onMouseEnter={() => setHovering(projectIdx + 2)}
                        onMouseLeave={() => setHovering(false)}
                        key={project.title + '-row2-' + projectIdx}
                        className="parentcard w-1/2 h-[95vh] relative flex flex-col"
                    >
                        <div className="flex items-center mb-5">
                            <span className='w-3 h-3 bg-black rounded-full mt-5'></span>
                            <span className={`mt-4 text text-2xl font-[Neue_Montreal] z-20 font-black bg-white/80 text-[#323232] px-3 py-1 rounded self-start`}>
                                {project.title}
                            </span>
                        </div>
                        <div className="childcard w-full h-full overflow-hidden rounded-2xl hover:transform hover:scale-95 transition-transform duration-500">
                            <h1 className="hidden" />
                            <img className='w-full h-full object-cover' src={project.image} alt="img" />
                        </div>
                        <button
                            className="relative font-[Neue_Montreal] mt-5 max-w-[12vw] py-5 px-8 text-black text-lg font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-800 before:to-zinc-600 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                            {project.buttonText}
                        </button>
                    </div>
                ))}
            </div>
            {/* Third row */}
            <div className="cards w-full flex gap-5 py-5 px-20 relative">
                {/* Animated heading in center between cards */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90vw] flex justify-center items-center">
                    {typeof hovering === "number" && hovering >= 4 && hovering < 6 && (
                        <h1
                            className={`text-[9rem] font-["anton"] text-[rgba(205,234,104,1)] leading-none whitespace-nowrap flex`}
                            style={{
                                transition: "opacity 0.18s cubic-bezier(0.22,1,0.36,1)",
                                opacity: hovering !== false ? 1 : 0,
                            }}
                        >
                            {projects[hovering].heading.split('').map((item, i) => (
                                <motion.span
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={
                                        hovering !== false
                                            ? { 
                                                y: 0, 
                                                opacity: 1,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: i * 0.06 + Math.sin(i * 0.5) * 0.08,
                                                    duration: 0.38
                                                }
                                            }
                                            : { 
                                                y: 100, 
                                                opacity: 0,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: 0,
                                                    duration: 0.18
                                                }
                                            }
                                    }
                                    key={projects[hovering].title + '-center-char-' + i}
                                    className={`${projects[hovering].spanClass} inline-block`}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                    )}
                </div>
                {projects.slice(4, 6).map((project, projectIdx) => (
                    <div
                        onMouseEnter={() => setHovering(projectIdx + 4)}
                        onMouseLeave={() => setHovering(false)}
                        key={project.title + '-row3-' + projectIdx}
                        className="parentcard w-1/2 h-[95vh] relative flex flex-col"
                    >
                        <div className="flex items-center mb-5">
                            <span className='w-3 h-3 bg-black rounded-full mt-5'></span>
                            <span className={`mt-4 text text-2xl font-[Neue_Montreal] z-20 font-black bg-white/80 text-[#323232] px-3 py-1 rounded self-start`}>
                                {project.title}
                            </span>
                        </div>
                        <div className="childcard w-full h-full overflow-hidden rounded-2xl hover:transform hover:scale-95 transition-transform duration-500">
                            <h1 className="hidden" />
                            <img className='w-full h-full object-cover' src={project.image} alt="img" />
                        </div>
                        <button
                            className="relative font-[Neue_Montreal] mt-5 max-w-[12vw] py-5 px-8 text-black text-lg font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-800 before:to-zinc-600 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                            {project.buttonText}
                        </button>
                    </div>
                ))}
            </div>
            {/* Fourth row */}
            <div className="cards w-full flex gap-5 py-5 px-20 relative">
                {/* Animated heading in center between cards */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90vw] flex justify-center items-center">
                    {typeof hovering === "number" && hovering >= 6 && hovering < 8 && (
                        <h1
                            className={`text-[9rem] font-["anton"] text-[rgba(205,234,104,1)] leading-none whitespace-nowrap flex`}
                            style={{
                                transition: "opacity 0.18s cubic-bezier(0.22,1,0.36,1)",
                                opacity: hovering !== false ? 1 : 0,
                            }}
                        >
                            {projects[hovering].heading.split('').map((item, i) => (
                                <motion.span
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={
                                        hovering !== false
                                            ? { 
                                                y: 0, 
                                                opacity: 1,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: i * 0.06 + Math.sin(i * 0.5) * 0.08,
                                                    duration: 0.38
                                                }
                                            }
                                            : { 
                                                y: 100, 
                                                opacity: 0,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: 0,
                                                    duration: 0.18
                                                }
                                            }
                                    }
                                    key={projects[hovering].title + '-center-char-' + i}
                                    className={`${projects[hovering].spanClass} inline-block`}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                    )}
                </div>
                {projects.slice(6, 8).map((project, projectIdx) => (
                    <div
                        onMouseEnter={() => setHovering(projectIdx + 6)}
                        onMouseLeave={() => setHovering(false)}
                        key={project.title + '-row4-' + projectIdx}
                        className="parentcard w-1/2 h-[95vh] relative flex flex-col"
                    >
                        <div className="flex items-center mb-5">
                            <span className='w-3 h-3 bg-black rounded-full mt-5'></span>
                            <span className={`mt-4 text text-2xl font-[Neue_Montreal] z-20 font-black bg-white/80 text-[#323232] px-3 py-1 rounded self-start`}>
                                {project.title}
                            </span>
                        </div>
                        <div className="childcard w-full h-full overflow-hidden rounded-2xl hover:transform hover:scale-95 transition-transform duration-500">
                            <h1 className="hidden" />
                            <img className='w-full h-full object-cover' src={project.image} alt="img" />
                        </div>
                        <button
                            className="relative font-[Neue_Montreal] mt-5 max-w-[12vw] py-5 px-8 text-black text-lg font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-800 before:to-zinc-600 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                            {project.buttonText}
                        </button>
                    </div>
                ))}
            </div>
            
<div className="w-full flex justify-center items-center py-10">
<button className="relative group px-6 py-3 bg-gray-800 text-white rounded-full overflow-hidden border-2 border-zinc-900">
  {/* Background Fill Animation */}
  <span className="absolute inset-0 bg-black origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
  {/* Button Text and Animated Arrow */}
  <span className="relative z-10 flex items-center gap-5">
    <span className="text-xl font-semibold font-['Neue_Montreal']">
      VIEW ALL CASE STUDIES
    </span>
    {/* SVG Arrow with animation */}
    <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-black">
            <svg
            stroke="currentColor" fill="none" strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="-translate-x-[200%] rotate-300 text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-white group-active:rotate-90"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </span>
  </span>
</button>

  
</div>

        </div>
        </div>
    )
}

export default Featured



//  <div className="cards w-full flex gap-5 py-25 px-17">
//             {/* Card 1 */}
//             <div className="parentcard w-1/2 h-[80vh] relative flex flex-col">
//                 {/* Small title at the top left, outside the image */}
//                 <div className="flex items-center mb-5 ">
//                     <span className='w-3 h-3 bg-black rounded-full mt-5 '></span>
//                     <span className="mt-4  text text-2xl font-[Neue_Montreal] z-20 font-black bg-white/80 text-[#323232] px-3 py-1 rounded self-start">
//                         Salience Labs
//                     </span>
//                 </div>
//                 <div className="childcard w-full h-full overflow-hidden rounded-2xl hover:transform hover:scale-95 transition-transform duration-500 ">
//                     <h1 className='text-[9rem] absolute font-["anton"] text-[rgba(205,234,104,1)] z-10 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none  whitespace-nowrap'>
//                         {"SALIENCE LABS".split('').map((iteam, index) => (
//                             <span key={index} className='inline-block z-10'>{iteam}</span>
//                         ))}
//                     </h1>
//                     <img className='w-full h-full object-cover' src="public/imgs/card1.png" alt=" img" />
//                 </div>

//             </div>

//             {/* Card 2 */}
//             <div className="parentcard w-1/2 h-[80vh] relative flex flex-col">
//                 {/* Small title at the top left, outside the image */}
//                  <div className="flex items-center mb-5">
//                     <span className='w-3 h-3 bg-black rounded-full mt-5 '></span>
//                     <span className="mt-4  text text-2xl font-[Neue_Montreal] z-20 font-black bg-white/80 text-[#323232] px-3 py-1 rounded self-start">
//                         Cardboard Spaceship
//                     </span>
//                 </div>
//                 <div className="childcard w-full h-full overflow-hidden  rounded-2xl hover:transform hover:scale-95 transition-transform duration-500 ">
//                     <h1 className='text-[9rem] absolute font-["anton"] text-[rgba(205,234,104,1)] z-10 right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none  whitespace-nowrap'>
//                         {"Cardboard Spaceship".split('').map((iteam, index) => (
//                             <span key={index} className='z-10 uppercase'>{iteam}</span>
//                         ))}
//                     </h1>
//                     <img className='w-full h-full object-cover' src="public/imgs/card1.png" alt=" img" />
//                 </div>
//             </div>
//         </div>