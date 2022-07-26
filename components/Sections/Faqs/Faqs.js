import React from 'react';
import styles from './Faqs.module.css';
import FaqNavigation from '../FaqNavigation/FaqNavigation';
import FaqList from '../FaqList/FaqList';

const Faqs = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>FAQ's</h1>
        <section>
          <FaqNavigation />

          <FaqList />

          <p className={styles.footer_text}>Showing 0-20 of 2 Results</p>
        </section>
      </div>
    </>
  )
}

export default Faqs