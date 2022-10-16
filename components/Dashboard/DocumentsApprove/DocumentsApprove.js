import { Autocomplete, TextField } from '@mui/material';
import { style } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { delDoc } from '../../../services/docsApproveService';
import { advancedSearchText } from '../../TextArrays';
import ApprovedDocs from '../ApprovedDocs/ApprovedDocs';
import UnapprovedDocs from '../UnapprovedDocs/UnapprovedDocs';
import styles from "./DocumentsApprove.module.css"
import AlertCard from '../AlertCard/AlertCard';

const DocumentsApprove = () => {
  const [layout, setLayout] = useState(false);
  const [update, setUpdate] = useState(false);
  const [message, setMessage] = useState('');

  const handleError = (err) => {
    console.log(err);
  }

  const handleDelete = (id) => {
    delDoc(id, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        console.log({ res })
        if (res.data.message === 'Delete Successfully') {
          setMessage('Deleted Successfully');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Documents Approve</h4>

        <div className={styles.approveLabel}>
          <button className={layout ? `${styles.inactiveBtn}` : `${styles.activeBtn}`} onClick={() => setLayout(false)}>
            Un Approved Documents
          </button>
          <button className={layout ? `${styles.activeBtn}` : `${styles.inactiveBtn}`} onClick={() => setLayout(true)}>
            Approved Documents
          </button>
        </div>
        {layout ?
          <ApprovedDocs
            handleDelete={handleDelete}
            update={update}
            setUpdate={setUpdate}
            setMessage={setMessage} /> :
          <UnapprovedDocs
            handleDelete={handleDelete}
            update={update}
            setUpdate={setUpdate}
            setMessage={setMessage} />}
      </div>

      <AlertCard message={message} />
    </>
  )
}

export default DocumentsApprove