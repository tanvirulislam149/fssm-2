import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ title, style, onClick, id }) => {
  return (
    <>
      <button id={id} onClick={onClick} className={`${style} ${styles.btn}`}>{title}</button>
    </>
  )
}

export default SubmitButton