import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import DiscussionThreadCont from '../../components/Sections/DiscussionThreadCont/DiscussionThreadCont';
import Layout from '../../components/Sections/Layout/Layout';

const DiscussionThread = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <DiscussionThreadCont />
      </Layout>

      <Footer />
    </>
  )
}

export default DiscussionThread