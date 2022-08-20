import React, { useEffect, useState } from 'react';
import styles from './QuestionForm.module.css';
import Input from '../../Inputs/Input';
import Button from '../../Buttons/Submit/SubmitButton';
import { submitQuestion } from '../../../services/helpDeskService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const QuestionForm = () => {
  useEffect(() => {
    document.getElementById("uploadFile").value = 'No files selected'
  }, [])

  useEffect(() => {
    document.getElementById("attachment").onchange = function () {
      document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
    };
  }, [])

  const handleError = (err) => {
    //console.log(err);
  }

  const handleSubmit = (values) => {
    submitQuestion(values, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log(res);
        alert('Question received! We will get back to you soon!');
      }
    });
  }

  return (
    <>
      <Formik
        initialValues={{
          theme: '',
          userprofile: '',
          attachment: null,
          name: '',
          question: '',
          email: '',
          mobile: '',
          organization: '',
          high_priority: false
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required')
            .max(20, 'Must be 3-20 characters')
            .min(3, 'Must be 3-20 characters')
            .test('is name a letter?', 'Name must consist of letters only', (val) => {
              return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
            }),
          organization: Yup.string()
            .required('Required')
            .max(20, 'Must be 3-20 characters')
            .min(3, 'Must be 3-20 characters'),
          email: Yup.string()
            .required('Required')
            .email('Invalid email address')
            .test('is email valid?', 'Invalid email address', (val) => {
              return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
            }),
          question: Yup.string()
            .required('Required')
            .min(10, 'Must be 10 characters minimum'),
          theme: Yup.string()
            .required('Required'),
          userprofile: Yup.string()
            .required('Required'),
          mobile: Yup.string()
            .required('Required')
            .max(14, 'Enter valid phone number')
            .min(10, 'Enter valid phone number'),
        })}
        onSubmit={(values, actions) => {
          const file = document.getElementById('file');
          if (values.attachment !== null) {
            const type = values.attachment.type;
            if (type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png') {
              file.style.display = 'none';
            } else {
              file.style.display = 'block';
              return;
            }
          }

          handleSubmit(values);
          //actions.resetForm();
          //document.getElementById("uploadFile").value = 'No files selected';
        }}
      >
        {({ setFieldValue }) => (
          <Form
            className={styles.container}
          >
            <div className={styles.row}>
              <div className={styles.select_cont}>
                <label className={styles.label} htmlFor="theme">Theme <span>*</span></label>
                <Field name='theme' as='select' id='theme' className={`${styles.select} form-select`}>
                  <option hidden value=''>Select Theme</option>
                  <option value={1}>CAPACITY BUILDING</option>
                  <option value={2}>COMMUNICATIONS</option>
                </Field>
                <span className='form-error'><ErrorMessage name="theme" /></span>
              </div>

              <div className={styles.select_cont}>
                <label className={styles.label} htmlFor="userprofile">User Profile <span>*</span></label>
                <Field name='userprofile' as='select' id='userprofile' className={`${styles.select} form-select`}>
                  <option hidden value=''>Select User Profile</option>
                  <option value={1}>Academia/Training</option>
                  <option value={2}>Donor/Philanthropist/CSR</option>
                </Field>
                <span className='form-error'><ErrorMessage name="userprofile" /></span>
              </div>

              <div className={styles.select_cont}>
                <label className={styles.label}>Attachment</label>
                <div className={styles.file_cont}>
                  <Input id="uploadFile" style={styles.f_input} />
                  <span id='file' className='form-error'>Accepts jpg,jpeg,png</span>
                  <div className={`${styles.btn_browse} ${styles.fileUpload}`}>
                    <span>Choose File</span>
                    <Input
                      id="attachment"
                      type='file'
                      name='attachment'
                      style={styles.upload}
                      onChange={(e) => {
                        setFieldValue('attachment', e.currentTarget.files[0])
                      }} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.text_cont}>
              <label htmlFor="question" className={styles.label}>Question <span>*</span></label>
              <Field name="question" id='question' className={styles.textarea} cols="30" rows="10" placeholder='Your question here....' as='textarea' />
              <span className='form-error'><ErrorMessage name="question" /></span>
            </div>

            <label className={styles.radio} htmlFor="radio">
              <Field name='high_priority' id='high_priority' type='checkbox' className={styles.radio} />
              <span>High Priority</span>
            </label>

            <div className={`${styles.row} ${styles.mt5}`}>
              <div className={styles.input_cont}>
                <label className={styles.label} htmlFor="name">Name <span>*</span></label>
                <Field name="name" id='name' className={styles.input} placeholder='Name' type="text" />
                <span className='form-error'><ErrorMessage name="name" /></span>
              </div>

              <div className={styles.input_cont}>
                <label className={styles.label} htmlFor="email">Email <span>*</span></label>
                <Field name="email" id='email' className={styles.input} placeholder='Email' type="email" />
                <span className='form-error'><ErrorMessage name="email" /></span>
              </div>
            </div>

            <div className={`${styles.row} ${styles.mt5}`}>
              <div className={styles.input_cont}>
                <label className={styles.label} htmlFor="mobile">Mobile <span>*</span></label>
                <Field name="mobile" id='mobile' className={styles.input} placeholder='Mobile' type="number" />
                <span className='form-error'><ErrorMessage name="mobile" /></span>
              </div>

              <div className={styles.input_cont}>
                <label className={styles.label} htmlFor="organization">Organization <span>*</span></label>
                <Field name="organization" id='organization' className={styles.input} placeholder='Organization' type="text" />
                <span className='form-error'><ErrorMessage name="organization" /></span>
              </div>
            </div>

            <div className={styles.btn_cont}>
              <Button type='submit' title='Submit' onClick={() => {
                handleSubmit()
              }} style={styles.submit_btn} />
              <button disabled className={styles.cancel_btn}>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default QuestionForm