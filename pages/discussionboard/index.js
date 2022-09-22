import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import DiscussionCont from '../../components/Sections/DiscussionCont/DiscussionCont';
import Layout from '../../components/Sections/Layout/Layout';

const DiscussionBoard = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <DiscussionCont />

        <Footer />
      </Layout>
    </>
  )
}

export default DiscussionBoard