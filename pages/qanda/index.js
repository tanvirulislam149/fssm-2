import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import HelpDesk from '../../components/Sections/HelpDesk/HelpDesk';
import Disclaimer from '../../components/Sections/Disclaimer/Disclaimer';
import Layout from '../../components/Sections/Layout/Layout';

const HelpDeskCont = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <HelpDesk />
      </Layout>

      <Disclaimer />

      <Footer />
    </>
  )
}

export default HelpDeskCont