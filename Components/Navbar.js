import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".navbar", {
      y: -100,
      duration: 0.5,
    });
  });

  return (
    <div className='navbar fixed z-[20] w-full py-5 px-10 flex justify-between items-center text-white capitalize'>
      <div className='font-mono text-2xl font-bold'>3Ciot</div>
      <div className='gap-10 flex'>
        {["About Us", "Membership", "Gallery", "Events", "Contact us"].map((item, i) => (
          <span key={i} className='relative w-max'>
            <a
              href={item === "About Us" ? "/about-us" : "javascript:void(0)"}
              className='color-white group'
            >
              {item}
              <span className='absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-slate-300 group-hover:w-full'></span>
            </a>
          </span>
        ))}
      </div>

      <div className='text-[1.1rem] font-semibold tracking-tighter'>
        <span className='px-5'>Log in</span><span>Sign in</span>
      </div>
    </div>
  );
};

export default Navbar;
