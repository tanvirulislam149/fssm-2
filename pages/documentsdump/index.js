import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import ListDocuments from '../../components/Dashboard/ListDocuments/ListDocuments';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const DocumentsDump = () => {
  return (
    <>
      <Head>
        <title>Documents List</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <ListDocuments />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DocumentsDump