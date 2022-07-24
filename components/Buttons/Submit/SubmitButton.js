import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ title, style, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`${style} ${styles.btn}`}>{title}</button>
    </>
  )
}

export default SubmitButton