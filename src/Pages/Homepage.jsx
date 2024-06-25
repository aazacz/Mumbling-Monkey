import React, { useEffect, useRef, useState } from 'react'
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
import { Link, useLocation } from 'react-router-dom'
import sideimg from "/Frame_28.png"
import { IoCheckmarkCircleOutline } from 'react-icons/io5'


const Homepage = () => {

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

  const NavData = {
    heading: "About Us",
    Description: "Creative Services For Boost Your Business Growth"
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
      heading: "Influencer Marketing",
      description: "Collaborate with trendsetting influencers to instantly enhance your brand's appeal and visibility.",
      colour: "bg-cyan-300",
      textcol: "text-cyan-300",
      dur: 0
    },
    {
      heading: "Public Relations",
      description: "Develop a captivating brand narrative and oversee your reputation with finesse.",
      colour: "bg-red-300",
      textcol: "text-red-300",
      dur: 0
    },
    {
      heading: "Search Engine Optimisation (SEO)",
      description: "Elevate your website's online presence, attracting organic and trend aware traffic.",
      colour: "bg-green-300",
      textcol: "text-green-300",
      dur: 1
    },
    {
      heading: "Pay-per-click Marketing (PPC)",
      description: "Create hip ad campaigns that deliver immediate results and conversions.",
      colour: "bg-yellow-300",
      textcol: "text-yellow-300",
      dur: 1
    },
    {
      heading: "Google AdWords",
      description: "Maximize your online presence with Google AdWords expertise.",
      colour: "bg-blue-300",
      textcol: "text-blue-300",
      dur: 2
    },
    {
      heading: "Keyword Research",
      description: "Identify the most influential keywords for maximum online impact.",
      colour: "bg-purple-300",
      textcol: "text-purple-300",
      dur: 2
    },
    {
      heading: "Online Reputation Management (ORM)",
      description: "Safeguard and enhance your brand's digital presence.",
      colour: "bg-orange-300",
      textcol: "text-orange-300",
      dur: 3
    },
    {
      heading: "Social Media Marketing",
      description: "Engage your audience with contemporary, informative, and creative content and build a loyal online tribe.",
      colour: "bg-pink-300",
      textcol: "text-pink-300",
      dur: 3
    },
    {
      heading: "Graphic Designing",
      description: "Create visually striking designs that turn heads and leave a lasting impression.",
      colour: "bg-indigo-300",
      textcol: "text-indigo-300",
      dur: 4
    },
    {
      heading: "Video Production",
      description: "Share your brand's story with cinematic flair.",
      colour: "bg-teal-300",
      textcol: "text-teal-300",
      dur: 4
    },
    {
      heading: "Info-Graphics",
      description: "Present complex information in an engaging and visually appealing manner.",
      colour: "bg-lime-300",
      textcol: "text-lime-300",
      dur: 5
    },
    {
      heading: "Content Marketing",
      description: "Craft high-quality content that resonates with all audiences.",
      colour: "bg-fuchsia-300",
      textcol: "text-fuchsia-300",
      dur: 5
    },
    {
      heading: "Email Marketing",
      description: "Cultivate and maintain your email list for exceptionally effective marketing campaigns.",
      colour: "bg-amber-300",
      textcol: "text-amber-300",
      dur: 6
    },
    {
      heading: "Voice Search Optimization",
      description: "Lead the way in voice search excellence.",
      colour: "bg-rose-300",
      textcol: "text-rose-300",
      dur: 6
    }
  ];


  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? data2 : data2.slice(0, 6);




  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [pathname])


  return (
    <>
      <div className=' w-screen  relative  md-full h-auto   flex flex-col items-center overflow-auto'>

        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}

          className="md:w-[100%] overflow-y-hidden relative h-screen  flex flex-col justify-center items-center  ">


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



          <img src={logo} className='w-[230px] py-8' alt="" />
          < motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.8, damping: 10, mass: 1, stiffness: 200 }}>
            <h1 className='text-center font-Cabin font-extrabold text-[80px] leading-[70px]'>MUMBLING <br />MONKEYS</h1>
            <p className='text-center mt-4 font-semibold font-montserrat'>Welcome to Mumbling Monkeys, Your One-Stop<br />Destination For All Your Digital Needs!</p>
          </motion.div>
          <Link to={'/services'} className='cursor-pointer rounded-md bg-[#3a3a3a] font-bold text- text-white px-5 py-2 mt-4'>Get Started Today</Link>
        </motion.div>



        {/*#######################################  Section 1 Starts #######################################*/}
        <div id='section1' ref={ref} className='md:w-full   w-[90%]  h-auto py-6 md:px-16 px-4 md:flex'>

          <motion.div className='md:w-3/5 w-full h-full py-6 pr-6'
            initial={{ x: -195, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5, once: true }}

          >
            <button className='cursor-default text-white text-sm  tracking-widest font-montserrat font-normal  rounded-full bg-[#7c8d97] px-4 py-2'> ABOUT COMPANY</button>
            <h1 className='font-Cabin text-4xl pt-4'>Mumbling monkey</h1>
            <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys, your one-stop destination for all your digital marketing needs!</p>

            <div className='flex w-auto h-auto py-3 items'> {/* First Sentence */}
              <div className='w-[4%]  pr-3 pt-1'>
                <IoCheckmarkCircleOutline className='text-green-500 text-lg' />

              </div>
              <div className='w-[95%]'>

                <p className=''>Our marketing team at Mumbling Monkeys creates and grows consumer traffic through superior visual content and strategic digital channel management. Our team of 100+ professionals include creators, influencers, advertising writers, savvy digital marketers, programmers, and graphic designers who work collaboratively to increase the visibility of your brand.  </p>
              </div>
            </div>



            <div className='flex w-auto h-auto py-3 items'> {/* Second Sentence */}
              <div className='w-[4%]  pr-3 pt-1'>
                <IoCheckmarkCircleOutline className='text-green-500 text-lg' />

              </div>
              <div className='w-[95%]'>
                <p className=''>To increase brand awareness, we have a pool of professional screenwriters and storytellers who create engaging content using words, video, sound, and pictures. We work with a wide range of brands in a variety of industries, including lifestyle, food, health, travel, consumer products, and high-tech goods. </p>
              </div>
            </div>

            <div className='flex w-auto h-auto py-3 items'> {/* Second Sentence */}
              <div className='w-[4%]  pr-3 pt-1'>
                <IoCheckmarkCircleOutline className='text-green-500 text-lg' />

              </div>
              <div className='w-[95%]'>
                <p className=''>We use cutting-edge tools and techniques to create results-driven campaigns, whether you want to increase your social media following, improve your search engine rankings, or drive more sales through your website.</p>
              </div>
            </div>

            <div className='flex w-auto h-auto py-3 items'> {/* Second Sentence */}
              <div className='w-[4%]  pr-3 pt-1'>
                <IoCheckmarkCircleOutline className='text-green-500 text-lg' />

              </div>
              <div className='w-[95%]'>
                <p className='w-[88%]'>Our mission is to take full responsibility for bridging the gaps by customising social platforms for maximum media reach and unparalleled results for any business needs.</p>
              </div>
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

        <div className='md:w-full  w-[90%] h-auto py-6 md:px-20  flex flex-col'>

          <div className='mb-6'>
            <button className='text-white text-sm font-normal rounded-2xl bg-[#7d8a91] px-3 py-1 cursor-default'> TEAM</button>
            <h1 className='font-Cabin text-4xl pt-4'>Meet Our Great Team</h1>
            <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys, your trusted digital marketing agency.</p>
          </div>


          <div className=' grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-8 justify-center '>


            {data.map((value, key) => {
              return (
                <div key={key} className=' h-[300px] hover overflow-hidden  relative group'>


                  <img src={Rectangle} className='z-20 w-full h-full absolute top-0  left-0 object-cover group-hover:scale-110 transition-all duration-700 group-hover:opacity-0 group-hover:duration-300 ' alt="" />
                  <img src={Rectangle2} className='z-10 w-full h-full absolute top-0 left-0 object-cover group-hover:scale-110 transition-all duration-700  ' alt="" />



                  <div className='w-[80%] h-[40%] md:group-hover:-translate-y-[-100px]   relative -bottom-full -translate-y-[45%] group-hover:bottom-0
                                   transition-all duration-500 m-auto
                                     group  z-20'>
                    <h1 className='text-white font-bold text-2xl py-3'> {value.heading}</h1>
                    <p className='text-white leading-5'>{value.description}</p>
                  </div>
                </div>

              )
            })}

          </div>

        </div>



        {/*#######################################  Section 3 Starts #######################################*/}
        <div className='md:w-full md:px-20  w-[90%]  h-auto py-6    flex flex-col'>

          <div className='mb-6'>
            <button className='text-white text-sm font-normal rounded-2xl bg-[#7c8d97] px-3 italic py-1 cursor-default'>
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

            {displayedServices.map((value, key) => {
              return (

                <motion.div
                  initial={{ x: 0, y: `${-100 * value.dur}` }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ amount: 0 }}


                  key={key} className={`md:h-40  h-50 p-6 md:p-8  flex items-center rounded-lg ${value.colour}`}>
                  <div className='w-[80%] md:pr-2'>
                    <h1 className='text-lg font-semibold'> {value.heading}</h1>
                    <p className='text-sm '> {value.description}</p>

                  </div>
                  <div className='w-[20%] flex justify-center'>
                    <div className='w-14 h-14 bg-black flex justify-center items-center relative group' >
                      <div className={`${value.textcol} text-4xl  absolute group-hover:scale-0 group-hover:opacity-0 transition-all duration-300`}>
                        <HiOutlineSpeakerphone />
                      </div>

                      <div className={` text-4xl font-thin scale-0 z-40 text-yellow-300  origin-center absolute group-hover:scale-100  transition-all duration-200`}>
                        <HiOutlineMailOpen />
                      </div>

                    </div>
                  </div>
                </motion.div>

              )
            })}

          </motion.div>
        </div>

        {!showAll && (
          <div className='w-full flex justify-center mb-10 animate-bounce'>
            <button
              className='text-white text-sm font-normal rounded-2xl bg-[#3a3a3a] px-4 py-2'
              onClick={() => setShowAll(true)}
            >
              See More
            </button>
          </div>
        )}

        {showAll && (
          <div className='w-full flex justify-center mb-10 animate-bounce'>
            <button
              className='text-white text-sm font-normal rounded-2xl bg-[#3a3a3a] px-4 py-2'
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          </div>
        )}



        <div className='w-full flex justify-center overflow-x-hidden md:px-20  '>
          <ContactUs />
        </div>

        <Footer />
      </div>

    </>
  )
}

export default Homepage