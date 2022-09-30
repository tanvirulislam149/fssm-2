import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import styles from '../ForumList/ForumList.module.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const ForumCategories = ({ categories, setDocId }) => {
  const [list, setList] = useState(categories);

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.cont2} ${styles.cont}`}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.three}>
              <p>Category Name</p>
            </div>
            <div className={styles.three}>
              <p>Display Order</p>
            </div>
            <div className={styles.three}>
              <p>Status</p>
            </div>
            <div className={styles.three}>
              <p>Actions</p>
            </div>
          </div>
          {list.map(({ status, id, order, cat }, i) => {
            return (
              <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                <div className={styles.one}>
                  <p>{i + 1}</p>
                </div>
                <div className={styles.three}>
                  <p> {cat}</p>
                </div>
                <div className={styles.three}>
                  <p> {order}</p>
                </div>
                <div className={styles.three}>
                  <p>{status}</p>
                </div>
                <div className={styles.three}>
                  <div
                    title='delete'
                    onClick={() => {
                      setDocId(id);
                      document.querySelector('.m10').style.display = "flex";
                    }}
                    className={`${styles.btn} ${styles.delbtn}`}>
                    <DeleteOutlineOutlinedIcon sx={{ color: '#e95454', height: '15px', width: '15px' }} />
                  </div>
                  <div
                    title='edit'
                    className={`${styles.btn} ${styles.editbtn}`}
                    onClick={() => {
                      document.querySelector('.m7').style.display = "flex"
                    }}
                  >
                    <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div id="myModal" className='modal2 m7'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m7').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m7').style.display = "none";
            }}
          >
            <p>Edit Category</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover2}>
            <div className={styles.content2}>
              <Formik
                initialValues={{ category: '', status: '', display_order: '' }}
                validationSchema={Yup.object({
                  category: Yup.string()
                    .test('is value valid?', 'Characters must consist of letters only', (val) => {
                      return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
                    }),
                  display_order: Yup.string()
                    .test('is value a number?', 'Display order must be a number', (val) => {
                      return !isNaN(val);
                    }),
                })}
                onSubmit={(values, actions) => {
                  handleSubmit({ ...values, display_order: Number(values.display_order) });
                  actions.resetForm();
                  document.querySelector('.m7').style.display = "none";
                }}
              >
                {({ resetForm }) => (
                  <Form>
                    <div className={styles.textInput2}>
                      <label htmlFor="category">Category Name</label>
                      <Field name="category" id='category' className={styles.input2} type="text" />
                      <span className='form-error'><ErrorMessage name="category" /></span>
                    </div>

                    <div className={styles.textInput2}>
                      <label htmlFor="display_order">Display Order</label>
                      <Field name="display_order" id='display_order' className={styles.input2} type="text" />
                      <span className='form-error'><ErrorMessage name="display_order" /></span>
                    </div>

                    <div className={styles.textInput2}>
                      <label htmlFor="status">Status</label>
                      <Field name='status' as='select' id='status' className={`${styles.select2} ${styles.form_select} form-select`}>
                        <option hidden value=''>--Select--</option>
                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                        <option value='Partners Only'>Partners Only</option>
                      </Field>
                    </div>

                    <div className={styles.btn_cont}>
                      <button type='submit' className={`${styles.btn3} ${styles.save}`}>Save</button>
                      <button
                        className={`${styles.btn3} ${styles.cancel}`}
                        type='reset'
                        onClick={() => {
                          resetForm();
                          document.querySelector('.m7').style.display = "none";
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

export default ForumCategories