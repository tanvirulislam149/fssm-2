import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import SubmitButton from '../../Buttons/Submit/SubmitButton';
import { loginFormText } from '../../TextArrays';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { verifyEmail } from '../../../services/authService';

const ForgotPasswordForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  const handleSubmit = (data) => {
    console.log(data)
    verifyEmail(data, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ r: res.data.msg });
        setError(res.data.msg);
      }
    });
  }

  const goHome = () => {
    navigate.push('/');
  }


  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.header}
          onClick={() => { goHome(); }}
        >
          <h1 className={styles.header_green}> {loginFormText.header_text_1} <span className={styles.header_blue}> {loginFormText.header_text_2} </span></h1>
        </div>

        <h2 className={styles.head}>Forgot Password</h2>
        <p>Enter your email address</p>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required('Required')
              .email('Invalid email address')
              .test('is email valid?', 'Invalid email address', (val) => {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
              }),
          })}
          onSubmit={email => {
            setError(null);
            setLoading(true);
            handleSubmit(email);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <TextField
                sx={{ width: '100%' }}
                id="text1"
                placeholder='Enter Email Address'
                className={styles.field}
                defaultValue={''}
                type="email"
                name='email'
                onChange={(e) => {
                  setFieldValue('email', e.target.value)
                }} />
              <span className='form-error'><ErrorMessage name="email" /></span>

              {/* <div className={styles.div}></div> */}

              <div className={`${styles.tc} form-error`}>{error}</div>
              {loading ? <div className={styles.justify_center}><CircularProgress /></div> : <SubmitButton type='submit' style={styles.btn} title='Continue' />}
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default ForgotPasswordForm