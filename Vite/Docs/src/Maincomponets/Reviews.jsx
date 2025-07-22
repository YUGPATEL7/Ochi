import React from "react";


export default function Component() {
    return (
        <>
        <div className="w-full px-8 py-12 bg-gray-50">
            {/* Main heading */}
            <h1 className="text-[4rem] px-15 font-[Neue_Montreal] text-gray-900 mb-10">Clients' reviews</h1>

            {/* Featured review */}
            <div className="mb-12">
                {/* Header row - table-like structure */}
                <div className="border-t-[2px] border-gray-300 mb-6"></div>
                <div className="grid grid-cols-4 items-center gap-20 mb-8 pb-4 px-20 ">
                    <h2 className="text-xl font-medium text-gray-900 underline justify-self-start">Karman Ventures</h2>
                    <span className="text-xl text-gray-700 justify-start">Services:                    </span>
                    <span className="text-xl font-medium text-gray-900 justify-start">William Barnes</span>
                    <button className="text-xl text-gray-500 hover:text-gray-700 underline justify-self-end">READ</button>
                </div>

                {/* Content section */}

                    {/* Empty column for spacing */}
                <div className="grid grid-cols-4 gap-20 items-start">
                    {/* Left side - Service tags */}
                    <div className="flex flex-col gap-3 w-1/2 ml-15">
                        <button className="inline-block  px-4 py-2 bg-gray-200 text-gray-700 text-xl rounded-full text-center">
                            INVESTOR DECK
                        </button>
                        <button className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-xl rounded-full text-center">
                            SALES DECK
                        </button>
                    </div>
                    <div></div>
                    {/* Profile and review section - spans 2 columns */}
                    <div className="col-span-2 ">
                        <div className="flex gap-6 flex-col items-start ">
                            {/* Profile image */}
                            <div className="flex-shrink-0">
                                <img src="public/imgs/William-Barnes.png" alt="William Barnes" className="rounded-lg object-cover w-30 h-30" />
                            </div>

                            {/* Review text */}
                            <div className="flex-1">
                                <p className="text-gray-700 leading-relaxed text-base w-1/2">
                                    They were transparent about the time and the stages of the project. The end product is high quality,
                                    and I feel confident about how they were handholding the client through the process. I feel like I can
                                    introduce them to someone who needs to put a sales deck together from scratch, and they would be able
                                    to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other reviews list - table format */}
            <div className="space-y-0">
                {[
                    { company: "Planetly", reviewer: "Nina Walloch" },
                    { company: "Workiz Easy", reviewer: "Tomer Levy" },
                    { company: "Premium Blend", reviewer: "Ellen Kim" },
                    { company: "Hypercare Systems", reviewer: "Brendan Goss" },
                    { company: "Officevibe", reviewer: "Raff Labrie" },
                    { company: "Orderlion", reviewer: "Stefan Strohmer" },
                    { company: "Black Book", reviewer: "Jaci Smith" },
                    { company: "Trawa Energy", reviewer: "David Budde" },
                ].map((review, index) => (
                    <div key={index} className="grid grid-cols-4 items-center gap-8 py-4 border-b border-gray-300 px-10">
                        <h3 className="text-2xl font-medium text-gray-900  justify-self-start underline-animate font-['Neue_Montreal']  ">{review.company}</h3>
                        <div className="justify-self-center"></div>
                        <span className="text-2xl font-medium text-gray-900 justify-self-start">{review.reviewer}</span>
                        <button className="text-2xl text-gray-500 hover:text-gray-700  justify-self-end  underline-animate font-['Neue_Montreal']" >READ</button>
                    </div>
                ))}
            </div>
        </div>

         <div className="w-full bg-white py-16 px-15 font-[Neue_Montreal] ">
      <div className="flex flex-col md:flex-row gap-4 ">
        {/* Ochi Panel */}
        <div className="flex-1 bg-[#004d40]  rounded-2xl p-8 flex flex-col justify-between min-h-[35vh]">
          <div className="flex justify-center w-[42vw]  items-center h-[48vh]">
            <div className="logo"><svg width="140" height="90" viewBox="0 0 72 30" fill="#cdea68" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="#cdea68"></path>
									<path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="#cdea68"></path>
									<path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="#cdea68"></path>
									<path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="#cdea68"></path>
									<path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="#cdea68"></path>
        </svg></div>
          </div>
          <div className="flex justify-start">
            <span className="text-[#cdea68] text-[ 1.1875rem] border border-[#c0ff00] rounded-full px-4 py-1">©2019-2022</span>
          </div>
        </div>

        {/* Clutch Panel */}
        <div className="flex-1 bg-[#212121] rounded-2xl p-8 flex flex-col justify-between min-h-[400px]">
          <div className="flex flex-col justify-center items-center h-full gap-2">
            <h2 className="text-[#f4f4f4] text-5xl font-bold">Clutch</h2>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#cdea68] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex justify-start">
                       <button
              className="relative font-[Neue_Montreal] max-w-[20vw] py-1 px-4 text-white text-lg  rounded-full overflow-hidden bg-transparent border border-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-white before:to-white before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
              RATING 5.0 ON CLUTCH
            </button>
          </div>
        </div>

        {/* Business Bootcamp Panel */}
        <div className="flex-1 bg-[#212121] rounded-2xl p-8 flex flex-col justify-between min-h-[400px]">
          <div className="flex justify-center items-center h-full">
            <div className="w-24 h-24 relative">
              <svg viewBox="0 0 200 200" className="w-full h-full text-white" fill="currentColor">
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
                <text
                  x="100"
                  y="85"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="12"
                  fontFamily="Arial, sans-serif"
                >
                  BUSINESS
                </text>
                <text
                  x="100"
                  y="100"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="12"
                  fontFamily="Arial, sans-serif"
                >
                  BOOTCAMP
                </text>
                <text
                  x="100"
                  y="115"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="12"
                  fontFamily="Arial, sans-serif"
                >
                  ALUMNI
                </text>
                <path
                  d="M50,100 C50,72 72,50 100,50 C128,50 150,72 150,100 C150,128 128,150 100,150 C72,150 50,128 50,100 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-start">
            <button
              className="relative font-[Neue_Montreal] max-w-[20vw] py-1 px-4 text-white text-lg  rounded-full overflow-hidden bg-transparent border border-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-white before:to-white before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              BUSINESS BOOTCAMP ALUMNI
            </button>

          </div>
        </div>
      </div>
    </div>
        </>
    )
}
