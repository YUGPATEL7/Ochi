import React from 'react'

const About = () => {
  return (
    <div  data-scroll data-scroll-speed="-.2" className='w-full  h-[190vh] bg-[#CDEA68] rounded-t-3xl text-[#212121] z-[999] relative'>
      <p className="text-[3.8vw] p-20 font-['Neue_Montreal'] leading-none  tracking-tight pr-80  ">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</p>

      <div className="w-full border-t-2 border-b-2 border-[#a5bc57]">
  <section className="relative">
        {/* Full width border */}

        <div className="px-2 py-6 lg:px-8 lg:py-8 mb-30" >
          <div className="mx-auto flex flex-col lg:flex-row justify-between items-start gap-6">
            {/* Left column */}
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-normal text-gray-800 leading-relaxed mt-2">
                What you can expect:
              </h2>
            </div>

            {/* Middle column */}
            <div className="lg:w-1/3 mb-4 lg:mb-0">
              <div className="space-y-4 mt-2">
                <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                  We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
                </p>
                <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                  We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:w-1/3 flex flex-col items-end">
              <div className="text-right">
                <p className="text-gray-800 font-medium mb-2 text-lg"></p>
                <div className=" flex flex-col">
                 <span className="font-['Neue_Montreal'] text-xl mt-10 mr-67">S:</span>
                    {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, idx) => (

                        <span class=" relative font-['Neue_Montreal']  font-light text-xl py-1 mr-50 flex ">
                            <span class=" relative inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-zinc-700 before:transition-all before:duration-500 hover:before:w-full">
                                {item}
                            </span>
                        </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full width border */}
      </section>
      </div>

      <div className="ourapproach flex gap-5 pt-10 pl-20 ">
        
      <div className=" w-1/2  font-['Neue_Montreal'] ">
      <h1 className='text-7xl text-[#212121] mb-5'>Our approach:</h1>
      <button class="group bg-[#212121] text-white py-9 px-11 rounded-full flex gap-10 items-center font-semibold  font-['Neue_Montreal'] h-12  border-2 border-zinc-900 transition-all duration-300 ease-in-out hover:bg-black hover:pr-5 hover:text-white active:bg-neutral-700">
  <span  className='tracking-widest'>  READ MORE </span>
  <span class="rounded-full bg-white p-1.5 text-sm transition-colors duration-300 group-hover:bg-white">
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
      class="-translate-x-[200%] rotate-300 text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:rotate-20"
      height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </span>
</button>


      </div>


      <div className="w-1/2 h-[70vh] mr-20 mb-20">
      <img className='w-full h-full object-center object-cover rounded-3xl hover:transform hover:scale-95 transition-transform duration-500' src="/imgs/Duo.jpg" alt="" />
      </div>
      </div>
    </div>
  )
}

export default About


