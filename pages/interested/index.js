import React from 'react';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import GetInvolved from '../../components/Sections/GetInvolved/GetInvolved';
import Layout from '../../components/Sections/Layout/Layout';

const Interested = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <GetInvolved />

        <Footer />
      </Layout>
    </>
  )
}

export default Interested