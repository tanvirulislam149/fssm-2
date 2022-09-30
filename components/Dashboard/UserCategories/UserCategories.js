import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styles from './UserCategories.module.css';
import UserCategoriesList from '../UserCategoriesList/UserCategoriesList';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useOptions from '../../useOptions';
import { getUserProfile, createUserProfile, searchUserProfile } from '../../../services/userCatServices';

const UserCategories = () => {
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [profileOptions, setProfileOptions] = useState([]);

  const { advancedSearchText } = useOptions();

  const handleError = (err) => {
    console.log({ e: err })
  }

  useEffect(() => {
    // getUserProfile((err, res) => {
    //   if (err) return handleError(err)
    //   if (res !== null) {
    //     console.log({ res: res });
    //   }
    // })
  }, [])

  useEffect(() => {
    let options = [];
    advancedSearchText.themes.forEach(({ title }) => {
      options.push(title);
    })
    setProfileOptions([]);
  }, [advancedSearchText])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ search });
    // searchUserProfile({ search }, (err, res) => {
    //   if (err) return handleError(err)
    //   if (res !== null) {
    //     console.log({ res: res });
    //   }
    // })
  }

  const handleCreate = (values) => {
    console.log({ values })
    // createUserProfile(data, (err, res) => {
    //   if (err) return handleError(err)
    //   if (res !== null) {
    //     console.log({ res: res });
    //   }
    // })
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
                  setSearch(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id='search'
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
                initialValues={{ user_profile: '', display_order: '' }}
                validationSchema={Yup.object({
                  user_profile: Yup.string()
                    .required('Required')
                    .min(4, '4 or more characters')
                    .test('is value valid?', 'Characters must consist of letters only', (val) => {
                      return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
                    }),
                  display_order: Yup.string()
                    .required('Required')
                    .test('is value a number?', 'Display order must be a number', (val) => {
                      return !isNaN(val);
                    }),
                })}
                onSubmit={(values, actions) => {
                  handleCreate({ ...values, display_order: Number(values.display_order) });
                  actions.resetForm();
                  document.querySelector('.m6').style.display = "none";
                }}
              >
                {({ resetForm }) => (
                  <Form>
                    <div className={styles.textInput2}>
                      <label htmlFor="user_profile">User Profile <span>*</span></label>
                      <Field name="user_profile" id='user_profile' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="user_profile" /></span>
                    </div>

                    <div className={styles.textInput2}>
                      <label htmlFor="display_order">Display Order <span>*</span></label>
                      <Field name="display_order" id='display_order' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="display_order" /></span>
                    </div>

                    <div className={styles.btn_cont}>
                      <button type='submit' className={`${styles.btn3} ${styles.save}`}>Save</button>
                      <button
                        type='reset'
                        className={`${styles.btn3} ${styles.cancel}`}
                        onClick={() => {
                          document.querySelector('.m6').style.display = "none";
                          resetForm();
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

export default UserCategories