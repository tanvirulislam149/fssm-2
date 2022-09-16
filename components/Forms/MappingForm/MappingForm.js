import React, { useEffect, useState } from 'react';
import styles from './MappingForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CustomizedHook from './useHook';
import { advancedSearchText } from '../../TextArrays';

const MappingForm = () => {
  const [keywords, setKeywords] = useState([]);
  const [language, setLanguage] = useState([]);
  const [value_chain, setValue_chain] = useState([]);
  const [stakeholder, setStakeholder] = useState([]);
  const [category, setCategory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [themeOptions, setThemeOptions] = useState([]);
  const [chipKey, setChipKey] = useState(false);

  const handleSubmit = (values) => {
    const data = {
      ...values,
      keywords, stakeholder, value_chain, language, category
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

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          theme: '',
          geography: '',
          status: '',
          description: '',
          citation: '',
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
        })}
        onSubmit={(data, actions) => {
          document.querySelector('.modal2').style.display = "none";
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
        {({ setFieldValue }) => (
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

            <div className={styles.btn_cont}>
              <button type='submit' className={`${styles.btn} ${styles.submit}`}>Submit</button>
              <button
                type='reset'
                className={`${styles.btn} ${styles.cancel}`}
                onClick={() => {
                  document.querySelector('.modal2').style.display = "none";
                }}>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default MappingForm