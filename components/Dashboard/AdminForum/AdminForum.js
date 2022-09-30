import React, { useState } from 'react';
import DeletePopup from '../DeletePopup/DeletePopup';
import ForumCategories from '../ForumCategories/ForumCategories';
import ForumList from '../ForumList/ForumList';
import styles from './AdminForum.module.css';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { StepContext } from '@mui/material';

const data = [
  {
    name: "162",
    cat: "qef",
    topic: "Donor/Philanthropist/CSR",
    date: "2022-08-05 07:53",
    id: 1
  },
  {
    name: "162",
    cat: "qef",
    topic: "Donor/Philanthropist/CSR",
    date: "2022-08-05 07:53",
    id: 2
  },
  {
    name: "162",
    cat: "qef",
    topic: "Donor/Philanthropist/CSR",
    date: "2022-08-05 07:53",
    id: 3
  },
];

const catList = [
  { id: 1, cat: 'qef', order: 1, status: 'Active' },
  { id: 2, cat: 'qef', order: 2, status: 'Active' },
];

const AdminForum = () => {
  const [layout, setLayout] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState(data);
  const [categories, setCategories] = useState(catList);
  const [reactKey, setReactKey] = useState(false);
  const [docId, setDocId] = useState(null);
  const [text, setText] = useState('');

  const handleDelete = () => {

  }

  const handleAdd = () => {

  }

  return (
    <>
      <div className={styles.container2}>
        <div className={styles.approveLabel}>
          <button
            className={layout === 1 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              setLayout(1);
              setReactKey(!reactKey);
            }}>
            Un Approved Topics
          </button>
          <button
            className={layout === 2 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              setLayout(2);
              setReactKey(!reactKey);
            }}>
            Approved Topics
          </button>
          <button
            className={layout === 3 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              setLayout(3);
              setReactKey(!reactKey);
            }}>
            Forum Categories
          </button>
          <button
            className={layout === 4 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              setLayout(4);
              setReactKey(!reactKey);
            }}>
            Notifications
          </button>
        </div>

        <h4 className={styles.label2}>
          {layout === 1 ? 'Unapproved Topics' : layout === 2 ? 'Questions' : layout === 3 ? 'Categories' : 'Questions'}
          {layout === 3 && <button
            className={styles.btn}
            onClick={() => {
              document.querySelector('.m2').style.display = "flex";
            }}>
            Add category
          </button>}
        </h4>

        {
          layout === 1 || layout === 2 || layout === 4 ?
            <ForumList
              setDocId={setDocId}
              reactKey={reactKey}
              layout={layout}
              documents={documents} /> :
            <ForumCategories setDocId={setDocId} categories={categories} />
        }
      </div>

      <DeletePopup docId={docId} handleDelete={handleDelete} />

      <div id="myModal" className='modal2 m2'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m2').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m2').style.display = "none";
            }}>
            <p>Add Category</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover2}>
            <div className={styles.content2}>
              <label htmlFor='text'>Category Name</label>
              <input
                id='text'
                type='text'
                value={text}
                onChange={(e) => { setText(e.target.value); }}
                className={styles.input} />
              <div className={styles.btn_cont}>
                <button
                  type='submit'
                  onClick={() => { handleAdd(); }}
                  className={`${styles.btn3} ${styles.save}`}>Save</button>
                <button
                  type='reset'
                  className={`${styles.btn3} ${styles.cancel}`}
                  onClick={() => {
                    document.querySelector('.m2').style.display = "none";
                    setText('');
                  }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminForum