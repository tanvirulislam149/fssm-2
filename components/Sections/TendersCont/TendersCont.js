import React, { useEffect, useState } from 'react';
import TendersNavigation from '../TendersNavigation/TendersNavigation';
import styles from './TendersCont.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { getLiveTenders } from '../../../services/tenderServices';
import TenderCard from '../../Cards/TenderCard/TenderCard';

const TendersCont = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tenders, setTenders] = useState([]);

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
    //setError(err.response.statusText);
  }

  useEffect(() => {
    getLiveTenders((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setTenders(res.data['Live Tenders']);
        setLoading(false);
        console.log({ r: res })
      }
    });
  }, [])

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Tenders</h1>
        <section>
          <TendersNavigation />

          {loading ? <div className={styles.justify_center}><CircularProgress /></div> :
            tenders.length ?
              tenders.map(({ theme, id, status, organization, document_type, expiry_date, citation, description, title, value_chain, keywords, language, stake_holder, geography }) => {
                return (
                  <TenderCard
                    key={id}
                    id={id}
                    title={title}
                    document_type={document_type}
                    stake_holder={stake_holder}
                    geography={geography}
                    org={organization?.org_name}
                    urban_rural={status}
                    citation={citation}
                    expiry_date={expiry_date}
                    language={language}
                    value_chain={value_chain}
                    description={description}
                    theme={theme?.theme_title}
                    keywords={keywords}
                  />
                )
              }) :
              <div className={styles.cont}>
                <p>No records found.</p>
              </div>
          }

          <p className={styles.footer_text}>Showing 0-20 of {tenders.length} Results</p>
        </section>
      </div>
    </>
  )
}

export default TendersCont