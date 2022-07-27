import React from 'react';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import KnowledgeCont from '../../components/Sections/KnowledgeCont/KnowledgeCont';

const KnowledgeContent = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <KnowledgeCont />

      <Footer />
    </>
  )
}

export default KnowledgeContent