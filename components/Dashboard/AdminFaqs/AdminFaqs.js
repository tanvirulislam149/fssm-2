import React, { useEffect, useState } from 'react';
import styles from './AdminFaqs.module.css';
import DeletePopup from '../DeletePopup/DeletePopup';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import FaqAndGlossaryList from '../FaqAndGlossaryList/FaqAndGlossaryList';
import { getFaqs, getGlossary, addFaq, addGlossary, delFaq, delGlossary } from '../../../services/adminFaqGlossaryService';
import CircularProgress from '@mui/material/CircularProgress';
import AlertCard from '../AlertCard/AlertCard';

const AdminFaqs = () => {
  const [layout, setLayout] = useState(1);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [documents, setDocuments] = useState([]);
  const [docId, setDocId] = useState(null);
  const [text, setText] = useState('');
  const [ans, setAns] = useState('');
  const [order, setOrder] = useState('');
  const [update, setUpdate] = useState(false);

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err });
  }

  useEffect(() => {
    setLoading(true);
    layout === 1 && getFaqs((err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ res: res.data.FAQs });
        setDocuments(res.data.FAQs);
      }
    })

    layout === 2 && getGlossary((err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ res: res.data.Glossary });
        setDocuments(res.data.Glossary);
      }
    })
  }, [update])

  const handleAdd = () => {
    console.log({ text, order, ans })
    layout === 1 && addFaq({ ques: text, order: Number(order), ans }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        if (res.data.message === 'FAQ has been added') {
          setMessage('FAQ has been added');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
        setText('');
        setOrder('');
        setAns('');
      }
    })

    layout === 2 && addGlossary({ word: text, ans }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        if (res.data.message === 'Glossary word has been added') {
          setMessage('Glossary word has been added');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
        setText('');
        setAns('');
      }
    })
  }

  const handleDelete = (id) => {
    layout === 1 && delFaq(id, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'FAQ has been deleted') {
          setMessage('FAQ has been deleted');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })

    layout === 2 && delGlossary(id, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'Glossary word has been deleted') {
          setMessage('Glossary word has been deleted');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
  }

  return (
    <>
      <div className={styles.container2}>
        <div className={styles.approveLabel}>
          <button
            className={layout === 1 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              if (layout === 1) return;
              setLayout(1);
              setUpdate(!update);
            }}>
            FAQs
          </button>
          <button
            className={layout === 2 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              if (layout === 2) return;
              setLayout(2);
              setUpdate(!update);
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

        {loading ?
          <div className={styles.justify_center}><CircularProgress /></div> :
          <FaqAndGlossaryList
            setDocId={setDocId}
            layout={layout}
            documents={documents}
            update={update}
            setUpdate={setUpdate}
            setMessage={setMessage}
          />}
      </div>

      <DeletePopup docId={docId} handleDelete={handleDelete} />

      <AlertCard message={message} />

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
              {layout === 1 && <>
                <label htmlFor='order'>Display Order</label>
                <input
                  id='order'
                  type='number'
                  value={order}
                  onChange={(e) => { setOrder(e.target.value); }}
                  className={styles.input} />
              </>}
              <label htmlFor='ans'>Answer</label>
              <textarea
                type="text"
                id='ans'
                value={ans}
                onChange={(e) => { setAns(e.target.value); }}
                className={styles.textarea}
                cols="30"
                rows="7" >
              </textarea>
              <div className={styles.btn_cont}>
                <button
                  type='submit'
                  onClick={() => {
                    if (layout === 2 && text.trim().length && ans.trim().length) {
                      handleAdd();
                      document.querySelector('.m2').style.display = "none";
                    } else if (layout === 1 && text.trim().length && ans.trim().length && order.length) {
                      handleAdd();
                      document.querySelector('.m2').style.display = "none";
                    }
                  }}
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