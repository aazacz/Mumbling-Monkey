import React from 'react';
import sideimg from "/Frame_29.png";
import { motion } from "framer-motion";

const NavScreen = ({ bg, Data }) => {
    console.log("Data in navscreen", Data, bg);

    const marqueeVariants = {
        animate: {
            y: [-2000, 0, -2000],
            transition: {
                y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: [.39, -0.23, .4, 1.4],
                    duration: 20
                },
            },
        },
    };

    return (
        <>
            <div className='w-full h-screen relative overflow-y-hidden flex flex-col items-center'>
                <img src={bg} className='w-full h-full object-cover absolute top-0' alt="" />

                <div className='w-full absolute flex md:px-32 px-6 bottom-24'>

                    <div className='w-full rounded-3xl max-w-[500px]  bg-white bg-opacity-65 md:px-8 px-4 py-5'>
                        <div className='text-white text-sm w-fit tracking-widest font-light font-montserrat uppercase rounded-2xl bg-[#7c8d97] mb-3 px-3 py-1'>
                            {Data.heading}
                        </div>
                        <h1 className='font-bold md:text-4xl text-2xl w-full font-montserrat'>
                            {Data.Description}
                        </h1>
                
                        <h1 className='font-montserrat md:text-sm py-2 text-base font-medium text-gray-700'>
                        {Data.SubHead !== "" ? Data.SubHead : "-- MUMBLING MONKEYS --"}
                        </h1>
                    </div>
                </div>

                <motion.div className='absolute opacity-40 md:left-0 left-0' variants={marqueeVariants} animate="animate">
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                </motion.div>

                <motion.div className='absolute flex flex-col items-end md:items-start opacity-40 md:right-0 right-0' variants={marqueeVariants} animate="animate">
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                </motion.div>
            </div>
        </>
    );
}

export default NavScreen;
