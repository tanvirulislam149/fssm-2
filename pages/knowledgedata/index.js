import React from 'react';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import KnowledgeDataCont from '../../components/Sections/KnowledgeDataCont/KnowledgeDataCont';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const KnowledgeData = () => {
  return (
    <>
      <Head>
        <title>Knowledge Content</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Header />
      <HeaderComponent />

      <Layout>
        <KnowledgeDataCont />
      </Layout>

      <Footer />
    </>
  )
}

export default KnowledgeData