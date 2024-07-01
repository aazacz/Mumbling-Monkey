import logo from "/Logo.png"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <div className=' w-full  grid md:grid-flow-col grid-flow-row md:col-span-4 row-span-1 md:px-20 px-4 md:py-16 bg-gray-50'>
        <div className='col-span-2 '>
          <div className='w-full flex items-center gap-6'>
            <Link replace={true} to={"/"}>
              <img src={logo} className='w-[65px]' alt="Logo" />
            </Link>
            <h1 className='text-center font-Cabin font-extrabold text-[20px] leading-6'>MUMBLING <br />MONKEYS</h1>
          </div>


          <div className='w-full mt-8  flex   gap-x-4'>

            <FaTwitter className=' cursor-pointer transition-all duration-500 text-black text-3xl ' />

            <a href='https://www.instagram.com/mumblingmonkeysmedia/' target='blank'>
              <FaInstagram className='cursor-pointer transition-all duration-500 text-black text-3xl ' />
            </a>
           
            <a href="https://www.facebook.com/people/Mumbling-Monkeys-Media/61555052252595/?mibextid=LQQJ4d" target='blank'>
              <FaFacebook className=' cursor-pointer transition-all duration-500 text-black text-3xl ' />
            </a>

          </div>

        </div>

        <div className='col-span-1 flex flex-col  gap-y-4 text-left'>

          <h1 className='w-full font-semibold font-montserrat'>Quick Links</h1>
          <Link to={"/"}>              <p className='w-full font-montserrat '>Home</p>                </Link>
          <Link reloadDocument to={"/aboutus"}>       <p className='w-full font-montserrat '>About us</p>            </Link>
          <Link to={"/services"}>      <p className='w-full font-montserrat '>Our Services</p>        </Link>
          <Link to={"/ourexpertise"}>  <p className='w-full font-montserrat '>Our Expertise</p>       </Link>
          <Link to={"/TermsOfUse"}>  <p className='w-full font-montserrat '>Terms of Use</p>       </Link>
          <Link to={"/privacypolicy"}>  <p className='w-full font-montserrat '>Privacy Policy</p>       </Link>
        </div>

        <div className='col-span-1    flex flex-col gap-y-4'>
          <h1 className='md:block  font-semibold font-montserrat'>Contact Us</h1>
          <a className='w-full  font-montserrat' href="tel:09686665253"> 09886767672 </a>
        </div>

        <div className='col-span-1     flex flex-col gap-y-4'>
          <p className='font-semibold font-montserrat'>Address</p>
          <div className='max-w-[250px] '>
            <p>2nd Floor, SAI PREMA Christ Lane, No.39 Krishnanagar, Hosur Main Road, Industrial Area, Koramangala, Bengaluru, Karnataka 560029</p>
          </div>
        </div>



      </div>

      <div className='w-full md:h-10 bg-gray-300 px-11 text-xs text-gray-500 flex items-center'>
        ©2024 Mumbling monkey; All Rights Reserved.
      </div>
    </>
  )
}

export default Footer
