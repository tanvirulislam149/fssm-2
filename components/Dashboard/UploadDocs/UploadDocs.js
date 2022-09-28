import React from 'react';
import Image from 'next/image';
import UploadDocsForm from '../../Forms/UploadDocsForm/UploadDocsForm';
import styles from './UploadDocs.module.css';
import close from '../../../assets/Close.png';

const UploadDocs = () => {
  return (
    <>
      <div id="myModal1" className='modal2 m3'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m3').style.display = "none";
            //document.getElementById('user-cat').style.display = 'none';
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m3').style.display = "none";
              //document.getElementById('user-cat').style.display = 'none';
            }}
          >
            <p>Upload Document</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.form}>
            <UploadDocsForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadDocs