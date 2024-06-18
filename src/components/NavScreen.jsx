import React, { useState } from 'react'
import logo from "/Logo.png"
import sideimg from "/Frame_29.png"
import burger from "/burger.png"
import { motion, AnimatePresence } from "framer-motion"
import { cubicBezier } from "framer-motion"
import AboutUs from "/AboutUs.webp"




const NavScreen = (Data) => {
    console.log("Data in navscreen")
    console.log(Data.bg)

    // const [show, setShow] = useState(false)
    // const easing = cubicBezier(.39, -0.23, .4, 1.4)
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

    // const [IsHovering, setIsHovering] = useState(false)





    return (
        <>
            <div className='w-full  h-screen relative overflow-y-hidden  flex flex-col  items-center'>
                <img src={AboutUs} className='w-full  absolute top-0' alt="" />

                <div className='w-full   absolute flex px-32  bottom-24 '>
                    <div className='w-full rounded-3xl max-w-[500px]  bg-white bg-opacity-75 px-8 py-5'>

                        <div className='text-white text-sm w-fit  font-normal font-montserrat uppercase rounded-2xl bg-slate-500 px-3 py-1'> ABOUT US</div>
                        <h1 className='font-bold text-4xl w-full max-w-[350px] font-montserrat'> Creative Services For Boost Your Business Growth</h1>
                        <h1 className='font-montserrat text-lg text-gray-700'>-- MUMBLING MONKEYS --</h1>
                    </div>

                </div>


                <motion.div className='absolute    opacity-40 md:left-0 left-0 ' variants={marqueeVariants} animate="animate"   >
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                </motion.div>

                <motion.div className='absolute flex flex-col items-end md:flex-none  opacity-40 md:right-0 right-0' variants={marqueeVariants} animate="animate"   >
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                    <img className='w-1/2 md:w-full' src={sideimg} alt="" />
                </motion.div>


            </div>

        </>
    )
}

export default NavScreen