import React, { useState } from 'react';
import styles from './AdminFaqs.module.css';
import DeletePopup from '../DeletePopup/DeletePopup';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import FaqAndGlossaryList from '../FaqAndGlossaryList/FaqAndGlossaryList';

const data = [
  { id: 1, name: 'Who is the NFSSM Alliance?', order: 1, status: 'Active' },
  { id: 2, name: 'Who is the NFSSM Alliance?', order: 2, status: 'Active' },
];

const AdminFaqs = () => {
  const [layout, setLayout] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState(data);
  const [docId, setDocId] = useState(null);
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');

  const handleDelete = () => {

  }

  return (
    <>
      <div className={styles.container2}>
        <div className={styles.approveLabel}>
          <button
            className={layout === 1 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              setLayout(1);
            }}>
            FAQs
          </button>
          <button
            className={layout === 2 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              setLayout(2);
            }}>
            Glossary
          </button>
        </div>

        <h4 className={styles.label2}>
          {layout === 1 ? 'FAQs' : 'Glossary'}
          <button
            className={styles.btn}
            onClick={() => {
              document.querySelector('.m2').style.display = "flex";
            }}>
            {layout === 1 ? 'Add FAQs' : 'Add Glossary'}
          </button>
        </h4>

        <FaqAndGlossaryList
          setDocId={setDocId}
          layout={layout}
          documents={documents}
        />
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
            <p>{layout === 1 ? 'Add FAQs' : 'Add Glossary'}</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover2}>
            <div className={styles.content2}>
              <label htmlFor='quest'>Question</label>
              <input
                id='quest'
                type='text'
                value={text}
                onChange={(e) => { setText(e.target.value); }}
                className={styles.input} />
              <label htmlFor='answer'>Answer</label>
              <textarea
                type="text"
                id='answer'
                value={answer}
                onChange={(e) => { setAnswer(e.target.value); }}
                className={styles.textarea}
                cols="30"
                rows="7" >
              </textarea>
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

export default AdminFaqs