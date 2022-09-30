import React from 'react';
import styles from './AddItems.module.css';
import Image from 'next/image';
import folder from '../../../assets/Folder.png';
import file from '../../../assets/file.png';

const AddItems = ({ subitems, count }) => {
  count++;

  const handleAction = (el) => {
    el.classList.toggle('none');
  }

  return (
    <>
      <ul className={subitems[0].id === 0 ? `${styles.ul2} ${styles.ul}` : styles.ul}>
        {
          subitems.map(({ id, title, subitems }) => {
            return (
              <li key={id} style={{ zIndex: id, position: 'relative' }}>
                <div className={styles.hr}>
                  <div className={count === 1 ? null : styles.hr2}></div>
                  <div className={count === 1 ? null : styles.hr3}></div>
                </div>
                <p
                  className={count === 4 ? styles.key2 : styles.key}
                  onClick={() => {
                    handleAction(document.getElementById(`${title.replace(/\s/g, '')}`));
                  }}>{id}</p>
                <p className={styles.title}><Image src={count === 4 ? file : folder} alt='icon' height={21} width={count === 4 ? 17 : 21} />{title}</p>
                {
                  subitems.length ?
                    <div className={styles.div} id={`${title.replace(/\s/g, '')}`}>
                      <AddItems count={count} subitems={subitems} />
                    </div> :
                    null
                }
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default AddItems