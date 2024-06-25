import React from 'react'
import monkey from "/monkeyhead.png"
import { GoArrowRight } from "react-icons/go";
import Monkey from "/mokey.svg"
import { motion, AnimatePresence } from "framer-motion"


const Animation = ({data}) => {
    return (

        <>
                <div className='w-[250px] relative rounded-2xl  group flex flex-col pt-[100px] overflow-hidden justify-between p-4 h-[320px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

                 
                 
                    <div className='z-30 rounded-full absolute top-3 transition-transform duration-1000 transform group-hover:scale-[14] w-16 h-16 bg-black' >

                    </div>
                   
                   
                  
                    
                    {/* Circle with border */}
                    <div className='rounded-full z-30 flex flex-col justify-around items-center  absolute top-3 transition-all duration-1000 transform  group-hover:translate-x-[12px]  group-hover:border-[0.3px] group-hover:border-[#FFD2B1]   group-hover:translate-y-[10%] group-hover:w-[190px]  group-hover:h-[190px]  w-16 h-16 bg-black' >

                        <img src={data.icon} className='relative w-[50px] transition-all duration-700 group-hover:scale-[2] ' alt="" />
                    <h1 className='text-white hidden w-fit text-center transition-all duration-[1500] group-hover:block font-montserrat font-semibold text-xl '>{data.title}</h1>
                    </div>


                    <div className='w-full h-max group-hover:translate-y-8 transition-all duration-300 z-10 '>

                        <h1 className='font-montserrat w-full  font-semibold text-[20px]'>{data.title}</h1>
                        <h1 className='font-montserrat text-gray-500 font-semibold text-[12px]'>{data.description}</h1>
                    </div>


                </div>
          


        </>

    )
}

export default Animation 