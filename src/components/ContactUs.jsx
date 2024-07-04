import { useRef, useState } from 'react';
import { IoCloseCircleOutline, IoLocationSharp } from 'react-icons/io5';
import { IoIosCall } from 'react-icons/io';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TermsOfUse from './TermsOfUse';
import { motion, AnimatePresence } from "framer-motion";
import PrivacyPolicy from './PrivacyPolicy';
import { AiFillCloseCircle } from 'react-icons/ai';
// import "./ContactUsPage.css"
import emailjs from '@emailjs/browser'



const ContactUs = () => {

    const [errors, setErrors] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [details, setdetails] = useState({name:"",email:"",message:""})

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const form = useRef();
    
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
      };
    
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
                
            }
          
        }
    };

    return (
        <>
            <ToastContainer />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
            <div className='w-full md:w-[100%] h-auto py-6 px-4   flex flex-col md:px-0'>
                <div className='mb-6  md:text-left '>
                    <button className='cursor-default text-white font-montserrat tracking-widest text-sm font-normal rounded-2xl bg-[#7d8a91] px-3 py-2  '>CONTACT US</button>
                    <p className='text-slate-700 font-semibold md:w-2/3 py-4 '>We, At Mumbling Monkeys, Are Committed To Working On Your Business As Our Own. We Aspire To Achieve Goals With Innovative Ideas</p>
                </div>

                <div className='w-full h-auto flex flex-col md:flex-row md:gap-9'>
                    <div className='md:w-1/2 w-full px-4 md:px-0'>
                    <form ref={form} onSubmit={handleSubmit}>
                                <div className='flex flex-col mt-4'>
                                    <label className='text-gray-700' htmlFor="name">YOUR NAME</label>
                                    <input
                                        className='w-full h-11 rounded-xl mt-3 border-[1px] outline-2 border-gray-500'
                                        type="text"
                                        id='name'
                                        name="user_name"
                                        value={details.name}
                                        onChange={(e)=>setdetails({...details,name:e.target.value})}
                                    />
                                    {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <label className='text-gray-700' htmlFor="email">EMAIL</label>
                                    <input
                                        className='w-full h-11 rounded-xl mt-3 border-[1px] outline-2 border-gray-500'
                                        type="email"
                                        name="user_email"
                                        id='email'
                                        value={details.email}
                                        onChange={(e)=>setdetails({...details,email:e.target.value})}
                                    />
                                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <label className='text-gray-700' htmlFor="message">MESSAGE</label>
                                    <textarea
                                        className='w-full placeholder:pl-3 placeholder:pt-3 rounded-xl mt-3 border-[1px] outline-2 border-gray-500'
                                        placeholder='Your Message Goes Here'
                                        id='message'
                                        name="message"
                                        cols="30"
                                        rows="5"
                                        value={details.message}
                                        onChange={(e) =>{
                                            setdetails({...details, message : e.target.value })
                                          }}
                                    ></textarea>
                                    {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                                </div>
                                <div className='flex flex-row mt-4 items-center justify-between'>
                                    <div className='flex py-3 items-center'>
                                    <input 
                                    type="checkbox" 
                                    className='outline-none cursor-pointer text-slate-900 w-5 h-5 rounded-full' 
                                    name="" 
                                    id="" 
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                    <p className='pl-2 text-xs md:text-sm'>I agree with the <span className='underline cursor-pointer'  onClick={() => openModal(<TermsOfUse/>)}>Term Of Uses</span> and <span className='underline cursor-pointer' onClick={() => openModal(<PrivacyPolicy/>)}> Privacy Policy </span></p>
                                    </div>
                                    <button type='submit' className='md:px-11 px-6 text-sm text-white md:py-3 p-2 rounded-xl bg-black'>Send</button>
                                </div>
                            </form>
                    </div>
                    <div className='md:w-1/2 w-full flex flex-col items-center md:items-end py-4 md:py-0 px-6 pt-6 md:pt-0 rounded-xl bg-gray-200 justify-center'>
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
                        <div className='mt-5 w-full flex flex-col items-center gap-2'>
                            <div className='bg-white w-max px-2 py-1 text-[7px] md:text-xs rounded-2xl flex items-center gap-x-2'>
                                <IoLocationSharp />2nd Floor, SAI PREMA Christ Lane, No.39 Krishnanagar, Hosur Main Road, Industrial Area,
                            </div>
                            <a href="tel:09686665253" className='bg-white w-max px-2 py-1 text-[7px] md:text-sm rounded-2xl flex items-center gap-x-2'>
                                <IoIosCall />         09886767672
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;




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
                <motion.div className=" md:w-2/4  h-full  relative rounded-3xl  overflow-y-auto     "
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