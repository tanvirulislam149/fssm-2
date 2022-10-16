import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import DiscussionCont from '../../components/Sections/DiscussionCont/DiscussionCont';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const DiscussionBoard = () => {
  return (
    <>
      <Head>
        <title>Discussion Board</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <DiscussionCont />
      </Layout>

      <Footer />
    </>
  )
}

export default DiscussionBoard