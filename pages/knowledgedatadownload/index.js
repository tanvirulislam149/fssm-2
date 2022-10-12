import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import KnowledgeDownload from '../../components/Sections/KnowledgeDownload/KnowledgeDownload';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const KnowledgeDataDownload = () => {
  return (
    <>
      <Head>
        <title>Knowledge Content</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

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