import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import AdvancedSearchCont from '../../components/Sections/AdvancedSearchCont/AdvancedSearchCont';

const AdvancedSearch = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <AdvancedSearchCont />

      <Footer />
    </>
  )
}

export default AdvancedSearch