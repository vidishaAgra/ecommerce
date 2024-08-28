"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";


const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className='w-full h-screen pt-1 bg-zinc-900' >
        <div className='struct mt-[20vh] bg-slate-850 relative '>
          
            {/* <div className='masker px-[3vw] text-5xl uppercase text-zinc-300 font-mono leading-none tracking-tighter'>
                {["enpowering","sustainable","water collection"].map((item,i)=>(
                      <h1 key={i}>{item}</h1>  
                ))}
            </div> */}
            {["Embracing the","heartbeat of ","india worldwide"].map((item,i)=>{
              return(
                <div className='masker'>
                  <div className='w-fit flex items-end overflow-hidden'>
                    {i===1 && (
                      <motion.div initial={{width:0}} animate={{width:"7vw"}} transition={{ease:[0.5, 0, 0.75, 0],duration:1}} className='w-[7vw] rounded-md h-[4vw] ml-[3vw] -mr-[2vw] bottom-[1.2vw] relative bg-green-800'></motion.div>
                    )}
                    <h1 className='px-[3vw] text-[7vw] uppercase text-zinc-300 font-mono leading-none tracking-tighter'>
                      {item}
                    </h1>
                  </div>
                </div>
              )
            })}
            <div className='w-1/4  h-full bg-[url("https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGluZGlhbiUyMGRhbmNlfGVufDB8MHwwfHx8MA%3D%3D")] absolute  top-0 right-10 '></div>
            
        </div>
        <div className='
        '></div>
        
        <div className='w-full border-t-2 mt-[13vh] text-white py-5 px-10 flex justify-between uppercase'>
                <div className='text-[3vh]'>for govt companies</div>
                <div className='flex items-center gap-1 text-[2.5vh]'>
                <button className='group  bg-white text-black p-1 rounded-2xl px-3 relative hover:bg-black border-white border-2 overflow-hidden '>
                    <span className='span absolute z-[5] bg-slate-900 w-0 h-full  ease-in-out overflow-hidden left-0 top-0 transition-all duration-500 group-hover:w-full '></span>
                    <span className='capitalize ease-in-out relative group-hover:text-white z-[10]'>start free trial </span>               
                </button>
                


                <span className='rotate-45 text-2xl'>
                <FaArrowCircleUp/>
                </span>
                </div>
        </div>
        <div className='text-slate-600 flex justify-center items-center gap-1
        '>
        <h4 >scroll down</h4>
        <FaLongArrowAltDown /></div>
    </div>
  )
}

export default LandingPage