import React, { useEffect } from 'react'
import sideimg from "/Frame_28.png"
import { motion } from "framer-motion"
import innerServiceImage from "/innerServiceImage.svg"
import Bar from "/insideservices/bar.png"
import lightning from "/insideservices/lightning.png"
import youtube from "/insideservices/youtube.png"
import bitcoin from "/insideservices/bitcoin.png"
import calculator from "/insideservices/calculator.png"
import chat from "/insideservices/chat.png"
import { MdCheckCircle } from 'react-icons/md'
import slider from '/insideservices/slider.png'
import goals from "/Goals.png"
import Megaphone from "/Megaphone.png"
import bar from "/bar.png"
import ContactUs from './ContactUs'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'


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


    const rightData1 = [
        {
            title: "Strategic Planning",
            description: "We start by understanding your brand, goals, and target audience. Our team crafts a bespoke strategy tailored to your unique needs and objectives.",
            icon: goals
        },
        {
            title: "Influencer Matching",
            description: "Using advanced analytics, we identify and connect you with the most relevant influencers who align perfectly with your brand and audience.",
            icon: Megaphone
        },
        {
            title: "Creative Content Creation",
            description: "Our experts develop engaging and authentic content that resonates with your audience, ensuring maximum impact and engagement.",
            icon: bar
        },

    ]


    const rightData2 = [
        {
            title: "Campaign Execution",
            description: "With meticulous attention to detail, we launch and manage your campaigns, ensuring everything runs smoothly and efficiently.",
            icon: goals
        },
        {
            title: "Performance Monitoring",
            description: "We continuously track and analyze campaign performance, providing you with real-time insights and actionable feedback to optimize results",
            icon: Megaphone
        },
        {
            title: "Comprehensive Reporting",
            description: "At the end of each campaign, we deliver detailed reports that highlight key metrics, successes, and areas for improvement, ensuring you always stay ahead of the game",
            icon: bar
        },

    ]


    const cardData = [

        {
            title: "Content Strategy",
            description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.",
            icon: Bar
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

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>

            <div className='w-full   h-max md:px-20 px-4 relative overflow-y-hidden  flex flex-col  items-center'>

                <div className='relative w-full px-6 md:px-0 h-screen flex  items-center'>

                    <div className='md:w-2/3 z-20 md:pl-8'>
                        <h1 className='font-montserrat font-bold text-[#292930] text-6xl pb-6 '>Social Media<br /> Marketing</h1>
                        <h1 className='font-montserrat w-2/3  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>


                    </div>

                    <img src={innerServiceImage} className='absolute -top-1/2 translate-y-[50%]  md:right-0 right-0 w-[200px] md:w-[850px]' alt="" />

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


            <div className='w-screen  px-4 md:px-20 py-8 flex flex-col justify-center items-center'>

                <div className='w-full flex flex-col items-center justify-center '>
                    <div className='w-full'>

                        <span className='w-max px-3 py-1 bg-[#7c8d97] font-montserrat font-light text-lg rounded-2xl text-white ' > SERVICES</span>
                        <h1 className='md:w-1/2 font-montserrat font-semibold text-3xl  py-8'>We have extensive experience in
                            Social Media Marketing</h1>
                    </div>

                    <div className='w-screen justify-center  md:px-20 flex flex-wrap  gap-8'>
                        {cardData.map((val, index) => {

                            return (

                                <div className='w-[370px] group group-hover:bg-red-300 transition-all duration-500 p-8 rounded-3xl flex flex-col justify-between items-center bg-[#33333b] h-[450px] gap-x-8 '  >

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


            <div className='w-screen  flex gap-x-2 md:px-20'>

                {/* Left side */}
                <div className='w-1/2 hidden  h-max md:flex justify-end items-center'>

                    <img src={slider} className='  h-[480px]' alt="" />

                </div>
                {/* Right side */}

                <div className='md:w-1/2 w-full h-max  p-8'>
                    <span className='bg-[#89877c] tracking-widest font-montserrat px-2 py-2 rounded-2xl text-white ' > ABOUT THIS SERVICE</span>
                    <img src={slider} className=' md:hidden h-[480px]' alt="" />

                    <h1 className='w-full md:h-[100px] border-b-2 font-montserrat font-semibold text-4xl mt-4'>We take your business reach from thousands to millions</h1>
                    <p className='text-base font-montserrat mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudinbibendum senectus scelerisque non.
                        Turpis matis morbi vivera ipsum adipiscing Mauris volutpat sagittis,
                        sit nulla. Velit et augues vitae Mattis at nibh nullas placerat imperdiet cursus viverra justo amet. Ipsum duis tempor.</p>


                    <div className='flex items-center w-full gap-x-2 py-3 '>
                        <MdCheckCircle className='text-[28px] text-[#292930]' />
                        <h1 className='font-montserrat text-lg font-normal text-gray-600'>Dolor duis lorem enim eu nulla semper </h1>
                    </div>

                    <div className='flex items-center w-full gap-x-2 py-3 '>
                        <MdCheckCircle className='text-[28px] text-[#292930]' />
                        <h1 className='font-montserrat text-lg font-normal text-gray-600'>Dolor duis lorem enim eu nulla semper </h1>
                    </div>

                    <div className='flex items-center w-full gap-x-2 py-3 '>
                        <MdCheckCircle className='text-[28px] text-[#292930]' />
                        <h1 className='font-montserrat text-lg font-normal text-gray-600'>Dolor duis lorem enim eu nulla semper </h1>
                    </div>



                </div>

            </div>


            {/*Section 3  */}

            <div className='rounded-xl w-full px-4 md:px-20 flex flex-col md:flex-row mt-8 md:p-10 bg-gradient-to-tl from-[#FFF3CA] via-[#FFDBD4] to-[#E9F7FF] gap-x-8'>
                    {/* Left Side */}
                    <div className='w-full md:w-1/2 h-full flex flex-col p-6 mb-6 md:mb-0'>
                        
                        <div className='border-b-[2px]  border-[#CFCFCF] w-full md:h-[90px]'>
                            <h1 className='font-montserrat font-semibold md:text-3xl text-2xl  text-gray-800'>Our bulletproof process to win on Social Media</h1>
                        </div>

                        <div className='flex w-full h-max pt-4 md:pt-0'>
                            <h1 className='text-gray-700 text-base md:text-lg font-montserrat text-justify'>
                                &emsp; &emsp;&emsp;In today's dynamic digital landscape, succeeding on social media requires more than just posting content. It demands a strategic, data-driven approach that ensures your brand not only reaches but resonates with your target audience. Our bulletproof process is designed to deliver consistent and exceptional results, transforming your social media presence into a powerful marketing tool.
                            </h1>
                        </div>
                        
                        <div className='w-full hidden  pt-4 md:grid grid-flow-row grid-rows-3 gap-y-3'>
                            <div className='flex items-center w-full gap-x-2'>
                                <MdCheckCircle className='text-[22px] text-[#292930]' />
                                <h1 className='font-montserrat font-normal text-gray-600'>Dolor duis lorem enim eu nulla semper</h1>
                            </div>
                        </div>

                    </div>
                    {/* Right Side */}
                    <div className='w-full md:w-1/2 overflow-x-scroll flex snap-x snap-mandatory yScrollbar'>
                        
                        <div className='w-full flex-shrink-0  snap-center flex items-center'>
                           
                            <div className='relative w-[20%]  overflow-hidden h-full grid grid-flow-row  justify-between md:justify-center place-content-between  items-start md:items-center'>
                             <div className='absolute w-full h-[90%] left-1/2 border-l-2 border-dashed  border-[#E38676] '></div>
                                    {rightData1.map((val, index) => (
                                        <div key={index} className='  rounded-full z-20 md:w-[90px] w-[70px] h-[70px] md:h-[90px] max-w-[90px] max-h-[90px] bg-[#FFD1C8] flex justify-center items-center'>
                                            <div className='rounded-full md:w-[80px] w-[60px] h-[60px] md:h-[80px] max-w-[74px] max-h-[74px] bg-white flex justify-center items-center'>
                                                <img src={val.icon} className='md:w-[50%] w-[40%]' alt="" />
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className='flex-1 h-full grid grid-flow-row justify-center items-center'>
                                {rightData1.map((val, index) => (
                                    <div key={index}>
                                        <h1 className='font-montserrat text-lg font-semibold pb-2'>{val.title}</h1>
                                        <h1 className='font-montserrat'>{val.description}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                      
                      
                        <div className='w-full flex-shrink-0  snap-center flex items-center'>
                        <div className='relative w-[20%]  overflow-hidden h-full grid grid-flow-row  justify-between md:justify-center place-content-between  items-start md:items-center'>
                        <div className='absolute w-full h-[90%] left-1/2 border-l-2 border-dashed  border-[#E38676] '></div>
                                    {rightData2.map((val, index) => (
                                        <div key={index} className='  rounded-full z-20 md:w-[90px] w-[70px] h-[70px] md:h-[90px] max-w-[90px] max-h-[90px] bg-[#FFD1C8] flex justify-center items-center'>
                                            <div className='rounded-full md:w-[80px] w-[60px] h-[60px] md:h-[80px] max-w-[74px] max-h-[74px] bg-white flex justify-center items-center'>
                                                <img src={val.icon} className='md:w-[50%] w-[40%]' alt="" />
                                            </div>
                                        </div>
                                    ))}
                            </div>


                            <div className='flex-1 h-full grid grid-flow-row justify-center items-center'>
                                {rightData2.map((val, index) => (
                                    <div key={index}>
                                        <h1 className='font-montserrat text-lg font-semibold pb-2'>{val.title}</h1>
                                        <h1 className='font-montserrat'>{val.description}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            <div className='w-full flex justify-center overflow-x-hidden pt-8 md:px-20  '>

                <ContactUs />
            </div>

            <Footer />

        </>
    )
}

export default InnerServices