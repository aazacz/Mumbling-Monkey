import React, { useState } from 'react'
import logo from "/Logo.png"
import sideimg from "/Frame_29.png"
import burger from "/burger.png"
import { motion, AnimatePresence } from "framer-motion"
import { cubicBezier } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";


const Navbar = () => {
    const [show, setShow] = useState(false)
    const easing = cubicBezier(.39, -0.23, .4, 1.4)
    const [IsHovering, setIsHovering] = useState(false)

    return (
        <>
            <div className='w-screen z-30 absolute '>

                <div className='w-full z-30 flex justify-between items-center b px-10 md:px-24 py-2  '>

                    {/* left logo */}
                    <div className='rounded-full w-[90px] h-[90px] bg-white bg-opacity-15 flex justify-center items-center'>

                        <img src={logo} className='w-[50px]  md:w-[70px]' alt="" />
                    </div>


                    <div className='flex items-center gap-3 ' >
                        <h1 className='text-white font-montserrat md:text-xl  '>Menu</h1>

                        <div className={`bg-white z-50 rounded-full w-12 h-12 transition-all duration-300 ${show?"rotate-90":"" } flex justify-center items-center `}>
                            {show ? (
                                <MdClose 
                                    className="text-lg w-[30px] md:w-[50px] z-40 transition-all  duration-500"
                                    onClick={() => setShow(!show)}
                                />
                            ) : (
                                <GiHamburgerMenu
                                    className="text-lg w-[30px] md:w-[50px] z-40 transition-all  duration-500"
                                    onClick={() => setShow(!show)}
                                />
                            )}                        </div>

                    </div>
                </div>




                {/* NAVBAR OPEN CLOSE */}
                <AnimatePresence>
                    {show &&

                        <motion.div className='absolute z-30 top-0 w-full h-screen flex items-center overflow-hidden'>



                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: "45deg" }}
                                exit={{ opacity: 0, rotate: "0deg" }}
                                transition={{ duration: 0.9 }}
                                className='w-1/4 bg-slate-600   h-[1500px] bg-opacity-40'> </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: "45deg" }}
                                exit={{ opacity: 0, rotate: "0deg" }}
                                transition={{ duration: 0.9 }}
                                className='w-1/4 bg-slate-600  h-[1500px] bg-opacity-40'> </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: "45deg" }}
                                exit={{ opacity: 0, rotate: "0deg" }}
                                transition={{ duration: 0.9 }}
                                className='w-1/4 bg-slate-600  h-[1500px] bg-opacity-40'> </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: "45deg" }}
                                exit={{ opacity: 0, rotate: "0deg" }}
                                transition={{ duration: 0.9 }}
                                className='w-1/4 bg-slate-600  h-[1500px] bg-opacity-40'> </motion.div>

                        </motion.div>

                    }

                </AnimatePresence>



                <AnimatePresence>

                    {show && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute z-30 top-0 py-36 w-full h-screen md:px-64 bg-slate-600 flex flex-col  items-center  transition-all duration-500 `} >


                        <img src={logo} width={90} alt="" />


                        <ul className=' mt-10 flex md:flex-row flex-col justify-around md:text-xl font-bold md:list-disc gap-14 text-center md:text-left'>
                            <li className='text-white md:text-black'>ABOUT US</li>
                            <li className='text-white md:text-black'>SERVICES</li>
                            <li className='text-white md:text-black'>OUR EXPERTISE</li>
                            <li className='text-white md:text-black'>OUR TEAM</li>
                            <li className='text-white md:text-black'>CONTACT US</li>
                        </ul>


                    </motion.div>}


                </AnimatePresence>

            </div>
        </>







    )
}

export default Navbar