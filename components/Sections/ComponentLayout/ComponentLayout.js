import React from 'react';
import styles from './ComponentLayout.module.css';

const ComponentLayout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default ComponentLayout