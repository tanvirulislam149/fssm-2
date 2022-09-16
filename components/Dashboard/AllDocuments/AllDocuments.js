import React, { useState } from 'react';
import styles from '../MyDocuments/MyDocuments.module.css';
import DocumentsList from '../DocumentsList/DocumentsList';
import CircularProgress from '@mui/material/CircularProgress';
import AllDocumentsForm from '../../Forms/AllDocumentsForm/AllDocumentsForm';

const AllDocuments = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    // API CALL
  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Documents</h4>

        <h4 className={styles.label2}>Documents Filter</h4>
        <AllDocumentsForm handleSearch={handleSearch} />

        <h4 className={styles.label2}>Documents List</h4>
        {
          loading ?
            <div className={styles.justify_center}><CircularProgress /></div> :
            <DocumentsList />
        }
      </div>
    </>
  )
}

export default AllDocuments