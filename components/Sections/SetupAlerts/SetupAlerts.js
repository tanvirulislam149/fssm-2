import React from 'react';
import styles from './SetupAlerts.module.css';
import SetupAlertForm from '../../Forms/SetupAlertForm/SetupAlertForm';

const SetupAlerts = () => {
  return (
    <>
      <div
        className={styles.container}
        data-modal="myModal1"
        onClick={() => {
          document.querySelector('.modal').style.display = "flex";
        }}
      >Setup Alerts</div>

      <div id="myModal1" className='modal'>

        <div className={styles.bg}
          onClick={() => {
            document.querySelector('.modal').style.display = "none";
            document.getElementById('user-cat').style.display = 'none';
          }}></div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.modal').style.display = "none";
              document.getElementById('user-cat').style.display = 'none';
            }}
          ><span>x</span></div>
          <div className={styles.modal_header}>
            <h2>Please enter your details to get the notification</h2>
          </div>

          <div className={styles.form}>
            <SetupAlertForm />
          </div>
        </div>

      </div>
    </>
  )
}

export default SetupAlerts