import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import NavScreen from '../components/NavScreen'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import servicespng from '/services.png';
import ChatMarketing from "/ChatMarketing.png"
import { FaChevronCircleRight } from "react-icons/fa";
import tick from "/Icon.png"
import pattern from "/Pattern.png"
import GroupPhoto from "/Photo.png"
import { useState } from 'react'
import MeshLeftSide from "/MeshLeftSide.png"
import ServicesImage from "/ServicesImage.png"
import { PiPulseBold } from 'react-icons/pi'

const Services = (Data) => {

    const services = [
        {
            title: "Influencer Marketing",
            description: "We specialize in providing comprehensive influencer marketing services to busy companies. Our expertise spans every stage of the process, from influencer discovery and management to content creation and analyzing campaign success. Our agency is focused on developing and executing influencer strategies, activations, and ongoing management across various industries including fashion, interior design, lifestyle, travel, photography, tech niches, hospitality, and more.",
            icon: "InfluencerIcon"
        },
        {
            title: "Public Relations",
            description: "Mumbling Monkeys is an invaluable tool for promoting products, events, services, and news features. Our Public Relations services aim to help organizations quickly and consistently gain visibility in search engines. Engaging our distribution services will ensure your company achieves ample online success and builds a strong reputation.",
            icon: "PRIcon"
        },
        {
            title: "Search Engine Optimization (SEO)",
            description: "Our SEO services are designed to help your website rank higher in search engine results pages (SERPs) for relevant keywords and phrases. Our team of SEO experts uses proven strategies to optimize your website's on-page and off-page elements, including title tags, meta descriptions, header tags, content, backlinks, and more. We also provide keyword research, competitor analysis, and ongoing SEO monitoring and reporting.",
            icon: "SEOIcon"
        },
        {
            title: "Pay-Per-Click (PPC) Advertising",
            description: "Our PPC advertising services are designed to drive targeted traffic to your website through paid search engine advertising. Our team of PPC experts creates and manages highly targeted campaigns that are optimized for maximum ROI. We also provide keyword research, ad-copywriting, landing page optimization, and ongoing PPC monitoring and reporting.",
            icon: "PPCIcon"
        },
        {
            title: "Google AdWords",
            description: "Our Google AdWords service assists you in reaching your target audience by displaying targeted ads when people search for keywords related to your business. You can expect increased traffic, higher conversions, and a better ROI when our expert team manages your campaigns.",
            icon: "AdWordsIcon"
        },
        {
            title: "Keyword Research",
            description: "Our keyword research service identifies the best keywords for your business based on search volume, competition, and relevance. By targeting the right keywords, you can drive more traffic to your website and increase your online visibility.",
            icon: "KeywordResearchIcon"
        },
        {
            title: "Online Reputation Management",
            description: "Our online reputation management service helps you maintain a positive image online by monitoring your brand's online presence, addressing negative reviews or comments, and promoting positive content. We can help you build a strong online reputation that attracts customers and builds trust.",
            icon: "ORMIcon"
        },
        {
            title: "Graphic Designing",
            description: "Our graphic designing service creates eye-catching designs for your brand, including logos, brochures, flyers, social media posts, and more. Our talented designers can help you create a strong visual identity that sets you apart from the competition.",
            icon: "GraphicDesignIcon"
        },
        {
            title: "Video Production",
            description: "Our video production service helps you create engaging videos that showcase your products, services, or brand. We can handle everything from scripting to filming and editing, ensuring that your videos look professional and resonate with your target audience.",
            icon: "VideoProductionIcon"
        },
        {
            title: "Social Media Marketing",
            description: "Our social media marketing services are designed to help you build and maintain a strong social media presence. We create and manage social media profiles for your business on all major platforms, including Facebook, Twitter, LinkedIn, Instagram, and more. We also develop social media strategies, create engaging content, and monitor social media metrics to track your success.",
            icon: "SocialMediaMarketingIcon"
        },
        {
            title: "Content Marketing",
            description: "Our content marketing services are designed to help you create and distribute high-quality content that attracts and engages your target audience. We provide content strategy development, content creation (including blog posts, articles, videos, infographics, and more), content distribution, and ongoing content marketing monitoring and reporting.",
            icon: "ContentMarketingIcon"
        },
        {
            title: "Email Marketing",
            description: "Our email marketing services are designed to help you reach your target audience directly through email campaigns. We provide email list management, email campaign design and development, email automation, and ongoing email marketing monitoring and reporting.",
            icon: "EmailMarketingIcon"
        },
        {
            title: "Voice Search Optimization",
            description: "Our voice search optimization service ensures that your website is optimized for voice search queries, which are becoming increasingly popular. We can help you rank higher in voice search results by optimizing your website content and structure for voice search queries, helping you reach more customers through this emerging technology.",
            icon: "VoiceSearchOptimizationIcon"
        }
    ];

    const NavData = {
        heading: "services",
        Description: "Creative Services For Boost Your Business Growth"
    }
    const [showAll, setShowAll] = useState(false);
    const displayedServices = showAll ? services : services.slice(0, 6);
    return (
        <>
            <div className='h-auto flex flex-col items-center overflow-auto'>
                <NavScreen bg={servicespng} Data={NavData} />

                <div className='w-full py-16  flex justify-center'>
                    <div className='flex flex-wrap justify-start lg:max-w-[1300px] md:max-w-[1000px] gap-8 w-full h-max  '>
                        {displayedServices.map((val, index) => (
                            <div key={index} className='w-[300px] group h-[400px] rounded-2xl flex flex-col justify-between bg-[#424245] py-8 px-4'>
                                <div className='w-[100px] h-[100px] rounded-full bg-[#292930] flex justify-center items-center'>
                                    <img src={ChatMarketing} className='w-[50%] group-hover:w-[65%] transition-all duration-700' alt="" />
                                </div>
                                <h1 className='font-montserrat text-white font-semibold text-xl w-full'>{val.title}</h1>
                                <h1 className='font-montserrat text-base font-light text-white line-clamp-3'>{val.description}</h1>
                                <button className='border-[1px] font-montserrat font-semibold group-hover:bg-[#FFDC60] group-hover:text-lg transition-all duration-700 w-full h-14 border-[#525255] text-[#525255] flex items-center gap-x-3 justify-center'>
                                    Read More <FaChevronCircleRight className='group-hover:text-violet-600' />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {!showAll && (
                    <div className='w-full flex justify-center mb-10 animate-bounce'>

                    <button
                        className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-4 py-2 '
                        onClick={() => setShowAll(true)}
                        >
                        See More
                    </button>
                        </div>
                )}

                <div className='w-full h-max relative  flex pl-24'>


                    <img className=' absolute -z-10 left-0 -top-8 ' width="250" src={MeshLeftSide} alt="" />      {/* Mesh Design */}

                    {/* left side */}

                    <div className='w-1/2  bg-green-100 flex flex-col  rounded-lg '>


                        <div className="relative  w-full h-[540px] max-h-[540px] bg-[url('/ServicesImage.png')] bg-cover ">

                            <div className='absolute py-4  px-2 right-[1px] bottom-20 flex flex-col w-[200px] h-max  bg-white rounded-xl ' >

                                <div className='w-8 h-8 rounded-full bg-[#282628] text-white flex justify-center items-center text-lg'>
                                    <PiPulseBold />

                                </div>

                                <div className='text-center p-6'>
                                    <h1 className='font-montserrat font-bold text-5xl text-[#7C8D97] '>20K+ </h1>
                                    <h1 className='font-montserrat font-light text-base text-black'>Projects Done </h1>
                                </div>
                            </div>

                        </div>



                    </div>
                    {/* right Side */}
                    <div className='w-1/2 mx-2 gap-2  p-8'>

                        <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> WHY CHOOSE US</button>
                        <h1 className='font-semibold font-montserrat text-5xl leading-[80px]'>Choose Us to Grow Your Business</h1>
                        <h1 className='font-montserrat'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>

                        <div className='flex items-center gap-x-2 py-2'>
                            <div className='w-8 h-8 rounded-full bg-[#282628] text-white flex justify-center items-center text-lg'>
                                <PiPulseBold />
                            </div>
                             <h1 className='font-montserrat '>Result Driven Approach</h1>
                        </div>
                    
                        <div className='flex items-center gap-x-2 py-2'>
                            <div className='w-8 h-8 rounded-full bg-[#282628] text-white flex justify-center items-center text-lg'>
                                <PiPulseBold />
                            </div>
                            <h1  className='font-montserrat '>Expertise in Multiple Platforms</h1>
                          
                        </div>
                     
                        <div className='flex items-center gap-x-2 py-2'>
                            <div className='w-8 h-8 rounded-full bg-[#282628] text-white flex justify-center items-center text-lg'>
                                <PiPulseBold />
                            </div>
                             <h1 className='font-montserrat '>Continuous Optimization</h1>
                        </div>




                    </div>






                </div>


<ContactUs/>
<Footer/>


            </div>
        </>
    )
}

export default Services;
