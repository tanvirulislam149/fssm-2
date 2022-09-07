import React from 'react';
import ForgotPasswordForm from '../../components/Forms/Login/ForgotPasswordForm';
import styles from './signin.module.css';

const ForgotPassword = () => {
  return (
    <>
      <div className={styles.container}>
        <ForgotPasswordForm />
      </div>
    </>
  )
}

export default ForgotPassword