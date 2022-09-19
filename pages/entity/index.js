import React from 'react';
import DashboardHeader from '../../components/Dashboard/Header/DashboardHeader';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import UserCategories from '../../components/Dashboard/UserCategories/UserCategories';
import styles from '../../styles/Home.module.css';

const Entity = () => {
  return (
    <>
      <DashboardHeader />

      <div className={styles.dash_cont}>
        <div>
          <SideBar />
        </div>
        <div>
          <UserCategories />
        </div>
      </div>
    </>
  )
}

export default Entity