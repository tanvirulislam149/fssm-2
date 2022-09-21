import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
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

export default Layout