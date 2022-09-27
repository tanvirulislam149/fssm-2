import React, { useState } from 'react';
import styles from '../MyDocuments/MyDocuments.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import ListDocumentsForm from '../../Forms/ListDocumentsForm/ListDocumentsForm';
import ListDocumentsComp from '../ListDocumentsComp/ListDocumentsComp';
import { getListedDocs } from '../../../services/listDocumentServices';

const ListDocuments = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState([]);

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
    setError(err.message);
  }

  const handleSearch = (data) => {
    setLoading(true);
    console.log(data)
    getListedDocs(data, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setDocuments(res.data['Search Results'])
        setLoading(false);
        console.log({ res: res.data['Search Results'] });
      }
    })
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
            <ListDocumentsComp documents={documents} />
        }
      </div>
    </>
  )
}

export default ListDocuments