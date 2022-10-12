import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import UserCategories from '../../components/Dashboard/UserCategories/UserCategories';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const Entity = () => {
  return (
    <>
      <Head>
        <title>User Categories</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <UserCategories />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Entity