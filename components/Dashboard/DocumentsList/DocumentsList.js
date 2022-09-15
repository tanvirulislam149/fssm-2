import React, { useState } from 'react';
import styles from './DocumentsList.module.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import view from '../../../assets/view.png';
import del from '../../../assets/delete.png';
import Image from 'next/image';

const data = [
  { name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf', id: 1, date: '2021-08-22 08:38:40 AM' },
  { name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf', id: 2, date: '2021-08-22 08:38:40 AM' },
  { name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf', id: 2, date: '2021-08-22 08:38:40 AM' },
]

const DocumentsList = () => {
  const [number, setNumber] = useState(10);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.control}>
          <p>Show</p>
          <FormControl sx={{ m: 1, width: 55 }} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={number}
              className={styles.select}
              onChange={handleChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
          <p>entries</p>
        </div>

        <div className={styles.cont}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.two}>
              <p>Thumbnail</p>
            </div>
            <div className={styles.three}>
              <p>Document Name</p>
            </div>
            <div className={styles.four}>
              <p>Created Date</p>
            </div>
            <div className={styles.five}>
              <p>Action</p>
            </div>
          </div>
          {
            data.map(({ name, id, date }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.two}>
                    <div className={styles.pdf}>
                      pdf
                    </div>
                  </div>
                  <div className={styles.three}>
                    <p>{name}</p>
                  </div>
                  <div className={styles.four}>
                    <p>{date}</p>
                  </div>
                  <div className={styles.five}>
                    <div className={`${styles.btn} ${styles.delbtn}`}>
                      <Image src={del} alt='icon' height={14} width={14} />
                    </div>
                    <div className={`${styles.btn} ${styles.viewbtn}`}>
                      <Image src={view} alt='icon' height={10} width={14} />
                    </div>
                    <div className={`${styles.btn} ${styles.editbtn}`}>
                      <Image src={view} alt='icon' height={10} width={14} />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <p className={styles.results}>Showing 10 of 10 entries</p>
    </>
  )
}

export default DocumentsList