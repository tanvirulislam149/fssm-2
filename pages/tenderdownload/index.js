import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import TenderDownloadCont from '../../components/Sections/TenderDownloadCont/TenderDownloadCont';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const TenderDownload = () => {
  return (
    <>
      <Head>
        <title>Download</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <TenderDownloadCont />
      </Layout>

      <Footer />
    </>
  )
}

export default TenderDownload