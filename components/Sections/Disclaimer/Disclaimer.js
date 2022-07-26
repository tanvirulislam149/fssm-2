import React from 'react';
import styles from './Disclaimer.module.css';
import { disclaimerText } from '../../TextArrays';

const Disclaimer = () => {
  return (
    <>
      <div className={styles.container}>
        <p>Disclaimer</p>
        <p>{disclaimerText.text}</p>
      </div>
    </>
  )
}

export default Disclaimer