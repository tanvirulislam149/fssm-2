import React from 'react';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import GoogleSearch from '../../components/Sections/GoogleSearch/GoogleSearch';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const Search = () => {
  return (
    <>
      <Head>
        <title>Google Search</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <GoogleSearch />
      </Layout>

      <Footer />
    </>
  )
}

export default Search