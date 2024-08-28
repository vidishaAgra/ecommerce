import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-bold">India Cultural Association</h3>
          <p className="mt-4">
            India Cultural Association  of Bay Area, California is a 501(c)(3) non-profit Tax ID #94-2691175,
            charitable and educational organization established to promote humanitarian efforts within the community.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex justify-center md:justify-end mt-4 space-x-4">
            <a href="https://twitter.com" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} India Cultural Association of Bay Area. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
