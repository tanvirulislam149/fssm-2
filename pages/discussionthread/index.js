import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import DiscussionThreadCont from '../../components/Sections/DiscussionThreadCont/DiscussionThreadCont';

const DiscussionThread = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <DiscussionThreadCont />

      <Footer />
    </>
  )
}

export default DiscussionThread