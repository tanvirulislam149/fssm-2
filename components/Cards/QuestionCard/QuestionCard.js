import React from 'react';
import styles from './QuestionCard.module.css';
import profile from '../../../assets/profile.png';
import cha from '../../../assets/cha.png';
import see from '../../../assets/see.png';
import warn from '../../../assets/warn.png';
import like from '../../../assets/like.png';
import p2 from '../../../assets/profile2.png';
import org from '../../../assets/org.png';
import d2 from '../../../assets/date2.png';
import forward from '../../../assets/forward.png';
import down from '../../../assets/keyboard_arrow_down.png';
import Image from 'next/image';

const QuestionCard = ({ question, organization, name, date, theme, upvotes, views, spam }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cont}>
          <div className={styles.img_cont}>
            <Image src={profile} width={18} height={21} alt='profile icon' />
          </div>

          <div className={styles.details}>
            <p className={styles.body}>{question}</p>
          </div>

          <div className={styles.theme}>{theme}</div>
        </div>
        <div className={styles.footer}>
          <p><Image src={d2} width={14} height={14} alt='icon' />{date}</p>
          <p><Image src={p2} width={14} height={14} alt='icon' />By <span>{name}</span></p>
          <p><Image src={org} width={14} height={14} alt='icon' />{organization}</p>
        </div>
        <div className={styles.footer2}>
          <p><Image src={cha} width={14} height={14} alt='icon' />{''}</p>
          <p><Image src={see} width={14} height={14} alt='icon' />{views}</p>
          <p><Image src={like} width={14} height={14} alt='icon' />{upvotes}</p>
          <p><Image src={warn} width={14} height={14} alt='icon' />{spam}</p>
          <p><Image src={forward} width={14} height={14} alt='icon' /></p>
        </div>
        <div>
          <div>
            <Image src={down} width={24} height={24} alt='icon' />
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard