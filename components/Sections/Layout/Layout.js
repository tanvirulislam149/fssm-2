import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div
        className={styles.layout}
        onClick={(e) => {
          if (document.querySelector('.nav').classList.contains('none')) return;
          document.getElementById('check')?.click();
          if (e.target.classList.contains('mobile-comp')) return;
          document.getElementById('d-open')?.classList.remove('none');
          document.getElementById('d-close')?.classList.add('none');
          document.querySelector('.nav').classList.add('none');
        }}>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout