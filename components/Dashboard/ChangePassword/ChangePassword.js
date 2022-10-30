import React, { useState } from 'react';
import styles from './ChangePassword.module.css';
import { useRouter } from 'next/router';
import { changePass } from '../../../services/authService';

const ChangePassword = () => {
  const [passErr, setPassErr] = useState("");
  const navigate = useRouter();

  const handleNav = () => {
    navigate.push('/dashboard');
  }

  const handleError = (err) => {
    console.log({ e: err })
  }

  const handleSubmit = (e) => {
    setPassErr("");
    e.preventDefault();
    const pass = e.target.pass.value;
    const confirmPass = e.target.confirmPass.value;
    if (pass === confirmPass) {
      // changePass(
      //   {
      //     old_password: "tesuserkarthik2",
      //     new_password: "testuser2"
      //   },
      //   (err, res) => {
      //     if (err) return handleError(err)
      //     if (res !== null) {
      //       console.log(res);
      //     }
      //   });
      console.log(pass)
    }
    else {
      setPassErr("Password didn't matched");
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