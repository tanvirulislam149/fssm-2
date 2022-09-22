import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import AdvancedSearchCont from '../../components/Sections/AdvancedSearchCont/AdvancedSearchCont';
import Layout from '../../components/Sections/Layout/Layout';

const AdvancedSearch = () => {
  return (
    <>
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