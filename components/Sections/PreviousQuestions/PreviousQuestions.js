import React from 'react';
import styles from './PreviousQuestions.module.css';
import Button from '../../Buttons/Submit/SubmitButton';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';
import { Formik, Field, Form } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import search from '../../../assets/search.png';
import Image from 'next/image';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const PreviousQuestions = ({ loading, setttingLoading, prevQuestions, themeArray, dateArray, handleSubmit, error }) => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <p>Help Desk</p>
          <div className={styles.inputs}>
            <Formik
              initialValues={{ search: '', theme: '' }}
              onSubmit={values => {
                setttingLoading(true);
                handleSubmit(values);
              }}
            >
              {({ setFieldValue }) => (
                <Form className={styles.inputs}>
                  <div className={styles.input_cont}>
                    <Paper
                      className={styles.input}
                      component="div"
                      sx={{ p: '0px', display: 'flex', alignItems: 'center' }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder='Search Your Question'
                        onChange={(e) => {
                          setFieldValue('search', e.target.value);
                        }}
                        className={styles.input1}
                      />
                      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </div>

                  <div className={styles.select_cont}>
                    <Field name='theme' as='select' id='theme' className={`${styles.select} form-select`}>
                      <option value=''>Select Theme</option>
                      <option value={1}>CAPACITY BUILDING</option>
                      <option value={2}>COMMUNICATIONS</option>
                    </Field>
                  </div>

                  <Button type='submit' title='Search' style={styles.btn} />
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {loading ?
          <div className={styles.justify_center}><CircularProgress /></div> :
          prevQuestions.length ?
            prevQuestions.map(({ id, upvotes, views, spam, question, name, organization }, i) => {
              return (
                <QuestionCard
                  key={id}
                  organization={organization}
                  name={name}
                  date={dateArray[i]}
                  theme={themeArray[i]}
                  question={question}
                  views={views}
                  spam={spam}
                  upvotes={upvotes}
                />
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