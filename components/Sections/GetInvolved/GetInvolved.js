import React from 'react';
import GetInvolvedCard from '../../Cards/GetInvolvedCard/GetInvolvedCard';
import styles from './GetInvolved.module.css';
import { getInvolvedText } from '../../TextArrays';

const GetInvolved = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Get Involved</h1>
        <section>
          <GetInvolvedCard id={1} title={getInvolvedText.title[0]} text={getInvolvedText.text[0]} btn={getInvolvedText.btn[0]} />
          <GetInvolvedCard id={2} title={getInvolvedText.title[1]} text={getInvolvedText.text[1]} btn={getInvolvedText.btn[1]} />
          <GetInvolvedCard id={3} title={getInvolvedText.title[2]} text={getInvolvedText.text[2]} btn={getInvolvedText.btn[1]} />
        </section>
      </div>
    </>
  )
}

export default GetInvolved