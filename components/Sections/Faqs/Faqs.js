import React, { useEffect, useState } from 'react';
import styles from './Faqs.module.css';
import FaqNavigation from '../FaqNavigation/FaqNavigation';
import FaqList from '../FaqList/FaqList';
import { getFaqs } from '../../../services/authService';

const Faqs = () => {
  const [faqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);

  const handleError = (err) => {
    setError(err.response.statusText);
  }

  useEffect(() => {
    getFaqs((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setFaqData(res.data.questions);
      }
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>FAQ&apos;s</h1>
        <section>
          <FaqNavigation />

          <FaqList faqData={faqData} error={error} />

          <p className={styles.footer_text}>Showing 0-20 of {faqData.length} Results</p>
        </section>
      </div>
    </>
  )
}

export default Faqs