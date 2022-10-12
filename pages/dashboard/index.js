import Head from 'next/head';
import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import MainDashboard from '../../components/Dashboard/MainDashboard/MainDashboard';
import Layout from '../../components/Sections/Layout/Layout';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />

        <MainDashboard />
      </Layout>
    </>
  )
}

export default Dashboard