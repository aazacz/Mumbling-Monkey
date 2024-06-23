import React, { useState } from 'react'
import NavScreen from '../components/NavScreen'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import ourteam from '/ourteam/navscreen.png'
import ceo from '/ourteam/CEO.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import ceo1 from "/ceophoto1.jpg"
import ceo2 from "/ceophoto2.jpg"
const OurTeam = (Data) => {

    const team=[
{
    name:"Aashik Paalyam ",
    position:"Founder & CEO",
    photo:ceo1
},
{
    name:"Ramika Donti Paalyam  ",
    position:"Founder & CEO",
    photo:ceo2
}

    ]

    const NavData = {
        heading: "EXPERTISE",
        Description: "Our Expertise"
    }

    return (
        <>
            <div className='  md-full h-auto  relative flex flex-col items-center overflow-auto'>


                <NavScreen bg={ourteam} Data={NavData} />



                <div className='w-full h-max  px-16 pt-8'>
                    <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> TEAM</button>


                    <h1 className='font-montserrat font-semibold text-xl'>Meet Our Great Team</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>

                    {/*  */}
                    <div className='w-full flex gap-x-8  justify-center  '>
                        {team.map((val,index)=>{
                            return(

                        <div className='h-[600px]  w-full max-w-[350px] group flex flex-col'>
                            <div className='w-full rounded-2xl h-[400px] overflow-hidden  relative'>
                                <img src={val.photo} className='w-full rounded-2xl transition-transform group-hover:scale-110 duration-300 ease-in-out' alt="" />

                                <h1 className='px-3 py-1 rounded-2xl text-white bg-black font-montserrat font-normal absolute bottom-5 right-0'>{val.position}</h1>
                            </div>
                            <div className=''>
                                <h1 className='font-montserrat text-center py-4 text-2xl font-bold text-gray pt-6'>{val.name}</h1>
                                <h1 className='font-montserrat text-center text-lg font-light text-gray-800'>Leverage agile frameworks to provide a robust synopsis for high level overviews.</h1>
                            </div>
                            <div className='w-full justify-center flex pt-4 gap-x-4'>
                                <FaTwitter className=' cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
                               <a href='https://www.instagram.com/mumblingmonkeysmedia/' target='blank'>

                                <FaInstagram className='cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
                               </a>
                                <FaFacebook className=' cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
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