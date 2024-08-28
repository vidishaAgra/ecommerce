"use client"
import About from '@/Components/About'
import Donation from '@/Components/Donation'
import Event from '@/Components/Event'
import Eyes from '@/Components/Eyes'
import Footer from '@/Components/Footer'
import Gallery from '@/Components/Gallery'
import LandingPage from '@/Components/LandingPage'
import Marquee from '@/Components/Marquee'
import Membership from '@/Components/Membership'
import Navbar from '@/Components/Navbar'
import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

const page = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    
    <div className='bg-zinc-900 min-h-screen w-full'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <Event/>
      <Membership/>
      <Gallery/>
      <Donation/>
      <Footer/>
      
    </div>
  )
}

export default page