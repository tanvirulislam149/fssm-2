import React from 'react';
import KnowledgeCard from '../../Cards/KnowledgeCard/KnowledgeCard';
import styles from './KnowledgeList.module.css';

const KnowledgeList = ({ loading, questions }) => {
  return (
    <>
      <div>
        {
          questions.map(({ question, id }) => {
            return (
              <KnowledgeCard id={id} key={id} title={question} />
            )
          })
        }
        {loading ? null : questions.length ? <p className={styles.footer_text}>Showing 0-20 of {questions.length} Results</p> : <p className={styles.footer_text2}>No records found</p>}
      </div>
    </>
  )
}

export default KnowledgeList