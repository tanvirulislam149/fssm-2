import React from 'react';
import TendersNavigation from '../TendersNavigation/TendersNavigation';
import styles from './TendersCont.module.css';

const TendersCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Tenders</h1>
        <section>
          <TendersNavigation />

          <div className={styles.cont}>
            <p>No records found.</p>
          </div>

          <p className={styles.footer_text}>Showing 0-20 of 0 Results</p>
        </section>
      </div>
    </>
  )
}

export default TendersCont