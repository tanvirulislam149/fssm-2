import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import HelpDesk from '../../components/Sections/HelpDesk/HelpDesk';
import Disclaimer from '../../components/Sections/Disclaimer/Disclaimer';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const HelpDeskCont = () => {
  return (
    <>
      <Head>
        <title>Help Desk</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <HelpDesk />
      </Layout>

      <Disclaimer />

      <Footer />
    </>
  )
}

export default HelpDeskCont