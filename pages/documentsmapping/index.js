import React from 'react';
import DocumentMappingCont from '../../components/Dashboard/DocumentMappingCont/DocumentMappingCont';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const DocumentsMapping = () => {
  return (
    <>
      <Head>
        <title>Documents Mapping</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <DocumentMappingCont />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DocumentsMapping