import React, { useState, useRef, useEffect } from 'react';
import NavScreen from '../components/NavScreen';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import expertiseNavscreen from '/expertiseNavscreen.png';
import gearIcon from '/expertise/Icon.png';
import Accountability from '/expertise/Accountability.png';
import Commitment from '/expertise/Commitment.png';
import TeamWork from '/expertise/TeamWork.png';
import { Carousel } from "flowbite-react";
import MeshLeftSide from "/expertise/Mesh.png"
import { MdCheckCircle } from 'react-icons/md';



const OurExpertise = (Data) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
            alt: "Slide 1",
            caption: "First Slide",
        },
        {
            src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
            alt: "Slide 2",
        },
        {
            src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
            alt: "Slide 3",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const Divs = [
        {
            Heading: "Effieciency",
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Icon: gearIcon
        },
        {
            Heading: "Accountability",
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Icon: Accountability
        },
        {
            Heading: "Commitment",
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Icon: Commitment
        },
        {
            Heading: "Team Work",
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            Icon: TeamWork
        },
    ];

    const data2 = [
        {
            heading: "Influencer Marketing",
            description: `Collaborate with trendsetting influencers to instantly enhance your brand's appeal and visibility.`,
            colour: "bg-yellow-200",
            textcol: "text-yellow-200",
            dur: 0
        },
        {
            heading: "Public Relations",
            description: `Develop a captivating brand narrative and oversee your reputation with finesse.`,
            colour: "bg-cyan-300",
            textcol: "text-cyan-200",
            dur: 0
        },
        {
            heading: "Voice Search Optimization",
            description: `Enable local payment methods for your customers overseas and slash processing fees by 5-10x.`,
            colour: "bg-violet-300",
            textcol: "text-violet-200",
            dur: 1
        },
        {
            heading: "Social Media Marketing",
            description: `Enable local payment methods for your customers overseas and slash processing fees by 5-10x.`,
            colour: "bg-orange-300",
            textcol: "text-orange-200",
            dur: 1
        },
        {
            heading: "Social Media Marketing",
            description: `Enable local payment methods for your customers overseas and slash processing fees by 5-10x.`,
            colour: "bg-purple-300",
            textcol: "text-purple-200",
            dur: 2
        },
        {
            heading: "Social Media Marketing",
            description: `Enable local payment methods for your customers overseas and slash processing fees by 5-10x.`,
            colour: "bg-indigo-300",
            textcol: "text-indigo-200",
            dur: 2
        },
    ];

    const Data3 = [
        { description: "Mumbling Monkeys specialises in Influencer marketing and Public Relations. With our expertise " },
        { description: "Mumbling Monkeys believes that digital marketing entails more than just optimising websites and creating eye-catching advertisements. It's all about creating one-of-a-kind, engaging experiences that connect with your target audience and inspire them to act. As a result, we collaborate closely with each of our clients to understand their specific goals, challenges, and target audiences, and to develop a tailored digital marketing strategy that delivers real results." },
        { description: "Our team at Mumbling Monkeys is made up of talented and experienced individuals, including Google Marketing Certified experts in digital marketing, social media analysis, and content development. In addition, we have graphic designers who are experts in Adobe Photoshop and Autodesk Sketchbook." },
        { description: "To conduct audits and complete tasks, our marketing professionals use tools such as SEMrush, Google Analytics, Google Search Console, Webmaster Tools, Google Keyword Planner, Google AdSense, Google Voice Search, Google Trends, Small SEO Tools, and others." },
        { description: "Mumbling Monkeys is dedicated to providing exceptional results and exceptional customer service. We understand that digital marketing can be complicated and intimidating, and we're here to help you every step of the way. Our team is always ready to answer your questions, share insights, and assist you in making informed decisions about your digital marketing strategy." },
    ];

    const NavData = {
        heading: "EXPERTISE",
        Description: "Our Expertise"
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const servicesData = [
        {
            title: "Influencer Marketing",
            description: `We specialize in providing comprehensive influencer marketing services to companies. Our expertise pans every stage of the process, from influencer discovery and management to content creation and analyzing campaign success. Our agency is focused on developing and executing influencer strategies, activations, and ongoing management across various industries including fashion, interior design, lifestyle, travel, photography, tech niches, hospitality, and more.`,
            services: [
                "Creative Strategy",
                "Influencer Identification",
                "Influencer Outreach and Campaign Management",
                "Campaign Reporting"
            ]
        },
        {
            title: "Public Relations",
            description: `Mumbling Monkeys is an invaluable tool for promoting products, events, services, and news features. Our Public Relations services aim to help organizations quickly and consistently gain visibility in search engines. Engaging our distribution services will ensure your company achieves ample online success and builds a strong reputation.`,
            services: [
                "Advertisement",
                "Media Production",
                "Banner Post",
                "Media Management",
                "Reputation Management",
                "Corporate Communication",
                "Visibility Management",
                "Media Relations",
                "Crisis Management/ Public Affairs",
                "Media Monitoring",
                "Event Management"
            ]
        }
    ]



    return (
        <>
            <div className='md-full h-auto relative flex flex-col items-center overflow-auto'>
                <NavScreen bg={expertiseNavscreen} Data={NavData} />
                {/* Section 1 Starts */}
                <div className='md:w-full md:max-w-[1250px] w-[90%] h-auto py-6 md:px-0 px-4'>
                    <button className='text-white text-lg font-montserrat font-normal rounded-2xl bg-slate-500 px-3 py-1'>OUR VALUES</button>
                    <p className='text-slate-700 font-semibold font-montserrat'>Mumbling Monkeys specialises in Influencer marketing and Public Relations. With our expertise in these fields, we help you and your brand increase visibility and reputation in the market.</p>
                    <div className='w-full  h-auto py-6 flex flex-wrap gap-5'>
                        {Divs.map((val, index) => (
                            <div
                                key={index}
                                className={`flex px-4 justify-between flex-col items-center py-4 flex-1 h-[400px] ${hoveredIndex === index ? 'scale-110' : 'scale-100'} ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-90' : ''} bg-[#35353d] rounded-lg transition-all duration-700`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='rounded-full flex justify-center items-center bg-[#292930] w-[150px] h-[150px]'>
                                    <img src={val.Icon} alt="" />
                                </div>
                                <h1 className='text-white font-montserrat text-xl'>{val.Heading}</h1>
                                <h1 className='text-white font-montserrat text-base text-center'>{val.Description}</h1>
                                <div className='w-[60px] h-6'>
                                    <hr className='border-2'></hr>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousal Slider */}
                    <div className="h-max  w-full">
                        <Carousel>

                            {servicesData.map((val, index) => {
                                return (


                                    <div key={index} className='rounded-xl w-full max-w-[1000px] items-center h-[500px] p-10 relative flex   bg-gradient-to-tl from-[#FFF3CA]  via-[#FFDBD4] to-[#E9F7FF] gap-x-8'>
                                        <img src={MeshLeftSide} className=' absolute top-2 left-2 h-[200px]' alt="" />
                                        <div className="w-1/3 z-20 rounded-2xl h-full bg-[url('/expertise/CardPhoto1.png')]" > </div>
                                        <div className='w-2/3  h-full flex flex-col '>
                                            <div className='w-full h-[40px] pb-2'>
                                                <button className='text-white w-max text-sm font-montserrat font-normal rounded-2xl bg-slate-500 px-3 py-1'>{val.title}</button>
                                            </div>
                                            <div className='w-full h-[100px] '>

                                                <h1 className='font-montserrat font-semibold text-2xl'>Building Trust, Driving Growth with Influencers</h1>
                                            </div>
                                            <div className='w-full h-full flex flex-col justify-between'>


                                                <h1 className='font-montserrat font-medium text-base'>{val.description}</h1>
                                                <div className='grid grid-flow-col grid-rows-4'>
                                                    {val.services.map((value, index) => {
                                                        return (


                                                            <div key={index} className='flex items-center w-full gap-x-2 py-2 '>
                                                                <MdCheckCircle className='text-[22px] text-[#292930]' />
                                                                <h1 className='font-montserrat font-normal text-gray-600'>{value} </h1>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>





                                        </div>
                                    </div>



                                )
                            })}












                        </Carousel>
                    </div>
                </div>


                {/* Footer */}
                <ContactUs />
                <Footer />
            </div>
        </>
    );
};

export default OurExpertise;
