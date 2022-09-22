import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import MainDashboard from '../../components/Dashboard/MainDashboard/MainDashboard';
import Layout from '../../components/Sections/Layout/Layout';

const Dashboard = () => {
  return (
    <>
      <Layout>
        <DashboardHeader />

        <MainDashboard />
      </Layout>
    </>
  )
}

export default Dashboard