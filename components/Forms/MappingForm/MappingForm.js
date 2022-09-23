import React, { useEffect, useState } from 'react';
import styles from './MappingForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CustomizedHook from './useHook';
import { advancedSearchText } from '../../TextArrays';
import { mapDocs } from '../../../services/documentMappingService';
import CircularProgress from '@mui/material/CircularProgress';

const MappingForm = ({ modal, docId }) => {
  const [keywords, setKeywords] = useState([]);
  const [language, setLanguage] = useState([]);
  const [value_chain, setValue_chain] = useState([]);
  const [stakeholder, setStakeholder] = useState([]);
  const [sub_cat, setSub_cat] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [themeOptions, setThemeOptions] = useState([]);
  const [chipKey, setChipKey] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
    //setError(err.response.statusText);
  }

  const handleSubmit = (values) => {
    setLoading(true);
    let data;
    if (values.geography === 'state') {
      data = {
        ...values,
        keywords, stakeholder, value_chain, language, sub_cat, state, city
      }
    } else {
      data = {
        ...values,
        keywords, stakeholder, value_chain, language, sub_cat
      }
    }
    console.log(docId, data);
    mapDocs(docId, data, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        console.log({ r: res })
      }
    })
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
          document.querySelector(`.${modal}`).style.display = "none";
          handleSubmit(data);
          actions.resetForm();
          setKeywords([]);
          setSub_cat([]);
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
              <CustomizedHook key={chipKey} content={advancedSearchText.categories} placeholder='--Select Sub Category--' setData={setSub_cat} />
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
                    <Field type="radio" name="geography" value="National" />
                    <p>National</p>
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="geography" value="State" />
                    <p>State</p>
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="geography" value="Not applicable" />
                    <p>Not Applicable</p>
                  </label>
                </div>
              </div>
            </div>

            {
              values.geography === 'State' &&
              <div id='state-extra' className={styles.textInput}>
                <div className={styles.textInput}>
                  <label>State</label>
                  <CustomizedHook key={chipKey} content={advancedSearchText.states} placeholder='--Select State--' setData={setState} />
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
                    <Field type="radio" name="status" value="Urban" />
                    <p>Urban</p>
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="status" value="Rural" />
                    <p>Rural</p>
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
              <button
                type='submit'
                className={`${styles.btn} ${styles.submit}`}>Submit</button>
              <button
                type='reset'
                className={`${styles.btn} ${styles.cancel}`}
                onClick={() => {
                  document.querySelector(`.${modal}`).style.display = "none";
                }}>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default MappingForm