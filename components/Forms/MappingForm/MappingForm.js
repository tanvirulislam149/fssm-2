import React, { useState } from 'react';
import styles from './MappingForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CustomizedHook from './useHook';

const MappingForm = () => {
  const [options, setOptions] = useState(['Capacity Building', 'Learning']);
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [chipKey, setChipKey] = useState(false);

  const handleSubmit = (values) => {
    const data = {
      ...values,
      keywords
    }
    console.log(data)
  }

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          theme: '',
          value_chain: '',
          stakeholder: '',
          category: '',
          geography: '',
          status: '',
          language: '',
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
            .required('Required'),
        })}
        onSubmit={(data, actions) => {
          document.querySelector('.modal2').style.display = "none";
          handleSubmit(data);
          actions.resetForm();
          setKeywords([]);
          setChipKey(!chipKey);
        }}
      >
        {({ setFieldValue, resetForm }) => (
          <Form className={styles.form}>
            <div className={styles.textInput}>
              <label htmlFor="title">Title <span>*</span></label>
              <Field name="title" id='title' className={styles.input} type="text" />
              <span className='form-error'><ErrorMessage name="title" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="theme">Theme <span>*</span></label>
              <Autocomplete
                className={styles.select}
                onChange={(event, newValue) => {
                  setFieldValue('theme', newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id='theme'
                options={options}
                renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
              />
              <span className='form-error'><ErrorMessage name="theme" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="category">Sub Category</label>
              <Autocomplete
                className={styles.select}
                onChange={(event, newValue) => {
                  setFieldValue('category', newValue);
                }}
                inputValue={inputValue2}
                onInputChange={(event, newInputValue) => {
                  setInputValue2(newInputValue);
                }}
                id='category'
                options={options}
                renderInput={(params) => <TextField {...params} placeholder="--Select Sub Category --" />}
              />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="stakeholder">Stakeholder</label>
              <Autocomplete
                className={styles.select}
                onChange={(event, newValue) => {
                  setFieldValue('stakeholder', newValue);
                }}
                inputValue={inputValue3}
                onInputChange={(event, newInputValue) => {
                  setInputValue3(newInputValue);
                }}
                id='stakeholder'
                options={options}
                renderInput={(params) => <TextField {...params} placeholder="--Select Stakeholder --" />}
              />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="value_chain">Value Chain</label>
              <Autocomplete
                className={styles.select}
                onChange={(event, newValue) => {
                  setFieldValue('value_chain', newValue);
                }}
                inputValue={inputValue4}
                onInputChange={(event, newInputValue) => {
                  setInputValue4(newInputValue);
                }}
                id='value_chain'
                options={options}
                renderInput={(params) => <TextField {...params} placeholder="--Select Value Chain--" />}
              />
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
              <Autocomplete
                className={styles.select}
                onChange={(event, newValue) => {
                  setFieldValue('language', newValue);
                }}
                inputValue={inputValue5}
                onInputChange={(event, newInputValue) => {
                  setInputValue5(newInputValue);
                }}
                id='language'
                options={options}
                renderInput={(params) => <TextField {...params} placeholder="--Select Language --" />}
              />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="description">Description</label>
              <Field name="description" id='description' className={styles.textarea} cols="30" rows="3" as='textarea' />
              <span className='form-error'><ErrorMessage name="description" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="description">Keywords</label>
              <CustomizedHook key={chipKey} keywords={keywords} setKeywords={setKeywords} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="citation">Citation</label>
              <Field name="citation" id='citation' className={styles.textarea} cols="30" rows="3" as='textarea' />
              <span className='form-error'><ErrorMessage name="citation" /></span>
            </div>

            <div className={styles.btn_cont}>
              <button type='submit' onClick={() => { null }} className={`${styles.btn} ${styles.submit}`}>Submit</button>
              <button
                type='reset'
                className={`${styles.btn} ${styles.cancel}`}
                onClick={() => {
                  document.querySelector('.modal2').style.display = "none";
                  //document.getElementById('user-cat').style.display = 'none';
                }}>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default MappingForm