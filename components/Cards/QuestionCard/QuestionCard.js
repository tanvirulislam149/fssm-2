import React from 'react';
import styles from './QuestionCard.module.css';
import profile from '../../../assets/profile.png';
import Image from 'next/image';

const QuestionCard = ({ details, theme }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_cont}>
          <Image src={profile} width={18} height={21} alt='profile icon' />
        </div>
        <p className={styles.details}>{details}</p>
        <div className={styles.theme}>{theme}</div>
      </div>
    </>
  )
}

export default QuestionCard