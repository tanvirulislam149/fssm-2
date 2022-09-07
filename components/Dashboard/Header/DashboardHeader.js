import React from 'react';
import styles from './DashboardHeader.module.css';
import Image from 'next/image';
import swachh from '../../../assets/swachh.png';
import profile from '../../../assets/Ellipse 10.png';
import { useRouter } from 'next/router';

const DashboardHeader = () => {
  const router = useRouter();

  const handleNav = () => {
    router.push('/');
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Image src={swachh} height={66} width={116} alt='logo' />
        </div>
        <div className={styles.right}>
          <button onClick={() => { handleNav(); }} className={styles.btn}>Go to website</button>
          <h4>NFSSM</h4>
          <div
            className={styles.admin}
          // onClick={() => {
          //   document.getElementById('pop_up').classList.toggle('none');
          // }}
          >
            <Image src={profile} height={40} width={40} alt='logo' />
            <p>Admin</p>
          </div>
        </div>
      </nav>

      {/* <div id='pop_up' className={`none ${styles.pop_up}`}>
        <div className={styles.cont}>
          <Image src={profile} height={80} width={80} alt='logo' />
        </div>
        <div className={styles.footer}>
          <div className={styles.btn2}>Change Password</div>
          <div className={styles.btn3}>Sign Out</div>
        </div>
      </div> */}
    </>
  )
}

export default DashboardHeader