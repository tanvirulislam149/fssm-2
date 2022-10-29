import React, { useState } from 'react';
import styles from './ChangePassword.module.css';
import { useRouter } from 'next/router';

const ChangePassword = () => {
  const [passErr, setPassErr] = useState("");
  const navigate = useRouter();

  const handleNav = () => {
    navigate.push('/dashboard');
  }

  const handleSubmit = (e) => {
    setPassErr("");
    e.preventDefault();
    const pass = e.target.pass.value;
    const confirmPass = e.target.confirmPass.value;
    const pattern = RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    if (pattern.test(pass)) {
      if (pass === confirmPass) {
        console.log("matched");
      }
      else {
        setPassErr("Password didn't matched");
      }
    }
    else {
      setPassErr("Password should contain at least one uppercase, lowercase, number and character.")
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label2}>Change Password</h4>
        <form
          className={styles.cont}
          onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <div className={styles.inputCont1}>
            <label htmlFor="pass">New Password</label>
            <input
              name='pass'
              required
              id="pass"
              minLength="6"
              maxLength="20" c
              className={styles.input}
              type="password"
              placeholder='New Password'
            />
          </div>
          <div className={styles.inputCont2}>
            <div>
              <label htmlFor="confirm">Confirm Password</label>
              <input
                name='confirmPass'
                required
                id="confirm"
                minLength="6"
                maxLength="20"
                className={styles.input}
                type="password"
                placeholder='Confirm Password' />
            </div>
            <p className={styles.error}>{passErr}</p>
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