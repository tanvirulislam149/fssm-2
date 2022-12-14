import React, { useEffect, useState } from 'react';
import DocumentsFilterForm from '../../Forms/DocumentsFilterForm/DocumentsFilterForm';
import styles from './MyDocuments.module.css';
import DocumentsList from '../DocumentsList/DocumentsList';
import CircularProgress from '@mui/material/CircularProgress';
import { getMyDocs } from '../../../services/mydocumentServices';
import UploadDocs from '../UploadDocs/UploadDocs';
import AlertCard from '../AlertCard/AlertCard';
import { useRouter } from 'next/router';

const MyDocuments = () => {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [originalReq, setOriginalReq] = useState({});
  const [updating, setUpdating] = useState(false);

  const router = useRouter();

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  const handleSearch = (data) => {
    setLoading(true);
    setOriginalReq(data);
    getMyDocs(data, (err, res) => {
      if (err) return handleError(err)
      if (res !== null && res) {
        console.log({ re: res });
        if (res.data.Error) {
          router.push('/signin');
          return;
        }
        setDocuments(res.data['Search Results'])
        const data = res.data['Search Results'];
        let date = [];
        data.forEach(item => {
          date.push([]);
        })
        data.forEach(({ createdOn }, i) => {
          const month = createdOn.slice(5, 7);
          const day = createdOn.slice(8, 10);
          const year = createdOn.slice(0, 4);
          const hour = createdOn.slice(11, 13);
          const min = createdOn.slice(14, 16);
          date[i] = `${year}-${month}-${day} ${hour}:${min} ${hour >= 12 ? 'PM' : 'AM'}`;
        })
        setDateArray(date);
        setLoading(false);
      }
    })
  }

  // useState(() => {
  //   originalReq.theme && setLoading(true);
  //   originalReq.theme && getMyDocs(originalReq, (err, res) => {
  //     if (err) return handleError(err)
  //     if (res !== null && res) {
  //       console.log({ re: res });
  //       if (res.data.Error) {
  //         router.push('/signin');
  //         return;
  //       }
  //       setDocuments(res.data['Search Results'])
  //       const data = res.data['Search Results'];
  //       let date = [];
  //       data.forEach(item => {
  //         date.push([]);
  //       })
  //       data.forEach(({ createdOn }, i) => {
  //         const month = createdOn.slice(5, 7);
  //         const day = createdOn.slice(8, 10);
  //         const year = createdOn.slice(0, 4);
  //         const hour = createdOn.slice(11, 13);
  //         const min = createdOn.slice(14, 16);
  //         date[i] = `${year}-${month}-${day} ${hour}:${min} ${hour >= 12 ? 'PM' : 'AM'}`;
  //       })
  //       setDateArray(date);
  //       setLoading(false);
  //     }
  //   })
  // }, [updating])


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
            <DocumentsList
              dateArray={dateArray}
              documents={documents}
              updating={updating}
              setUpdating={setUpdating} />
        }
      </div>

      <UploadDocs />

      <AlertCard message='Upload is done successfuly.' />
    </>
  )
}

export default MyDocuments