import React from 'react';
import AllDocuments from '../../components/Dashboard/AllDocuments/AllDocuments';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const Documents = () => {
  return (
    <>
      <Head>
        <title>All Documents</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <AllDocuments />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Documents