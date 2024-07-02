import React, { useState }          from 'react';
import NavScreen                    from '../components/NavScreen';
import Footer                       from '../components/Footer';
import ContactUs                    from '../components/ContactUs';
import expertiseNavscreen           from '/expertiseNavscreen.png';
import gearIcon                     from '/expertise/Icon.png';
import Accountability               from '/expertise/Accountability.png';
import Commitment                   from '/expertise/Commitment.png';
import TeamWork                     from '/expertise/TeamWork.png';
import { Carousel }                 from "flowbite-react";
import MeshLeftSide                 from "/expertise/Mesh.png"
import { MdCheckCircle }            from 'react-icons/md';
import CardImg1                     from "/expertise/CardImg1.png"
import CardImg2                     from "/expertise/CardImg2.png"
import CardImg3                     from "/expertise/CardImg3.png"
import CardImg4                     from "/expertise/CardImg4.png"
import { FaCircleChevronLeft, 
         FaCircleChevronRight }     from 'react-icons/fa6';
import "./OurExpertise.css"
import { Link } from 'react-router-dom';

const OurExpertise = () => {

    const Divs = [
        {
            Heading: "Efficiency",
            Description: "Our streamlined processes ensure efficiency in every campaign, maximizing results while minimizing time and resources.",
            Icon: gearIcon
        },
        {
            Heading: "Accountability",
            Description: "We take full accountability for our actions, ensuring transparent communication and measurable outcomes",
            Icon: Accountability
        },
        {
            Heading: "Commitment",
            Description: "We are dedicated to your success, committed to delivering exceptional service and achieving your marketing goals.",
            Icon: Commitment
        },
        {
            Heading: "Team Work",
            Description: "Collaboration is at our core; together, we harness collective expertise to drive impactful strategies and outcomes.",
            Icon: TeamWork
        },
    ];

    const NavData = {
        heading: "EXPERTISE",
        Description: "Our Expertise",
        SubHead:"Mumbling Monkeys specializes in Influencer marketing and Public Relations. With our expertise in these fields, we help you and your brand increase visibility and reputation in the market."
    }

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    
    const togglehover= (index)=>{
        if (hoveredIndex === index) {
            setHoveredIndex(null);
            } else {
                setHoveredIndex(index);
                }
                }
    

    const servicesData = [
        {
            title: "Influencer Marketing",
            heading:"Building Trust, Driving Growth with Influencers",
            description: `We specialize in providing comprehensive influencer marketing services to companies. Our expertise pans every stage of the process, from influencer discovery and management to content creation and analyzing campaign success. Our agency is focused on developing and executing influencer strategies, activations, and ongoing management across various industries including fashion, interior design, lifestyle, travel, photography, tech niches, hospitality, and more.`,
            services: [
                "Creative Strategy",
                "Influencer Identification",
                "Influencer Outreach and Campaign Management",
                "Campaign Reporting"
            ],
            bg: "bg-gradient-to-tl from-[#FFF3CA]  via-[#FFDBD4] to-[#E9F7FF]"
        },

        {
            title: "Public Relations",
            heading:"Building Trust, Driving Growth with Public",
            description: `Mumbling Monkeys is an invaluable tool for promoting products, events, services, and news features. Our Public Relations services aim to help organizations quickly and consistently gain visibility in search engines. Engaging our distribution services will ensure your company achieves ample online success and builds a strong reputation.`,
            services: [
                "Advertisement",
                "Media Production",
              
                "Media Management",
                "Reputation Management",
                "Corporate Communication",
                "Visibility Management",
                "Media Relations",
                "Crisis Management",
                "Public Affairs",
                "Media Monitoring",
                "Event Management"
            ],
            bg: "bg-gradient-to-tl from-[#E9F7FF]  via-[#FFDBD4] to-[#FFF3CA]"
        },
        
        {
            title: "Celebrity Management",
            heading:"Building Trust, Driving Growth with Celebrity",
            description: `Effective celebrity management can significantly amplify brand visibility and resonate with target audiences. Our expertise lies in forging strategic alliances with influential personalities to drive impactful marketing campaigns.`,
            services: [
                "Strategic Selection: Careful selection of celebrities aligned with your brand values and audience demographics.",
                "Creative Collaboration: Collaborative efforts to integrate celebrities seamlessly into campaign narratives.",
                "Audience Engagement: Leveraging celebrities' influence to enhance engagement and brand affinity.",
                "Measurement and Optimization: Continuous monitoring and optimization of celebrity-led initiatives to maximize ROI and impact.",
            ],
            bg: "bg-gradient-to-tl from-[#E9F7FF]  via-[#FFDBD4] to-[#FFF3CA]"
        }
    ]

    const cards2 = [
        {
            bg: "bg-[#C9E1FF]",
            icon: CardImg1,
            heading: "A Customized Digital Marketing Strategy",
            description: "We customize a tailored plan based on your business, goals, and budget to ensure it meets your specific needs."

        },
        {
            bg: "bg-[#FFDADA]",
            icon: CardImg2,
            heading: "Expert Execution",
            description: "Our experienced team collaborates to flawlessly execute your digital marketing plan using the latest tools and techniques for optimal results."

        },
        {
            bg: "bg-[#D6FFD4]",
            icon: CardImg3,
            heading: "Regular Reporting",
            description: "We offer regular reports on your digital marketing campaigns so you can see results and make informed decisions for future strategies."

        },
        {
            bg: "bg-[#DFCCFF]",
            icon: CardImg4,
            heading: "Exceptional Customer Service",
            description: " We're Always Here To Answer Your Questions And Provide Support Whenever You Need It."

        },
    ]

    return (
        <>
            <div className='w-full h-auto relative   flex flex-col items-center overflow-auto'>
                <NavScreen bg={expertiseNavscreen} Data={NavData} />

                {/* Section 1 Starts */}
                <div className='w-full  md:px-20 h-auto pt-16 px-4 '>
                    <button className='cursor-default text-white text-sm  tracking-widest font-montserrat font-normal  rounded-full bg-[#7c8d97] px-4 py-2'>OUR VALUES</button>
                    <p className='text-slate-700 font-semibold font-montserrat mt-4'>Mumbling Monkeys specializes in Influencer marketing and Public Relations. With our expertise in these fields, we help you and your brand increase visibility and reputation in the market.</p>
                    <div className='w-full h-auto py-6 flex flex-wrap gap-5'>
                        {Divs.map((val, index) => (
                            <div
                                key={index}
                                className={`flex px-4 justify-between flex-col items-center py-4 flex-1 h-[400px] ${hoveredIndex === index ? 'scale-110' : 'scale-100'} ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-90' : ''} bg-[#35353d] rounded-lg transition-all duration-700`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onClick={()=>togglehover(index)}
                            >
                                <div className='rounded-full flex justify-center items-center bg-[#292930] w-[150px] h-[150px]'>
                                    <img src={val.Icon} alt="" />
                                </div>
                                <h1 className='text-white font-montserrat text-xl text-center mt-4'>{val.Heading}</h1>
                                <h1 className='text-white font-montserrat text-base text-center mt-2'>{val.Description}</h1>
                                <div className='w-[60px] h-6 mt-4'>
                                    <hr className='border-2'></hr>
                                </div>
                            </div>
                        ))}
                    </div>



                    {/* Carousel Slider */}
                    <div className="md:h-[600px] mt-8 w-full   ">
                        <Carousel className='max-h-[100%]  custom-carousel' leftControl={<Left />} indicators={true} rightControl={<Right />}>
                            {servicesData.map((val, index) => {
                                return (
                                    <div key={index} className={`rounded-xl w-full items-center md:h-[500px] md:p-10 relative flex flex-col md:flex-row ${val.bg} gap-x-8`}>
                                        <img src={MeshLeftSide} className='absolute top-2 left-2 h-[200px]' alt="" />
                                        {/*left side  */}
                                        <div className="w-[85%] md:w-1/3 z-20 rounded-2xl h-[200px] mt-10 md:mt-0  md:h-full bg-[url('/expertise/CardPhoto1.png')] bg-cover" > </div>

                                        {/* right side */}
                                        <div className='w-full p-6 md:p-0 md:w-2/3 md:h-full flex flex-col mt-4 md:mt-0'>

                                            <div className='w-full h-[40px] pb-2'>
                                                <button className='text-white w-max text-sm font-montserrat font-normal rounded-2xl bg-[#7d8a91] px-3 py-1'>{val.title}</button>
                                            </div>

                                            <div className='w-full h-max mb-4'>
                                                <h1 className='font-montserrat font-semibold text-2xl '>{val.heading}</h1>
                                            </div>
                                            <div className='w-full h-max flex flex-col  justify-between '>
                                                <h1 className='font-montserrat font-medium text-justify md:text-left text-[12px] md:text-base'>{val.description}</h1>
                                               
                                                <div className=' mt-2 grid grid-flow-col md:grid-rows-4 grid-rows-5    gap-2'>
                                                    {val.services.map((value, index) => {
                                                        return (
                                                            <div key={index} className='flex items-start w-full h-max   gap-x-2'>
                                                                <div className='w-[20px] '>

                                                                    <MdCheckCircle className='md:text-[22px]  text-[#292930]' />
                                                                </div>

                                                                <h1 className='font-montserrat xs:text-[8px] text-xs md:text-base  text-gray-600'>{value} </h1>
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


                <div className='w-full md:px-20 h-max px-4 '>
                    <button className='text-white text-lg font-montserrat font-normal rounded-2xl bg-[#7d8a91] px-3 py-1'>SPECIAL FEATURES</button>
                    <div className='flex flex-col md:flex-row justify-between items-end mt-4'>
                     
                        <div className='w-full  h-max flex justify-end mt-4 md:mt-0'>
                           <Link to={"/contactus"}>
                            <button className='px-4 py-2 bg-black rounded-3xl text-white font-montserrat font-semibold'>Get in touch</button>
                           </Link>
                        </div>
                    </div>

                    <div className='w-full pt-4 h-max  grid grid-flow-row md:grid-cols-4 grid-cols-1 gap-x-8 gap-y-8 items-start place-items-center mt-4'>
                        {cards2.map((val, index) => {
                            return (
                                <div key={index} className={`h-max p-6 ${val.bg} flex flex-col rounded-2xl w-full md:w-auto`}>
                                    {/* icon div */}
                                    <div className='w-full h-max pb-6'>
                                        <div className='rounded-full bg-black w-14 h-14 flex justify-center items-center'>
                                            <img src={val.icon} className='w-8 h-8' alt="" />
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <h1 className='font-montserrat font-semibold pb-4 text-lg text-center'> {val.heading}</h1>
                                        <h1 className='font-montserrat font-light text-center'>  {val.description}</h1>
                                    </div>
                                
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Footer */}
                <div className='w-full flex justify-center overflow-x-hidden md:px-20 pt-8 '>

                    <ContactUs />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default OurExpertise;






const Left = () => {
    return (
        <div className='absolute top-1/2 left-1 -translate-x-1/2 text-4xl text-[#5956e8]'><FaCircleChevronLeft />
        </div>
    )
}

const Right = () => {
    return (
        <div className=' absolute top-1/2 right-1 translate-x-1/2 text-4xl text-[#5956e8] '><FaCircleChevronRight /> </div>
    )
}


