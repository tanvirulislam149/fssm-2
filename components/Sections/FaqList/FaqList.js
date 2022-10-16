import React from 'react';
import FaqCard from '../../Cards/FaqCard/FaqCard';
import styles from './FaqList.module.css';
import CircularProgress from '@mui/material/CircularProgress';

const FaqList = ({ loading, currentRecords, error }) => {
  return (
    <>
      {loading ?
        <div className={styles.justify_center}><CircularProgress /></div> :
        !error ?
          currentRecords.map(({ question, id, answer }) => {
            return (
              <FaqCard title={question} body={answer} id={id} key={id} />
            )
          }) :
          <p className='error'>{error}</p>
      }
    </>
  )
}

export default FaqList