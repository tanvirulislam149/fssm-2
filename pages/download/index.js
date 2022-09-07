import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import TenderDownloadCont from '../../components/Sections/TenderDownloadCont/TenderDownloadCont';

const TenderDownload = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <TenderDownloadCont />

      <Footer />
    </>
  )
}

export default TenderDownload