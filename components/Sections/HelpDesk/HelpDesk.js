import React, { useEffect, useState } from 'react';
import styles from './HelpDesk.module.css';
import QuestionForm from '../../Forms/Help Desk/QuestionForm';
import PreviousQuestions from '../PreviousQuestions/PreviousQuestions';
import { helpDeskText } from '../../TextArrays';
import { displayQuestions, searchQuestion } from '../../../services/helpDeskService';

const HelpDesk = () => {
  const [routeId, setRouteId] = useState(null);
  const [prevQuestions, setPrevQuestions] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [themeArray, setThemeArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleError = (err) => {
    setLoading(false);
    console.log(err);
    setError(err.response.statusText);
  }

  const setttingLoading = (bool) => {
    setLoading(bool);
  }

  const handleSubmit = (values) => {
    searchQuestion(values, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        setPrevQuestions(res.data.questions);
        const quests = res.data.questions;
        let date = [];
        let themeData = [];
        quests.forEach(({ createdOn, theme }, i) => {
          let themeId;
          switch (theme.id) {
            case 1:
              themeId = 'Capacity building'
              break;
            case 2:
              themeId = 'communications'
              break;
            default:
              themeId = 'none'
              break;
          }
          themeData[i] = themeId;
          let month;
          const day = createdOn.slice(8, 10);
          const year = createdOn.slice(0, 4)
          switch (createdOn.slice(5, 7)) {
            case '01':
              month = 'January';
              break;
            case '02':
              month = 'February';
              break;
            case '03':
              month = 'March';
              break;
            case '04':
              month = 'April';
              break;
            case '05':
              month = 'May';
              break;
            case '06':
              month = 'June';
              break;
            case '07':
              month = 'July';
              break;
            case '08':
              month = 'August';
              break;
            case '09':
              month = 'September';
              break;
            case '10':
              month = 'October';
              break;
            case '11':
              month = 'November';
              break;
            case '12':
              month = 'December';
              break;
            default: ''
              break;
          }
          date[i] = `${month} ${day}, ${year}`;
        });
        setDateArray(date);
        setThemeArray(themeData);
      }
    });
  }

  useEffect(() => {
    displayQuestions((err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ r: res })
        setPrevQuestions(res.data.questions);
        const quests = res.data.questions;
        let date = [];
        let themeData = [];
        quests.forEach(({ createdOn, theme }, i) => {
          let themeId;
          switch (theme.id) {
            case 1:
              themeId = 'Capacity building'
              break;
            case 2:
              themeId = 'communications'
              break;
            default:
              themeId = 'none'
              break;
          }
          themeData[i] = themeId;
          let month;
          const day = createdOn.slice(8, 10);
          const year = createdOn.slice(0, 4)
          switch (createdOn.slice(5, 7)) {
            case '01':
              month = 'January';
              break;
            case '02':
              month = 'February';
              break;
            case '03':
              month = 'March';
              break;
            case '04':
              month = 'April';
              break;
            case '05':
              month = 'May';
              break;
            case '06':
              month = 'June';
              break;
            case '07':
              month = 'July';
              break;
            case '08':
              month = 'August';
              break;
            case '09':
              month = 'September';
              break;
            case '10':
              month = 'October';
              break;
            case '11':
              month = 'November';
              break;
            case '12':
              month = 'December';
              break;
            default: ''
              break;
          }
          date[i] = `${month} ${day}, ${year}`;
        });
        setDateArray(date);
        setThemeArray(themeData);
      }
    });
  }, []);


  useEffect(() => {
    const prev = document.getElementById('previous-questions');
    const quest = document.getElementById('question-form');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    if (prev.classList.value === 'none' && routeId === 2) {
      btn1.classList.remove('onroute');
      btn2.classList.add('onroute');
      quest.classList.add('none');
      prev.classList.remove('none');
    } else if (quest.classList.value === 'none' && routeId === 1) {
      btn2.classList.remove('onroute');
      btn1.classList.add('onroute');
      quest.classList.remove('none');
      prev.classList.add('none');
    }

  }, [routeId])

  return (
    <>
      <h1 className={styles.title}>Help Desk</h1>
      <section className={styles.container}>
        <div className={styles.btn_cont}>
          <button
            id='btn1'
            className='question-btn1 onroute'
            onClick={() => {
              setRouteId(1);
            }}
          >Ask A Question</button>
          <button
            id='btn2'
            className='question-btn2'
            onClick={() => {
              setRouteId(2)
            }}
          >View Previous Questions</button>
        </div>

        <main className={styles.main}>
          <p className={styles.instruction}>{helpDeskText.text}</p>
          <div id='question-form'>
            <QuestionForm />
          </div>
          <div className='none' id='previous-questions'>
            <PreviousQuestions
              loading={loading}
              setttingLoading={setttingLoading}
              error={error}
              handleSubmit={handleSubmit}
              dateArray={dateArray}
              themeArray={themeArray}
              prevQuestions={prevQuestions}
            />
          </div>
        </main>
      </section>
    </>
  )
}

export default HelpDesk