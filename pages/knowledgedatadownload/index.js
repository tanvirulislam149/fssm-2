import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import KnowledgeDownload from '../../components/Sections/KnowledgeDownload/KnowledgeDownload';

const KnowledgeDataDownload = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <KnowledgeDownload />

      <Footer />
    </>
  )
}

export default KnowledgeDataDownload