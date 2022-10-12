import React from 'react';
import Header from '../../components/Headers/Header';
import Footer from '../../components/Footers/Footer';
import KnowledgeCont from '../../components/Sections/KnowledgeCont/KnowledgeCont';
import Layout from '../../components/Sections/Layout/Layout';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Head from 'next/head';

const KnowledgeContent = () => {
  return (
    <>
      <Head>
        <title>Knowledge Content</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

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