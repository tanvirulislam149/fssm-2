import React, { useEffect, useState } from 'react';
import TendersNavigation from '../TendersNavigation/TendersNavigation';
import styles from './TendersCont.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { getLiveTenders } from '../../../services/tenderServices';
import TenderCard from '../../Cards/TenderCard/TenderCard';
import { Pagination } from '@mui/material';

const TendersCont = () => {
  const [loading, setLoading] = useState(true);
  const [tenders, setTenders] = useState([]);
  const [number] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState(tenders);
  const [nPages, setNPages] = useState(1);

  useEffect(() => {
    const indexOfLastRecord = currentPage * number;
    const indexOfFirstRecord = indexOfLastRecord - number;
    const records = tenders.slice(indexOfFirstRecord, indexOfLastRecord);
    setCurrentRecords(records);
    const pageCount = Math.ceil(tenders.length / number);
    setNPages(pageCount);
  }, [currentPage, tenders, number])

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
            currentRecords.length ?
              currentRecords.map(({ theme, id, status, organization, document_type, expiry_date, citation, description, title, value_chain, keywords, language, stake_holder, geography }) => {
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

export default TendersCont