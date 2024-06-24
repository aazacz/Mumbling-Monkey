import React from 'react'
import pyramidup from "/pyramidup.svg"
import pyramidbottom from "/pyramidbottom.svg"
import photo1 from "/Testimonials/photo1.png"
const Testimonials = () => {
    return (
        <div className='w-screen h-screen peer  mt-[150px] flex bg-red-200'>

            <div className='relative   w-[450px] max-w-[450px] h-[200px] max-h-[200px] flex  rounded-lg  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>

                <img src={pyramidup}  className='absolute w-[80px]    -translate-y-full  left-8' alt="" />
                <div className='w-[35%] h-full '>
                    <img src={photo1} className='w-full h-full' alt="" />
                </div>
                <div className='w-[65%] h-full p-5 '>
                    <h1 className='text-[10px] '>May 8, 2020</h1>
                    <h1 className='text-xs py-2 font-semibold font-montserrat  text-gray-700'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                    <h1 className='text-xs pt-4 font-normal font-montserrat  text-gray-700 line-clamp-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. 
                                                                                               Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. </h1>

                </div>
                <img src={pyramidbottom} className='w-[80px] absolute even:hidde bottom-0 peer-even:hidden translate-y-full   left-8' alt="" />

            </div>


        </div>
    )
}

export default Testimonials