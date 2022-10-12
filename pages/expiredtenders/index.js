import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import ExpiredTendersCont from '../../components/Sections/ExpiredTendersCont/ExpiredTendersCont';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Expired Tenders</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <ExpiredTendersCont />
      </Layout>

      <Footer />
    </>
  )
}

export default index