import React, 
       { useEffect }  from 'react';
import NavScreen      from '../components/NavScreen';
import Footer         from '../components/Footer';
import ContactUs      from '../components/ContactUs';
import servicespng    from '/services.png';
import ChatMarketing  from "/ChatMarketing.png";
import { FaChevronCircleRight } from "react-icons/fa";
import { useState }   from 'react';
import MeshLeftSide   from "/MeshLeftSide.png";
import { PiPulseBold } from 'react-icons/pi';
import Modal          from '../components/Modal';
import { Link }       from 'react-router-dom';
import { useLocation }from 'react-router-dom'
import Frame_28H      from "/Frame_28H.png"
import { motion }     from "framer-motion"
import InfluencerMarketing from "/Services/Influencer Marketing.svg"
import ContentMarketing from "/Services/Content Marketing.svg"
import EmailMarketing from "/Services/Email Marketing.svg"
import GoogleAdWords from "/Services/Google AdWords.svg"
import GraphicDesigning from "/Services/Graphic Designing.svg"
import KeywordResearch from "/Services/Keyword Research.svg"
import OnlineReputationManagement from "/Services/Online Reputation Management.svg"
import PayPerClick from "/Services/Pay-Per-Click.svg"
import PublicRelations from "/Services/Public Relations.svg"
import SearchEngineOptimization from "/Services/Search Engine Optimization (SEO).svg"
import SocialMediaMarketing from "/Services/Social Media Marketing.svg"
import VideoProduction from "/Services/Video Production.svg"
import VoiceSearchOptimization from "/Services/Voice Search Optimization.svg"

