import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div
        className={styles.layout}
        onClick={() => {
          if (document.querySelector('.nav').classList.contains('none')) return;
          document.getElementById('check').click();
        }}>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout