import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styles from './UserCategories.module.css';
import UserCategoriesList from '../UserCategoriesList/UserCategoriesList';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useOptions from '../../useOptions';
import AlertCard from '../AlertCard/AlertCard';
import CircularProgress from '@mui/material/CircularProgress';
import { getUserProfile, createUserProfile, searchUserProfile, getMappedData } from '../../../services/userCatServices';

const UserCategories = () => {
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [profileOptions, setProfileOptions] = useState([]);
  const [message, setMessage] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [action, setAction] = useState(false);
  const [addItemsText, setAddItemsText] = useState([]);
  const [update, setUpdate] = useState(false);

  const { advancedSearchText } = useOptions();

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  useEffect(() => {
    getUserProfile((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        loading && setProfiles(res.data.message);
        setLoading(false);
      }
    })
  }, [action])

  const handleItems = (arr) => {
    const data = [];
    arr.forEach(item => {
      if (item.user_profile) {
        data.push({});
        data[data.length - 1].title = item.user_profile;
        data[data.length - 1].display_order = item.display_order;
        data[data.length - 1].id = item.id;
        data[data.length - 1].subitems = handleItems(item.section);
      }
      if (item.question) {
        data.push({});
        data[data.length - 1].title = item.question;
        data[data.length - 1].display_order = item.display_order;
        data[data.length - 1].id = item.id;
        data[data.length - 1].subitems = handleItems(item.items);
      }
      if (item.item_title) {
        data.push({});
        data[data.length - 1].title = item.item_title;
        data[data.length - 1].display_order = item.display_order;
        data[data.length - 1].id = item.id;
        data[data.length - 1].subitems = handleItems(item.subitems);
      }
      if (item.subitem_title) {
        data.push({});
        data[data.length - 1].title = item.subitem_title;
        data[data.length - 1].display_order = item.display_order;
        data[data.length - 1].id = item.id;
        data[data.length - 1].subitems = [];
      }
    })
    return data;
  }

  useEffect(() => {
    getMappedData((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        const data = handleItems(res.data.message);
        setAddItemsText(data);
        setLoading2(false);
        document.getElementById('form') && document.getElementById('form').classList.add("none");
        document.getElementById('del') && document.getElementById('del').classList.add('none');
      }
    })
  }, [update])

  useEffect(() => {
    let options = [];
    advancedSearchText.profile.forEach(({ title }) => {
      options.push(title);
    })
    setProfileOptions(options);
  }, [advancedSearchText])

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    searchUserProfile({ search: search ? search : '' }, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        console.log({ rey: res.data.message });
        setProfiles(res.data.message);
      }
    })
  }

  const handleCreate = (values, confirmation) => {
    console.log({ values })
    createUserProfile(values, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ rez: res.data.message });
        if (res.data.message === 'User Profile Successfully created') {
          setMessage('User Profile Successfully created');
          confirmation.style.display = 'flex';
          setUpdate(!update);
        } else if (res.data.message === 'User profile already exists') {
          setMessage('User profile already exists');
          confirmation.style.display = 'flex';
        }
      }
    })
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
            Add User Category
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
        {
          loading ?
            <div className={styles.justify_center}><CircularProgress /></div> :
            <UserCategoriesList
              update={update}
              setMessage={setMessage}
              setUpdate={setUpdate}
              addItemsText={addItemsText}
              setLoading={setLoading}
              loading2={loading2}
              setLoading2={setLoading2}
              action={action}
              setAction={setAction}
              profiles={profiles} />
        }
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
                  handleCreate({ ...values, display_order: Number(values.display_order) }, document.querySelector('.m15'));
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

      <AlertCard message={message} />
    </>
  )
}

export default UserCategories