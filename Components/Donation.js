"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Donation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-green-300 text-black p-10 rounded-lg shadow-lg w-full h-[75vh] mx-auto flex flex-col md:flex-row items-center"
    >
      {/* QR Code */}
      <div className="md:w-1/3 h-[40vh] p-5 text-center md:text-left">
        <img 
          src="https://www.gcabayarea.org/wp-content/uploads/2022/03/qrcode-300x300.png" 
          alt="QR Code for Donations" 
          className="w-full h-full mx-auto md:mx-0 mb-6"
        />
      </div>

      {/* Donation Information */}
      <div className="md:w-2/3 p-5">
        <h2 className="text-3xl font-bold mb-4">Support Our Community</h2>
        <p className="text-lg mb-4">
          The India Cultural Association (ICA) of Bay Area relies heavily on the generous donations of time and money from our community. Your contributions help us continue our mission to promote and preserve cultural heritage.
        </p>
        <p className="text-lg mb-4">
          To donate, choose from one of the following options:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Check Donations: Please contact a Board member or mail your check to: GCA of Bay Area, 46560 Fremont Blvd, Suite #109, Fremont, CA 94538</li>
          <li>Donate via PayPal: You do not need a PayPal account to contribute via PayPal.</li>
          <li>Corporate Matching Gifts: GCA participates in corporate matching gift programs. Please contact a Board member to complete the necessary paperwork.</li>
        </ul>
        <div className="flex justify-center md:justify-start">
          <a href="#" className="inline-block px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Learn More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Donation;
