import React from 'react';
import styles from './Disclaimer.module.css';
import { disclaimerText } from '../../TextArrays';
import Layout from '../Layout/Layout';

const Disclaimer = () => {
  return (
    <>
      <div className={styles.container}>
        <Layout>
          <p>Disclaimer</p>
          <p>{disclaimerText.text}</p>
        </Layout>
      </div>
    </>
  )
}

export default Disclaimer