import React from 'react';
import styles from './GlossaryLinkCard.module.css';
import { alphabets } from '../../TextArrays';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GlossaryLinkCard = () => {
  const router = useRouter();

  const id = router.query.alphabet;

  return (
    <>
      <ul className={styles.ul}>
        {alphabets.map(letter => {
          return (
            letter === 'All' ?
              <li key={letter} className={id ? styles.card : styles.btn}><Link href='/glossary'>{letter}</Link></li> :
              <li key={letter} className={id === letter ? styles.btn : styles.card}><Link href={'/glossary?alphabet=' + `${letter}`}>{letter}</Link></li>
          )
        })}
      </ul>
    </>
  )
}

export default GlossaryLinkCard