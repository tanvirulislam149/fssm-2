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
import calendar from '../../../assets/Calendar.png';
import gallery from '../../../assets/Photo Gallery.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { helpDeskText } from '../../TextArrays';
import RepliesRecursion from './RepliesRecursion';

const QuestionCard = ({ question, id, organization, name, date, theme, upvotes, views, spam }) => {
  const handleShow = (el) => {
    el.classList.toggle('none');
  }

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
          <div
            onClick={() => { handleShow(document.getElementById(`answer-box${id}`)) }}
          >
            <Image src={down} width={24} height={24} alt='icon' />
          </div>
        </div>

        <div id={`answer-box${id}`} className={`${styles.answers} none`}>
          <div className={styles.top}>
            <div className={styles.img_cont2}>
              <Image src={profile} width={14} height={18.9} alt='profile icon' />
            </div>
            <div className={styles.main}>
              <div className={styles.date}>
                <Image src={calendar} width={19} height={18} alt='icon' />
                <p>Feb 06, 2020</p>
              </div>
              <p className={styles.body2}>
                Yes absolutely. In fact, general citizens like you wanting to be a
                part of FSSM can steer the FSSM drive in India.
                Answering your question, the most basic thing you could do is search
                for the basics of FSSM on this website and be aware of the do's and dont's.
                Secondly, you can do a quick basic assessment of the sanitary system in your
                apartment/locality and check if it up to the right standard. Based on your
                assessment you can connect with your local municipality to take things forward.
                In case of no response,
                you can contact one if the experts here and we will help you with the case.
              </p>
              <form className={styles.box1}>
                <input className={styles.input} type='text' placeholder='Add a comment...' />
                <Image src={gallery} alt='icon' width={38} height={38} />
                <button className={styles.btn}>Submit</button>
              </form>
              <div className={styles.box2}>
                <div onClick={() => { handleShow(document.getElementById(`replies-recursion${id}`)); }} className={styles.view}>View comments<KeyboardArrowDownIcon /></div>

                <div id={`replies-recursion${id}`} className='none' >
                  <RepliesRecursion replies={helpDeskText.questions} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard