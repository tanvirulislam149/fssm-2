import React from 'react';
import styles from './RepositoryCard.module.css';

const RepositoryCard = ({ text }) => {
  return (
    <>
      <div className={styles.container}>
        {text}
      </div>
    </>
  )
}

export default RepositoryCard