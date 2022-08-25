import React, { useState } from 'react';
import styles from './DiscussionCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import talk from '../../../assets/talk 1.png';
import Image from 'next/image';
import i1 from '../../../assets/i1.png';
import i2 from '../../../assets/i2.png';
import i3 from '../../../assets/i3.png';
import Cookies from 'js-cookie';

const DiscussionCard = () => {
  const [clicked, setClicked] = useState(true);

  const dropDown = (e) => {
    if (e.classList.contains("active-dropdown")) {
      e.style.maxHeight = 0;
      e.classList.remove("active-dropdown");
    } else {
      e.style.maxHeight = 'max-content';
      e.classList.add("active-dropdown");
    }
  }

  const handleAction = () => {
    Cookies.get('access') ? null : alert('Please Login to the application to start a discussion.')
  }

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.container}>
          <div
            className={clicked ? styles.plus : styles.minus}
            onClick={() => {
              dropDown(document.getElementById('drop' + `1`));
              setClicked(!clicked);
            }}>
            {
              clicked ?
                <FontAwesomeIcon color='#024c73' icon={faPlus} size="xs" /> :
                <FontAwesomeIcon color='#024c73' icon={faMinus} size="xs" />
            }
          </div>

          <p
            className={styles.title}
            onClick={() => {
              dropDown(document.getElementById('drop' + `1`));
              setClicked(!clicked);
            }}>'yayayaya gsg gsgs jsjsjsj ksjssk'</p>

          <button
            className={styles.btn}
            onClick={() => {
              handleAction();
            }}
          >Start a Discussion</button>
        </div>

        <div id={'drop' + `1`} className='dropdown-content'>
          <div className={styles.cont2}>
            <div className={styles.shade}>
              <div className={styles.img_cont}>
                <Image height={64} width={64} alt='talk' src={talk} />
              </div>

              <div className={styles.details}>
                <p>abc</p>
                <div className={styles.footer}>
                  <span><Image height={14} width={14} alt='icon' src={i1} /><p>July 14, 2022</p></span>
                  <span><Image height={14} width={14} alt='icon' src={i2} /><p>By <span>Admin</span></p></span>
                  <span><Image height={14} width={14} alt='icon' src={i3} /><p>0 Replies</p></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DiscussionCard