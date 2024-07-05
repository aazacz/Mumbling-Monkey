import { useState,useRef } from 'react'
import Footer from '../components/Footer'

import { IoLocationSharp, IoPerson } from 'react-icons/io5';

import { IoIosCall } from 'react-icons/io';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TermsOfUse from '../components/TermsOfUse';
import { motion, AnimatePresence } from "framer-motion";
import PrivacyPolicy from '../components/PrivacyPolicy';
import { AiFillCloseCircle } from 'react-icons/ai';
import emailjs from '@emailjs/browser'
import "../components/ContactUs.css"
import { MdEmail } from 'react-icons/md';
import { LuSend } from "react-icons/lu";
import { FaPen } from 'react-icons/fa';

const ContactUsPage = () => { 

   
    const [errors, setErrors] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [details, setdetails] = useState({name:"",email:"",message:""})
    
    const [clicked,setClicked] = useState(false)

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const form = useRef();

    const closeModal = () => {
        setIsModalOpen(false);
    };



    const validate = () => {
        const newErrors = {};
        if (details.name.length < 3) {
            newErrors.name = "Name should be at least 3 characters long.";
        }
        if (details.message.length < 5) {
            newErrors.message = "Message should be at least 5 characters long.";
        }
        if (!details.email) {
            newErrors.email = "Email is required.";
        }
        if (!isChecked) {
            newErrors.isChecked = "You must agree to the terms and privacy policy.";
        }
        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        setClicked(true)
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const promise = emailjs
                .sendForm(
                    'service_fpydk4i',
                    'template_hnudd78',
                    form.current,
                    'spLIdiG0j4H2WLyZR',
                )
                .then(
                    (result) => {
                        form.current.reset();
                        setdetails({name:"", email:"", message:""});
                        setClicked(false)
                        toast.success('Successfully Sent', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                        return result.text;
                    },
                    (error) => {
                        setClicked(false)
                        console.log(error.text);
                        toast.error('Failed to send message.', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                        throw error.text;
                    }
                );

        } else {

            setErrors(validationErrors);
            if(validationErrors.isChecked){
                toast.warn("You must agree to the terms and privacy policy.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setClicked(false)

            }
            else{
                toast.warn("Please fill all the required fields", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setClicked(false)
 
            }
          
        }
    };

    return (
        <>
            <ToastContainer />
           

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {modalContent}
            </Modal>
           
            <div className='overflow-x-hidden  h-auto mt-[15vh] flex flex-col items-center overflow-auto'>
                <div className='md:w-full md:px-20  w-[100%] px-4 h-auto py-6   flex flex-col'>
                    <div className='mb-6 px-0'>
                        <h1 className='text-[#487A97] md:text-5xl text-3xl rounded-2xl font-montserrat font-medium py-2'> Contact Us </h1>
                        <p className='text-slate-700 text-justify font-semibold md:w-2/3'>We, At Mumbling Monkeys, Are Committed To Working On Your Business As Our Own. We Aspire To Achieve Goals With Innovative Ideas</p>
                    </div>
                    <div className='w-full h-auto flex flex-col md:flex-row md:gap-x-9'>
                    <div className='md:w-1/2 w-full xs:px-0 md:px-0'>
                        <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-y-4 '>
                           
                           
                            <div className=' flex h-12 md:h-10 px-4 mt-0  py-4 md:py-8 bg-gray-200 rounded-full items-center'>
                                {/* <label className='text-gray-700' htmlFor="name">YOUR NAME</label> */}
                                <IoPerson   className='text-2xl text-gray-700' />
                                <input 
                                    className='inputele w-full placeholder:xs:text-base h-10  focus-within:ring-offset-0 rounded-xl placeholder:text-lg placeholder:font-Cabin bg-transparent  focus:outline-none focus:box-shadow-none outline-2 border-none'
                                    type="text"
                                    id='name'
                                    placeholder='Name'
                                    name="user_name"
                                    value={details.name}
                                    onChange={(e) => setdetails({ ...details, name: e.target.value })}
                                />
                                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                            </div>


                            <div className= 'flex h-12 md:h-10 px-4 mt-0  py-4 md:py-8 bg-gray-200 rounded-full items-center'>
                                {/* <label className='text-gray-700' htmlFor="email">EMAIL</label> */}
                                <MdEmail    className='text-2xl text-gray-700 ' />
                                <input
                                    className='inputele w-full md:h-10 placeholder:xs:text-base  focus-within:ring-offset-0 rounded-xl placeholder:text-lg placeholder:font-Cabin bg-transparent  focus:outline-none focus:box-shadow-none outline-2 border-none'
                                    type="email"
                                    name="user_email"
                                    id='email'
                                    placeholder='Email'
                                    value={details.email}
                                    onChange={(e) => setdetails({ ...details, email: e.target.value })}
                                />
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                            </div>
                            <div className='flex  px-4 mt-0  md:py- bg-gray-200 rounded-3xl items-start '>
                                {/* <label className='text-gray-700' htmlFor="message">MESSAGE</label> */}
                                <FaPen     className='xs:text-base md:text-2xl text-gray-700 xs:mt-4 md:mt-3 ' />
                               
                                <textarea
                                    className='inputele textarea1 w-full h-[200p] py-3 placeholder:xs:text-base  border-none  focus-within:ring-offset-0 rounded-xl placeholder:text-lg placeholder:font-Cabin bg-transparent  focus:outline-none focus:box-shadow-none outline-2 '
                                    placeholder='Your Message Goes Here'
                                    id='message'
                                    name="message"
                                    cols="30"
                                    rows="5"
                                    value={details.message}
                                    onChange={(e) => {
                                        setdetails({ ...details, message: e.target.value })
                                    }}
                                ></textarea>
                                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                            </div>
                           
                            <div className='flex flex-row md:mt-4 items-center justify-between'>
                                <div className='flex py-3 items-center'>
                                    <input
                                        type="checkbox"
                                        className='outline-none cursor-pointer text-slate-900 w-5 h-5 rounded-full'
                                        name=""
                                        id=""
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                    />
                                    <p className='px-2  text-xs md:text-sm'>I agree with the <span className='underline cursor-pointer' onClick={() => openModal(<TermsOfUse />)}>Term Of Uses</span> and <span className='underline cursor-pointer' onClick={() => openModal(<PrivacyPolicy />)}> Privacy Policy </span></p>
                                </div>
                                <button
                                    disabled={clicked}
                                    type='submit'
                                    className={`md:px-8 px-6 text-sm text-white md:py-3 p-2 rounded-xl flex items-center gap-x-2 ${clicked ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'}`}
                                > 

                                    Send<LuSend />
                                </button>

                            </div>
                        </form>
                    </div>
                    <div className='md:w-1/2 w-full flex flex-col items-center md:items-end  mt-4 md:mt-0  rounded-xl  justify-center'>

                        <div className='w-full bg-gray-200 py-4 md:py-4  px-4 rounded-xl' >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.575715318924!2d77.6080443!3d12.9349689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14518a7ca777%3A0x8af1f552aff4a808!2sArivuPro%20Academy%20CA%20CS%20ACCA%20%2C%20CIMA%20(UK)%20CMA%20(US)%20CPA%20(US)%20PUC%20Coaching%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1719053763648!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                                style={{ borderRadius: "12px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </div>
                        <div className='mt-3 w-full flex flex-col items-center gap-2'>
                            <div className='bg-gray-200 w-max px-2 py-1 text-[8px] md:text-[13px] rounded-2xl flex items-center gap-x-2'>
                                <IoLocationSharp />2nd Floor, SAI PREMA Christ Lane, No.39 Krishnanagar, Hosur Main Road, Industrial Area,
                            </div>
                            <a href="tel:09686665253" className='bg-gray-200 w-max px-2 py-1 text-[11px] md:text-[13px] rounded-2xl flex items-center gap-x-2'>
                                <IoIosCall />         09886767672
                            </a>
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





const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence >
            <motion.div onClick={onClose}
                className=" fixed top-0  w-full  px-4 h-full  left-0  bg-black bg-opacity-70 flex justify-center items-center z-50"
                initial={{ y: "100px", opacity: 0, width: 0 }}
                animate={{ y: "0", opacity: 1, width: "100%" }}
                exit={{ opacity: 0 }}
            >
                <motion.div className=" md:w-2/4  h-full  relative  rounded-3xl  overflow-y-auto     "
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}  >
                    
                    <AiFillCloseCircle  onClick={onClose} className='cursor-pointer hover:text-gray-700 duration-100 text-2xl text-gray-500 absolute  right-3 top-3 '  />

                    {children}

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};