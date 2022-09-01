import React from 'react';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import GoogleSearch from '../../components/Sections/GoogleSearch/GoogleSearch';

const Search = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <GoogleSearch />

      <Footer />
    </>
  )
}

export default Search