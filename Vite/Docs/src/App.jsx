import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Maincomponets/Navbar'
import LandingPage from './Maincomponets/LandingPage'
import Marquee from './Maincomponets/Marquee'
import About from './Maincomponets/About'
import Eyes from './Maincomponets/Eyes'
import Featured from './Maincomponets/Featured'
import Reviews from './Maincomponets/Reviews'
import Footer from './Maincomponets/Footer'
import LocomotiveScroll from 'locomotive-scroll'


function App() {
  const locomotiveScroll = new  LocomotiveScroll();
  return (
<>
<div className="w-full h-screen  text-white">
  <Navbar/>
  <LandingPage/>
  <Marquee/>
  <About/>
  <Eyes/>
  <Featured/>
  <Reviews/>
  <Footer/>
</div>
</>
  )
}

export default App
