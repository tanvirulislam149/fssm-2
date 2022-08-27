import React from 'react';
import styles from './DashboardHeader.module.css';
import Image from 'next/image';
import swachh from '../../../assets/swachh.png';
import profile from '../../../assets/Ellipse 10.png';

const DashboardHeader = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Image src={swachh} height={66} width={116} alt='logo' />
        </div>
        <div className={styles.right}>
          <button className={styles.btn}>Go to website</button>
          <h4>NFSSM</h4>
          <div className={styles.admin}>
            <Image src={profile} height={40} width={40} alt='logo' />
            <p>Admin</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default DashboardHeader