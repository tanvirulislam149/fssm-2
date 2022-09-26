import React from 'react';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import KnowledgeCont from '../../components/Sections/KnowledgeCont/KnowledgeCont';
import Layout from '../../components/Sections/Layout/Layout';
import HeaderComponent from '../../components/Headers/HeaderComponent';

const KnowledgeContent = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <Layout>
        <KnowledgeCont />
      </Layout>

      <Footer />
    </>
  )
}

export default KnowledgeContent