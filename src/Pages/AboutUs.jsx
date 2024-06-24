import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import tick from "/Icon.png";
import pattern from "/Pattern.png";
import GroupPhoto from "/Photo.png";
import NavScreen from '../components/NavScreen';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import CountUp from 'react-countup';
import { MdCheckCircle } from 'react-icons/md';
import goals from "/Goals.png";
import Megaphone from "/Megaphone.png";
import bar from "/bar.png";
import AboutUsimg from "/AboutUs.webp";
import './AboutUs.css';
import Animation from './Animation';

const AboutUs = (Data) => {
    const targetRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);
    const countUpRef = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInViewport(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    const NavData = {
        heading: "About Us",
        Description: "Creative Services For Boost Your Business Growth"
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
    ];

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
    ];

    const marketingData = [
        {
            title: "Creative Ideas",
            description: "Experience the difference with our creative ideas that spark engagement and inspire action. We blend imagination and strategy to deliver unforgettable marketing campaigns."
        },
        {
            title: "Best Features",
            description: "From advanced analytics and robust influencer networks to personalized campaign strategies, we deliver excellence in every detail. Our comprehensive influencer databases, real-time campaign tracking, and tailored marketing strategies ensure success."
        },
        {
            title: "Experience",
            description: "Benefit from our extensive experience in influencer marketing. We blend industry knowledge with innovative strategies to create powerful campaigns that drive growth."
        },
        {
            title: "Seamless Solutions",
            description: "Experience the convenience of our seamless solutions. Our integrated approach ensures smooth, hassle-free execution of your marketing strategies."
        }
    ];

    const Data3 = [
        { description: "Our company was founded with a single goal in mind: to assist businesses of all sizes in harnessing the power of the internet to reach new audiences, drive traffic, and generate more leads and sales." },
        { description: "Mumbling Monkeys believes that digital marketing entails more than just optimising websites and creating eye-catching advertisements. It's all about creating one-of-a-kind, engaging experiences that connect with your target audience and inspire them to act. As a result, we collaborate closely with each of our clients to understand their specific goals, challenges, and target audiences, and to develop a tailored digital marketing strategy that delivers real results." },
        { description: "Our team at Mumbling Monkeys is made up of talented and experienced individuals, including Google Marketing Certified experts in digital marketing, social media analysis, and content development. In addition, we have graphic designers who are experts in Adobe Photoshop and Autodesk Sketchbook. " },
        { description: "To conduct audits and complete tasks, our marketing professionals use tools such as SEMrush, Google Analytics, Google Search Console, Webmaster Tools, Google Keyword Planner, Google AdSense, Google Voice Search, Google Trends, Small SEO Tools, and others." },
        { description: "Mumbling Monkeys is dedicated to providing exceptional results and exceptional customer service. We understand that digital marketing can be complicated and intimidating, and we're here to help you every step of the way. Our team is always ready to answer your questions, share insights, and assist you in making informed decisions about your digital marketing strategy." },
    ];

    return (
        <div className='w-full h-auto relative flex flex-col items-center overflow-auto'>
            <NavScreen bg={AboutUsimg} Data={NavData} />

            {/* Section 1 */}
            <div className='md:w-full md:max-w-[1250px] w-[90%] h-auto py-6 md:px-0 px-4 md:flex flex-col md:flex-row'>
                <motion.div className='md:w-3/5 w-full h-full py-6 pr-6'
                    initial={{ x: -195, y: 0, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 100 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.5, once: true }}
                >
                    <button className='cursor-default text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> ABOUT COMPANY</button>
                    <h1 className='font-Cabin text-4xl pt-4'>Mumbling monkey</h1>
                    <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys, your one-stop destination for all your digital marketing needs!</p>
                    {Data3.map((value, index) => (
                        <div key={index} className='flex w-full h-auto py-3 items-start gap-x-3'>
                            <img src={tick} className='w-[20px]' alt="" />
                            <p>{value.description}</p>
                        </div>
                    ))}
                </motion.div>

                <div className='md:w-2/5 relative h-full flex justify-end py-6'>
                    <img className='absolute z-10 top-1 right-0 ' width="180" src={pattern} alt="" />
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

            {/* Section 2 */}
            <div ref={targetRef} className='w-full flex flex-wrap justify-around py-6'>
                {isInViewport && (
                    <>
                        <div className='w-1/2 md:w-1/4 flex flex-col items-center'>
                            <CountUp start={95} end={120} duration={1.5} separator="" decimal="," suffix='+' className='font-bold font-montserrat text-5xl' />
                            <h1 className='font-montserrat text-gray-700 pt-4'>Successful Work</h1>
                        </div>
                        <div className='w-1/2 md:w-1/4 flex flex-col items-center'>
                            <CountUp start={12} end={25} duration={1.5} separator="" decimal="," suffix='+' className='font-bold font-montserrat text-5xl' />
                            <h1 className='font-montserrat text-gray-700 pt-4'>Team Members</h1>
                        </div>
                        <div className='w-1/2 md:w-1/4 flex flex-col items-center'>
                            <CountUp start={95} end={112} duration={1.5} separator="" decimal="," suffix='+' className='font-bold font-montserrat text-5xl' />
                            <h1 className='font-montserrat text-gray-700 pt-4'>Happy Customers</h1>
                        </div>
                        <div className='w-1/2 md:w-1/4 flex flex-col items-center'>
                            <CountUp start={60} end={100} duration={1.5} separator="" decimal="," suffix='+' className='font-bold font-montserrat text-5xl' />
                            <h1 className='font-montserrat text-gray-700 pt-4'>Creative Ideas</h1>
                        </div>
                    </>
                )}
            </div>

            {/* Section 3 */}
            <div className='md:w-full md:max-w-[1200px] w-[90%] h-auto py-6 md:px-0 flex flex-col'>
                <div className='mb-6'>
                    <button className='cursor-default text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> TEAM</button>
                    <h1 className='font-Cabin text-4xl pt-4'>Meet Our Great Team</h1>
                    <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys, your trusted digital marketing agency.</p>
                </div>
                <div className='w-full flex flex-wrap justify-between'>
                    {marketingData.map((value, index) => (
                        <Animation key={index} data={value} />
                    ))}
                </div>

                {/* Section 4 */}
                <div className='rounded-xl w-full md:max-w-[1200px] flex flex-col md:flex-row mt-8 p-10 bg-gradient-to-tl from-[#FFF3CA] via-[#FFDBD4] to-[#E9F7FF] gap-x-8'>
                    {/* Left Side */}
                    <div className='w-full md:w-1/2 h-full flex flex-col mb-6 md:mb-0'>
                        <div className='border-b-[2px] border-[#CFCFCF] w-full h-[90px]'>
                            <h1 className='font-montserrat font-semibold text-3xl text-gray-800'>Our bulletproof process to win on Social Media</h1>
                        </div>
                        <div className='flex w-full h-max'>
                            <h1 className='text-gray-700 text-lg font-montserrat text-justify'>
                                &emsp; &emsp;&emsp;In today's dynamic digital landscape, succeeding on social media requires more than just posting content. It demands a strategic, data-driven approach that ensures your brand not only reaches but resonates with your target audience. Our bulletproof process is designed to deliver consistent and exceptional results, transforming your social media presence into a powerful marketing tool.
                            </h1>
                        </div>
                        <div className='w-full pt-4 grid grid-flow-row grid-rows-3 gap-y-3'>
                            <div className='flex items-center w-full gap-x-2'>
                                <MdCheckCircle className='text-[22px] text-[#292930]' />
                                <h1 className='font-montserrat font-normal text-gray-600'>Dolor duis lorem enim eu nulla semper</h1>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className='w-full md:w-1/2 overflow-x-scroll grid grid-flow-col snap-x snap-mandatory yScrollbar'>
                        <div className='w-[550px] h-full snap-center flex items-center'>
                            <div className='relative w-[20%] overflow-hidden h-full grid grid-flow-row justify-center items-center'>
                                <div className='absolute w-full h-[90%] left-1/2 border-l-2 border-dashed border-[#E38676]'></div>
                                {rightData1.map((val, index) => (
                                    <div key={index} className='rounded-full z-20 w-[90px] h-[90px] max-w-[90px] max-h-[90px] bg-[#FFD1C8] flex justify-center items-center'>
                                        <div className='rounded-full w-[80px] h-[80px] max-w-[74px] max-h-[74px] bg-white flex justify-center items-center'>
                                            <img src={val.icon} className='w-[50%]' alt="" />
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
                        <div className='w-[550px] h-full snap-center flex items-center'>
                            <div className='relative w-[20%] overflow-hidden h-full grid grid-flow-row justify-center items-center'>
                                <div className='absolute w-full h-[90%] left-1/2 border-l-2 border-dashed border-[#E38676]'></div>
                                {rightData2.map((val, index) => (
                                    <div key={index} className='rounded-full z-20 w-[90px] h-[90px] max-w-[90px] max-h-[90px] bg-[#FFD1C8] flex justify-center items-center'>
                                        <div className='rounded-full w-[80px] h-[80px] max-w-[74px] max-h-[74px] bg-white flex justify-center items-center'>
                                            <img src={val.icon} className='w-[50%]' alt="" />
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
            </div>

            <ContactUs />
            <Footer />
        </div>
    );
};

export default AboutUs;
