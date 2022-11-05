import React, { useEffect, useState } from 'react';
import DeletePopup from '../DeletePopup/DeletePopup';
import ForumCategories from '../ForumCategories/ForumCategories';
import ForumList from '../ForumList/ForumList';
import styles from './AdminForum.module.css';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { getForumCats, delTopic, delComment, getTopics, addCategory, delCategory, getNotifs } from '../../../services/adminForumServices';
import CircularProgress from '@mui/material/CircularProgress';
import AlertCard from '../AlertCard/AlertCard';
import Cookies from 'js-cookie';

const AdminForum = () => {
  const [layout, setLayout] = useState(1);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [reactKey, setReactKey] = useState(false);
  const [docId, setDocId] = useState(null);
  const [name, setName] = useState('');
  const [update, setUpdate] = useState(false);
  const [message, setMessage] = useState('');

  const handleError = (err) => {
    setLoading(false);
    setMessage('');
  }

  useEffect(() => {
    Cookies.get('isAdmin') !== 'true' && setLayout(4);
  }, [])

  const handleDelete = (id) => {
    if (message === 'comment') {
      delComment(id, (err, res) => {
        if (err) return handleError(err);
        if (res !== null) {
          setMessage('');
          setUpdated(!updated);
        }
      })
    } else if (layout === 3) {
      delCategory(id, (err, res) => {
        if (err) return handleError(err);
        if (res !== null) {
          if (res.data.message = 'Forum Category has been deleted') {
            setMessage('Deleted Successfully');
            document ? document.querySelector('.m15').style.display = 'flex' : null;
            setUpdate(!update);
          }
        }
      })
    } else {
      delTopic(id, (err, res) => {
        if (err) return handleError(err);
        if (res !== null) {
          if (res.data.message = 'Discussion has been deleted') {
            setMessage('Deleted Successfully');
            document ? document.querySelector('.m15').style.display = 'flex' : null;
            setUpdate(!update);
          }
        }
      })
    }
  }

  const handleAdd = (confirmation) => {
    addCategory({ name }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        if (res.data.message = 'Forum Category has been created') {
          setMessage('Forum Category has been created');
          confirmation.style.display = 'flex';
          setName('');
          setUpdate(!update);
        }
      }
    })
  }

  useEffect(() => {
    setLoading(true);
    getForumCats((err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setCategories(res.data['Forum Categories']);
        setLoading(false);
      }
    })
  }, [update])

  useEffect(() => {
    setLoading(true);
    getTopics((err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        layout === 1 && setDocuments(res.data['Unapproved Topics']);
        layout === 2 && setDocuments(res.data['Approved Topics']);
        console.log(res.data['Approved Topics'])
        setLoading(false);
      }
    })
  }, [update, layout])

  useEffect(() => {
    setLoading(true);
    getNotifs((err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        const result = [res.data["Notification Data For Admin"][0].cat_ref]
        console.log(res.data);
        layout === 4 && setDocuments(result);
        setLoading(false);
      }
    })
  }, [update, layout])

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
              setReactKey(!reactKey);
            }}>
            Un Approved Topics
          </button>
          <button
            className={layout === 2 ? `${styles.activeBtn}` : `${styles.unapproveBtn}`}
            onClick={() => {
              if (layout === 2) return;
              setLayout(2);
              setUpdate(!update);
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
              // setDocuments([]);
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

        {loading ?
          <div className={styles.justify_center}><CircularProgress /></div> :
          layout === 1 || layout === 2 || layout === 4 ?
            <ForumList
              setDocId={setDocId}
              docId={docId}
              reactKey={reactKey}
              layout={layout}
              documents={documents}
              update={update}
              setUpdate={setUpdate}
              setMessage={setMessage}
              updated={updated}
              setUpdated={setUpdated} /> :
            <ForumCategories
              setReactKey={setReactKey}
              reactKey={reactKey}
              docId={docId}
              setDocId={setDocId}
              categories={categories}
              update={update}
              setUpdate={setUpdate}
              setMessage={setMessage} />
        }
      </div>

      <DeletePopup docId={docId} handleDelete={handleDelete} />

      <AlertCard message={message} />

      <div id="myModal" className='modal2 m2'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m2').style.display = "none";
            setName('');
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m2').style.display = "none";
              setName('');
            }}>
            <p>Add Category</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover2}>
            <div className={styles.content2}>
              <label htmlFor='name'>Category Name</label>
              <input
                id='name'
                type='text'
                value={name}
                onChange={(e) => { setName(e.target.value); }}
                className={styles.input} />
              <div className={styles.btn_cont}>
                <button
                  type='submit'
                  onClick={() => {
                    name.trim().length && handleAdd(document.querySelector('.m15'));
                    name.trim().length ? document.querySelector('.m2').style.display = "none" : null;
                  }}
                  className={`${styles.btn3} ${styles.save}`}>Save</button>
                <button
                  type='reset'
                  className={`${styles.btn3} ${styles.cancel}`}
                  onClick={() => {
                    document.querySelector('.m2').style.display = "none";
                    setName('');
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