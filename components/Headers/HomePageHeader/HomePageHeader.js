import React from 'react';
import styles from './HomePageHeader.module.css';
import bharat from '../../../assets/bharat (1) 1.png';
import Image from 'next/image';
import moshua from '../../../assets/MOHUA 1.png';
import amrut from '../../../assets/AMRUT 1.png';
import sbm from '../../../assets/sbm 1.png';

const HomePageHeader = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.logo_1}></div>
        <Image className={styles.logo} src={bharat} alt='logo1' height={91} width={77} />

        <div className={styles.logo_2}></div>
        <Image src={moshua} alt='logo2' height={86} width={149} />

        <div className={styles.div}>
          <div className={styles.logo_3}></div>
          <Image src={amrut} alt='logo3' height={74} width={139} />

          <div className={styles.logo_4}></div>
          <Image src={sbm} alt='logo4' height={73} width={166} />
        </div>
      </header>
    </>
  )
}

export default HomePageHeader