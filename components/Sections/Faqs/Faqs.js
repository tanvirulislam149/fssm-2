import React, { useEffect, useState } from 'react';
import styles from './Faqs.module.css';
import FaqNavigation from '../FaqNavigation/FaqNavigation';
import FaqList from '../FaqList/FaqList';
import { getFaqs } from '../../../services/faqAndGlossaryService';
import { Pagination } from '@mui/material';

const Faqs = () => {
  const [faqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [number] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState(faqData);
  const [nPages, setNPages] = useState(1);

  useEffect(() => {
    const indexOfLastRecord = currentPage * number;
    const indexOfFirstRecord = indexOfLastRecord - number;
    const records = faqData.slice(indexOfFirstRecord, indexOfLastRecord);
    setCurrentRecords(records);
    const pageCount = Math.ceil(faqData.length / number);
    setNPages(pageCount);
  }, [currentPage, faqData, number])

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

          <FaqList currentRecords={currentRecords} loading={loading} error={error} />

          <p className={styles.footer_text}>Showing 0-20 of {faqData.length} Results</p>
          <Pagination
            count={nPages}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            color='primary'
            onChange={(e, val) => {
              setCurrentPage(val);
            }} />
        </section>
      </div>
    </>
  )
}

export default Faqs