"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full py-[5vw] bg-green-300 rounded-t-[4vw]'>
       <div className=' border-t-2 border-b-2 overflow-hidden flex whitespace-nowrap capitalize'>
       <motion.h1 className='text-[15vw]' initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:50}}><span className='text-white'>3Ciot</span>  Become a member now!! <span className='text-white'>3Ciot</span> Become a member now!!</motion.h1>
       <motion.h1 className='text-[15vw]' initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:50}}><span className='text-white'>3Ciot</span>  Become a member now!! <span className='text-white'>3Ciot</span> Become a member now!!</motion.h1>

       </div>
    </div>
  )
}

export default Marquee