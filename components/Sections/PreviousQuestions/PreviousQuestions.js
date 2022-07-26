import React from 'react';
import styles from './PreviousQuestions.module.css';
import Input from '../../Inputs/Input';
import Button from '../../Buttons/Submit/SubmitButton';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';
import { questionsList } from '../../TextArrays';

const PreviousQuestions = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <p>Help Desk</p>
          <div className={styles.inputs}>
            <div className={styles.input_cont}>
              <Input
                placeholder='Search your question'
                style={styles.input}
              />
            </div>

            <div className={styles.select_cont}>
              <select
                defaultValue={''}
                required
                className={styles.select}
              //onChange={(e) => { setTheme(e.target.value) }}
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

            <Button
              title='Search'
              style={styles.btn}
            />
          </div>
        </div>

        {questionsList.map(({ id, details, theme, name, date, organization }) => {
          return (
            <QuestionCard key={id} organization={organization} name={name} date={date} details={details} theme={theme} />
          )
        })}

        <p className={styles.footer_text}>Showing 0-20 of 2 Results</p>
      </div>
    </>
  )
}

export default PreviousQuestions