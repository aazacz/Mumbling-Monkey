import React from 'react';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';


const PrivacyPoliciesPage = () => {
  return (
    <>
    <div className=" bg-gray-100 md:pt-[110px] pt-[50px]">
    <PrivacyPolicy/>
    </div>

    <Footer/>
        </>
  );
};

export default PrivacyPoliciesPage;
