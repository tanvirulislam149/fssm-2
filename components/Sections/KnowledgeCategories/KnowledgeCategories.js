import React from 'react';
import styles from './KnowledgeCategories.module.css';
import { knowledgeContentText } from '../../TextArrays';
import Link from 'next/link';

const KnowledgeCategories = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.head}>Select your category for customized FSSM Knowledge</p>

        <div className={styles.whole}>
          <div className={styles.cont}>
            {knowledgeContentText.categories.map(({ title, role }) => {
              return (
                <span className={styles.span} key={role}>
                  {
                    title === 'All' ?
                      <div className={styles.card}>
                        <Link href='/knowledgecontent'><p className={styles.link}>{title}</p></Link>
                      </div> :
                      <div className={styles.card}>
                        <Link href={'/knowledgecontent?role=' + `${role}`}><p className={styles.link}>{title}</p></Link>
                      </div>
                  }
                </span>
              )
            })}
          </div>
        </div>

      </div>
    </>
  )
}

export default KnowledgeCategories