const Services = (Data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });

  const marqueeVariants = {
    animate: {
      x: [-2000, 0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: [.39, -0.23, .4, 1.4],
          duration: 20
        },
      },
    },
  };



  const openModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])



  const services = [
    {
      title: "Influencer Marketing",
      description: "We specialize in providing comprehensive influencer marketing services to busy companies. Our expertise spans every stage of the process, from influencer discovery and management to content creation and analyzing campaign success. Our agency is focused on developing and executing influencer strategies, activations, and ongoing management across various industries including fashion, interior design, lifestyle, travel, photography, tech niches, hospitality, and more.",
      icon: InfluencerMarketing
    },
    {
      title: "Public Relations",
      description: "Mumbling Monkeys is an invaluable tool for promoting products, events, services, and news features. Our Public Relations services aim to help organizations quickly and consistently gain visibility in search engines. Engaging our distribution services will ensure your company achieves ample online success and builds a strong reputation.",
      icon: PublicRelations
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Our SEO services are designed to help your website rank higher in search engine results pages (SERPs) for relevant keywords and phrases. Our team of SEO experts uses proven strategies to optimize your website's on-page and off-page elements, including title tags, meta descriptions, header tags, content, backlinks, and more. We also provide keyword research, competitor analysis, and ongoing SEO monitoring and reporting.",
      icon: SearchEngineOptimization
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Our PPC advertising services are designed to drive targeted traffic to your website through paid search engine advertising. Our team of PPC experts creates and manages highly targeted campaigns that are optimized for maximum ROI. We also provide keyword research, ad-copywriting, landing page optimization, and ongoing PPC monitoring and reporting.",
      icon: PayPerClick
    },
    {
      title: "Google AdWords",
      description: "Our Google AdWords service assists you in reaching your target audience by displaying targeted ads when people search for keywords related to your business. You can expect increased traffic, higher conversions, and a better ROI when our expert team manages your campaigns.",
      icon: GoogleAdWords
    },
    {
      title: "Keyword Research",
      description: "Our keyword research service identifies the best keywords for your business based on search volume, competition, and relevance. By targeting the right keywords, you can drive more traffic to your website and increase your online visibility.",
      icon: KeywordResearch
    },
    {
      title: "Online Reputation Management",
      description: "Our online reputation management service helps you maintain a positive image online by monitoring your brand's online presence, addressing negative reviews or comments, and promoting positive content. We can help you build a strong online reputation that attracts customers and builds trust.",
      icon: OnlineReputationManagement
    },
    {
      title: "Graphic Designing",
      description: "Our graphic designing service creates eye-catching designs for your brand, including logos, brochures, flyers, social media posts, and more. Our talented designers can help you create a strong visual identity that sets you apart from the competition.",
      icon: GraphicDesigning
    },
    {
      title: "Video Production",
      description: "Our video production service helps you create engaging videos that showcase your products, services, or brand. We can handle everything from scripting to filming and editing, ensuring that your videos look professional and resonate with your target audience.",
      icon: VideoProduction
    },
    {
      title: "Social Media Marketing",
      description: "Our social media marketing services are designed to help you build and maintain a strong social media presence. We create and manage social media profiles for your business on all major platforms, including Facebook, Twitter, LinkedIn, Instagram, and more. We also develop social media strategies, create engaging content, and monitor social media metrics to track your success.",
      icon: SocialMediaMarketing
    },
    {
      title: "Content Marketing",
      description: "Our content marketing services are designed to help you create and distribute high-quality content that attracts and engages your target audience. We provide content strategy development, content creation (including blog posts, articles, videos, infographics, and more), content distribution, and ongoing content marketing monitoring and reporting.",
      icon: ContentMarketing
    },
    {
      title: "Email Marketing",
      description: "Our email marketing services are designed to help you reach your target audience directly through email campaigns. We provide email list management, email campaign design and development, email automation, and ongoing email marketing monitoring and reporting.",
      icon: EmailMarketing
    },
    {
      title: "Voice Search Optimization",
      description: "Our voice search optimization service ensures that your website is optimized for voice search queries, which are becoming increasingly popular. We can help you rank higher in voice search results by optimizing your website content and structure for voice search queries, helping you reach more customers through this emerging technology.",
      icon: VoiceSearchOptimization
    }
  ];

  const NavData = {
    heading: "services",
    Description: "Creative Services To Boost Your Business Growth"
  }

  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <>
      <div className='h-auto  flex flex-col items-center overflow-auto'>
        <NavScreen bg={servicespng} Data={NavData} />

        <div className='w-full py-16 md:px-20 px-4 flex justify-center'>
          <div className='flex flex-wrap justify-between  gap-16  w-full h-max '>

            <div className=' w-screen'>
              <button className='cursor-default text-white text-sm  tracking-widest font-montserrat font-normal  rounded-full bg-[#7c8d97]  px-4 py-2'>
                SERVICES
              </button>

              <h1 className='font-montserrat md:w-[60%] font-bold text-4xl pt-4'>High-impact services to take your business to the next level</h1>
            </div>


            {displayedServices.map((val, index) => (

              <div key={index} className='w-full sm:w-[350px] group h-[440px] rounded-3xl flex flex-col justify-between bg-[#34343b] py-8 px-8'>

                <div className='w-[150px] h-[150px] rounded-full bg-[#292930] flex  justify-center items-center mx-3'>
                  <img src={val.icon} className='w-[50%] group-hover:w-[65%] transition-all duration-700' alt="" />
                </div>

                <h1 className='px-4 font-montserrat  text-white font-semibold text-2xl w-full'>      {val.title}       </h1>
                <h1 className='w-full px-4 font-montserrat text- text-base font-light text-white line-clamp-3'> {val.description} </h1>

                  <button
                   onClick={() => openModal(val.title, val.description)}
                    className=' border-[1px] rounded-md font-montserrat font-semibold group-hover:bg-[#FFDC60] group-hover:text-lg transition-all duration-700 w-full h-14 border-[#525255] text-[#525255] flex items-center gap-x-3 justify-center'
                  >
                    Read More <FaChevronCircleRight className='group-hover:text-violet-600' />
                  </button>
                <Link to={'/b'}>
                </Link>


              </div>

            ))}
          </div>

        </div>

        {!showAll && (
          <div className='w-full flex justify-center py-8 mb-10 animate-bounce'>
            <button
              className='text-white text-sm font-normal rounded-2xl bg-[#3a3a3a] px-4 py-2'
              onClick={() => setShowAll(true)}
            >
              See More
            </button>
          </div>
        )}



        <div className='w-full h-max relative flex flex-col md:flex-row px-4 md:px-20'>
          <img className='absolute -z-10 md:left-0 -left-8 -top-8 md:w-[250px] w-[150px]  '   src={MeshLeftSide} alt="" />

          {/*  LEFT SIDE  */}
          <div className='w-full lg:w-1/2  flex flex-col rounded-lg'>
            <div className="relative w-full h-[300px] lg:h-[540px] bg-cover bg-[url('/ServicesImage.png')]">
              <div className='absolute py-4 px-2 right-[1px] bottom-20 flex flex-col w-[200px] h-max bg-white rounded-xl'>
                <div className='w-8 h-8 rounded-full bg-[#282628] text-white flex justify-center items-center text-lg'>
                  <PiPulseBold />
                </div>
                <div className='text-center p-6'>
                  <h1 className='font-montserrat font-bold text-5xl text-[#7C8D97]'>120+</h1>
                  <h1 className='font-montserrat font-light text-base text-black'>Projects Done</h1>
                </div>
              </div>
            </div>
          </div>

          {/*  RIGHT SIDE  */}
          <div className='w-full lg:w-1/2  gap-2 md:p-8 pt-7 md:pt-0 '>
            <button className='text-white text-sm font-normal rounded-2xl bg-[#7d8a91] px-3 py-1'>WHY CHOOSE US</button>
            <h1 className='font-semibold font-montserrat text-3xl lg:text-5xl leading-snug lg:leading-[80px]'>Choose Us to Grow Your Business</h1>
            <h1 className='font-montserrat md:text-left text-justify'>
              Partner with us for innovative strategies, a robust influencer network, and data-driven results. We specialize in personalized solutions that elevate your brand, driving engagement and achieving your marketing goals with proven success.
            </h1>
            <div className='flex items-center gap-x-2 py-2 pt-4'>
              <div className='w-8 h-8 rounded-full bg-[#282628] text-white flex justify-center items-center text-lg'>
                <PiPulseBold />
              </div>
              <h1 className='font-montserrat'>Result Driven Approach</h1>
            </div>
            <div className='flex items-center gap-x-2 py-2'>
              <div className='w-8 h-8 rounded-full bg-[#282628] text-white flex justify-center items-center text-lg'>
                <PiPulseBold />
              </div>
              <h1 className='font-montserrat'>Expertise in Multiple Platforms</h1>
            </div>
            <div className='flex items-center gap-x-2 py-2'>
              <div className='w-8 h-8 rounded-full bg-[#282628] text-white flex justify-center items-center text-lg'>
                <PiPulseBold />
              </div>
              <h1 className='font-montserrat'>Continuous Optimization</h1>
            </div>
          </div>
        </div>

        <div className='w-full overflow-x-hidden'>

          <motion.div className='  flex  opacity-40 md:left-0  ' variants={marqueeVariants} animate="animate"   >
            <img className='w-[100%]  md:w-full h-20 ' src={Frame_28H} alt="" />
            <img className='w-[100%]  md:w-full h-20 ' src={Frame_28H} alt="" />
            <img className='w-[100%]  md:w-full h-20 ' src={Frame_28H} alt="" />
            <img className='w-[100%]  md:w-full h-8 block md:hidden' src={Frame_28H} alt="" />
            <img className='w-[100%]  md:w-full h-8 block md:hidden' src={Frame_28H} alt="" />
            <img className='w-[100%]  md:w-full h-8 block md:hidden' src={Frame_28H} alt="" />
          </motion.div>
        </div>

        <div className='w-full  flex justify-center overflow-x-hidden md:px-20  '>
          <ContactUs />
        </div>

        <Footer />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        description={modalContent.description}
      />
    </>
  );
}

export default Services;
