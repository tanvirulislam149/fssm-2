import React from 'react';
import styles from './KnowledgeCategories.module.css';
import Link from 'next/link';

const KnowledgeCategories = ({ category }) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.head}>Select your category for customized FSSM Knowledge</p>

        <div className={styles.whole}>
          <div className={styles.cont}>
            {category.map(({ user_profile, id }) => {
              return (
                <span className={styles.span} key={id}>
                  {
                    user_profile === 'All' ?
                      <div className={styles.card}>
                        <Link href='/knowledgecontent'><p className={styles.link}>{user_profile}</p></Link>
                      </div> :
                      <div className={styles.card}>
                        <Link href={'/knowledgecontent?category=' + `${id}`}><p className={styles.link}>{user_profile}</p></Link>
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