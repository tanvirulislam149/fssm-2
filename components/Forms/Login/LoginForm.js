import React, { useEffect, useState } from 'react';
import styles from './LoginForm.module.css';
import SubmitButton from '../../Buttons/Submit/SubmitButton';
import { loginFormText } from '../../TextArrays';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser, axiosInstance } from '../../../services/authService';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Cookies from 'js-cookie'

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useRouter();

  const handleError = (err) => {
    console.log({ e: err })
    setLoading(false);
    err === 'Email or Password Incorrect' ?
      setError('Email or Password Incorrect') :
      err === 'Refresh token expired' ?
        navigate.push('/signin') : setError('An Error Occured');
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
        axiosInstance.defaults.headers.common["Authorization"] = 'Bearer ' + Cookies.get('access');
        Cookies.set('access', res.data.access_token, { expires: 14 })
        Cookies.set('refresh', res.data.refresh_token, { expires: 14 })
        navigate.push('/');
        setLoading(false);
      }
    })
  }

  useEffect(() => {
    if (!Cookies.get('swass-fssm')) {
      Cookies.set("swass-fssm", "true", { expires: 0.00013889 });
      window.location.reload();
    }
  }, [])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.header_green}> {loginFormText.header_text_1} <span className={styles.header_blue}> {loginFormText.header_text_2} </span></h1>
        </div>

        <Formik
          initialValues={{ email: Cookies.get('email') ? Cookies.get('email') : '', password: '', check: Cookies.get('check') ? true : false }}
          validationSchema={Yup.object({
            password: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .min(4, 'Must be 4-20 characters')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
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
                id="email"
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

              <FormControl className={`${styles.form_control} ${styles.field}`} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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

                <p className={styles.forgot_password}>{loginFormText.forgot_passwword}</p>
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