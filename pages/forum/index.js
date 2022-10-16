import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import AdminForum from '../../components/Dashboard/AdminForum/AdminForum';
import Head from 'next/head';

const Forum = () => {
  return (
    <>
      <Head>
        <title>Discussion Forum</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <AdminForum />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Forum