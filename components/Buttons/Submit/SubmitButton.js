import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ title, type, style, onClick, id }) => {
  return (
    <>
      <button type={type} id={id} onClick={onClick} className={`${style} ${styles.btn}`}>{title}</button>
    </>
  )
}

export default SubmitButton