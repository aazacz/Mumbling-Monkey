import React, { useState } from 'react'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import AboutUs from "/AboutUs.webp"
import Tick from "/Tick.png"
import address from "/address.png"

const ContactUsPage = (Data) => {




    return (
        <>
            <div className='   overflow-x-hidden h-auto  mt-[15vh] flex flex-col items-center overflow-auto'>




                <div className='md:w-full w-[90%] h-auto py-6 md:px-14 px-3  flex flex-col'>

                    <div className='mb-6'>
                        <h1 className='text-[#487A97] text-5xl  rounded-2xl  font-montserrat  font-medium py-2'> Contact Us </h1>
                        <p className='text-slate-700 font-semibold md:w-2/3'>We, At Mumbling Monkeys, Are Committed To Working On Your Business As Our Own. We Aspire To Achieve Goals With Innovative Ideas</p>
                    </div>

                    <div className='w-full  h-auto flex md:flex-row flex-col-reverse  md:gap-9'>

                        <div className='md:w-1/2  '>
                            <form action="">

                                <div className='flex flex-col mt-4'>
                                    <label className='text-gray-700' htmlFor="name">YOUR NAME</label>
                                    <input className='w-full h-11 rounded-xl mt-3 border-[1px] outline-2 border-gray-500' type="text" id='name' />
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <label className='text-gray-700' htmlFor="email">EMAIL</label>
                                    <input className='w-full h-11 rounded-xl mt-3 border-[1px] outline-2 border-gray-500' type="email" id='email' />
                                </div>

                                <div className='flex flex-col mt-4'>
                                    <label className='text-gray-700' htmlFor="email">message</label>
                                    <textarea className='w-full placeholder:pl-3 placeholder:pt-3 rounded-xl mt-3 border-[1px] outline-2 border-gray-500' placeholder='Your Message Goes Here' name="" id="" cols="30" rows="5"></textarea>
                                </div>

                                <div className='flex flex-row mt-4 items-center justify-between'>
                                    <div className='flex py-3 items-center'>
                                        <img src={Tick} alt="" className='w-[12%]' />
                                        <p className='pl-4 text-xs md:text-base'>I agree with the <span className='underline'>Term Of Uses</span> and <span className='underline'> Privacy Policy </span></p>
                                    </div>
                                    <button className='md:px-11 px-6 text-sm text-white  md:py-3 p-2  rounded-xl bg-black '>Send</button>
                                </div>

                            </form>

                        </div>

                        <div className='md:w-1/2 flex flex-col items-end '>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.819280080072!2d77.58981517417054!3d12.919334016023823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15021e15c723%3A0xd8429d20deba649d!2sZikraByte%20Solutions!5e0!3m2!1sen!2sin!4v1718360232001!5m2!1sen!2sin"
                                width="600"
                                height="450"

                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>



                            <div className='mt-5 '>
                                <img src={address} className='w-full' alt="" />

                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </div>





        </>
    )
}

export default ContactUsPage