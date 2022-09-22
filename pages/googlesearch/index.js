import React from 'react';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import GoogleSearch from '../../components/Sections/GoogleSearch/GoogleSearch';
import Layout from '../../components/Sections/Layout/Layout';

const Search = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <GoogleSearch />

        <Footer />
      </Layout>
    </>
  )
}

export default Search