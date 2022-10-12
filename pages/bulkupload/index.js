import React from 'react';
import BulkUploadCont from '../../components/Dashboard/BulkUploadCont/BulkUploadCont';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const BulkUpload = () => {
  return (
    <>
      <Head>
        <title>Bulk Upload</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <BulkUploadCont />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BulkUpload