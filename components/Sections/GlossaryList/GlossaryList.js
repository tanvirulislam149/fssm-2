import React, { useEffect, useState } from 'react';
import GlossaryCard from '../../Cards/GlossaryCard/GlossaryCard';
import { useRouter } from 'next/router';
import styles from './GlossaryList.module.css';
import { getGlossary } from '../../../services/faqAndGlossaryService';
import CircularProgress from '@mui/material/CircularProgress';

const GlossaryList = () => {
  const [glossaryData, setGlossaryData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
          glossaryData.map(({ word, id, answer }) => {
            return (
              <GlossaryCard title={word} body={answer} id={id} key={id} />
            )
          }) :
          <p className='error'>{error}</p>
      }

      {loading ? null : glossaryData.length ? <p className={styles.footer_text}>Showing 0-20 of {glossaryData.length} Results</p> : <p className={styles.footer_text2}>No records found</p>}
    </>
  )
}

export default GlossaryList