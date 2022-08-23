import React from 'react';
import styles from './ExpiredTendersCont.module.css';
import TendersNavigation from '../TendersNavigation/TendersNavigation';

const ExpiredTendersCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Tenders</h1>
        <section>
          <TendersNavigation />
        </section>
      </div>
    </>
  )
}

export default ExpiredTendersCont