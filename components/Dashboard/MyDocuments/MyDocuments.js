import React, { useEffect, useState } from 'react';
import DocumentsFilterForm from '../../Forms/DocumentsFilterForm/DocumentsFilterForm';
import styles from './MyDocuments.module.css';
import DocumentsList from '../DocumentsList/DocumentsList';
import CircularProgress from '@mui/material/CircularProgress';
import { getMyDocs } from '../../../services/mydocumentServices';
import UploadDocs from '../UploadDocs/UploadDocs';
import AlertCard from '../AlertCard/AlertCard';

const MyDocuments = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState([]);

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
    if (err === 'Refresh token expired') {
      Cookies.remove('access');
      Cookies.remove('refresh');
      Cookies.remove('isAdmin');
      router.push('/signin');
    }
    setError(err.message);
  }

  const handleSearch = (data) => {
    setLoading(true);
    console.log(data)
    getMyDocs(data, (err, res) => {
      if (err) return handleError(err)
      if (res !== null && res) {
        console.log({ re: res.data['Search Results'] });
        setDocuments(res.data['Search Results'])
        setLoading(false);
      }
    })
  }


  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Documents
          <button
            className={styles.btn}
            data-modal="myModal1"
            onClick={() => {
              document.querySelector('.m3').style.display = "flex";
            }}>Upload Document
          </button>
        </h4>

        <h4 className={styles.label2}>Documents Filter</h4>
        <DocumentsFilterForm handleSearch={handleSearch} />

        <h4 className={styles.label2}>Documents List</h4>
        {
          loading ?
            <div className={styles.justify_center}><CircularProgress /></div> :
            <DocumentsList documents={documents} />
        }
      </div>

      <UploadDocs />

      <AlertCard message='Upload is done successfuly.' />
    </>
  )
}

export default MyDocuments