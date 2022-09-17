import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CustomizedHook from './useHook';
import { advancedSearchText } from '../../TextArrays';
import styles from '../MappingForm/MappingForm.module.css';

const EditCategoryForm = () => {
  const [keywords, setKeywords] = useState([]);
  const [language, setLanguage] = useState([]);
  const [value_chain, setValue_chain] = useState([]);
  const [stakeholder, setStakeholder] = useState([]);
  const [category, setCategory] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [themeOptions, setThemeOptions] = useState([]);
  const [chipKey, setChipKey] = useState(false);

  const handleSubmit = (values) => {
    let data;
    if (values.geography === 'state') {
      data = {
        ...values,
        keywords, stakeholder, value_chain, language, category, state, city
      }
    } else {
      data = {
        ...values,
        keywords, stakeholder, value_chain, language, category
      }
    }
    console.log(data);
  }

  useEffect(() => {
    const options = [];
    advancedSearchText.themes.forEach(({ title }) => {
      options.push(title);
    })
    setThemeOptions(options);
  }, [])

  useEffect(() => {
    if (inputValue2 === 'file') {
      document.getElementById('file-cont').classList.remove('none');
      document.getElementById('url').classList.add('none');
    } else if (inputValue2 === 'URL') {
      document.getElementById('file-cont').classList.add('none');
      document.getElementById('url').classList.remove('none');
    }
  }, [inputValue2])

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          url: '',
          theme: '',
          type: '',
          geography: '',
          status: '',
          description: '',
          citation: '',
          attachment: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Required')
            .min(3, '3 or more characters')
            .test('is title a letter?', 'Title must consist of letters only', (val) => {
              return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
            }),
          description: Yup.string()
            .min(10, 'Must be 10 characters minimum'),
          citation: Yup.string()
            .min(10, 'Must be 10 characters minimum'),
          theme: Yup.string()
            .required('Required')
            .nullable(),
          type: Yup.string()
            .required('Required')
            .nullable(),
        })}
        onSubmit={(data, actions) => {
          document.querySelector('.m2').style.display = "none";
          handleSubmit(data);
          actions.resetForm();
          setKeywords([]);
          setCategory([]);
          setValue_chain([]);
          setLanguage([]);
          setStakeholder([]);
          setChipKey(!chipKey);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            <div className={styles.textInput}>
              <label htmlFor="title">Title <span>*</span></label>
              <Field name="title" id='title' className={styles.input} type="text" />
              <span className='form-error'><ErrorMessage name="title" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="theme">Theme <span>*</span></label>
              <Autocomplete
                key={chipKey}
                className={styles.select}
                onChange={(event, newValue) => {
                  setFieldValue('theme', newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id='theme'
                options={themeOptions}
                renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
              />
              <span className='form-error'><ErrorMessage name="theme" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="category">Sub Category</label>
              <CustomizedHook key={chipKey} content={advancedSearchText.categories} placeholder='--Select Sub Category--' setData={setCategory} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="stakeholder">Stakeholder</label>
              <CustomizedHook key={chipKey} content={advancedSearchText.stake_holder} placeholder='--Select Stakeholder--' setData={setStakeholder} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="value_chain">Value Chain</label>
              <CustomizedHook key={chipKey} content={advancedSearchText.valueChain} placeholder='--Select Value Chain--' setData={setValue_chain} />
            </div>

            <div className={styles.textInput}>
              <label>Geography</label>
              <div className={styles.checkboxes}>
                <div>
                  <label>
                    <Field type="radio" name="geography" value="national" />
                    National
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="geography" value="state" />
                    State
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="geography" value="not applicable" />
                    Not Applicable
                  </label>
                </div>
              </div>
            </div>

            {
              values.geography === 'state' &&
              <div id='state-extra' className={styles.textInput}>
                <div className={styles.textInput}>
                  <label>State</label>
                  <CustomizedHook key={chipKey} content={advancedSearchText.valueChain} placeholder='--Select State--' setData={setState} />
                </div>

                <div className={styles.textInput}>
                  <label htmlFor="city">City</label>
                  <Field id='city' value={city} className={styles.input} type="text" onChange={(e) => { setCity(e.target.value); }} />
                </div>
              </div>
            }

            <div className={styles.textInput}>
              <label>Urban / Rural</label>
              <div className={styles.checkboxes}>
                <div>
                  <label>
                    <Field type="radio" name="status" value="urban" />
                    Urban
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="status" value="rural" />
                    Rural
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="language">Language</label>
              <CustomizedHook key={chipKey} content={advancedSearchText.languages} placeholder='--Select Language--' setData={setLanguage} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="description">Description</label>
              <Field name="description" id='description' className={styles.textarea} cols="30" rows="3" as='textarea' />
              <span className='form-error'><ErrorMessage name="description" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="description">Keywords</label>
              <CustomizedHook key={chipKey} content={advancedSearchText.chips} placeholder='--Select Keywords--' setData={setKeywords} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="citation">Citation</label>
              <Field name="citation" id='citation' className={styles.textarea} cols="30" rows="3" as='textarea' />
              <span className='form-error'><ErrorMessage name="citation" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="type">Document Type <span>*</span></label>
              <Autocomplete
                key={chipKey}
                className={styles.select}
                onChange={(event, newValue) => {
                  setFieldValue('type', newValue);
                }}
                inputValue={inputValue2}
                onInputChange={(event, newInputValue) => {
                  setInputValue2(newInputValue);
                }}
                id='type'
                options={['file', 'URL']}
                renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
              />
              <span className='form-error'><ErrorMessage name="type" /></span>
            </div>

            <div id='url' className={`${styles.textInput} none`}>
              <label htmlFor="url">URL</label>
              <Field name="url" id='url' className={styles.input} type="text" />
            </div>

            <div id='file-cont' className={`${styles.textInput} none`}>
              <div className={styles.div}>Choose File ( Accepts Only gif, jpeg, png, pdf, doc, docx, xls, xlsx, mp4, mp3, avi, flv, mkv, mov, mpeg, mpg, webm, wmv)</div>
              <input
                type='file'
                accept='.xlsx, .xls, image/*, .doc, .docx, video/*, audio/*, .pdf'
                onChange={(e) => {
                  setFieldValue('attachment', e.currentTarget.files[0])
                }}
              />
            </div>

            <div className={styles.btn_cont}>
              <button type='submit' className={`${styles.btn} ${styles.submit}`}>Submit</button>
              <button
                type='reset'
                className={`${styles.btn} ${styles.cancel}`}
                onClick={() => {
                  document.querySelector('.m2').style.display = "none";
                }}>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default EditCategoryForm