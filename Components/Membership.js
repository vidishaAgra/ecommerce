// components/Membership.js
"use client";
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const Membership = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 1.5    }}
      className="bg-green-300 text-black p-10 rounded-lg shadow-lg w-full mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Join Our Membership</h2>
      <div className="h-0.5 w-16 bg-red-500 mx-auto mb-6"></div>
      <p className="text-lg mb-8">
        Becoming a member of our community provides you with the unique opportunity to engage with vibrant cultural traditions, attend exciting events, and connect with like-minded individuals. Join or renew your membership today and become a part of something special!
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="inline-block px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
          New Member
        </a>
        <a href="#" className="inline-block px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
          Existing Member
        </a>
      </div>
    </motion.div>
  );
};

export default Membership;
