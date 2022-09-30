import React, { useEffect, useState } from 'react';
import styles from './LoginForm.module.css';
import SubmitButton from '../../Buttons/Submit/SubmitButton';
import { loginFormText } from '../../TextArrays';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser, axiosInstance } from '../../../services/authService';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Cookies from 'js-cookie';
import eye from '../../../assets/eye.png';
import Image from 'next/image';
import Link from 'next/link';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useRouter();

  const handleError = (err) => {
    console.log({ e: err })
    setLoading(false);
    if (err === 'Email or Password Incorrect') {
      setError('Email or Password Incorrect');
    } else if (err === 'Refresh token expired') {
      Cookies.remove('access');
      Cookies.remove('refresh');
      Cookies.remove('isAdmin');
      router.push('/signin');
    } else setError('An Error Occured, Please Try Again');
  }

  const handleSubmit = async (loginData) => {
    console.log(loginData)
    loginUser(loginData, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        if (loginData.check === true) {
          Cookies.set('check', true, { expires: 14 });
          Cookies.set('email', loginData.email, { expires: 14 });
        } else {
          if (Cookies.get('check')) {
            Cookies.remove('check');
            Cookies.remove('email');
          }
        }
        console.log({ r: res })
        setError(null);
        Cookies.set('access', res.data.access_token, { expires: 14 })
        Cookies.set('refresh', res.data.refresh_token, { expires: 14 })
        Cookies.set('isAdmin', res.data.isAdmin, { expires: 14 })
        axiosInstance.defaults.headers.common["Authorization"] = 'Bearer ' + Cookies.get('access');
        navigate.push('/');
        setLoading(false);
      }
    })
  }

  // useEffect(() => {
  //   if (!Cookies.get('swass-fssm')) {
  //     Cookies.set("swass-fssm", "true", { expires: 0.00005787 });
  //     window.location.reload();
  //   }
  // }, [])

  const goHome = () => {
    navigate.push('/');
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.header}
          onClick={() => { goHome(); }}
        >
          <h1 className={styles.header_green}> {loginFormText.header_text_1} <span className={styles.header_blue}> {loginFormText.header_text_2} </span></h1>
        </div>

        <Formik
          initialValues={{ email: Cookies.get('email') ? Cookies.get('email') : '', password: '', check: Cookies.get('check') ? true : false }}
          validationSchema={Yup.object({
            password: Yup.string()
              .required('Required')
              .max(20, 'Must be 20 characters or less')
              .min(4, 'Must be 4-20 characters'),
            email: Yup.string()
              .required('Required')
              .email('Invalid email address')
              .test('is email valid?', 'Invalid email address', (val) => {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
              }),
          })}
          onSubmit={loginData => {
            setLoading(true);
            handleSubmit(loginData);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <TextField
                sx={{ width: '100%' }}
                id="text1"
                placeholder='Email'
                className={styles.field}
                defaultValue={Cookies.get('email') ? Cookies.get('email') : ''}
                type="email"
                name='email'
                onChange={(e) => {
                  setFieldValue('email', e.target.value)
                }} />
              <span className='form-error'><ErrorMessage name="email" /></span>

              <div className={styles.div}></div>
              <div className={styles.div}></div>

              <FormControl className={`${styles.form_control} ${styles.field}`} variant="outlined">
                <OutlinedInput
                  id="text2"
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  onChange={(e) => {
                    setFieldValue('password', e.target.value)
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <Image src={eye} alt='eye' height={16} width={22} />
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder='Password'
                />
              </FormControl>
              <span className='form-error'><ErrorMessage name="password" /></span>

              <div className={styles.checkbox_forgot_password}>
                <div className={styles.checkbox_cont}>
                  <Field name='check' type='checkbox' className={styles.checkbox} />

                  <p className={styles.text}> {loginFormText.remember_me} </p>
                </div>

                <Link href='/signin/forgotpassword'><a><p className={styles.forgot_password}>{loginFormText.forgot_passwword}</p></a></Link>
              </div>

              <div className={`${styles.tc} form-error`}>{error}</div>
              {loading ? <div className={styles.justify_center}><CircularProgress /></div> : <SubmitButton type='submit' style={styles.btn} title='Login' />}
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default LoginForm