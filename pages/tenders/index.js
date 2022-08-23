import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import TendersCont from '../../components/Sections/TendersCont/TendersCont';

const Tenders = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <TendersCont />

      <Footer />
    </>
  )
}

export default Tenders