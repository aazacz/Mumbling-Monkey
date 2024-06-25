import React from 'react'
import NavScreen from '../components/NavScreen'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import ourteam from '/ourteam/navscreen.png'
import ceo1 from '/ceophoto1.jpg'
import ceo2 from '/ceophoto2.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import tick from "/Icon.png";

const OurTeam = (Data) => {

    const team = [
        {
            name: "Aashik Paalyam ",
            position: "Founder & CEO",
            photo: ceo1
        },
        {
            name: "Ramika Donti Paalyam  ",
            position: "Founder & CEO",
            photo: ceo2
        }
    ]

    const NavData = {
        heading: "OUR TEAM",
        Description: "The Consultors"
    }

    const Data3 =[
        {
            description:"Want to boost your brand visibility and reach potential customers? We can help.At Mumbling Monkeys, our team is composed of skilled and experienced professionals, including"
        },
        {
            description:"Google Marketing Certified experts in digital marketing, social media analysis, and content development. We also have graphic designers who specialize in Adobe Photoshop and Autodesk Sketchbook. Our marketing professionals utilize various tools such as SEMrush, Google Analytics, Google Search Console, Webmaster Tools, Google Keyword Planner, Google AdSense, Google Voice Search, Google Trends, Small SEO Tools, and more to conduct audits and complete tasks."
        },
        {
            description:"Our team of marketing professionals creates and builds consumer traffic through superior visual content and strategic digital channel management. Our team comprises 100+ professionals including creators, influencers, advertising writers, savvy digital marketers, programmers, and graphic designers who work closely to improve your brand visibility."
        },
        {
            description:"We have a pool of professional screenwriters and storytellers who create engaging content with the use of words, video, sound & pictures to increase brand awareness. We work with a variety of brands in various domains ranging from lifestyle, food, health, travel, consumer products and high-tech goods."
        },
        {
            description:"Our mission is to take complete accountability to bridge the gaps by customising social platforms for maximum media reach and unparalleled results for all business needs."
        },

    ]

    return (
        <>
            <div className='w-full h-auto relative flex flex-col items-center overflow-auto'>
                <NavScreen bg={ourteam} Data={NavData} />

                <div className='w-full h-max px-4 lg:px-16 pt-8'>
                    <button className='text-white text-sm font-normal rounded-2xl bg-[#7d8a91] px-3 py-1'> TEAM</button>
                    <h1 className='font-montserrat font-bold text-3xl pt-2 '>Meet Our Great Team</h1>
              
                    {Data3.map((value, index) => (
                        <div key={index} className='flex w-full h-auto py-3 items-start gap-x-3'>
                            <img src={tick} className='w-[20px]' alt="" />
                            <p className='font-montserrat'>{value.description}</p>
                        </div>
                    ))}




                    <div className='w-full flex flex-wrap gap-x-8 gap-y-8 justify-center'>
                        {team.map((val, index) => {
                            return (
                                <div key={index} className='w-full max-w-[350px] flex flex-col items-center'>
                                    <div className='w-full rounded-2xl h-[400px] overflow-hidden relative'>
                                        <img src={val.photo} className='w-full rounded-2xl transition-transform group-hover:scale-110 duration-300 ease-in-out' alt={val.name} />
                                        <h1 className='px-3 py-1 rounded-2xl text-white bg-black font-montserrat font-normal absolute bottom-5 right-0'>{val.position}</h1>
                                    </div>
                                    <div className='w-full text-center'>
                                        <h1 className='font-montserrat py-4 text-xl md:text-2xl font-bold text-gray pt-6'>{val.name}</h1>
                                        <h1 className='font-montserrat text-sm md:text-lg font-light text-gray-800'>Leverage agile frameworks to provide a robust synopsis for high level overviews.</h1>
                                    </div>
                                    <div className='w-full flex justify-center pt-4 gap-x-4'>
                                        <FaTwitter className='cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
                                        <a href='https://www.instagram.com/mumblingmonkeysmedia/' target='blank'>
                                            <FaInstagram className='cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
                                        </a>
                                        <FaFacebook className='cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <ContactUs />
                <Footer />
            </div>
        </>
    )
}

export default OurTeam
