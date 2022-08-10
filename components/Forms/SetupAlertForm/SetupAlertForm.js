import React from 'react';
import styles from './SetupAlertForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../../Buttons/Submit/SubmitButton';
import { setAlert } from '../../../services/knowledgeRepoService';

const SetupAlertForm = () => {

  const handleError = () => {
    alert('An Error Occured, Try Again');
  }

  const handleSubmit = (data) => {
    setAlert(data, (err, res) => {
      if (err) return handleError();
      if (res !== null) {
        alert(res.data.Output);
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
            govtNational: false,
            technicalConsultants: false,
            ngoPartners: false,
            generalCitizen: false,
            privateSector: false,
            academiaTraining: false,
            donorPhilanthropist: false
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .test('is email valid?', 'Invalid email address', (val) => {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
              })
              .required('Required'),
            name: Yup.string()
              .min(3, '3 or more characters')
              .test('is name a letter?', 'Name must consist of letters only', (val) => {
                return /^[a-zA-Z]+$/.test(val);
              })
              .required('Required'),
          })}
          onSubmit={(data, actions) => {
            let categories = [];
            data.all ? categories.push({ userCat: 1 }) : null;
            data.govtNational ? categories.push({ userCat: 2 }) : null;
            data.ngoPartners ? categories.push({ userCat: 3 }) : null;
            data.generalCitizen ? categories.push({ userCat: 4 }) : null;
            data.technicalConsultants ? categories.push({ userCat: 5 }) : null;
            data.privateSector ? categories.push({ userCat: 6 }) : null;
            data.academiaTraining ? categories.push({ userCat: 7 }) : null;
            data.donorPhilanthropist ? categories.push({ userCat: 8 }) : null;

            if (categories.length) {
              document.getElementById('user-cat').style.display = 'none';
            } else {
              document.getElementById('user-cat').style.display = 'block';
              return;
            }

            document.querySelector('.modal').style.display = "none";
            handleSubmit({ name: data.name, email: data.email, categories });
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

export default SetupAlertForm