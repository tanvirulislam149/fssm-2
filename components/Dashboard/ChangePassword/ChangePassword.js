import React from 'react';
import styles from './ChangePassword.module.css';
import { useRouter } from 'next/router';

const ChangePassword = () => {
  const navigate = useRouter();

  const handleNav = () => {
    navigate.back();
  }

  const handleSubmit = () => {

  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label2}>Change Password</h4>

        <form
          className={styles.cont}
          onSubmit={() => {
            handleSubmit();
          }}>
          <div>
            <label htmlFor="pass">New Password</label>
            <input
              required
              id="pass"
              minlength="6"
              className={styles.input}
              type="password"
              placeholder='New Password' />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password</label>
            <input
              required
              id="confirm"
              minlength="6"
              className={styles.input}
              type="password"
              placeholder='Confirm Password' />
          </div>
          <div className={styles.btn_cont}>
            <button
              type='submit'
              className={`${styles.btn} ${styles.submit}`}>
              Submit
            </button>
            <span
              className={`${styles.btn} ${styles.cancel}`}
              onClick={() => {
                handleNav();
              }}>
              Cancel
            </span>
          </div>
        </form>
      </div>
    </>
  )
}

export default ChangePassword