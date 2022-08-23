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
        </section>
      </div>
    </>
  )
}

export default TendersCont