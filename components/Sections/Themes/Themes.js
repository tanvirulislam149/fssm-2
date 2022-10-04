import React, { useState } from 'react';
import { FormControl, MenuItem, Select, Switch } from '@mui/material';
import styles from "./Themes.module.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeletePopup from "../../Dashboard/DeletePopup/DeletePopup"

const data = [
  { question: 'qef', roleName: 'Donor/Philanthropist/CSR', creatorName: "162", creatorOn: "2022-08-05 07:53:34", id: 1 },
  { question: 'qef', roleName: 'Donor/Philanthropist/CSR', creatorName: "162", creatorOn: "2022-08-05 07:53:34", id: 2 },
  { question: 'qef', roleName: 'Donor/Philanthropist/CSR', creatorName: "162", creatorOn: "2022-08-05 07:53:34", id: 3 },
]

const Themes = () => {
  const [number, setNumber] = useState(10);
  const [docId, setDocId] = useState(null);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h4 className={styles.label2}>Themes</h4>
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
            data.map(({ id, creatorOn, creatorName, roleName, question }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{question}</p>
                  </div>
                  <div className={styles.three}>
                    <div
                      title='Edit Question'
                      className={`${styles.btn} ${styles.editbtn}`}
                      data-modal="myModal"
                      onClick={() => {
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
        </div>
      </div>

      <DeletePopup />

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
            <p>View Question</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>
          {/* View Question Modal Content */}
          <div className={styles.cover}>
            <div>
              <h4 className={styles.label4}>Question Details</h4>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Question</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:asdfasdf</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Theme</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:PRIVATE SECTOR</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Category</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:Donor/ Philanthropist/ CSR </p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Name</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:asdfasdf</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Mobile</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:555</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Email</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:abc@gmail.com</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Organization</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:asdfasdf</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Priority</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:High</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Attachment</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:Attachment</p>
                </div>
              </div>
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
            <p>Edit Question</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div>
              <Formik
              >
                {({ resetForm, setFieldValue, values }) => (
                  <Form>
                    <div className={styles.editQuestion}>
                      <div>
                        <div className={styles.textInput2}>
                          <label htmlFor="user_profile">Creator Name</label>
                          <Field name="user_profile" id='user_profile' className={styles.input} type="text" />
                          <span className='form-error'><ErrorMessage name="user_profile" /></span>
                        </div>
                        <div className={styles.textInput2}>
                          <label htmlFor="user_profile">Creator Email</label>
                          <Field name="user_profile" id='user_profile' className={styles.input} type="text" />
                          <span className='form-error'><ErrorMessage name="user_profile" /></span>
                        </div>
                        <div className={styles.textInput2}>
                          <label htmlFor="is_hidden">Theme</label>
                          <Field name='is_hidden' as='select' id='is_hidden' onChange={() => { setFieldValue('is_hidden', !values.is_hidden) }} className={`${styles.select2} ${styles.form_select} form-select`}>
                            <option>--Select--</option>
                            <option value={false}>Show</option>
                            <option value={true}>Hide</option>
                          </Field>
                        </div>
                      </div>
                      <div>
                        <div className={styles.textInput2}>
                          <label htmlFor="user_profile">Mobile</label>
                          <Field name="user_profile" id='user_profile' className={styles.input} type="text" />
                          <span className='form-error'><ErrorMessage name="user_profile" /></span>
                        </div>
                        <div className={styles.textInput2}>
                          <label htmlFor="user_profile">Organization</label>
                          <Field name="user_profile" id='user_profile' className={styles.input} type="text" />
                          <span className='form-error'><ErrorMessage name="user_profile" /></span>
                        </div>
                        <div className={styles.textInput2}>
                          <label htmlFor="is_hidden">User Profile</label>
                          <Field name='is_hidden' as='select' id='is_hidden' onChange={() => { setFieldValue('is_hidden', !values.is_hidden) }} className={`${styles.select2} ${styles.form_select} form-select`}>
                            <option>--Select--</option>
                            <option value={false}>Show</option>
                            <option value={true}>Hide</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className={styles.textInput2}>
                      <label htmlFor="display_order">Question</label>
                      <Field name="display_order" id='display_order' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="display_order" /></span>
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
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <div id="myModal" className='modal2 m11'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m11').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m11').style.display = "none";
            }}
          >
            <p>Unapproved Answer</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>
          {/* Unapproved Answer Modal Content */}
          <div className={styles.cover}>
            <div className={styles.content}>
              <h4 className={styles.label5}>No records</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal" className='modal2 m12'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m12').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m12').style.display = "none";
            }}
          >
            <p>Approved Answer</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>
          {/* Approved Answer Modal Content */}
          <div className={styles.cover}>
            <div className={styles.content}>
              <h4 className={styles.label5}>No records</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Themes;