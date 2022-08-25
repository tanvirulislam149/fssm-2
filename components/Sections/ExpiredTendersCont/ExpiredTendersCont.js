import React from 'react';
import styles from './ExpiredTendersCont.module.css';
import TendersNavigation from '../TendersNavigation/TendersNavigation';
import TenderCard from '../../Cards/TenderCard/TenderCard';

const ExpiredTendersCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Tenders</h1>
        <section>
          <TendersNavigation />

          <TenderCard />
        </section>
      </div>
    </>
  )
}

export default ExpiredTendersCont