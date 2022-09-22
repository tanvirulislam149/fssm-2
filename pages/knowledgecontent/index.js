import React from 'react';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import KnowledgeCont from '../../components/Sections/KnowledgeCont/KnowledgeCont';
import Layout from '../../components/Sections/Layout/Layout';

const KnowledgeContent = () => {
  return (
    <>
      <Header />

      <KnowledgeCont />

      <Layout>
        <Footer />
      </Layout>
    </>
  )
}

export default KnowledgeContent