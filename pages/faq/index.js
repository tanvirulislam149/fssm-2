import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import Disclaimer from '../../components/Sections/Disclaimer/Disclaimer';
import Faqs from '../../components/Sections/Faqs/Faqs';

const Faq = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Faqs />

      <Disclaimer />

      <Footer />
    </>
  )
}

export default Faq