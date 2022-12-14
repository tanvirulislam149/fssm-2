import React from 'react';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import GetInvolved from '../../components/Sections/GetInvolved/GetInvolved';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const Interested = () => {
  return (
    <>
      <Head>
        <title>Get Involved</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <GetInvolved />
      </Layout>

      <Footer />
    </>
  )
}

export default Interested