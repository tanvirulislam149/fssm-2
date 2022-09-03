import React from 'react';
import styles from './GetInvolvedForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../../Buttons/Submit/SubmitButton';

const GetInvolvedForm = () => {
  // const handleSubmit=(data)=>{

  // }

  return (
    <>
      <div className={styles.container}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            join: false,
            know_more: false,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required('Required')
              .email('Invalid email address')
              .test('is email valid?', 'Invalid email address', (val) => {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
              }),
            name: Yup.string()
              .required('Required')
              .min(3, '3 or more characters')
              .test('is name a letter?', 'Name must consist of letters only', (val) => {
                return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
              }),
            note: Yup.string()
              .required('Required')
              .min(10, 'Must be 10 characters minimum'),
          })}
          onSubmit={(data, actions) => {
            let categories = [];
            // data.join ? categories.push({ userCat: 1 }) : null;
            // data.know_more ? categories.push({ userCat: 2 }) : null;

            if (categories.length) {
              document.getElementById('user-cat').style.display = 'none';
            } else {
              document.getElementById('user-cat').style.display = 'block';
              return;
            }

            document.querySelector('.modal2').style.display = "none";
            //handleSubmit({ name: data.name, email: data.email, categories });
            actions.resetForm();
          }}
        >
          <Form>
            <div className={styles.textInput}>
              <label htmlFor="name">Name</label>
              <Field name="name" id='name' className={styles.input} placeholder='Name' type="text" />
              <span className='form-error'><ErrorMessage name="name" /></span>
            </div>

            <div className={styles.textInput}>
              <label htmlFor="email">Email</label>
              <Field name="email" id='email' className={styles.input} placeholder='Email' type="email" />
              <span className='form-error'><ErrorMessage name="email" /></span>
            </div>

            <p className={styles.instruction}>Tell us more about yourself</p>

            <div>
              <div className={styles.row}>
                <div>
                  <Field name='join' id='join' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="join">Join the NFSSM Alliance</label>
                </div>
                <div>
                  <Field name='know_more' id='know_more' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="know_more">Know more about FSM</label>
                </div>
              </div>

              <div className={styles.text_cont}>
                <Field name="note" id='note' className={styles.textarea} cols="30" rows="7" placeholder='Short note on how you wish to get involved (Less than 150 words)' as='textarea' />
                <span className='form-error'><ErrorMessage name="note" /></span>
              </div>
            </div>
            <span id='user-cat' className="form-error none">You must select at least 1 category</span>

            <div className={styles.btn_cont}>
              <SubmitButton type='submit' style={styles.btn} title='Submit' />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default GetInvolvedForm