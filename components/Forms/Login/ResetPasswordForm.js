import React, { useEffect, useState } from 'react';
import styles from './LoginForm.module.css';
import SubmitButton from '../../Buttons/Submit/SubmitButton';
import { loginFormText } from '../../TextArrays';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import eye from '../../../assets/eye.png';
import Image from 'next/image';
import { resetPass, uuu } from '../../../services/authService';

const ResetPasswordForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useRouter();
  const { uid, token } = navigate.query;

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  const handleSubmit = (data) => {
    console.log(data);
    resetPass({
      password: data.password
    }, uid, token, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        setError(res.data.msg);
        setSuccess(true);
        console.log({ r: res });
      }
    });
  }

  const goHome = () => {
    navigate.push('/');
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleNav = () => {
    navigate.push('/signin');
  }

  // useEffect(() => {
  //   uuu({
  //     email: 'davidjoshua603@gmail.com',
  //     first_name: 'joshua',
  //     last_name: 'oni',
  //     is_admin: false,
  //     is_restrictedUser: true,
  //     password: 12345
  //   }, (err, res) => {
  //     if (err) return handleError(err);
  //     if (res !== null) {
  //       setLoading(false);
  //       console.log({ r: res });
  //       //navigate.push('/signin');
  //     }
  //   });
  // }, [])


  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.header}
          onClick={() => { goHome(); }}
        >
          <h1 className={styles.header_green}> {loginFormText.header_text_1} <span className={styles.header_blue}> {loginFormText.header_text_2} </span></h1>
        </div>

        <h2 className={styles.head2}>New Password</h2>
        <p>Please create a new password</p>

        <Formik
          initialValues={{ password: '', confirm_password: '' }}
          validationSchema={Yup.object({
            password: Yup.string()
              .required('Required')
              .max(20, 'Must be 20 characters or less')
              .min(4, 'Must be 4-20 characters'),
          })}
          onSubmit={data => {
            setError(null);
            if (data.password !== data.confirm_password) {
              setError('Passwords do not match');
              return;
            }
            setLoading(true);
            handleSubmit(data);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <FormControl className={`${styles.form_control} ${styles.field}`} variant="outlined">
                <OutlinedInput
                  id="text3"
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
                  placeholder='Create new password'
                />
              </FormControl>
              <span className='form-error'><ErrorMessage name="password" /></span>

              <div className={styles.div}></div>
              <div className={styles.div}></div>

              <FormControl className={`${styles.form_control} ${styles.field}`} variant="outlined">
                <OutlinedInput
                  id="text2"
                  type={showPassword2 ? 'text' : 'password'}
                  name='confirm_password'
                  onChange={(e) => {
                    setFieldValue('confirm_password', e.target.value)
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <Image src={eye} alt='eye' height={16} width={22} />
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder='Confirm password'
                />
              </FormControl>
              <span className='form-error'><ErrorMessage name="confirm_password" /></span>

              <div className={`${styles.tc} form-error`}>{error}</div>
              {loading ?
                <div className={styles.justify_center}><CircularProgress /></div> :
                <SubmitButton
                  type={success ? 'reset' : 'submit'}
                  style={styles.btn}
                  title={success ? 'Go to Login' : 'Reset Password'}
                  onClick={() => {
                    success ? handleNav() : null;
                  }}
                />}
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default ResetPasswordForm