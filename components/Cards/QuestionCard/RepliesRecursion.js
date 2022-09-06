import React from 'react';
import styles from './QuestionCard.module.css';
import Image from 'next/image';
import calendar from '../../../assets/Calendar2.png';
import profile from '../../../assets/profile.png';
import arrow from '../../../assets/Forward Arrow.png';

const RepliesRecursion = (props) => {
  const handleReply = (el) => {
    el.classList.remove('none');
  }

  const handleCancel = (el) => {
    el.classList.add('none');
  }

  return (
    <>
      <div>
        {props.replies.map(({ body, date, name, id, replies }) => {
          const num = Math.random();
          return (
            <div className={styles.cont2} key={id}>
              <div className={styles.cont3}>
                <div>
                  <div className={styles.flex}>
                    <div className={styles.grid}>
                      <div className={styles.img_cont3}>
                        <Image src={profile} width={9.6} height={12.6} alt='icon' />
                      </div>
                      <div>
                        <p className={styles.name}>{name}</p>
                        <p><Image src={calendar} alt='icon' width={11} height={10} />{date}</p>
                        <p>{body}</p>
                      </div>
                    </div>
                    <Image src={arrow} width={22} height={22} alt='icon'
                      onClick={() => {
                        handleReply(document.getElementById(`reply-box${num}`));
                      }}
                    />
                  </div>

                  <div id={`reply-box${num}`} className={`${styles.reply_box} none`}>
                    <input type="text" placeholder='Add reply' />
                    <button className={styles.btn}>Submit</button>
                    <button
                      className={styles.btn2}
                      onClick={() => {
                        handleCancel(document.getElementById(`reply-box${num}`));
                      }}
                    >Cancel</button>
                  </div>
                </div>

              </div>
              {
                replies.length ? RepliesRecursion({ replies }) : null
              }
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RepliesRecursion