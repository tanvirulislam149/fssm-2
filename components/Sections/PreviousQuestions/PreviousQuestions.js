import React from 'react';
import styles from './PreviousQuestions.module.css';
import Button from '../../Buttons/Submit/SubmitButton';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';
import { Formik, Field, Form } from 'formik';

const PreviousQuestions = ({ prevQuestions, themeArray, dateArray, handleSubmit, error }) => {

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
                  </Field>
                </div>

                <Button type='submit' title='Search' style={styles.btn} />
              </Form>
            </Formik>
          </div>
        </div>

        {
          prevQuestions.length ?
            prevQuestions.map(({ id, question, name, organization }, i) => {
              return (
                <QuestionCard key={id} organization={organization} name={name} date={dateArray[i]} theme={themeArray[i]} question={question} />
              )
            }) :
            <div className={`${styles.tc} error`}>{error ? error : 'No Questions'}</div>
        }

        <p className={styles.footer_text}>Showing 0-20 of {prevQuestions.length} Results</p>
      </div>
    </>
  )
}

export default PreviousQuestions