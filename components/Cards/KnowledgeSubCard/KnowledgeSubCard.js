import React from 'react';
import styles from './KnowledgeSubCard.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const KnowledgeSubCard = ({ heading, subcategories }) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.head}>{heading}</p>

        <div className={styles.whole}>
          {subcategories.map(({ id, topic }) => {
            return (
              <div key={id} className={styles.card}>
                <Link href='/'><a><FontAwesomeIcon className={styles.icon} color='#8e8e8e' icon={faAngleDoubleRight} size="1x" />
                  <p className={styles.link}>{topic}</p></a></Link>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default KnowledgeSubCard