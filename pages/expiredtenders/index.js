import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import ExpiredTendersCont from '../../components/Sections/ExpiredTendersCont/ExpiredTendersCont';

const index = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <ExpiredTendersCont />

      <Footer />
    </>
  )
}

export default index