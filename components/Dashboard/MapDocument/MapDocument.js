import React, { useState } from 'react';
import styles from './MapDocument.module.css';
import AddItems from '../AddItems/AddItems';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { addItem, delItem, editItem, pasteItem } from '../../../services/userCatServices';
import CircularProgress from '@mui/material/CircularProgress';

const MapDocument = ({ loading2, setLoading2, update, setUpdate, addItemsText }) => {
  const [clicked, setClicked] = useState(false);
  const [nameVal, setNameVal] = useState('');
  const [orderVal, setOrderVal] = useState('');
  const [api, setApi] = useState(1);
  const [idArray, setIdArray] = useState(['', '', '', '']);
  const [level, setLevel] = useState(null);
  const [node, setNode] = useState(null);
  const [copyId, setCopyId] = useState(null);

  const router = useRouter();

  const handleValues = (setFieldValue) => {
    setFieldValue('name', nameVal);
    setFieldValue('display_order', orderVal);
  }

  const handleError = (err) => {
    setLoading2(false);
    console.log({ e: err });
    document.getElementById('form') && document.getElementById('form').classList.add("none");
    // setError(err.message);
  }

  const handleSubmit = (data) => {
    if (router.pathname === '/entity') {
      setLoading2(true);
      if (api === 1) {
        if (idArray[3] !== '') {
          alert(`Cannot add to end nodes`);
          document.getElementById('form') && document.getElementById('form').classList.add("none");
          setLoading2(false);
          return;
        }
        addItem(idArray, data, (err, res) => {
          if (err) return handleError(err)
          if (res !== null) {
            console.log({ res });
            if (res.data.message === 'User Profile Successfully created') {
              setUpdate(!update);
            }
          }
        })
      } else {
        editItem(idArray, data, (err, res) => {
          if (err) return handleError(err)
          if (res !== null) {
            console.log({ res });
            if (res.data.message === 'Updated Successfully') {
              setUpdate(!update);
            }
          }
        })
      }
    }
  }

  const handleDelete = () => {
    if (router.pathname === '/entity') {
      setLoading2(true);
      delItem(idArray, (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          console.log({ res });
          if (res.data.message === 'Delete Successfully') {
            setUpdate(!update);
          }
        }
      })
    }
  }

  const handlePaste = () => {
    if (router.pathname === '/entity') {
      setLoading2(true);
      pasteItem(idArray, { node, id: copyId }, (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          console.log({ res });
          if (res.data.message === 'Tree node is copied successfully.') {
            setUpdate(!update);
          }
        }
      })
    }
  }

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
              <div
                className={`${styles.green} ${styles.btn4}`}
                title='Add'
                onClick={() => {
                  document.getElementById('del').classList.add('none');
                  if (idArray[0] === '') {
                    alert('Select node to add');
                    return;
                  }
                  setNameVal('');
                  setOrderVal('');
                  setApi(1);
                  document.getElementById('form').classList.remove('none');
                }}>
                <AddOutlinedIcon className={styles.bold} sx={{ height: '12px', width: '12px' }} />
              </div>
              <div
                id='editbtn'
                title='Edit'
                className={clicked ? `${styles.yellow} ${styles.btn4}` : `${styles.yellow2} ${styles.cursor} ${styles.btn4}`}
                onClick={() => {
                  if (idArray[1] === '') {
                    alert('Cannot edit node on first level');
                    return;
                  }
                  setApi(2);
                  document.getElementById('span2-click').click();
                  document.getElementById('del').classList.add('none');
                  clicked && document.getElementById('form').classList.remove('none');
                }}>
                {clicked ?
                  <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} /> :
                  <CheckBoxOutlinedIcon sx={{ color: '#555', height: '15px', width: '15px' }} />}
              </div>
              <div
                id='delbtn'
                title='Delete'
                onClick={() => {
                  clicked && document.getElementById('del').classList.remove('none');
                }}
                className={clicked ? `${styles.red} ${styles.btn4}` : `${styles.red2} ${styles.cursor} ${styles.btn4}`}>
                {clicked ?
                  <CloseIcon className={styles.bold} sx={{ height: '12px', width: '12px' }} /> :
                  <CloseIcon sx={{ color: '#555', height: '12px', width: '12px' }} />}
              </div>
              <div
                title='Copy'
                onClick={() => {
                  if (idArray[0] === '') {
                    alert('Please select the node to copy');
                  } else {
                    if (idArray[1] === '') {
                      alert('Cannot copy nodes on first level');
                      return;
                    }
                    setCopyId(idArray[level]);
                    setNode(level);
                    alert('Node copied successfully!');
                  }
                }}
                className={`${styles.yellow} ${styles.btn4}`}>
                Copy
              </div>
              <div
                title='Paste'
                className={`${styles.yellow} ${styles.btn4}`}
                onClick={() => {
                  setApi(3);
                  if (level === node && copyId === idArray[level]) {
                    alert('Select different node to paste');
                    return;
                  }
                  if (idArray[0] === '') {
                    alert('Select node to paste');
                    return;
                  }
                  if (!node) {
                    alert('Copy a node to paste');
                    return;
                  }
                  if (level === 3) {
                    alert('Cannot paste nodes on last level');
                    return;
                  }
                  handlePaste();
                }}>
                Paste
              </div>
              {api === 3 && loading2 && <span className={styles.progress}><CircularProgress /></span>}
            </div>

            <div id='del' className={`${styles.del} none`}>
              <p>Are you sure you want to delete this node?</p>
              {loading2 ? <span className={styles.white}><CircularProgress /></span> :
                <div>
                  <button
                    onClick={() => { handleDelete(); }}
                    className={`${styles.btn3} ${styles.ok}`}>
                    Okay
                  </button>
                  <button
                    className={`${styles.btn3} ${styles.cancel}`}
                    onClick={() => {
                      document.getElementById('del').classList.add('none');
                    }}>
                    Cancel
                  </button>
                </div>}
            </div>

            <div className={`${styles.form2} none`} id='form'>
              <Formik
                initialValues={{ name: '', display_order: '' }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .required('Required')
                    // .test('is value valid?', 'Characters must consist of letters only', (val) => {
                    //   return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
                    // })
                    .min(2, '2 or more characters'),
                  display_order: Yup.string()
                    .required('Required')
                    .test('is value a number?', 'Display order must be a number', (val) => {
                      return !isNaN(val);
                    }),
                })}
                onSubmit={(values, actions) => {
                  handleSubmit({ ...values, display_order: Number(values.display_order) }, document.querySelector('.m15'));
                  actions.resetForm();
                }}
              >
                {({ resetForm, setFieldValue }) => (
                  <Form className={styles.form}>
                    <div className={styles.textInput}>
                      <label htmlFor="name">Name</label>
                      <Field name="name" id='name' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="name" /></span>
                    </div>

                    <div className={styles.textInput2}>
                      <label htmlFor="display_order">Display Order</label>
                      <Field name="display_order" id='display_order' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="display_order" /></span>
                    </div>

                    {loading2 ? <CircularProgress /> :
                      <>
                        <button type='submit' className={`${styles.btn3} ${styles.ok}`}>Okay</button>
                        <button
                          className={`${styles.btn3} ${styles.cancel}`}
                          type='reset'
                          onClick={() => {
                            resetForm();
                            document.getElementById('form').classList.add('none');
                          }}>
                          Cancel
                        </button>
                      </>}
                    <span id='span2-click' onClick={() => { handleValues(setFieldValue) }}></span>
                  </Form>
                )}
              </Formik>
            </div>

            <div className={styles.overflow}>
              <div className={styles.content2}>
                {
                  addItemsText.length &&
                  <AddItems
                    setOrderVal={setOrderVal}
                    setNameVal={setNameVal}
                    setClicked={setClicked}
                    count={0}
                    subitems={addItemsText}
                    values={['', '', '', '']}
                    setIdArray={setIdArray}
                    setLevel={setLevel}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MapDocument