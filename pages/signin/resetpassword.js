import Head from 'next/head';
import React from 'react';
import ResetPasswordForm from '../../components/Forms/Login/ResetPasswordForm';
import styles from './signin.module.css';

const ResetPassword = () => {
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <div className={styles.container}>
        <ResetPasswordForm />
      </div>
    </>
  )
}

export default ResetPassword