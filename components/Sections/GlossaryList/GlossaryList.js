import React, { useEffect, useState } from 'react';
import GlossaryCard from '../../Cards/GlossaryCard/GlossaryCard';
import { useRouter } from 'next/router';
import styles from './GlossaryList.module.css';
import { getGlossary } from '../../../services/faqAndGlossaryService';
import CircularProgress from '@mui/material/CircularProgress';
import { Pagination } from '@mui/material';

const GlossaryList = () => {
  const [glossaryData, setGlossaryData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [number] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState(glossaryData);
  const [nPages, setNPages] = useState(1);

  useEffect(() => {
    const indexOfLastRecord = currentPage * number;
    const indexOfFirstRecord = indexOfLastRecord - number;
    const records = glossaryData.slice(indexOfFirstRecord, indexOfLastRecord);
    setCurrentRecords(records);
    const pageCount = Math.ceil(glossaryData.length / number);
    setNPages(pageCount);
  }, [currentPage, glossaryData, number])

  const handleError = (err) => {
    setLoading(false);
    setError(err.response.statusText);
  }

  const router = useRouter();
  const alphabet = router.query.alphabet;

  useEffect(() => {
    setLoading(true);
    if (!alphabet) {
      getGlossary('', (err, res) => {
        if (err) return handleError(err);
        if (res !== null) {
          setLoading(false);
          setGlossaryData(res.data.glossary);
        }
      });
    } else {
      getGlossary(alphabet, (err, res) => {
        if (err) return handleError(err);
        if (res !== null) {
          setLoading(false);
          setGlossaryData(res.data.glossary);
        }
      });
    }
  }, [alphabet])

  return (
    <>
      {loading ?
        <div className={styles.justify_center}><CircularProgress /></div> :
        !error ?
          currentRecords.map(({ word, id, answer }) => {
            return (
              <GlossaryCard title={word} body={answer} id={id} key={id} />
            )
          }) :
          <p className='error'>{error}</p>
      }

      {loading ? null : glossaryData.length ? <p className={styles.footer_text}>Showing 0-20 of {glossaryData.length} Results</p> : <p className={styles.footer_text2}>No records found</p>}
      <Pagination
        count={nPages}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        color='primary'
        onChange={(e, val) => {
          setCurrentPage(val);
        }} />
    </>
  )
}

export default GlossaryList