import React from 'react';
import styles from './MapSection.module.css';
import AddItems from '../AddItems/AddItems';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { addItemsText } from '../../TextArrays';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';

const MapSection = () => {
  return (
    <>
      <div id="myModal" className='modal2 m8'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m8').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m8').style.display = "none";
            }}
          >
            <p>Map Section to Role</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover2}>
            <div className={styles.buttons}>
              <div className={`${styles.green} ${styles.btn4}`}>
                <AddOutlinedIcon className={styles.bold} sx={{ height: '12px', width: '12px' }} />
              </div>
              <div className={`${styles.yellow} ${styles.btn4}`}>
                <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} />
              </div>
              <div className={`${styles.red} ${styles.btn4}`}>
                <CloseIcon className={styles.bold} sx={{ height: '12px', width: '12px' }} />
              </div>
              <div className={`${styles.yellow} ${styles.btn4}`}>
                Copy
              </div>
              <div className={`${styles.yellow} ${styles.btn4}`}>
                Paste
              </div>
            </div>
            <div className={styles.overflow}>
              <div className={styles.content2}>
                <AddItems count={0} subitems={addItemsText.sections} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MapSection