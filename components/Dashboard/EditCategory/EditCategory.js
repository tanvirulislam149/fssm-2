import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import EditCategoryForm from '../../Forms/EditCategoryForm/EditCategoryForm';
import styles from './EditCategory.module.css';
import close from '../../../assets/Close.png';

const EditCategory = ({ update, setUpdate, docDetails }) => {
  const [chipKey, setChipKey] = useState(false);

  return (
    <>
      <div id="myModal1" className='modal2 m2'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m2').style.display = "none";
            setChipKey(!chipKey);
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m2').style.display = "none";
              setChipKey(!chipKey);
            }}
          >
            <p>Edit Categories</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.form}>
            {
              docDetails &&
              <EditCategoryForm
                update={update}
                setUpdate={setUpdate}
                chipKey={chipKey}
                setChipKey={setChipKey}
                docDetails={docDetails}
              />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default EditCategory