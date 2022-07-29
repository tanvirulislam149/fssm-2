import React, { useState } from 'react';
import styles from './PreviousQuestions.module.css';
import Button from '../../Buttons/Submit/SubmitButton';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';
import { questionsList } from '../../TextArrays';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { searchQuestion } from '../../../services/authService';

const PreviousQuestions = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.log(err);
    setError(err.response.statusText);
  }

  const handleSubmit = (values) => {
    console.log(values);
    searchQuestion(values, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log(res);
        setQuestionsData(res.data.questions);
      }
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <p>Help Desk</p>
          <div className={styles.inputs}>
            <Formik
              initialValues={{ search: '', theme: '' }}
              onSubmit={values => {
                handleSubmit(values);
              }}
            >
              <Form className={styles.inputs}>
                <div className={styles.input_cont}>
                  <Field name="search" id='search' className={styles.input} placeholder='Search Your Question' type="text" />
                </div>

                <div className={styles.select_cont}>
                  <Field name='theme' as='select' id='theme' className={styles.select}>
                    <option hidden value=''>Select Theme</option>
                    <option value={1}>CAPACITY BUILDING</option>
                    <option value={2}>COMMUNICATIONS</option>
                    <option value={3}>COMMUNITY ENGAGEMENT</option>
                  </Field>
                </div>

                <Button type='submit' title='Search' style={styles.btn} />
              </Form>
            </Formik>
          </div>
        </div>

        {/* I dummied this data because there is no endpoint to display all questions yet */}
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