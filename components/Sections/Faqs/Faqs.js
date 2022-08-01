import React, { useEffect, useState } from 'react';
import styles from './Faqs.module.css';
import FaqNavigation from '../FaqNavigation/FaqNavigation';
import FaqList from '../FaqList/FaqList';
import { getFaqs } from '../../../services/faqAndGlossaryService';

const Faqs = () => {
  const [faqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleError = (err) => {
    setLoading(false);
    setError(err.response.statusText);
  }

  useEffect(() => {
    getFaqs((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
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

          <FaqList faqData={faqData} loading={loading} error={error} />

          <p className={styles.footer_text}>Showing 0-20 of {faqData.length} Results</p>
        </section>
      </div>
    </>
  )
}

export default Faqs