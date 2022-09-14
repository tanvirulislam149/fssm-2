import React from 'react';
import BulkUploadCont from '../../components/Dashboard/BulkUploadCont/BulkUploadCont';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';

const BulkUpload = () => {
  return (
    <>
      <DashboardHeader />

      <div className={styles.dash_cont}>
        <div>
          <SideBar />
        </div>
        <div>
          <BulkUploadCont />
        </div>
      </div>
    </>
  )
}

export default BulkUpload