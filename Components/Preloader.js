import React from 'react';
import { motion } from 'framer-motion';

const spinnerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        className="w-12 h-12 border-4 border-black border-opacity-20 border-t-transparent rounded-full animate-spin"
        variants={spinnerVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
};

export default Preloader;
