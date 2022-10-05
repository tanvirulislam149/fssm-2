import { Autocomplete, TextField } from '@mui/material';
import { style } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Emails from '../../Sections/Emails/Emails';
import Questions from '../../Sections/Questions/Questions';
import Themes from '../../Sections/Themes/Themes';
import UnapprovedQueList from '../../Sections/UnapprovedQueList/UnapprovedQueList';
import styles from "./HelpDesk.module.css"

const HelpDesk = () => {

  const [layout, setLayout] = useState(1);


  return (
    <>
      <div className={styles.container}>

        <div className={styles.approveLabel}>
          <button className={layout === 1 ? `${styles.activeBtn}` : `${styles.inactiveBtn}`} onClick={() => setLayout(1)}>
            Un Approved Documents
          </button>
          <button className={layout === 2 ? `${styles.activeBtn}` : `${styles.inactiveBtn}`} onClick={() => setLayout(2)}>
            Questions
          </button>
          <button className={layout === 3 ? `${styles.activeBtn}` : `${styles.inactiveBtn}`} onClick={() => setLayout(3)}>
            Themes
          </button>
          <button className={layout === 4 ? `${styles.activeBtn}` : `${styles.inactiveBtn}`} onClick={() => setLayout(4)}>
            Emails
          </button>
        </div>
        {layout === 1 ? <UnapprovedQueList /> : layout === 2 ? <Questions /> : layout === 3 ? <Themes /> : <Emails />}
      </div>
    </>
  )
}

export default HelpDesk