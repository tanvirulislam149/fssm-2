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
import useOptions from "../../useOptions.js"

const Themes = () => {
  const [number, setNumber] = useState(10);
  const [docId, setDocId] = useState(null);

  const { advancedSearchText } = useOptions();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingCont}>
          <h4 className={styles.label2}>Themes</h4>
          <button className={styles.addTheme}>Add Theme</button>
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
            advancedSearchText.themes.map(({ title }, i) => {
              return (
                <div key={i} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{title}</p>
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
              <Formik
              >
                {({ resetForm, setFieldValue, values }) => (
                  <Form>
                    <div className={styles.textInput2}>
                      <label htmlFor="display_order">Theme <span>*</span></label>
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
    </>
  )
}

export default Themes;