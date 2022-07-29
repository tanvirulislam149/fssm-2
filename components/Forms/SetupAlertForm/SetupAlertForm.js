import React, { useState } from 'react';
import styles from './SetupAlertForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../../Buttons/Submit/SubmitButton';
import { setAlert } from '../../../services/authService';

const SetupAlertForm = () => {
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.log(err); // testing
    setError(err.response.statusText);
  }

  const handleSubmit = (data) => {
    setAlert(data, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log(res); // testing
      }
    });
  }

  return (
    <>
      <div className={styles.container}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            all: false,
            technicalConsultants: false,
            ngoPartners: false,
            generalCitizen: false,
            govtNational: false,
            privateSector: false,
            academiaTraining: false,
            donorPhilanthropist: false
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            name: Yup.string()
              .min(3, '3 or more characters')
              .required('Required'),
          })}
          onSubmit={(data, actions) => {
            handleSubmit(data);
            actions.resetForm();
            document.querySelector('.modal').style.display = "none";
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

            <p className={styles.instruction}>Please Select the user profile to get the notification</p>

            <div>
              <div className={styles.row}>
                <div>
                  <Field name='all' id='all' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="all">All</label>
                </div>
                <div>
                  <Field name='govtNational' id='govtNational' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="govtNational">Govt-National/State</label>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <Field name='technicalConsultants' id='technicalConsultants' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="technicalConsultants">Technical consultants/Agencies</label>
                </div>
                <div>
                  <Field name='privateSector' id='privateSector' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="privateSector">Private Sector</label>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <Field name='ngoPartners' id='ngoPartners' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="ngoPartners">NGO’s/Development Partners</label>
                </div>
                <div>
                  <Field name='academiaTraining' id='academiaTraining' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="academiaTraining">Academia/Training</label>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <Field name='generalCitizen' id='generalCitizen' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="generalCitizen">General citizen/ CBO</label>
                </div>
                <div>
                  <Field name='donorPhilanthropist' id='donorPhilanthropist' type='checkbox' className={styles.checkbox} />
                  <label htmlFor="donorPhilanthropist">Donor/Philanthropist/CSR</label>
                </div>
              </div>
            </div>

            <div className={styles.btn_cont}>
              <SubmitButton type='submit' style={styles.btn} title='Submit' />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default SetupAlertForm