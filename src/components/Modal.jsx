
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div  onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        initial={{ y:"100px", opacity: 0 }}
        animate={{ y:"0",opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg w-1/2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          <div className="flex justify-between items-center border-b pb-3">
            <motion.h2 
             initial={{ x: 50 }}
             animate={{ x: 0 }}
             transition={{ duration: 0.6 }}
             exit={{ x: 500 }}className="text-2xl text-white font-montserrat font-semibold">{title}</motion.h2>
            <button className="text-4xl text-white " onClick={onClose}>&times;</button>
          </div>
          <div className="py-4">
            <motion.p 
             initial={{ x: -50 }}
             animate={{ x: 0 }}
             transition={{ duration: 0.6 }}
             exit={{ x: -50 }}
            className='text-white font-montserrat '>{description}</motion.p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
