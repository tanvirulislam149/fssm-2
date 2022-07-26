import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import Disclaimer from '../../components/Sections/Disclaimer/Disclaimer';
import GlossaryComponent from '../../components/Sections/GlossaryComponent/GlossaryComponent';

const Glossary = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <GlossaryComponent />

      <Disclaimer />

      <Footer />
    </>
  )
}

export default Glossary