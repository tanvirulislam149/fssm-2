import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styles from './UserCategories.module.css';
import UserCategoriesList from '../UserCategoriesList/UserCategoriesList';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useOptions from '../../useOptions';

const UserCategories = () => {
  const [profile, setProfile] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [profileOptions, setProfileOptions] = useState([]);

  const { advancedSearchText } = useOptions();

  useEffect(() => {
    let options = [];
    advancedSearchText.themes.forEach(({ title }) => {
      options.push(title);
    })
    setProfileOptions([]);
  }, [advancedSearchText])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>
          User Categories
          <button
            className={styles.btn2}
            data-modal="myModal"
            onClick={() => {
              document.querySelector('.m6').style.display = "flex";
            }}>
            User Categories
          </button>
        </h4>

        <h4 className={styles.label2}>User Categories</h4>
        <form className={styles.form}>
          <section>
            <div className={styles.textInput}>
              <div className={styles.title}>User Profile</div>
              <Autocomplete
                className={styles.select}
                onChange={(event, newValue) => {
                  setProfile(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id='profile'
                options={profileOptions}
                renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
              />
            </div>
          </section>

          <div className={styles.cont}>
            <button onClick={(e) => { handleSubmit(e); }} className={styles.btn}>Search</button>
          </div>
        </form>

        <h4 className={styles.label2}>User Categories List</h4>
        <UserCategoriesList />
      </div>

      <div id="myModal" className='modal2 m6'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m6').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m6').style.display = "none";
            }}
          >
            <p>Add User Profile</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              <Formik
                initialValues={{ userProfile: '', displayOrder: '' }}
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
                  document.querySelector('.m6').style.display = "none";
                }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCategories