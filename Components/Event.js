// components/Event.js
"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Event = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.001" className="bg-black text-white p-10 rounded-[25px] shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center py-6">Upcoming Events</h2>
      <div className="space-y-8">
        <div className="p-6 bg-gray-800 rounded-lg">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">August 20, 2024</span>
            <span className="text-lg font-semibold">New York City</span>
          </div>
          <p className="mt-4">
            Join us for an exciting event in NYC. Learn more about the latest in tech and networking opportunities. This event will feature keynote speakers from leading tech companies.
          </p>
          <a href="#" className="inline-block mt-6 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Read More
          </a>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">September 15, 2024</span>
            <span className="text-lg font-semibold">San Francisco</span>
          </div>
          <p className="mt-4">
            Explore the future of AI at our San Francisco event. Don’t miss out on the chance to connect with industry leaders and innovators. Enjoy sessions on machine learning, AI ethics, and more.
          </p>
          <a href="#" className="inline-block mt-6 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Read More
          </a>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">October 10, 2024</span>
            <span className="text-lg font-semibold">Los Angeles</span>
          </div>
          <p className="mt-4">
            Attend our Los Angeles event to discover the latest trends in entertainment technology. Network with industry professionals and enjoy exclusive screenings and demos.
          </p>
          <a href="#" className="inline-block mt-6 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Read More
          </a>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">November 5, 2024</span>
            <span className="text-lg font-semibold">Chicago</span>
          </div>
          <p className="mt-4">
            Join us in Chicago for a deep dive into the world of finance technology. This event will cover topics such as blockchain, fintech, and the future of digital payments.
          </p>
          <a href="#" className="inline-block mt-6 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Read More
          </a>
        </div>

      </div>
    </div>
  );
};

export default Event;
