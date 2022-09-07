import React from 'react';
import ResetPasswordForm from '../../components/Forms/Login/ResetPasswordForm';
import styles from './signin.module.css';

const ResetPassword = () => {
  return (
    <>
      <div className={styles.container}>
        <ResetPasswordForm />
      </div>
    </>
  )
}

export default ResetPassword