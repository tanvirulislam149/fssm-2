import React, { useState } from 'react';
import styles from '../MyDocuments/MyDocuments.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import ListDocumentsForm from '../../Forms/ListDocumentsForm/ListDocumentsForm';
import ListDocumentsComp from '../ListDocumentsComp/ListDocumentsComp';

const ListDocuments = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    // API CALL
  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Documents</h4>

        <h4 className={styles.label2}>Documents Filter</h4>
        <ListDocumentsForm handleSearch={handleSearch} />

        <h4 className={styles.label2}>Documents List <button className={styles.btn2}>Excel Download</button></h4>
        {
          loading ?
            <div className={styles.justify_center}><CircularProgress /></div> :
            <ListDocumentsComp />
        }
      </div>
    </>
  )
}

export default ListDocuments