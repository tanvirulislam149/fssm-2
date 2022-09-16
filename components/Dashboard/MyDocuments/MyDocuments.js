import React, { useState } from 'react';
import Image from 'next/image';
import DocumentsFilterForm from '../../Forms/DocumentsFilterForm/DocumentsFilterForm';
import MappingForm from '../../Forms/MappingForm/MappingForm';
import styles from './MyDocuments.module.css';
import close from '../../../assets/Close.png';
import DocumentsList from '../DocumentsList/DocumentsList';
import CircularProgress from '@mui/material/CircularProgress';

const MyDocuments = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    // API CALL
  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Documents
          <button
            className={styles.btn}
            data-modal="myModal1"
            onClick={() => {
              document.querySelector('.modal2').style.display = "flex";
            }}>Upload Document
          </button>
        </h4>

        <h4 className={styles.label2}>Documents Filter</h4>
        <DocumentsFilterForm handleSearch={handleSearch} />

        <h4 className={styles.label2}>Documents List</h4>
        {
          loading ?
            <div className={styles.justify_center}><CircularProgress /></div> :
            <DocumentsList />
        }
      </div>

      <div id="myModal1" className='modal2'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.modal2').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.modal2').style.display = "none";
            }}
          >
            <p>Upload Document</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.form}>
            <MappingForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyDocuments