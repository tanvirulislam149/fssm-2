import React from 'react';
import styles from './signin.module.css';
import LoginForm from '../../components/Forms/Login/LoginForm';

const Signin = () => {
  return (
    <>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </>
  )
}

export default Signin