import React, { useEffect, useState } from 'react';
import styles from './HelpDesk.module.css';
import QuestionForm from '../../Forms/Help Desk/QuestionForm';
import PreviousQuestions from '../PreviousQuestions/PreviousQuestions';
import { helpDeskText } from '../../TextArrays';

const HelpDesk = () => {
  const [routeId, setRouteId] = useState(null);


  const handleClick = (id) => {
    val = null;
    val = id;
    console.log({ val: val })
  }

  useEffect(() => {
    console.log('ran', routeId)
    const prev = document.getElementById('previous-questions');
    const quest = document.getElementById('question-form');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    if (prev.classList.value === 'none' && routeId === 2) {
      btn1.classList.remove('onroute');
      btn2.classList.add('onroute');
      quest.classList.add('none');
      prev.classList.remove('none');
      console.log({ btn1: btn1.classList })
    } else if (quest.classList.value === 'none' && routeId === 1) {
      btn2.classList.remove('onroute');
      btn1.classList.add('onroute');
      quest.classList.remove('none');
      prev.classList.add('none');
      console.log({ btn1: btn1.classList })
    }

  }, [routeId])

  return (
    <>
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
            <PreviousQuestions />
          </div>
        </main>
      </section>
    </>
  )
}

export default HelpDesk