import React, { useEffect, useState } from 'react';
import styles from './QuestionForm.module.css';
import Input from '../../Inputs/Input';
import Button from '../../Buttons/Submit/SubmitButton';

const QuestionForm = () => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [mobile, setMobile] = useState('');
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [theme, setTheme] = useState('');
  const [highPriority, setHighPriority] = useState(false);

  useEffect(() => {
    document.getElementById("uploadBtn").onchange = function () {
      document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
    };
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form
        className={styles.container}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <div className={styles.select_cont}>
            <label className={styles.label} htmlFor="theme">Theme <span>*</span></label>
            <select
              defaultValue={''}
              required
              id='theme'
              className={styles.select}
              onChange={(e) => { setTheme(e.target.value) }}
            >
              <option value={''} disabled hidden>Select Theme</option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
          </div>

          <div className={styles.select_cont}>
            <label className={styles.label} htmlFor="user">User Profile <span>*</span></label>
            <select
              defaultValue={''}
              required
              id='user'
              className={styles.select}
              onChange={(e) => { setUserProfile(e.target.value) }}
            >
              <option className={styles.placeholder} value={''} disabled hidden>Select User Profile</option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
          </div>

          <div className={styles.select_cont}>
            <label className={styles.label}>Attachment</label>
            <div className={styles.file_cont}>
              <Input id="uploadFile" style={styles.f_input} />
              <div className={`${styles.btn_browse} ${styles.fileUpload}`}>
                <span>Browse</span>
                <Input
                  id="uploadBtn"
                  type='file'
                  style={styles.upload}
                  onChange={(e) => { setFile(e.target.value) }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.text_cont}>
          <label htmlFor="textarea" className={styles.label}>Question <span>*</span></label>
          <textarea
            placeholder='Your question here....'
            className={styles.textarea}
            id="textarea"
            cols="30"
            rows="10"
            value={question}
            onChange={(e) => { setQuestion(e.target.value) }}>
          </textarea>
        </div>

        <label className={styles.radio} htmlFor="radio">
          <Input
            id='radio'
            type='checkbox'
            onChange={() => {
              setHighPriority(!highPriority);
            }}
          />
          <span>High Priority</span>
        </label>


        <div className={`${styles.row} ${styles.mt5}`}>
          <div className={styles.input_cont}>
            <label className={styles.label} htmlFor="name">Name <span>*</span></label>
            <Input
              required
              id='name'
              value={name}
              type='text'
              placeholder='Name'
              style={styles.input}
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>

          <div className={styles.input_cont}>
            <label className={styles.label} htmlFor="email">Email <span>*</span></label>
            <Input
              required
              id='email'
              value={email}
              type='email'
              placeholder='Email'
              style={styles.input}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
        </div>

        <div className={`${styles.row} ${styles.mt5}`}>
          <div className={styles.input_cont}>
            <label className={styles.label} htmlFor="mobile">Mobile</label>
            <Input
              type='number'
              id='mobile'
              value={mobile}
              placeholder='Mobile'
              style={styles.input}
              onChange={(e) => { setMobile(e.target.value) }}
            />
          </div>

          <div className={styles.input_cont}>
            <label className={styles.label} htmlFor="organization">Organization <span>*</span></label>
            <Input
              required
              type='text'
              value={organization}
              placeholder='Organization'
              id='organization'
              style={styles.input}
              onChange={(e) => { setOrganization(e.target.value) }}
            />
          </div>
        </div>

        <div className={styles.btn_cont}>
          <Button title='Submit' style={styles.submit_btn} />
          <button disabled className={styles.cancel_btn}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default QuestionForm