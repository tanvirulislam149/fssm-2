import React from 'react';
import styles from './RepositoryCard.module.css';
import Link from 'next/link';

const RepositoryCard = ({ text, id }) => {
  return (
    <>
      <Link href={'/knowledgecontent?category=' + `${id}`}><a>
        <div className={styles.container}>
          {text}
        </div>
      </a></Link>
    </>
  )
}

export default RepositoryCard