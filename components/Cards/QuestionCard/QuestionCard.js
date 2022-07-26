import React from 'react';
import styles from './QuestionCard.module.css';
import profile from '../../../assets/profile.png';
import Image from 'next/image';

const QuestionCard = ({ details, theme, organization, name, date }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cont}>
          <div className={styles.img_cont}>
            <Image src={profile} width={18} height={21} alt='profile icon' />
          </div>

          <div className={styles.details}>
            <p>{details}</p>
            <div className={styles.footer}>
              <p>{date}</p>
              <p>By <span>{name}</span></p>
              <p>{organization}</p>
            </div>
          </div>

          <div className={styles.theme}>{theme}</div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard