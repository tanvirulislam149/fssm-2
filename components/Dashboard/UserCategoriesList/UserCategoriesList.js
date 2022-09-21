import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import styles from './UserCategoriesList.module.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AddItems from '../AddItems/AddItems';
import { addItemsText } from '../../TextArrays';

const data = [
  { profile: 'Govt - National/State', display: 'Show', id: 1, order: 2 },
  { profile: 'Govt - National/State', display: 'Show', id: 2, order: 2 },
  { profile: 'Govt - National/State', display: 'Show', id: 3, order: 2 },
]

const UserCategoriesList = () => {
  const [number, setNumber] = useState(10);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
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

        <div className={styles.cont}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.two}>
              <p>User Profile</p>
            </div>
            <div className={styles.two}>
              <p>Display</p>
            </div>
            <div className={styles.two}>
              <p>Display Order</p>
            </div>
            <div className={styles.two}>
              <p>Action</p>
            </div>
          </div>
          {
            data.map(({ id, order, display, profile }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{profile}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{display}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{order}</p>
                  </div>
                  <div className={styles.two}>
                    <div
                      className={`${styles.btn} ${styles.addbtn}`}
                      title='Add Items'
                      data-modal="myModal"
                      onClick={() => {
                        //document.querySelector('.m8').style.display = "flex";
                      }}>
                      <AddOutlinedIcon sx={{ color: '#024c73', height: '12px', width: '12px' }} />
                    </div>
                    <div
                      title='Edit User Profile'
                      className={`${styles.btn} ${styles.editbtn}`}
                      data-modal="myModal"
                      onClick={() => {
                        document.querySelector('.m7').style.display = "flex";
                      }}>
                      <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} />
                    </div>
                    <div
                      title='Delete User Profile'
                      className={`${styles.btn} ${styles.delbtn}`}>
                      <DeleteOutlineOutlinedIcon sx={{ color: '#e95454', height: '15px', width: '15px' }} />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <p className={styles.results}>Showing 10 of 10 entries</p>

      <div id="myModal" className='modal2 m7'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m7').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m7').style.display = "none";
            }}
          >
            <p>Edit User Profile</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              <Formik
                initialValues={{ userProfile: '', display: '', displayOrder: '' }}
                validationSchema={Yup.object({
                  userProfile: Yup.string()
                    .required('Required')
                    .min(4, '4 or more characters')
                    .test('is value valid?', 'Characters must consist of letters only', (val) => {
                      return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
                    }),
                  displayOrder: Yup.string()
                    .required('Required')
                    .test('is value a number?', 'Display order must be a number', (val) => {
                      return !isNaN(val);
                    }),
                })}
                onSubmit={values => {
                  //handleSubmit(values);
                }}
              >
                <Form>
                  <div className={styles.textInput2}>
                    <label htmlFor="userProfile">User Profile <span>*</span></label>
                    <Field name="userProfile" id='userProfile' className={styles.input} type="text" />
                    <span className='form-error'><ErrorMessage name="userProfile" /></span>
                  </div>

                  <div className={styles.textInput2}>
                    <label htmlFor="display">Display</label>
                    <Field name='display' as='select' id='display' className={`${styles.select2} ${styles.form_select} form-select`}>
                      <option hidden value=''>--Select--</option>
                      <option value={1}>Show</option>
                      <option value={2}>Hide</option>
                    </Field>
                  </div>

                  <div className={styles.textInput2}>
                    <label htmlFor="displayOrder">Display Order <span>*</span></label>
                    <Field name="displayOrder" id='displayOrder' className={styles.input} type="text" />
                    <span className='form-error'><ErrorMessage name="displayOrder" /></span>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className={styles.btn_cont}>
              <button className={`${styles.btn3} ${styles.save}`}>Save</button>
              <button
                className={`${styles.btn3} ${styles.cancel}`}
                onClick={() => {
                  document.querySelector('.m7').style.display = "none";
                }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

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
              <div className={`${styles.green} ${styles.btn4}`}>
                <AddOutlinedIcon className={styles.bold} sx={{ height: '12px', width: '12px' }} />
              </div>
              <div className={`${styles.yellow} ${styles.btn4}`}>
                <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} />
              </div>
              <div className={`${styles.red} ${styles.btn4}`}>
                <CloseIcon className={styles.bold} sx={{ height: '12px', width: '12px' }} />
              </div>
              <div className={`${styles.yellow} ${styles.btn4}`}>
                Copy
              </div>
              <div className={`${styles.yellow} ${styles.btn4}`}>
                Paste
              </div>
            </div>
            <div className={styles.overflow}>
              <div className={styles.content2}>
                <AddItems count={0} subitems={addItemsText.sections} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCategoriesList