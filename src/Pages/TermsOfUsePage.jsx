import React from 'react';
import Footer from '../components/Footer';
import TermsOfUse from '../components/TermsOfUse';


const TermsOfUsePage = () => {
  return (
    <>
      <div className='md:pt-[110px] pt-[50px] bg-gray-100 '>
        <TermsOfUse />
      </div>

      <Footer />
    </>
  )
}

export default TermsOfUsePage;
