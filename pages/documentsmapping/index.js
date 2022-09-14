import React from 'react';
import DocumentMappingCont from '../../components/Dashboard/DocumentMappingCont/DocumentMappingCont';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import styles from '../../styles/Home.module.css';

const DocumentsMapping = () => {
  return (
    <>
      <DashboardHeader />

      <div className={styles.dash_cont}>
        <div>
          <SideBar />
        </div>
        <div>
          <DocumentMappingCont />
        </div>
      </div>
    </>
  )
}

export default DocumentsMapping