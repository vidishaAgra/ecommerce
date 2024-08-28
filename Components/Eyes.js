"use client"
import { motion } from "framer-motion";
import gsap, { Power2, Powerd, ScrollTrigger } from "gsap/all";

import React from 'react'

const Eyes = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-0.2"  className='  relative h-screen w-full bg-contain bg-[url("https://static.vecteezy.com/system/resources/previews/021/537/969/original/cute-sun-and-rainy-cloud-light-clouds-card-for-kids-or-poster-for-the-childrens-room-cartoon-vector.jpg")]'>
        <div className='  absolute h-1/4 w-full  flex top-1/2 -translate-y-[50%] justify-evenly gap-[10vw]'>
            <div className='h-[10vw] w-[10vw] bg-red-300 rounded-full'></div>
            <div className='h-[10vw] w-[10vw] bg-red-300 rounded-full'></div>
        </div>
    </div>
  )
}

export default Eyes