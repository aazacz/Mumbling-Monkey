import React from 'react'
import sideimg from "/Frame_29.png"
import { motion } from "framer-motion"
import innerServiceImage from "/innerServiceImage.svg"
import bar from "/insideservices/bar.png"
import lightning from "/insideservices/lightning.png"
import youtube from "/insideservices/youtube.png"
import bitcoin from "/insideservices/bitcoin.png"
import calculator from "/insideservices/calculator.png"
import chat from "/insideservices/chat.png"

const InnerServices = () => {

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

    const cardData = [

        {
            title: "Content Strategy",
            description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.",
            icon: bar
        },
        {
            title: "Brand Awareness",
            description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.",
            icon: lightning
        },
        {
            title: "Video making",
            description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.",
            icon: youtube
        },
        {
            title: "Social Paid Advertising",
            description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.",
            icon: bitcoin
        },
        {
            title: "Social Audits",
            description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.",
            icon: calculator
        },
        {
            title: "Social Media Management",
            description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.",
            icon: chat
        },


    ]

    return (
        <>

            <div className='w-full  bg-gray-200 h-max px-16 relative overflow-y-hidden  flex flex-col  items-center'>

                <div className='relative w-full h-screen flex  items-center'>

                    <div className='w-2/3 z-20'>
                        <h1 className='font-montserrat font-bold text-5xl'>Social Media Marketing</h1>
                        <h1 className='font-montserrat w-2/3  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>


                    </div>

                    <img src={innerServiceImage} className='md:absolute -top-1/2 translate-y-1/2  right-0  w-[800px]' alt="" />

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


            {/* Section 2 */}


            <div className='w-screen px-16 py-8 flex flex-col justify-center items-center'>

                <div className='w-full flex flex-col items-center justify-center '>
                    <div className='w-full'>

                        <span className='w-max px-3 py-1 bg-[#7c8d97] font-montserrat font-light text-lg rounded-2xl text-white ' > SERVICES</span>
                        <h1 className='md:w-1/2 font-montserrat font-semibold text-3xl pb-8'>We have extensive experience in
                            Social Media Marketing</h1>
                    </div>

                    <div className='w-screen justify-center   flex flex-wrap gap-8'>
                        {cardData.map((val, index) => {

                            return (

                                <div className='w-[400px] group group-hover:bg-red-300 transition-all duration-500 p-8 rounded-3xl flex flex-col justify-between items-center bg-[#33333b] h-[450px] gap-x-8 '  >

                                    <div className='w-[150px] h-[150px]  rounded-full bg-[#292930] flex justify-center items-center'>
                                        <img src={val.icon} className='transition-all duration-500 group-hover:scale-125 w-[50%]' alt="" />
                                    </div>
                                    <div className='h-1/2'>

                                        <h1 className='font-montserrat font-semibold text-white text-2xl py-4 text-center'>{val.title}</h1>
                                        <h1 className='font-montserrat text-center text-gray-200 leading-[1.5]' >{val.description}</h1>
                                    </div>



                                </div>

                            )
                        })}




                    </div>



                </div>

            </div>


            <div className='w-screen '>


                <div class></div>
                <div class></div>





            </div>



        </>
    )
}

export default InnerServices