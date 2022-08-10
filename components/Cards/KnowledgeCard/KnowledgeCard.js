import React, { useState } from 'react';
import styles from './KnowledgeCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
//import KnowledgeSubCard from '../KnowledgeSubCard/KnowledgeSubCard';

const KnowledgeCard = ({ title, id }) => {
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
        <div className={styles.container}>
          <div
            className={clicked ? styles.plus : styles.minus}
            onClick={() => {
              dropDown(document.getElementById('drop' + `${id}`));
              setClicked(!clicked);
            }}
          >
            {
              clicked ?
                <FontAwesomeIcon color='#024c73' icon={faPlus} size="xs" /> :
                <FontAwesomeIcon color='#024c73' icon={faMinus} size="xs" />
            }
          </div>

          <p className={styles.title}>{title}</p>
        </div>

        <div id={'drop' + `${id}`} className='dropdown-content'>
          <div className={styles.card}>
            {/* {categories.map(({ id, heading, subcategories }) => {
              return (
                <KnowledgeSubCard key={id} heading={heading} subcategories={subcategories} />
              )
            })} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default KnowledgeCard