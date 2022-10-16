import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import AdminFaqs from '../../components/Dashboard/AdminFaqs/AdminFaqs';
import Head from 'next/head';

const FaqAdmin = () => {
  return (
    <>
      <Head>
        <title>FAQs</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <AdminFaqs />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default FaqAdmin