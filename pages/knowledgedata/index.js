import React from 'react';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import KnowledgeDataCont from '../../components/Sections/KnowledgeDataCont/KnowledgeDataCont';
import Layout from '../../components/Sections/Layout/Layout';

const KnowledgeData = () => {
  return (
    <>
      <Header />

      <KnowledgeDataCont />

      <Layout>
        <Footer />
      </Layout>
    </>
  )
}

export default KnowledgeData