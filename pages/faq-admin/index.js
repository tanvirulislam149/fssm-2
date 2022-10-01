import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Sections/Layout/Layout';
import AdminFaqs from '../../components/Dashboard/AdminFaqs/AdminFaqs';

const FaqAdmin = () => {
  return (
    <>
      <Layout>
        <DashboardHeader />

        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            {/* <AdminFaqs /> */}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default FaqAdmin