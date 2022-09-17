import Image from 'next/image';
import React from 'react';
import EditCategoryForm from '../../Forms/EditCategoryForm/EditCategoryForm';
import styles from './EditCategory.module.css';
import close from '../../../assets/Close.png';

const EditCategory = () => {
  return (
    <>
      <div id="myModal1" className='modal2 m2'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m2').style.display = "none";
            //document.getElementById('user-cat').style.display = 'none';
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m2').style.display = "none";
              //document.getElementById('user-cat').style.display = 'none';
            }}
          >
            <p>Edit Categories</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.form}>
            <EditCategoryForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default EditCategory