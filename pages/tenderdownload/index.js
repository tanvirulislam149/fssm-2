import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import TenderDownloadCont from '../../components/Sections/TenderDownloadCont/TenderDownloadCont';
import Layout from '../../components/Sections/Layout/Layout';

const TenderDownload = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <TenderDownloadCont />

        <Footer />
      </Layout>
    </>
  )
}

export default TenderDownload