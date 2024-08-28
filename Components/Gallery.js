"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white p-10 rounded-lg shadow-lg w-full h-[100vh] mx-auto flex flex-col md:flex-row items-center"
    >
      {/* Carousel of Images */}
      <div className="md:w-1/2   p-5">
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <img src="https://www.gcabayarea.org/wp-content/uploads/2022/06/bg12newgca-nw.png" alt="Gallery Image 1" className="rounded-lg" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo-f93hrPSKbXMqKQUjygP7yskVIH9OtOjA&s" alt="Gallery Image 2" className="rounded-lg" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdhQZ_VJyCZX_bDwFo_9veYOzjF7oIezKkQ&s" alt="Gallery Image 3" className="rounded-lg" />
          </div>
          <div>
            <img src="https://www.gcabayarea.org/wp-content/uploads/2023/11/NSP_4346-2048x1367.jpg" alt="Gallery Image 4" className="rounded-lg" />
          </div>
          <div>
            <img src="/path/to/image5.jpg" alt="Gallery Image 5" className="rounded-lg" />
          </div>
          <div>
            <img src="/path/to/image6.jpg" alt="Gallery Image 6" className="rounded-lg" />
          </div>
        </Carousel>
      </div>

      {/* Description and Button */}
      <div className="md:w-1/2 p-5 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Event Gallery</h2>
        <div className="h-0.5 w-16 bg-red-500 mx-auto md:mx-0 mb-6"></div>
        <p className="text-lg mb-8">
          Each year, we organize numerous exciting cultural, entertainment, and social events for our community members.
          These include festivals like Holi, Diwali, and Navratri, as well as other engaging activities.
          Check out our gallery to relive the memories from these events!
        </p>
        <a href="#" className="inline-block px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
          View Gallery
        </a>
      </div>
    </motion.div>
  );
};

export default Gallery;
