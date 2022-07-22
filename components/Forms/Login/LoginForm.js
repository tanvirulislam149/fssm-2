import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import Input from '../../Inputs/Input';
import SubmitButton from '../../Buttons/Submit/SubmitButton';
import Image from 'next/image';
import eye from '../../../assets/eye.png';
import { loginFormText } from '../../TextArrays';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const togglePassword = () => {
    const password = document.getElementById('password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type)
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header_green}> {loginFormText.header_text_1} <span className={styles.header_blue}> {loginFormText.header_text_2} </span></h1>

        <form
          onSubmit={handleSubmit}
        >
          <Input
            type='text'
            placeholder='Email'
            style={styles.input}
            value={email}
            id='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Input
            type='password'
            placeholder='Password'
            style={`${styles.input} ${styles.passwordInput}`}
            value={password}
            id='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Image
            className={styles.img}
            alt='reveal/hide' src={eye}
            height={16} width={22}
            onClick={togglePassword}
          />

          <div className={styles.checkbox_forgot_password}>
            <div className={styles.checkbox_cont}>
              <Input
                type='checkbox'
                style={styles.checkbox}
              />

              <p className={styles.text}> {loginFormText.remember_me} </p>
            </div>

            <p className={styles.forgot_password}>{loginFormText.forgot_passwword}</p>
          </div>

          <SubmitButton
            style={styles.btn}
            title='Login'
          />
        </form>
      </div>
    </>
  )
}

export default LoginForm