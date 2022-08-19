import React, { useState } from 'react';
import styles from './FaqCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const FaqCard = ({ title, id, body }) => {
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

  return (
    <>
      <div className={styles.cont}>
        <div
          className={styles.container}
          onClick={() => {
            dropDown(document.getElementById('drop' + `${id}`));
            setClicked(!clicked);
          }}
        >
          <div
            className={clicked ? styles.plus : styles.minus}
          >
            {
              clicked ?
                <FontAwesomeIcon color='white' icon={faPlus} size="xs" /> :
                <FontAwesomeIcon color='white' icon={faMinus} size="xs" />
            }
          </div>

          <p className={styles.title}>{title}</p>
        </div>

        <div id={'drop' + `${id}`} className='dropdown-content'>
          <p>{body}</p>
        </div>
      </div>
    </>
  )
}

export default FaqCard