import logo from "/Logo.png"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaCircleArrowUp } from "react-icons/fa6"
import { Link } from 'react-router-dom'

const Footer = () => {

  const scrollUp =()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  }
  return (
    <>
      {/* Footer Section */}
      <div className='relative w-full  grid md:grid-flow-col grid-flow-row md:col-span-4 row-span-1 md:px-20 px-4 md:py-16 bg-gray-50'>

        <div className='col-span-2  '>


          <div className='w-full flex items-center justify-between mb-6 md:gap-6'>

            <div className="flex w-full gap-x-2 ">

              <Link replace={true} to={"/"}>
                <img src={logo} className='w-[65px]' alt="Logo" />
              </Link>
              <h1 className='text-center font-Cabin font-extrabold text-[20px] leading-6'>MUMBLING <br />MONKEYS</h1>
            </div>



            <div className='   flex md:hidden  gap-x-4'>

              <a href="https://x.com/Aashikpaalyam" target="_blank" rel="noopener noreferrer">
                <FaTwitter className=' cursor-pointer transition-all duration-500 text-black text-3xl ' />
              </a>

              <a href='https://www.instagram.com/mumblingmonkeysmedia/' target='blank'>
                <FaInstagram className='cursor-pointer transition-all duration-500 text-black text-3xl ' />
              </a>

              <a href="https://www.facebook.com/people/Mumbling-Monkeys-Media/61555052252595/?mibextid=LQQJ4d" target='blank'>
                <FaFacebook className=' cursor-pointer transition-all duration-500 text-black text-3xl ' />
              </a>

            </div>





          </div>


          <div className='w-full mt-8 md:mt-0  md:flex  hidden  gap-x-4'>
            <a href="https://x.com/Aashikpaalyam" target="_blank" rel="noopener noreferrer">
              <FaTwitter className=' cursor-pointer transition-all duration-500 text-black text-3xl ' />
            </a>

            <a href='https://www.instagram.com/mumblingmonkeysmedia/' target='blank'>
              <FaInstagram className='cursor-pointer transition-all duration-500 text-black text-3xl ' />
            </a>

            <a href="https://www.facebook.com/people/Mumbling-Monkeys-Media/61555052252595/?mibextid=LQQJ4d" target='blank'>
              <FaFacebook className=' cursor-pointer transition-all duration-500 text-black text-3xl ' />
            </a>

          </div>

        </div>

        <div className='  flex flex-col  md:gap-y-2  text-left'>

          <h1 className='w-full font-semibold font-montserrat'>Quick Links</h1>
          <Link to={"/"}>              <p className='w-full font-montserrat '>Home</p>                </Link>
          <Link reloadDocument to={"/aboutus"}>       <p className='w-full font-montserrat '>About us</p>            </Link>
          <Link to={"/services"}>      <p className='w-full font-montserrat '>Our Services</p>        </Link>
          <Link to={"/ourexpertise"}>  <p className='w-full font-montserrat '>Our Expertise</p>       </Link>
          <Link to={"/TermsOfUse"}>  <p className='w-full font-montserrat '>Terms of Use</p>       </Link>
          <Link to={"/privacypolicy"}>  <p className='w-full font-montserrat '>Privacy Policy</p>       </Link>
        </div>

        <div className='col-span-1  flex flex-col md:gap-y-2'>
          <h1 className='md:block  font-semibold font-montserrat'>Contact Us</h1>
          <a className='w-full  font-montserrat' href="tel:09686665253"> 09886767672 </a>
          {/* <a className=' font-montserrat text-sm' href="mailto:contact@mumblingmonkeys.com">contact@mumblingmonkeys.com</a> */}
        </div>

        <div className='col-span-1   mt-4 md:mt-0  flex flex-col md:gap-y-2'>
          <p className='font-semibold font-montserrat'>Address</p>
          <div className='max-w-[250px] '>
            <p >2nd Floor, SAI PREMA Christ Lane, No.39 Krishnanagar, Hosur Main Road, Industrial Area, Koramangala, Bengaluru, Karnataka 560029.</p>
          </div>
        </div>
        <FaCircleArrowUp className="absolute text-5xl text-gray-500 bottom-12 right-5 cursor-pointer animate-bounce " onClick={scrollUp} />


      </div>

      <div className='w-full md:h-10 bg-gray-300  text-xs py-2 text-center text-gray-500 flex justify-center  items-center'>
        ©2024 Mumbling monkey; All Rights Reserved.
      </div>
    </>
  )
}

export default Footer
