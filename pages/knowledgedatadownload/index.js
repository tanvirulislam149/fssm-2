import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import KnowledgeDownload from '../../components/Sections/KnowledgeDownload/KnowledgeDownload';
import Layout from '../../components/Sections/Layout/Layout';

const KnowledgeDataDownload = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <KnowledgeDownload />
      </Layout>

      <Footer />
    </>
  )
}

export default KnowledgeDataDownload