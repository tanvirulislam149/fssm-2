import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import TendersCont from '../../components/Sections/TendersCont/TendersCont';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const Tenders = () => {
  return (
    <>
      <Head>
        <title>Live Tenders</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <TendersCont />
      </Layout>

      <Footer />
    </>
  )
}

export default Tenders