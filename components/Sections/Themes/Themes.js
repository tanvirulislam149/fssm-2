import React, { useEffect, useState } from 'react';
import { CircularProgress, FormControl, MenuItem, Select } from '@mui/material';
import styles from "./Themes.module.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeletePopup from "../../Dashboard/DeletePopup/DeletePopup"
import useOptions from "../../useOptions.js"
import { delTheme, getThemes, createTheme, updateTheme } from '../../../services/adminHelpDeskService';

const Themes = ({ setMessage }) => {
  const [number, setNumber] = useState(10);
  const [docId, setDocId] = useState(null);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [theme_title, setTheme_title] = useState('');

  const { advancedSearchText } = useOptions();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleError = (err) => {
    setLoading(false);
    console.log(err);
  }

  useEffect(() => {
    setLoading(true);
    getThemes((err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ res });
        setDocuments(res.data.message);
      }
    })
  }, [update])

  const handleSubmit = () => {
    updateTheme(docId, { theme_title }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'Updated Successfully') {
          setMessage('Updated Successfully');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
  }

  const handleDelete = (id) => {
    delTheme(id, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'Delete Successfully') {
          setMessage('Deleted Successfully');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
  }

  const handleCreate = () => {
    createTheme({ theme_title }, (err, res) => {
      setTheme_title('');
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'User Profile Successfully created') {
          setMessage('Theme Added Successfully');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingCont}>
          <h4 className={styles.label2}>Themes</h4>
          <button
            onClick={() => {
              document.querySelector('.m19').style.display = "flex";
            }}
            className={styles.addTheme}>Add Theme</button>
        </div>
        <div className={styles.control}>
          <div>
            <p>Show</p>
            <FormControl sx={{ m: 1, width: 55 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={number}
                className={styles.select}
                onChange={handleChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
            <p>entries</p>
          </div>
        </div>

        {loading ?
          <div className={styles.justify_center}><CircularProgress /></div> :
          <div className={styles.cont}>
            <div className={styles.heading}>
              <div className={styles.one}>
                <p>S.NO</p>
              </div>
              <div className={styles.two}>
                <p>Theme</p>
              </div>
              <div className={styles.three}>
                <p>Action</p>
              </div>
            </div>
            {
              documents.map(({ id, theme_title }, i) => {
                return (
                  <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                    <div className={styles.one}>
                      <p>{i + 1}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{theme_title}</p>
                    </div>
                    <div className={styles.three}>
                      <div
                        title='Edit Question'
                        className={`${styles.btn} ${styles.editbtn}`}
                        data-modal="myModal"
                        onClick={() => {
                          setDocId(id);
                          setTheme_title(theme_title);
                          document.querySelector('.m8').style.display = "flex";
                        }}>
                        <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} />
                      </div>
                      <div
                        title='Delete User Profile'
                        className={`${styles.btn} ${styles.delbtn}`}
                        onClick={() => {
                          setDocId(id);
                          document.querySelector('.m10').style.display = "flex";
                        }}>
                        <DeleteOutlineOutlinedIcon sx={{ color: '#e95454', height: '15px', width: '15px' }} />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>}
      </div>

      <DeletePopup docId={docId} handleDelete={handleDelete} />

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
            <p>Edit Theme</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div>
              <label htmlFor='name'>Theme</label>
              <input
                id='name'
                type='text'
                value={theme_title}
                onChange={(e) => { setTheme_title(e.target.value); }}
                className={styles.input} />
              <div className={styles.btn_cont}>
                <button
                  type='reset'
                  onClick={() => {
                    theme_title.trim().length && handleSubmit();
                    theme_title.trim().length ? document.querySelector('.m8').style.display = "none" : null;
                  }}
                  className={`${styles.btn3} ${styles.save}`}>
                  Save
                </button>
                <button
                  className={`${styles.btn3} ${styles.cancel}`}
                  type='reset'
                  onClick={() => {
                    setTheme_title('');
                    document.querySelector('.m8').style.display = "none";
                  }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add theme modal */}

      <div id="myModal" className='modal2 m19'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m19').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m19').style.display = "none";
            }}
          >
            <p>Add Q & A Theme</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div>
              <label htmlFor='name'>Theme</label>
              <input
                id='name'
                type='text'
                value={theme_title}
                onChange={(e) => { setTheme_title(e.target.value); }}
                className={styles.input} />
              <div className={styles.btn_cont}>
                <button
                  type='reset'
                  onClick={() => {
                    theme_title.trim().length && handleCreate();
                    theme_title.trim().length ? document.querySelector('.m19').style.display = "none" : null;
                  }}
                  className={`${styles.btn3} ${styles.save}`}>
                  Save
                </button>
                <button
                  className={`${styles.btn3} ${styles.cancel}`}
                  type='reset'
                  onClick={() => {
                    setTheme_title('');
                    document.querySelector('.m19').style.display = "none";
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

export default Themes;