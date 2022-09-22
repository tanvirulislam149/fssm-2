import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import Disclaimer from '../../components/Sections/Disclaimer/Disclaimer';
import GlossaryComponent from '../../components/Sections/GlossaryComponent/GlossaryComponent';
import Layout from '../../components/Sections/Layout/Layout';

const Glossary = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <GlossaryComponent />

        <Disclaimer />

        <Footer />
      </Layout>
    </>
  )
}

export default Glossary