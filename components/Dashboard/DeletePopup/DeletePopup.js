import React from 'react';
import styles from './DeletePopup.module.css';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { useRouter } from 'next/router';

const DeletePopup = ({ handleDelete, docId, setAction, action, setLoading }) => {
  const router = useRouter();

  const handleRefresh = () => {
    action === undefined && router.reload(window.location.pathname);
    action !== undefined && setLoading(true);
    action !== undefined && setAction(!action);
  }

  return (
    <>
      <div id="myModal" className='modal2 m10'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m10').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m10').style.display = "none";
            }}
          >
            <p>Attention !!</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              Do You want to delete this record?
            </div>
            <div className={styles.btn_cont}>
              <button
                className={`${styles.btn3} ${styles.no}`} onClick={() => {
                  document.querySelector('.m10').style.display = "none";
                }}>No</button>
              <button
                className={`${styles.btn3} ${styles.yes}`}
                onClick={() => {
                  if (router.pathname === '/forum') {
                    document.querySelector('.m10').style.display = "none";
                    handleDelete(docId, document.querySelector('.m9'));
                    return;
                  }
                  document.querySelectorAll('.modal2').forEach(el => {
                    el.style.display = "none";
                  })
                  handleDelete(docId, document.querySelector('.m9'));
                }}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="myModal" className='modal2 m9'>
        <div
          className={styles.bg}
          onClick={() => {
            handleRefresh();
            document.querySelector('.m9').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              handleRefresh();
              document.querySelector('.m9').style.display = "none";
            }}
          >
            <p>Attention !!</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              Document is deleted successfully.
            </div>
            <div className={styles.ok}>
              <div onClick={() => {
                handleRefresh();
                document.querySelector('.m9').style.display = "none";
              }}>Ok</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeletePopup