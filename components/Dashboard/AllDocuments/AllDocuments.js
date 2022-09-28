import React, { useState } from 'react';
import styles from '../MyDocuments/MyDocuments.module.css';
import DocumentsList from '../DocumentsList/DocumentsList';
import CircularProgress from '@mui/material/CircularProgress';
import AllDocumentsForm from '../../Forms/AllDocumentsForm/AllDocumentsForm';
import { getAllDocs } from '../../../services/allDocumentServices';

const AllDocuments = () => {
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
    getAllDocs(data, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        console.log({ res: res.data['Search Results'] });
        setDocuments(res.data['Search Results'])
        setLoading(false);
      }
    })
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
            <DocumentsList documents={documents} />
        }
      </div>
    </>
  )
}

export default AllDocuments