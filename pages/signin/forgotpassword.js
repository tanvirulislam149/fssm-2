import Head from 'next/head';
import React from 'react';
import ForgotPasswordForm from '../../components/Forms/Login/ForgotPasswordForm';
import styles from './signin.module.css';

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <div className={styles.container}>
        <ForgotPasswordForm />
      </div>
    </>
  )
}

export default ForgotPassword