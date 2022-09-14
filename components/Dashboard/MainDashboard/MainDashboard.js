import React from 'react';
import SideBar from '../SideBar/SideBar';
import styles from './MainDashboard.module.css';
import Analytics from '../Analytics/Analytics';

const MainDashboard = () => {
  return (
    <>
      <div className={styles.dash_cont}>
        <div>
          <SideBar />
        </div>
        <div>
          <Analytics />
        </div>
      </div>
    </>
  )
}

export default MainDashboard