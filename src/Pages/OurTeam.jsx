import React from 'react'
import NavScreen from '../components/NavScreen'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import ourteam from '/ourteam/navscreen.webp'
import ceo1 from '/ceophoto1.webp'
import ceo2 from '/ceophoto2.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const OurTeam = (Data) => {

  const team = [
    {
      name: "Aashik Paalyam ",
      position: "Founder & CEO",
      photo: ceo1,
      description: "An entrepreneur, digital marketer, PRO, brand consultant, voice over artist, food blogger and photographer, Aashik Paalyam is a man of many talents. Starting off his career as an Assistant Company Secretary, in a well known F&B company, Aashik went on to complete his MBA in Marketing to follow his passion. He Worked as Consultant in various Media Agencies, giving his vast expertise to various F&B, Lifestyle, Products and Political clients.",
      insta: "https://www.instagram.com/wannaknowwhereweeat/",
      fb: "https://www.facebook.com/aashik.paalyam?mibextid=ZbWKwL",
      x: "https://x.com/Aashikpaalyam",
      hover: " md:group-hover:h-[240px] h-max"

    },
    {
      name: "Ramika Donti Paalyam  ",
      position: "Founder & CFO",
      photo: ceo2,
      description: "A Finance Background with a flair for Marketing, as the co-founder of Mumbling Monkeys Media, she ensures that every event launch, influencer campaign and media deliverable is innovative and professionally-managed. From finding the best influencers for your launch event or marketing ",
      insta: "https://www.instagram.com/mrs.superaagithu/",
      fb: "",
      x: "",
      hover: " md:group-hover:h-[150px] h-max"

    }
  ]

  const NavData = {
    heading: "OUR TEAM",
    Description: "The Consultors",
    SubHead: "At Mumbling Monkeys Media, our strength lies in our diverse and talented team of professionals, each bringing unique expertise to drive your brand’s success."
  }

  const Data3 = [
    {
      description: "At Mumbling Monkeys, our team of over 100 skilled professionals, including Google Marketing Certified experts, digital marketers, and graphic designers, leverages advanced tools to boost brand visibility through superior content and strategic digital channel management. We specialize in creating engaging content across various domains to maximize media reach and deliver unparalleled results."
    },
  ]



  const Data4 = [
    {
      title: "Content Creators",
      description: "Our content creators are skilled storytellers who craft compelling narratives that captivate your audience. They specialize in producing engaging articles, blog posts, social media updates, and more, ensuring your brand's voice is consistent and impactful."
    },
    {
      title: "Graphic Designers",
      description: "Our graphic designers bring your brand to life with visually stunning designs. From eye-catching social media graphics to sleek website layouts, they create visuals that not only look great but also enhance your brand’s message and identity."
    },
    {
      title: "Social Media Strategists",
      description: " Our social media strategists are experts in navigating the ever-changing landscape of social media platforms. They develop tailored strategies to boost your online presence, engage with your audience, and achieve your marketing goals."
    },
    {
      title: "Video Producers",
      description: " Our video producers create high-quality videos that tell your brand’s story in a dynamic and engaging way. They handle everything from scripting and filming to editing and post-production, ensuring your videos captivate and convert."
    },
  ]
  return (
    <>
      <div className='w-full h-auto relative flex flex-col items-center overflow-auto'>
        <NavScreen bg={ourteam} Data={NavData} />

        <div className='w-full md:px-20 h-max px-6  pt-16'>
          <button className='cursor-default text-white text-sm  tracking-widest font-montserrat font-normal  rounded-full bg-[#7c8d97] px-4 py-2'> TEAM</button>
          <h1 className='font-montserrat font-bold text-3xl pt-2 '>Meet Our Great Team</h1>





          {Data4.map((value, index) => (
            <div key={index} className='hidden  md:flex w-full h-auto py-3 items-start gap-x-3'>

              <h1 className='w-[18%]   font-semibold font-montserrat'>{value.title}: </h1>
              <p className='w-[82%] font-montserrat font'>{value.description}</p>
            </div>
          ))}
          {Data4.map((value, index) => (
            <div key={index} className='md:hidden flex w-full h-auto py-3 items-start gap-x-3'>
              <span className=''>

                <span className='w-[18%]    font-semibold font-montserrat'>{value.title} : </span>
                <span className='w-[82%] font-montserrat font'>{value.description}</span>
              </span>
            </div>
          ))}



          <div className='w-full flex pt-12 md:px-20 flex-wrap px-2 gap-x-8 gap-y-8 justify-center'>
            {team.map((val, index) => {
              return (
                <div key={index} className='w-full max-w-[350px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:shadow-none rounded-3xl p-4 flex flex-col group items-center'>
               
                  <div className='w-full rounded-2xl h-[400px] bg-red-300 overflow-hidden relative'>
                    <img src={val.photo} className='md:w-full  h-full -rounded-2xl transition-transform group-hover:scale-110 duration-300 ease-in-out' alt={val.name} />
                    <h1 className='px-3 py-1 rounded-2xl text-white bg-black font-montserrat font-normal absolute bottom-5 right-0'>{val.position}</h1>
                  </div>


                  <div className='w-full text-center'>
                    <h1 className='font-montserrat md:py-2 text-xl md:text-2xl font-bold text-gray pt-2 md:pt-6'>{val.name}</h1>

                    <div className='w-full flex justify-center py-4 md:py-0 gap-x-4'>

                      {
                        val.x === "" ? (null) : (<a href={val.x} target='_blank'>
                          <FaTwitter className='cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
                        </a>)
                      }

                      {
                        val.insta === "" ? (null) : (<a href={val.insta} target='_blank'>
                          <FaInstagram className='cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
                        </a>)
                      }
                      {
                        val.fb === "" ? (null) : (<a href={val.fb} target='_blank'>
                          <FaFacebook className='cursor-pointer transition-all duration-500 group-hover:text-black text-3xl text-gray-600' />
                        </a>)
                      }



                    </div>

                    <div className={`w-full h-[90px] md:h-[90px] md:pt-3 overflow-hidden transition-all duration-500 ease-in-out  ${val.hover}`}>
                      <h1 className='font-montserrat text-sm md:text-[14px] font-light   text-center text-gray-800'>{val.description}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <div className='w-full flex justify-center overflow-x-hidden mt-10 md:px-20  '>

          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default OurTeam
