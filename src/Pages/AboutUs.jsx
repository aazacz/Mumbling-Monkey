import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import tick from "/Icon.png"
import pattern from "/Pattern.png"
import GroupPhoto from "/Photo.png"
import NavScreen from '../components/NavScreen'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import CountUp from 'react-countup';
import Animation from './Animation'
import { MdCheckCircle } from 'react-icons/md'
import goals from "/Goals.png"
import Megaphone from "/Megaphone.png"
import bar from "/bar.png"
import AboutUsimg from "/AboutUs.webp"

const AboutUs = (Data) => {

    const NavData= {
        heading:"About Us",
        Description:"Creative Services For Boost Your Business Growth"
    }

    console.log(Data.Data)
    const data = [
        {
            heading: "Cutting-Edge Strategies", image1: "Rectangle", image2: "Rectangle2",
            description: `We thrive on staying ahead of the curve and crafting strategies that ride the wave of the latest trends and technologies, ensuring your brand is always in vogue.`
        },
        {
            heading: "Full-Service Portfolio", image1: "Rectangle", image2: "Rectangle2",
            description: `From Influencer Marketing, Public Relations, and SEO to Video Production, Content Marketing, and Voice Search Optimization, our services are as trendy and diverse as the digital landscape itself.`
        },
        {
            heading: "Youthful Team", image1: "Rectangle", image2: "Rectangle2",
            description: `Our team is made up of young, creative minds who bring fresh perspectives to every project. We're on the same wavelength as the trends and tastes of today's audience.`
        },
        {
            heading: "Client-First Approach", image1: "Rectangle", image2: "Rectangle2",
            description: `Fuelled by extensive market research and creative expertise, we partner with companies to optimize their position and
                          elevate them above the noise. Whether it’s their brand,their products or their people, the journey to category leadership starts with Tomorrow People.`},
        {
            heading: "Measurable Coolness", image1: "Rectangle", image2: "Rectangle2",
            description: `Our campaigns don't just look cool; they deliver measurable results. We're all about the ROI.`
        },
        {
            heading: "A customized digital marketing strategy", image1: "Rectangle", image2: "Rectangle2",
            description: `We take the time to get to know your
                business and your goals, and create a customized plan that's tailored to your needs and budget.`},
        {
            heading: "Expert execution", image1: "Rectangle", image2: "Rectangle2",
            description: `Our team of experienced marketers, designers, and developers will work together to execute your digital marketing plan flawlessly, using the latest tools and techniques to get the best results`
        },
        {
            heading: "Regular reporting", image1: "Rectangle", image2: "Rectangle2",
            description: `We provide regular reports on the progress of your digital marketing campaigns, so you can see the results for yourself and make informed decisions about future strategies.`
        },
        {
            heading: "Exceptional customer service", image1: "Rectangle", image2: "Rectangle2",
            description: `We pride ourselves on providing exceptional customer service to all of our clients. We're always here to answer your questions and provide support whenever you need it.`
        },
    ]

    const data2 = [
        {
            heading: "Influencer Marketing", description: `Collaborate with trendsetting influencers to instantly enhance your brand's appeal and visibility. `, colour: "bg-yellow-200", textcol: "text-yellow-200", dur: 0
        },
        {
            heading: "Public Relations", description: `Develop a captivating brand narrative and oversee your reputation with finesse. `, colour: "bg-cyan-300", textcol: "text-cyan-200", dur: 0
        },
        {
            heading: "Voice Search Optimization", description: `Enable local payment methods for your customers 
                                                      overseas and slash processing fees by 5-10x.Enable local payment 
                                                      methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-violet-300", textcol: "text-violet-200", dur: 1
        },
        {
            heading: "Social Media Marketing", description: `Enable local payment methods for your customers 
                                                      overseas and slash processing fees by 5-10x.Enable local payment 
                                                      methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-orange-300", textcol: "text-orange-200", dur: 1
        },
        {
            heading: "Social Media Marketing", description: `Enable local payment methods for your customers 
                                                      overseas and slash processing fees by 5-10x.Enable local payment 
                                                      methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-purple-300", textcol: "text-purple-200", dur: 2
        },
        {
            heading: "Social Media Marketing", description: `Enable local payment methods for your customers 
                                                      overseas and slash processing fees by 5-10x.Enable local payment 
                                                      methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-indigo-300", textcol: "text-indigo-200", dur: 2
        },
    ]

    const Data3 = [
        { description: "Our company was founded with a single goal in mind: to assist businesses of all sizes in harnessing the power of the internet to reach new audiences, drive traffic, and generate more leads and sales." },
        { description: "Mumbling Monkeys believes that digital marketing entails more than just optimising websites and creating eye-catching advertisements. It's all about creating one-of-a-kind, engaging experiences that connect with your target audience and inspire them to act. As a result, we collaborate closely with each of our clients to understand their specific goals, challenges, and target audiences, and to develop a tailored digital marketing strategy that delivers real results." },
        { description: "Our team at Mumbling Monkeys is made up of talented and experienced individuals, including Google Marketing Certified experts in digital marketing, social media analysis, and content development. In addition, we have graphic designers who are experts in Adobe Photoshop and Autodesk Sketchbook. " },
        { description: "To conduct audits and complete tasks, our marketing professionals use tools such as SEMrush, Google Analytics, Google Search Console, Webmaster Tools, Google Keyword Planner, Google AdSense, Google Voice Search, Google Trends, Small SEO Tools, and others." },
        { description: "Mumbling Monkeys is dedicated to providing exceptional results and exceptional customer service. We understand that digital marketing can be complicated and intimidating, and we're here to help you every step of the way. Our team is always ready to answer your questions, share insights, and assist you in making informed decisions about your digital marketing strategy." },
    ]

    return (
        <>
            <div className='  md-full h-auto  relative flex flex-col items-center overflow-auto'>


            <NavScreen bg={AboutUsimg} Data={NavData} />


                {/*#######################################  Section 1 Starts #######################################*/}
                <div className='md:w-full  md:max-w-[1250px] w-[90%]  h-auto py-6 md:px-0 px-4 md:flex'>

                    <motion.div className='md:w-3/5  w-full h-full py-6 pr-6'
                        initial={{ x: -195, y: 0, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 100 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: 0.5, once: true }}

                    >
                        <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> ABOUT COMPANY</button>
                        <h1 className='font-Cabin text-4xl pt-4'>Mumbling monkey</h1>
                        <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys, your one-stop destination for all your digital marketing needs!</p>

                        {
                            Data3.map((value, index) => {
                                return (
                                    <div key={index} className='flex w-full h-auto py-3 items-start gap-x-3'>

                                        <img src={tick} className='w-[20px]' alt="" />

                                        <p className=' '>{value.description}</p>
                                    </div>

                                )
                            })
                        }

                    </motion.div>


                    <div className='md:w-2/5 relative h-full flex justify-end py-6 '>

                        <img className=' absolute z-10 top-1 right-0 ' width="180" src={pattern} alt="" />

                        <motion.div className='w-[350px] z-20 mt-8 me-16 rounded-lg object-contain bg-slate-50 overflow-hidden '
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 100 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ amount: 0.5, once: true }}
                        >
                            <motion.img src={GroupPhoto} className='rounded-lg w-full h-full' alt="" />

                        </motion.div>

                    </div>

                </div>

                <div className='w-full flex max-w-[1000px] justify-around'>


                    <div>
                        <CountUp start={989} end={1128} duration={2.75} separator="" decimal="," suffix='+' className='font-bold font-montserrat text-5xl'></CountUp>
                        <h1 className='font-montserrat text-gray-700 pt-4'>Successful Work</h1>
                    </div>
                    <div>
                        <CountUp start={989} end={1128} duration={2.75} separator="" decimal="," suffix='+' className='font-bold font-montserrat text-5xl'></CountUp>
                        <h1 className='font-montserrat text-gray-700 pt-4'>Successful Work</h1>
                    </div>
                    <div>
                        <CountUp start={989} end={1128} duration={2.75} separator="" decimal="," suffix='+' className='font-bold font-montserrat text-5xl'></CountUp>
                        <h1 className='font-montserrat text-gray-700 pt-4'>Successful Work</h1>
                    </div>
                    <div>
                        <CountUp start={989} end={1128} duration={2.75} separator="" decimal="," suffix='+' className='font-bold font-montserrat text-5xl'></CountUp>
                        <h1 className='font-montserrat text-gray-700 pt-4'>Successful Work</h1>
                    </div>

                </div>

                {/*#######################################  Section 2 Starts #######################################*/}

                <div className='md:w-full md:max-w-[1200px]  w-[90%] h-auto py-6 md:px-0  flex flex-col'>

                    <div className='mb-6'>
                        <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> TEAM</button>
                        <h1 className='font-Cabin text-4xl pt-4'>Meet Our Great Team</h1>
                        <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys, your trusted digital marketing agency.</p>
                    </div>
                    <div className='w-[100%] '>
                        <div className='  flex justify-between place-items-start '>
                            <Animation />
                            <Animation />
                            <Animation />
                            <Animation />

                        </div>
                    </div>

                    {/*#######################################  Section 3 Starts #######################################*/}

                    <div className='rounded-xl w-full  flex mt-8 p-10 bg-gradient-to-tl from-[#FFF3CA]  via-[#FFDBD4] to-[#E9F7FF] gap-x-8'>

                        {/* Left Side */}
                        <div className='w-1/2 h-full grid grid-flow-col grid-rows-3 gap-y-10 '>

                            <div className='border-b-[1.5px] border-[#CFCFCF] w-full  '>
                                <h1 className='font-montserrat font-semibold text-3xl text-gray-800'>Our bulletproof process to win on Social Media</h1>
                            </div>

                            <div >
                                <h1 className='text-gray-700 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudinbibendum senectus scelerisque non. Turpis matis morbi vivera ipsum adipiscing Mauris volutpat  Ipsum duis tempor.</h1>
                            </div>


                            <div className='w-full grid grid-flow-row grid-rows-3 gap-y-3' >
                                <div className='flex items-center w-full gap-x-2 '>
                                    <MdCheckCircle className='text-[22px] text-[#292930]' />
                                    <h1 className='font-montserrat font-normal text-gray-600'>Dolor duis lorem enim eu nulla semper </h1>
                                </div>

                            </div>





                        </div>
                        {/* right Side */}

                        <div className='w-1/2 overflow-hidden relative'>





                            <div className='w-full h-full  flex items-center'>

                                <div className='relative w-[20%] overflow-hidden h-full grid grid-flow-row justify-center  items-center'>
                                    <div className='absolute w-full h-[90%] left-1/2  border-l-2 border-dashed  border-[#E38676] '></div>

                                    <div className='rounded-full z-20 w-[90px] h-[90px] max-w-[90px] max-h-[90px] bg-[#FFD1C8] flex justify-center items-center '>
                                        <div className=' rounded-full w-[80px] h-[80px] max-w-[74px] max-h-[74px] bg-white flex justify-center items-center'>
                                            <img src={goals} className='w-[50%]' alt="" />
                                        </div>
                                    </div>
                                    <div className='rounded-full z-20 w-[90px] h-[90px] max-w-[90px] max-h-[90px] bg-[#FFD1C8] flex justify-center items-center '>
                                        <div className=' rounded-full w-[80px] h-[80px] max-w-[74px] max-h-[74px] bg-white flex justify-center items-center'>
                                            <img src={Megaphone} className='w-[50%]' alt="" />
                                        </div>
                                    </div>
                                    <div className='rounded-full z-20 w-[90px] h-[90px] max-w-[90px] max-h-[90px] bg-[#FFD1C8] flex justify-center items-center '>
                                        <div className=' rounded-full w-[80px] h-[80px] max-w-[74px] max-h-[74px] bg-white flex justify-center items-center'>
                                            <img src={bar} className='w-[50%]' alt="" />
                                        </div>
                                    </div>

                                </div>

                                <div className='flex-1 h-full grid grid-flow-row justify-center  items-center'>
                                    <div>
                                        <h1 className='font-montserrat text-lg font-semibold pb-2'>Social Media Content Plan</h1>
                                        <h1 className='font-montserrat '>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </h1>

                                    </div>
                                    <div>
                                        <h1 className='font-montserrat text-lg font-semibold pb-2'>Publishing & Execution</h1>
                                        <h1 className='font-montserrat '>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </h1>


                                    </div>
                                    <div>
                                        <h1 className='font-montserrat text-lg font-semibold pb-2'>Measure & Scale</h1>
                                        <h1 className='font-montserrat '>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </h1>
                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>

                </div>



                <ContactUs />
                <Footer />
            </div>

        </>
    )
}

export default AboutUs