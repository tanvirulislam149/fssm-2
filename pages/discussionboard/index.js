import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import DiscussionCont from '../../components/Sections/DiscussionCont/DiscussionCont';

const DiscussionBoard = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <DiscussionCont />

      <Footer />
    </>
  )
}

export default DiscussionBoard