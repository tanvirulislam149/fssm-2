import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import Disclaimer from '../../components/Sections/Disclaimer/Disclaimer';
import GlossaryComponent from '../../components/Sections/GlossaryComponent/GlossaryComponent';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const Glossary = () => {
  return (
    <>
      <Head>
        <title>Glossary</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <GlossaryComponent />
      </Layout>

      <Disclaimer />

      <Footer />
    </>
  )
}

export default Glossary