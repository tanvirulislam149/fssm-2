import React, { useEffect, useState } from 'react';
import styles from './TenderDownloadCont.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { getExpiredTenders } from '../../../services/tenderServices';
import DownloadCard from '../../Cards/DownloadCard/DownloadCard';

const TenderDownloadCont = () => {
  const [loading, setLoading] = useState(true);
  const [tenders, setTenders] = useState([]);

  const dropDown = (e, s, u, u2, c, ex, m) => {
    if (e.classList.contains("active-dropdown")) {
      e.style.maxHeight = 0;
      e.classList.remove("active-dropdown");
      u.style.display = 'block';
      u2.classList.add('none');
      c.style.display = 'flex';
      ex.classList.add('none');
      s.style.display = 'flex';
      m.classList.add('none');
    } else {
      e.style.maxHeight = 'max-content';
      e.classList.add("active-dropdown");
      u.style.display = 'none';
      u2.classList.remove('none');
      c.style.display = 'none';
      ex.classList.remove('none');
      s.style.display = 'block';
      m.classList.remove('none');
    }
  }

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  useEffect(() => {
    getExpiredTenders((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        console.log({ r: res })

        const { search } = window.location;
        const path = new URLSearchParams(search).get('id');

        res.data['Expired Tenders'].forEach(item => {
          if (item.id === Number(path)) {
            setTenders(item);
            return;
          }
        });
      }
    });
  }, [])

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Tenders</h1>

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