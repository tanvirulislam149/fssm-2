import React from 'react';
import Head from 'next/head';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import AdvancedSearchCont from '../../components/Sections/AdvancedSearchCont/AdvancedSearchCont';
import Layout from '../../components/Sections/Layout/Layout';

const AdvancedSearch = () => {
  return (
    <>
      <Head>
        <title>Advanced Search</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <AdvancedSearchCont />
      </Layout>

      <Footer />

    </>
  )
}

export default AdvancedSearch