import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import ListDocuments from '../../components/Dashboard/ListDocuments/ListDocuments';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';

const DocumentsDump = () => {
  return (
    <>
      <DashboardHeader />

      <div className={styles.dash_cont}>
        <div>
          <SideBar />
        </div>
        <div>
          <ListDocuments />
        </div>
      </div>
    </>
  )
}

export default DocumentsDump