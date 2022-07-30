import React, { useEffect, useState } from 'react';
import styles from './KnowledgeCategories.module.css';
import { knowledgeContentText } from '../../TextArrays';
import Link from 'next/link';
import { getAllKnowledgeRepo } from '../../../services/knowledgeRepoService';

const KnowledgeCategories = () => {
  const [knowledgeData, setKnowledgeData] = useState([]);
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.log(err);  // 404 not found
    setError(err.response.statusText);
  }

  useEffect(() => {
    getAllKnowledgeRepo((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        console.log(res)
        // setKnowledgeData(res.data);
      }
    });
  }, [])

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
                        <Link href={'/knowledgecontent?category=' + `${role}`}><p className={styles.link}>{title}</p></Link>
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