import { Autocomplete, TextField } from '@mui/material';
import { style } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { advancedSearchText } from '../../TextArrays';
import ApprovedDocs from '../ApprovedDocs/ApprovedDocs';
import UnapprovedDocs from '../UnapprovedDocs/UnapprovedDocs';
import styles from "./DocumentsApprove.module.css"

const DocumentsApprove = () => {

  const [layout, setLayout] = useState(false);


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
        {layout ? <ApprovedDocs /> : <UnapprovedDocs />}
      </div>
    </>
  )
}

export default DocumentsApprove