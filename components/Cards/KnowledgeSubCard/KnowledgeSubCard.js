import React from 'react';
import styles from './KnowledgeSubCard.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const KnowledgeSubCard = ({ heading, subcategories }) => {
  const router = useRouter();
  const category = router.query.category;

  return (
    <>
      <div className={styles.container}>
        <p className={styles.head}>{heading}</p>

        <div className={styles.whole}>
          {subcategories.map(({ id, subitem_title }) => {
            return (
              <div key={id} className={styles.card}>
                <Link href={`/knowledgedata?category=${category}&subitem=${id}&title=${subitem_title}`}><a><FontAwesomeIcon className={styles.icon} color='#8e8e8e' icon={faCircle} size="2xs" />
                  <p className={styles.link}>{subitem_title}</p></a></Link>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default KnowledgeSubCard