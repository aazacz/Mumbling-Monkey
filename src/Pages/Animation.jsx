import React from 'react'
import monkey from "/monkeyhead.png"
import { GoArrowRight } from "react-icons/go";
import Monkey from "/mokey.svg"
import { motion, AnimatePresence } from "framer-motion"


const Animation = (data) => {
    return (
    

            <div className='w-[250px] relative rounded-2xl  group flex flex-col pt-[100px] overflow-hidden justify-between p-4 h-[320px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>


                <div className='rounded-full absolute top-3 transition-transform duration-1000 transform group-hover:scale-[14] w-16 h-16 bg-black' >

                </div>
                <div className='rounded-full absolute top-3 transition-transform duration-1000 transform group-hover:scale-[14] w-16 h-16 bg-black' >

                </div>
                <div className='rounded-full absolute top-3 transition-transform duration-1000 transform  group-hover:scale-[2.5] group-hover:border-[0.3px] group-hover:border-[#FFD2B1]  group-hover:translate-x-[150%] group-hover:translate-y-[150%] w-16 h-16 bg-black' >

                    <img src={Monkey} className='relative -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 group-hover:absolute   group-hover:top-1/2 group-hover:-translate-y-1/2' alt="" />
               <h1 className='text-white hidden group-hover:block'>Creative Ideas</h1>
                </div>


                <div className='w-full h-max'>

                    <h1 className='font-montserrat font-semibold text-2xl'>Creative ideas</h1>
                    <h1 className='font-montserrat text-gray-500 font-semibold text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                </div>

                <div className='flex gap-x-2 items-center'>
                    <h1 className='font-montserrat font-semibold'>Read more</h1>
                    <GoArrowRight />
                </div>

            </div>


 
    )
}

export default Animation 