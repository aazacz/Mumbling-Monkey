import { useState } from 'react'
import './App.css'
import sideimg from "/Frame_29.png"
import { motion, AnimatePresence } from "framer-motion"
import { cubicBezier } from "framer-motion"
import logo from "/Logo.png"
import tick from "/Icon.png"
import pattern from "/Pattern.png"
import GroupPhoto from "/Photo.png"
import Rectangle from "/Rectangle.png"
import Rectangle2 from "/Rectangle2.png"
import { HiOutlineSpeakerphone, HiOutlineMailOpen } from "react-icons/hi";

function App() {
  const [show, setShow] = useState(true)
  const easing = cubicBezier(.39, -0.23, .4, 1.4)
  const marqueeVariants = {
    animate: {
      x: [-2000, 0,-2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration:20
        },
      },
    },
  };

  const [IsHovering, setIsHovering] = useState(false)

  const data = [
    {
      heading: "Email Marketing", image1: "Rectangle", image2: "Rectangle2",
      description: `Fuelled by extensive market research and creative expertise, we partner with companies to optimize their position and
                    elevate them above the noise. Whether it’s their brand,their products or their people, the journey to category leadership starts with Tomorrow People.`},
    {
      heading: "Email Marketing", image1: "Rectangle", image2: "Rectangle2",
      description: `Fuelled by extensive market research and creative expertise, we partner with companies to optimize their position and
                    elevate them above the noise. Whether it’s their brand,their products or their people, the journey to category leadership starts with Tomorrow People.`},
    {
      heading: "Email Marketing", image1: "Rectangle", image2: "Rectangle2",
      description: `Fuelled by extensive market research and creative expertise, we partner with companies to optimize their position and
                    elevate them above the noise. Whether it’s their brand,their products or their people, the journey to category leadership starts with Tomorrow People.`},
    {
      heading: "Email Marketing", image1: "Rectangle", image2: "Rectangle2",
      description: `Fuelled by extensive market research and creative expertise, we partner with companies to optimize their position and
                    elevate them above the noise. Whether it’s their brand,their products or their people, the journey to category leadership starts with Tomorrow People.`},
  ]

  const data2 = [
    { heading: "Influencer Marketing", description: `Enable local payment methods for your customers 
                                                overseas and slash processing fees by 5-10x.Enable local payment 
                                                methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-yellow-200",textcol:"text-yellow-200",dur:0 },
    {heading: "Public Relations", description: `Enable local payment methods for your customers 
                                                overseas and slash processing fees by 5-10x.Enable local payment 
                                                methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-cyan-300"  ,textcol:"text-cyan-200" ,dur:0},
    {heading: "Voice Search Optimization", description: `Enable local payment methods for your customers 
                                                overseas and slash processing fees by 5-10x.Enable local payment 
                                                methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-violet-300"  ,textcol:"text-violet-200",dur:1},
    {heading: "Social Media Marketing", description: `Enable local payment methods for your customers 
                                                overseas and slash processing fees by 5-10x.Enable local payment 
                                                methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-orange-300"  ,textcol:"text-orange-200",dur:1},
    {heading: "Social Media Marketing", description: `Enable local payment methods for your customers 
                                                overseas and slash processing fees by 5-10x.Enable local payment 
                                                methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-purple-300" ,textcol:"text-purple-200" ,dur:2},
    {heading: "Social Media Marketing", description: `Enable local payment methods for your customers 
                                                overseas and slash processing fees by 5-10x.Enable local payment 
                                                methods for your customers overseas and slash processing fees by 5-10x. `, colour: "bg-indigo-300" ,textcol:"text-indigo-200" ,dur:2},
  ]




  return (


    <>
      <div className='w-full   relative flex flex-col items-center overflow-auto'>

        <motion.div className='absolute flex flex-row  invert opacity-20'    variants={marqueeVariants}    animate="animate"  >   

               <img className='' src={sideimg} alt="" />
               <img className='' src={sideimg} alt="" />
               <img className='' src={sideimg} alt="" />
               <img className='' src={sideimg} alt="" />
               <img className='' src={sideimg} alt="" />
               <img className='' src={sideimg} alt="" />
               <img className='' src={sideimg} alt="" />
               <img className='' src={sideimg} alt="" />
               <img className='' src={sideimg} alt="" />

        </motion.div> 

        <div className="w-[60%] h-screen flex flex-col justify-center items-center overflow-hidden ">


        
          <img src={logo} width="200" alt="" />
          <h1 className='text-center font-Cabin font-extrabold text-[50px] leading-10'>MUMBLING <br />MONKEYS</h1>
          <p className='text-center mt-4'>Welcome to Mumbling Monkeys, Your One-Stop<br />Destination For All Your Digital Needs!</p>

          <button className='rounded-md bg-slate-600 font-light text-sm text-white px-3 py-2 mt-4'>Get Stsrted Today</button>

        </div>





        {/* next Section */}
        <div className='w-[80%]  h-auto py-6 px-14 flex'>

          <motion.div className='w-3/5 h-full py-6 pr-6'
          initial={{x:-200,y:0,opacity:0}}
          whileInView={{x:0,y:0,opacity:100}}
          transition={{ duration: 1 }}
          viewport={{amount: 0.5,once:true}}
          
          >
            <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> ABOUT COMPANY</button>
            <h1 className='font-Cabin text-4xl pt-4'>Mumbling monkey</h1>
            <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys,your trusted digital marketing agency.</p>

            <div className='flex w-auto h-auto py-3 items'> {/* First Sentence */}
              <div className='pr-3 pt-1'>
                <img src={tick} alt="" />
              </div>
              <p className=''>Our company, Mumbling Monkeys,
                was founded to help businesses use the internet effectively.
                We believe in more than just pretty ads and website tweaks. </p>
            </div>

            <div className='flex w-auto h-auto py-3 items'> {/* Second Sentence */}
              <div className='pr-3 pt-1'>
                <img src={tick} alt="" />
              </div>
              <p className=''>Our company, Mumbling Monkeys,
                was founded to help businesses use the internet effectively.
                We believe in more than just pretty ads and website tweaks. </p>
            </div>


          </motion.div>
          <div className='w-2/5 relative h-full flex justify-end py-6 '>

            <img className=' absolute z-10 top-1 right-0 ' width="180" src={pattern} alt="" />

            <motion.div className='w-[350px] z-20 mt-8 me-16 rounded-lg object-contain bg-slate-50 overflow-hidden '
            initial={{x:0,y:100,opacity:0}}
            whileInView={{x:0,y:0,opacity:100}}
            transition={{ duration: 1.5 }}
            viewport={{amount: 0.5,once:true}}

            >
              <motion.img
             
              src={GroupPhoto} className='rounded-lg w-full h-full' alt=""  />

            </motion.div>

          </div>

        </div>



        {/* next Section */}
        <div className='w-[80%] h-auto py-6 px-14 flex flex-col'>

          <div className='mb-6'>
            <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> TEAM</button>
            <h1 className='font-Cabin text-4xl pt-4'>Meet Our Great Team</h1>
            <p className='text-slate-700 font-semibold'>Welcome to Mumbling Monkeys,your trusted digital marketing agency.</p>
          </div>


          <div className=' grid grid-flow-row grid-cols-2 gap-5 justify-center '>


            {data.map((value, key) => {
              return (
                <div key={key} className=' h-60 hover overflow-hidden  relative group'>


                  <img src={Rectangle} className='z-20 w-full h-full absolute top-0  left-0 object-cover group-hover:scale-110 transition-all duration-700 group-hover:opacity-0 ' alt="" />
                  <img src={Rectangle2} className='z-10 w-full h-full absolute top-0 left-0 object-cover   ' alt="" />



                  <div className='w-[80%] group-hover:-translate-y-full transition-all duration-500 absolute m-auto -bottom-[120px] left-0 right-0 z-20'>
                    <h1 className='text-white font-bold text-2xl '> Email Marketing</h1>
                    <p className='text-white leading-5'>Fuelled by extensive market research and creative expertise, we partner with companies to optimize their position and
                      elevate them above the noise. Whether it’s their brand,their products or their people, the journey to category leadership starts with Tomorrow People.</p>
                  </div>
                </div>

              )
            })}



          </div>

        </div>



        {/* next Section */}
        <div className='w-[80%] h-auto py-6 px-14 flex flex-col'>

          <div className='mb-6'>
            <button className='text-white text-sm font-normal rounded-2xl bg-slate-500 px-3 py-1'> GROWING WITH OUR CLIENTS </button>
            <h1 className='font-Cabin text-4xl pt-4'>Evolve your position & own your category</h1>
            <p className='text-slate-700 font-semibold'>We, At Mumbling Monkeys, Are Committed To Working On Your Business As Our Own. We Aspire To Achieve Goals With Innovative Ideas, Creative Content And Unique Strategies. With Us, You Get A Team Of Highly Experienced And Skilled Individuals Who Are Happy To Help You Round The Clock, At Cost-Effective Prices. </p>
          </div>


          <motion.div className=' grid grid-flow-row grid-cols-2 gap-4 justify-center '
         >

            {data2.map((value, key) => {
              return (

                <motion.div 
                initial={{x:0,y:`${-100 *value.dur}`}}
                whileInView={{x:0,y:0}}
                transition={{ duration: 1 }}
                viewport={{amount: 0.5}}
                
                
                key={key} className={`h-40  p-6  flex items-center rounded-lg ${value.colour}`}>
                  <div className='w-[80%] pr-2'>
                    <h1 className='text-lg font-semibold'> {value.heading}</h1>
                    <p className='text-sm '> {value.description}</p>

                  </div>
                  <div className='w-[10%]'>
                    <div className='w-14 h-14 bg-black flex justify-center items-center relative group' >
                    <div className={`${value.textcol} text-4xl  absolute group-hover:scale-50 group-hover:opacity-0 transition-all duration-300`}>
                    <HiOutlineSpeakerphone/>
                    </div>
               
                    <div className={`text-yellow-300 text-4xl font-thin scale-0  origin-center absolute group-hover:scale-100  transition-all duration-200`}>
                    <HiOutlineMailOpen/>
                    </div>

                    </div>



                  </div>
                </motion.div>


              )
            })}





          </motion.div>
        </div>



      </div>
    </>
  )
}

export default App
