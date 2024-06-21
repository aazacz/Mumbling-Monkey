import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import tick from "/Icon.png"
import pattern from "/Pattern.png"
import GroupPhoto from "/Photo.png"
import Rectangle from "/Rectangle.png"
import Rectangle2 from "/Rectangle2.png"
import { HiOutlineSpeakerphone, HiOutlineMailOpen } from "react-icons/hi";
import NavScreen from '../components/NavScreen'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import logo from "/Logo.png"


const Homepage = () => {


  const NavData= {
    heading:"About Us",
    Description:"Creative Services For Boost Your Business Growth"
}
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








  return (
    <>
      <div className='  md-full h-auto  relative flex flex-col items-center overflow-auto'>


      <motion.div 
          initial={{y:100}}
          animate={{ y: 0 }}

          className="md:w-[100%]  h-screen  flex flex-col justify-center items-center  ">



            <img src={logo} className='w-[200px]' alt="" />
            < motion.div   
             initial={{y:100}}
             animate={{ y: 0 }}
             transition={{ type: "spring", duration: 0.8 ,damping:10,mass: 1 ,stiffness: 200 }}>
            <h1 className='text-center font-Cabin font-extrabold text-[50px] leading-10'>MUMBLING <br />MONKEYS</h1>
            <p className='text-center mt-4'>Welcome to Mumbling Monkeys, Your One-Stop<br />Destination For All Your Digital Needs!</p>
            </motion.div>
            <button className='rounded-md bg-slate-600 font-light text-sm text-white px-3 py-2 mt-4'>Get Stsrted Today</button>
          </motion.div>
   


        {/*#######################################  Section 1 Starts #######################################*/}
        <div className='md:w-full  md:max-w-[1250px] w-[90%]  h-auto py-6 md:px-0 px-4 md:flex'>

          <motion.div className='md:w-3/5 w-full h-full py-6 pr-6'
            initial={{ x: -195, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5, once: true }}

          >
            <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> ABOUT COMPANY</button>
            <h1 className='font-Cabin text-4xl pt-4'>Mumbling monkey</h1>
            <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys, your one-stop destination for all your digital marketing needs!</p>

            <div className='flex w-auto h-auto py-3 items'> {/* First Sentence */}
              <div className='pr-3 pt-1'>
                <img src={tick} alt="" />
              </div>
              <p className=''>At Mumbling Monkeys, we're not your run-of-the-mill marketing and media agency;
                we're a fresh and dynamic force in the digital world, ready to give your brand that cool and
                contemporary edge.  </p>
            </div>

            <div className='flex w-auto h-auto py-3 items'> {/* Second Sentence */}
              <div className='pr-3 pt-1'>
                <img src={tick} alt="" />
              </div>
              <p className=''>Our services cover a wide spectrum of digital marketing and media solutions, all designed to make your brand shine in the digital limelight. We're not just marketers; we're trendsetters. </p>
            </div>


          </motion.div>


          <div className='md:w-2/5 relative h-full flex justify-end py-6 '>

            <img className=' absolute z-10 top-1 right-0 ' width="180" src={pattern} alt="" />

            <motion.div className='w-[350px] z-20 mt-8 me-16 rounded-lg object-contain bg-slate-50 overflow-hidden '
              initial={{ x: 0, y: 100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 100 }}
              transition={{ duration: 1.5 }}
              viewport={{ amount: 0.5, once: true }}

            >
              <motion.img

                src={GroupPhoto} className='rounded-lg w-full h-full' alt="" />

            </motion.div>

          </div>

        </div>



        {/*#######################################  Section 2 Starts #######################################*/}

        <div className='md:w-full md:max-w-[1200px]  w-[90%] h-auto py-6 md:px-0  flex flex-col'>

          <div className='mb-6'>
            <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> TEAM</button>
            <h1 className='font-Cabin text-4xl pt-4'>Meet Our Great Team</h1>
            <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys, your trusted digital marketing agency.</p>
          </div>


          <div className=' grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-8 justify-center '>


            {data.map((value, key) => {
              return (
                <div key={key} className=' h-[300px] hover overflow-hidden  relative group'>


                  <img src={Rectangle} className='z-20 w-full h-full absolute top-0  left-0 object-cover group-hover:scale-110 transition-all duration-700 group-hover:opacity-0 group-hover:duration-300 ' alt="" />
                  <img src={Rectangle2} className='z-10 w-full h-full absolute top-0 left-0 object-cover group-hover:scale-110 transition-all duration-700  ' alt="" />



                  <div className='w-[80%] md:group-hover:-translate-y-full group-hover:-translate-y-[125px] 
                                   transition-all duration-500 absolute m-auto
                                  md:group-hover:bottom-0 -bottom-[10%] group left-0 right-0 z-20'>
                    <h1 className='text-white font-bold text-3xl '> {value.heading}</h1>
                    <p className='text-white leading-5'>{value.description}</p>
                  </div>
                </div>

              )
            })}

          </div>

        </div>



        {/*#######################################  Section 3 Starts #######################################*/}
        <div className='md:w-full md:max-w-[1200px]  w-[90%]  h-auto py-6  px-3 flex flex-col'>

          <div className='mb-6'>
            <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 italic py-1'>
              Ready to Elevate Your Brand's Cool Quotient? Let's Talk!
            </button>

            <h1 className='font-Cabin md:text-4xl text-xl pt-4'>DIGITAL MARKETING SERVICES</h1>
            <p className='text-slate-700 font-semibold text-justify md:text-left'>
              We, at Mumbling Monkeys, are committed to working on your
              business as our own. We aspire to achieve goals with innovative ideas,
              creative content and unique strategies. With us, you get a team of highly
              experienced and skilled individuals who are happy to help you boost your brand’s
              visibility and profitability, round the clock.
              Here's a glimpse of what we can do for you
            </p>
          </div>


          <motion.div className=' grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-4 justify-center ' >

            {data2.map((value, key) => {
              return (

                <motion.div
                  initial={{ x: 0, y: `${-100 * value.dur}` }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0.5 }}


                  key={key} className={`md:h-40  h-50 p-6  flex items-center rounded-lg ${value.colour}`}>
                  <div className='w-[80%] md:pr-2'>
                    <h1 className='text-lg font-semibold'> {value.heading}</h1>
                    <p className='text-sm '> {value.description}</p>

                  </div>
                  <div className='w-[10%]'>
                    <div className='w-14 h-14 bg-black flex justify-center items-center relative group' >
                      <div className={`${value.textcol} text-4xl  absolute group-hover:scale-50 group-hover:opacity-0 transition-all duration-300`}>
                        <HiOutlineSpeakerphone />
                      </div>

                      <div className={` text-4xl font-thin scale-0  origin-center absolute group-hover:scale-100  transition-all duration-200`}>
                        <HiOutlineMailOpen />
                      </div>

                    </div>
                  </div>
                </motion.div>

              )
            })}

          </motion.div>
        </div>






        <ContactUs />
        <Footer />
      </div>

    </>
  )
}

export default Homepage