import React, { useEffect, useState } from 'react';
import { CircularProgress, FormControl, MenuItem, Select, Switch } from '@mui/material';
import styles from "./Emails.module.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeletePopup from "../../Dashboard/DeletePopup/DeletePopup"
import useOptions from "../../useOptions.js"
import { getEmail, updateEmail, createEmail, delEmail } from '../../../services/adminHelpDeskService';

const Emails = ({ setMessage }) => {
  const [number, setNumber] = useState(10);
  const [docId, setDocId] = useState(null);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [themeOptions, setThemeOptions] = useState([]);
  const [updated, setUpdated] = useState([]);
  const [current, setCurrent] = useState({
    name: '',
    email: '',
    status: '',
    theme: ''
  })

  const { advancedSearchText } = useOptions();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    current.name !== '' && document.getElementById('span-click').click();
  }, [updated])

  const handleValues = (setFieldValue) => {
    setFieldValue('name', current.name);
    setFieldValue('email', current.email);
    setFieldValue('theme_expert', current.theme);
    setFieldValue('is_active', current.status);
  }

  useEffect(() => {
    let options = [];
    advancedSearchText.themes.forEach(({ title }) => {
      options.push(title);
    })
    setThemeOptions(options);
  }, [advancedSearchText])

  const handleError = (err) => {
    setLoading(false);
    console.log(err);
  }

  useEffect(() => {
    setLoading(true);
    getEmail((err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ res });
        setDocuments(res.data.message);
      }
    })
  }, [update])

  const handleSubmit = (data) => {
    // let d = { name: data.name, email: data.email, is_active: data.is_active, theme_expert: 15 }
    // console.log(d)
    updateEmail(docId, data, (err, res) => {
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

  const handleCreate = (data) => {
    console.log({ data })
    createEmail(data, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'User Profile Successfully created') {
          setMessage('Email Added Successfully');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
  }

  const handleDelete = (id) => {
    delEmail(id, (err, res) => {
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

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingCont}>
          <h4 className={styles.label2}>Emails</h4>
          <button
            onClick={() => {
              document.querySelector('.m18').style.display = "flex";
            }}
            className={styles.addTheme}>Add email</button>
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
                <p>Name</p>
              </div>
              <div className={styles.two}>
                <p>Email</p>
              </div>
              <div className={styles.two}>
                <p>Theme</p>
              </div>
              <div className={styles.two}>
                <p>Status</p>
              </div>
              <div className={styles.two}>
                <p>Action</p>
              </div>
            </div>
            {
              documents.map(({ name, id, email, theme_expert, is_active }, i) => {
                return (
                  <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                    <div className={styles.one}>
                      <p>{i + 1}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{name}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{email}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{theme_expert?.theme_title}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{is_active ? 'Active' : 'Inactive'}</p>
                    </div>
                    <div className={styles.two}>
                      <div
                        title='Edit Question'
                        className={`${styles.btn} ${styles.editbtn}`}
                        data-modal="myModal"
                        onClick={() => {
                          setDocId(id);
                          setCurrent({
                            name: name,
                            email: email,
                            status: is_active,
                            theme: theme_expert?.theme_title
                          })
                          setUpdated(!updated);
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
            <p>Edit Email</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div>
              <Formik
                initialValues={{ name: '', email: '', theme_expert: '', is_active: '' }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .required('Required')
                    .test('is value valid?', 'Characters must consist of letters only', (val) => {
                      return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
                    }),
                  email: Yup.string()
                    .required('Required')
                    .email('Invalid email address')
                    .test('is email valid?', 'Invalid email address', (val) => {
                      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
                    }),
                })}
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                  actions.resetForm();
                  document.querySelector('.m8').style.display = "none";
                }}
              >
                {({ resetForm, setFieldValue }) => (
                  <Form>
                    <div className={styles.textInput2}>
                      <label htmlFor="name">Name <span>*</span></label>
                      <Field name="name" id='name' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="name" /></span>
                    </div>
                    <div className={styles.textInput2}>
                      <label htmlFor="email">Email <span>*</span></label>
                      <Field name="email" id='email' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="email" /></span>
                    </div>
                    <div className={styles.textInput2}>
                      <label htmlFor="theme_expert">Theme <span>*</span></label>
                      <Field name='theme_expert' as='select' id='theme_expert' className={`${styles.select2} ${styles.form_select} form-select`}>
                        {themeOptions.map(title => {
                          return (
                            <option key={title} value={title}>{title}</option>
                          )
                        })}
                      </Field>
                    </div>
                    <div className={styles.textInput2}>
                      <label htmlFor="is_active">Status <span>*</span></label>
                      <Field name='is_active' as='select' id='is_active' className={`${styles.select2} ${styles.form_select} form-select`}>
                        <option value={true}>Active</option>
                        <option value={false}>Inactive</option>
                      </Field>
                    </div>

                    <div className={styles.btn_cont}>
                      <button type='submit' className={`${styles.btn3} ${styles.save}`}>Save</button>
                      <button
                        className={`${styles.btn3} ${styles.cancel}`}
                        type='reset'
                        onClick={() => {
                          resetForm();
                          document.querySelector('.m8').style.display = "none";
                        }}>
                        Cancel
                      </button>
                    </div>
                    <span id='span-click' onClick={() => { handleValues(setFieldValue) }}></span>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      {/* Add email modal */}
      <div id="myModal" className='modal2 m18'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m18').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m18').style.display = "none";
            }}
          >
            <p>Add Email</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  theme_expert: ''
                }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .test('is value valid?', 'Characters must consist of letters only', (val) => {
                      return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
                    }),
                  email: Yup.string()
                    .email('Invalid email address')
                    .test('is email valid?', 'Invalid email address', (val) => {
                      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
                    }),
                })}
                onSubmit={(values, actions) => {
                  handleCreate(values);
                  actions.resetForm();
                  document.querySelector('.m18').style.display = "none";
                }}
              >
                {({ resetForm, setFieldValue }) => (
                  <Form>
                    <div className={styles.textInput2}>
                      <label htmlFor="theme_expert">Theme <span>*</span></label>
                      <Field name='theme_expert' as='select' id='theme_expert' className={`${styles.select2} ${styles.form_select} form-select`}>
                        <option value={''}>--Select--</option>
                        {themeOptions.map(title => {
                          return (
                            <option key={title} value={title}>{title}</option>
                          )
                        })}
                      </Field>
                    </div>
                    <div className={styles.textInput2}>
                      <label htmlFor="name">Name <span>*</span></label>
                      <Field name="name" id='name' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="name" /></span>
                    </div>
                    <div className={styles.textInput2}>
                      <label htmlFor="email">Email <span>*</span></label>
                      <Field name="email" id='email' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="email" /></span>
                    </div>

                    <div className={styles.btn_cont}>
                      <button
                        type='submit'
                        className={`${styles.btn3} ${styles.save}`}>
                        Save
                      </button>
                      <button
                        className={`${styles.btn3} ${styles.cancel}`}
                        type='reset'
                        onClick={() => {
                          resetForm();
                          document.querySelector('.m18').style.display = "none";
                        }}>
                        Cancel
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Emails;