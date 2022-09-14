import React from 'react';
import styles from './MappingForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
  { label: '12 Angry Men' },
]

const MappingForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          shortNote: '',
          join_NFSSM: false,
          know_more: false,
        }}
        validationSchema={Yup.object({
          // title: Yup.string()
          //   .required('Required')
          //   .min(3, '3 or more characters')
          //   .test('is name a letter?', 'Name must consist of letters only', (val) => {
          //     return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
          //   }),
          shortNote: Yup.string()
            .required('Required')
            .min(10, 'Must be 10 characters minimum'),
        })}
        onSubmit={(data, actions) => {
          let categories = [];
          data.join_NFSSM ? categories.push({ userCat: 1 }) : null;
          data.know_more ? categories.push({ userCat: 2 }) : null;

          if (categories.length) {
            document.getElementById('user-cat').style.display = 'none';
          } else {
            document.getElementById('user-cat').style.display = 'block';
            return;
          }

          document.querySelector('.modal2').style.display = "none";
          handleSubmit(data);
          actions.resetForm();
        }}
      >
        <Form className={styles.form}>
          <div className={styles.textInput}>
            <label htmlFor="title">Title <span>*</span></label>
            <Field name="title" id='title' className={styles.input} type="text" />
            <span className='form-error'><ErrorMessage name="title" /></span>
          </div>

          <div className={styles.textInput}>
            <label htmlFor="theme">Theme <span>*</span></label>
            <Autocomplete
              disablePortal
              name="theme"
              id="theme"
              options={top100Films}
              className={styles.input}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="--Select--" />}
            />
            {/* <span className='form-error'><ErrorMessage name="theme" /></span> */}
          </div>

          {/* <p className={styles.instruction}>How do you wish to get involved?</p>

          <div>
            <div className={styles.row}>
              <div>
                <Field name='join_NFSSM' id='join_NFSSM' type='checkbox' className={styles.checkbox} />
                <label htmlFor="join_NFSSM">Join the NFSSM Alliance</label>
              </div>
              <div>
                <Field name='know_more' id='know_more' type='checkbox' className={styles.checkbox} />
                <label htmlFor="know_more">Know more about FSM</label>
              </div>
            </div>

            <div className={styles.text_cont}>
              <Field name="shortNote" id='shortNote' className={styles.textarea} cols="30" rows="7" placeholder='Short note on how you wish to get involved (Less than 150 words)' as='textarea' />
              <span className='form-error'><ErrorMessage name="shortNote" /></span>
            </div>
          </div>
          <span id='user-cat' className="form-error none">You must select at least 1 category</span>

          <div className={styles.btn_cont}>
            <button>Submit</button>
          </div> */}
        </Form>
      </Formik>
    </>
  )
}

export default MappingForm