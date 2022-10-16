import React from 'react';
import styles from './signin.module.css';
import LoginForm from '../../components/Forms/Login/LoginForm';
import Head from 'next/head';

const Signin = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <div className={styles.container}>
        <LoginForm />
      </div>
    </>
  )
}

export default Signin