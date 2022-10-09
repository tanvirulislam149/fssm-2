import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CustomizedHook from './useHook';
import CustomizedHook2 from './useHook2';
import CustomizedHook3 from './useHook3';
import CustomizedHook4 from './useHook4';
import CustomizedHook5 from './useHook5';
import CustomizedHook6 from './useHook6';
import styles from '../MappingForm/MappingForm.module.css';
import useOptions from '../../useOptions';
import { editMyDocs } from '../../../services/mydocumentServices';
import { editAllDocs } from '../../../services/allDocumentServices';
import { useRouter } from 'next/router';

const EditCategoryForm = ({ update, setUpdate, docDetails, chipKey, setChipKey }) => {
  const [keywords, setKeywords] = useState([]);
  const [language, setLanguage] = useState([]);
  const [value_chain, setValue_chain] = useState([]);
  const [stakeholder, setStakeholder] = useState([]);
  const [sub_cat, setSub_cat] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [themeOptions, setThemeOptions] = useState([]);
  const [text, setText] = useState('');

  const { advancedSearchText } = useOptions();
  const router = useRouter();

  const handleError = (err) => {
    console.log({ e: err })
    //setError(err.response.statusText);
  }

  const handleSubmit = (values, confirmation) => {
    let data;
    data = {
      ...values,
      keywords, stakeholder, value_chain, language, sub_cat, state, city
    }

    if (router.pathname === '/mydocuments') {
      editMyDocs(docDetails.id, data, (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          console.log({ r: res.data })
          if (res.data.message === 'Document Edited Sucessfully') {
            confirmation.style.display = 'flex';
          }
        }
      })
    } else if (router.pathname === '/documents') {
      editAllDocs(docDetails.id, data, (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          console.log({ r: res.data })
          if (res.data.message === 'Document Edited Sucessfully') {
            confirmation.style.display = 'flex';
          }
        }
      })
    }
  }

  useEffect(() => {
    setInputValue(docDetails.theme);
    docDetails.doc_type && setInputValue2(docDetails.doc_type);
    docDetails.city && setCity(docDetails.city);
    document.getElementById('span-click').click();
    docDetails.geography?.length ? document.getElementById(`${docDetails.geography?.replace(' ', '').toLowerCase()}`).checked = true : null;
    docDetails.status?.length ? document.getElementById(`${docDetails.status.toLowerCase()}`).checked = true : null;
  }, [docDetails])

  useEffect(() => {
    const options = [];
    advancedSearchText.themes.forEach(({ title }) => {
      options.push(title);
    })
    setThemeOptions(options);
  }, [advancedSearchText])

  useEffect(() => {
    if (inputValue2 === 'file') {
      document.getElementById('file-cont').classList.remove('none');
      document.getElementById('url').classList.add('none');
    } else if (inputValue2 === 'URL') {
      document.getElementById('file-cont').classList.add('none');
      document.getElementById('url').classList.remove('none');
    }
  }, [inputValue2])

  const handleValues = (setFieldValue) => {
    setFieldValue('theme', docDetails.theme);
    setFieldValue('doc_type', docDetails.doc_type);
    setFieldValue('title', docDetails.title);
    docDetails.title && setFieldValue('citation', docDetails.citation);
    docDetails.title && setFieldValue('description', docDetails.description);
    setFieldValue('geography', docDetails.geography);
    setFieldValue('status', docDetails.status);
    docDetails.title && setText(docDetails.title);
  }

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          url: '',
          theme: '',
          doc_type: '',
          geography: '',
          status: '',
          description: '',
          citation: '',
          document: null,
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Required')
            .min(3, '3 or more characters'),
          description: Yup.string()
            .min(4, 'Must be 4 characters minimum'),
          citation: Yup.string()
            .min(4, 'Must be 4 characters minimum'),
          theme: Yup.string()
            .required('Required')
            .nullable(),
          doc_type: Yup.string()
            .required('Required')
            .nullable(),
        })}
        onSubmit={(data, actions) => {
          document.querySelector('.m2').style.display = "none";
          handleSubmit(data, document.querySelector('.m15'));
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
              <input value={text} name="title" id='title' onChange={(e) => { setText(e.target.value); }} className={styles.input} type="text" />
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
                  event && setInputValue(event.target.innerHTML);;
                }}
                id='theme'
                options={themeOptions}
                renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
              />
              <span className='form-error'><ErrorMessage name="theme" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="sub_cat">Sub Category</label>
              <CustomizedHook3
                update={update}
                setUpdate={setUpdate}
                key={chipKey}
                currentData={docDetails.categories}
                content={advancedSearchText.categories}
                placeholder='--Select Sub Category--'
                setData={setSub_cat} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="stakeholder">Stakeholder</label>
              <CustomizedHook
                update={update}
                setUpdate={setUpdate}
                key={chipKey}
                currentData={docDetails.stake_holder}
                content={advancedSearchText.stake_holder}
                placeholder='--Select Stakeholder--'
                setData={setStakeholder} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="value_chain">Value Chain</label>
              <CustomizedHook2
                update={update}
                setUpdate={setUpdate}
                key={chipKey}
                currentData={docDetails.valueChain}
                content={advancedSearchText.valueChain}
                placeholder='--Select Value Chain--'
                setData={setValue_chain} />
            </div>

            <div className={styles.textInput}>
              <label>Geography</label>
              <div className={styles.checkboxes}>
                <div>
                  <label>
                    <input
                      onChange={(e) => {
                        setFieldValue('geography', e.target.value);
                        setState([]);
                        setCity('');
                      }}
                      id='national'
                      type="radio"
                      name="geography"
                      value="National" />
                    National
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      onChange={(e) => {
                        setFieldValue('geography', e.target.value);
                      }}
                      id='state'
                      type="radio"
                      name="geography"
                      value="State" />
                    State
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      onChange={(e) => {
                        setFieldValue('geography', e.target.value);
                        setState([]);
                        setCity('');
                      }}
                      id='notapplicable'
                      type="radio"
                      name="geography"
                      value="Not applicable" />
                    Not Applicable
                  </label>
                </div>
              </div>
            </div>

            {
              values.geography === 'State' &&
              <div id='state-extra' className={styles.textInput}>
                <div className={styles.textInput}>
                  <label>State</label>
                  <CustomizedHook4
                    update={update}
                    setUpdate={setUpdate}
                    key={chipKey}
                    currentData={docDetails.states}
                    content={advancedSearchText.states}
                    placeholder='--Select State--'
                    setData={setState} />
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
                    <input onChange={(e) => { setFieldValue('status', e.target.value); }} id='urban' type="radio" name="status" value="urban" />
                    Urban
                  </label>
                </div>
                <div>
                  <label>
                    <input onChange={(e) => { setFieldValue('status', e.target.value); }} id='rural' type="radio" name="status" value="rural" />
                    Rural
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="language">Language</label>
              <CustomizedHook5
                update={update}
                setUpdate={setUpdate} key={chipKey}
                currentData={docDetails.languages}
                content={advancedSearchText.languages}
                placeholder='--Select Language--'
                setData={setLanguage} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="description">Description</label>
              <Field name="description" id='description' className={styles.textarea} cols="30" rows="3" as='textarea' />
              <span className='form-error'><ErrorMessage name="description" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="description">Keywords</label>
              <CustomizedHook6
                update={update}
                setUpdate={setUpdate}
                key={chipKey}
                currentData={docDetails.chips}
                content={advancedSearchText.chips}
                placeholder='--Select Keywords--'
                setData={setKeywords} />
            </div>

            <div className={styles.textInput}>
              <label htmlFor="citation">Citation</label>
              <Field name="citation" id='citation' className={styles.textarea} cols="30" rows="3" as='textarea' />
              <span className='form-error'><ErrorMessage name="citation" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="doc_type">Document Type <span>*</span></label>
              <Autocomplete
                key={chipKey}
                className={styles.select}
                onChange={(event, newValue) => {
                  setFieldValue('doc_type', newValue);
                }}
                inputValue={inputValue2}
                onInputChange={(event, newInputValue) => {
                  event && setInputValue2(event.target.innerHTML);
                }}
                id='doc_type'
                options={['file', 'URL']}
                renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
              />
              <span className='form-error'><ErrorMessage name="doc_type" /></span>
            </div>

            <div id='url' className={`${styles.textInput} none`}>
              <label htmlFor="url">URL</label>
              <Field
                name="url"
                id='url'
                className={styles.input}
                type="text"
                title="Please enter Valid URL starting with http://"
                pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" />
            </div>

            <div id='file-cont' className={`${styles.textInput} none`}>
              <div className={styles.div}>Choose File ( Accepts Only gif, jpeg, png, pdf, doc, docx, xls, xlsx, mp4, mp3, avi, flv, mkv, mov, mpeg, mpg, webm, wmv)</div>
              <input
                type='file'
                accept='.xlsx, .xls, .mkv, image/*, .doc, .docx, video/*, audio/*, .pdf'
                onChange={(e) => {
                  setFieldValue('document', e.currentTarget.files[0])
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
            <span id='span-click' onClick={() => { handleValues(setFieldValue) }}></span>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default EditCategoryForm