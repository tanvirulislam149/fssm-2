import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import ChangePassword from '../../components/Dashboard/ChangePassword/ChangePassword';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Change Password</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <ChangePassword />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default index