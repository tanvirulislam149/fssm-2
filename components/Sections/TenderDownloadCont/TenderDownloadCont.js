import React, { useEffect, useState } from 'react';
import styles from './TenderDownloadCont.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { getExpiredTenders } from '../../../services/tenderServices';
import DownloadCard from '../../Cards/DownloadCard/DownloadCard';
import { useRouter } from 'next/router';
import { advancedSearch } from '../../../services/advancedSearchServices';

const TenderDownloadCont = () => {
  const [loading, setLoading] = useState(true);
  const [tenders, setTenders] = useState([]);

  const router = useRouter();
  const { page, stakeholder, value_chain, state, language, partner, words, theme, status } = router.query;

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  useEffect(() => {
    if (page === 'Tenders') {
      getExpiredTenders((err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          console.log({ r: res })

          const { search } = window.location;
          const path = new URLSearchParams(search).get('id');

          res.data['Expired Tenders'].forEach(item => {
            if (item.id === Number(path)) {
              setTenders(item);
              return;
            }
          });
          setLoading(false);
        }
      });
    } else {
      advancedSearch({
        stakeholder: stakeholder.split(',')[0] === '' ? [] : stakeholder.split(','),
        value_chain: value_chain.split(',')[0] === '' ? [] : value_chain.split(','),
        state: state.split(',')[0] === '' ? [] : state.split(','),
        language: language.split(',')[0] === '' ? [] : language.split(','),
        partner: partner.split(',')[0] === '' ? [] : partner.split(','),
        words: words.split(',')[0] === '' ? [] : words.split(','),
        theme: theme.split(',')[0] === '' ? [] : theme.split(','),
        status: status.split(',')[0] === '' ? [] : status.split(',')
      }, (err, res) => {
        if (err) return handleError(err);
        if (res !== null) {
          console.log({ r: res });

          const { search } = window.location;
          const path = new URLSearchParams(search).get('id');

          res.data['Search Results'].forEach(item => {
            if (item.id === Number(path)) {
              setTenders(item);
              return;
            }
          });
          setLoading(false);
        }
      });
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{page}</h1>

        <section>
          {
            loading ? <div className={styles.justify_center}><CircularProgress /></div> :
              <DownloadCard tenders={tenders} />
          }
        </section>
      </div>
    </>
  )
}

export default TenderDownloadCont