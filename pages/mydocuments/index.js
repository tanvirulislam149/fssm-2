import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import MyDocuments from '../../components/Dashboard/MyDocuments/MyDocuments';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';

const Documents = () => {
  return (
    <>
      <DashboardHeader />

      <div className={styles.dash_cont}>
        <div>
          <SideBar />
        </div>
        <div>
          <MyDocuments />
        </div>
      </div>
    </>
  )
}

export default Documents