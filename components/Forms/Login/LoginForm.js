import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import SubmitButton from '../../Buttons/Submit/SubmitButton';
import Image from 'next/image';
import eye from '../../../assets/eye.png';
import { loginFormText } from '../../TextArrays';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../../services/authService';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [error, setError] = useState(null);

  const navigate = useRouter();

  const handleError = (err) => {
    setError('Email or Password Incorrect');
  }

  const handleSubmit = async (loginData) => {
    loginUser(loginData, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setError(null);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.access_token}`;
        sessionStorage.setItem('refresh', res.data.refresh_token);
        navigate.push('/');
      }
    })
  }

  const togglePassword = () => {
    const password = document.getElementById('password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.header_green}> {loginFormText.header_text_1} <span className={styles.header_blue}> {loginFormText.header_text_2} </span></h1>
        </div>

        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={Yup.object({
            password: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .min(4, 'Must be 4-20 characters')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          })}
          onSubmit={loginData => {
            handleSubmit(loginData);
          }}
        >
          <Form>
            <Field name="email" id='email' className={styles.input} placeholder='Email' type="email" />
            <span className='form-error'><ErrorMessage name="email" /></span>

            <Field name="password" id='password' className={`${styles.input} ${styles.passwordInput}`} placeholder='Password' type="password" />

            <span className={styles.passwordInput}></span>
            <Image
              className={styles.img}
              alt='reveal/hide' src={eye}
              height={16} width={22}
              onClick={togglePassword}
            />

            <span className='form-error'><ErrorMessage name="password" /></span>

            <div className={styles.checkbox_forgot_password}>
              <div className={styles.checkbox_cont}>
                <Field name='rememberMe' type='checkbox' className={styles.checkbox} />

                <p className={styles.text}> {loginFormText.remember_me} </p>
              </div>

              <p className={styles.forgot_password}>{loginFormText.forgot_passwword}</p>
            </div>

            <div className={`${styles.tc} form-error`}>{error}</div>
            <SubmitButton type='submit' style={styles.btn} title='Login' />
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default LoginForm