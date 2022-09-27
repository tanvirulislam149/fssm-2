import React from 'react';
import Image from 'next/image';
import styles from '../DeletePopup/DeletePopup.module.css';
import close from '../../../assets/Close.png';

const AlertCard = ({ message }) => {
  return (
    <>
      <div id="myModal" className='modal2 m15'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m15').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m15').style.display = "none";
            }}
          >
            <p>Attention !!</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              {message}
            </div>
            <div className={styles.ok}>
              <div onClick={() => {
                document.querySelector('.m15').style.display = "none";
              }}>Ok</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertCard