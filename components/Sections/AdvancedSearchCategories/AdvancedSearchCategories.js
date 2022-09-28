import React from 'react';
import styles from './AdvancedSearchCategories.module.css';
import { useRouter } from 'next/router';
import useOptions from '../../useOptions';

const AdvancedSearchCategories = ({ handleSelect }) => {
  const router = useRouter();
  const { advancedSearchText } = useOptions();

  const handleDropDown = (el) => {
    const a = document.getElementById('cat-1')
    const b = document.getElementById('cat-2')
    const c = document.getElementById('cat-3')
    const d = document.getElementById('cat-4')
    if (el === a) {
      a.classList.contains('none') ? a.classList.remove('none') : a.classList.add('none');
    } else if (el === b) {
      b.classList.contains('none') ? b.classList.remove('none') : b.classList.add('none');
    } else if (el === c) {
      c.classList.contains('none') ? c.classList.remove('none') : c.classList.add('none');
    } else if (el === d) {
      d.classList.contains('none') ? d.classList.remove('none') : d.classList.add('none');
    }
  }

  const handleRefresh = () => {
    router.reload(window.location.pathname);
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.head}>Select your category for customized FSSM Knowledge</p>

        <div className={styles.whole}>
          <div className={styles.cont}>
            <span
              className={styles.span}
              onClick={() => {
                handleDropDown(document.getElementById('cat-1'));
              }}
            >
              <div className={styles.card}>
                <p className={styles.link}>Theme</p>
              </div>
            </span>
            <div id='cat-1' className={`${styles.cat_drop_down} none`}>
              <ul className={styles.ul}>
                {
                  advancedSearchText.themes.map(({ title }) => {
                    return (
                      <li
                        key={title}
                        onClick={() => { handleSelect('theme', title) }}
                      >
                        {title}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <span
              className={styles.span}
              onClick={() => {
                handleDropDown(document.getElementById('cat-2'));
              }}
            >
              <div className={styles.card}>
                <p className={styles.link}>Stakeholder</p>
              </div>
            </span>
            <div id='cat-2' className={`${styles.cat_drop_down} none`}>
              <ul className={styles.ul}>
                {
                  advancedSearchText.stake_holder.map(({ title }) => {
                    return (
                      <li
                        key={title}
                        onClick={() => { handleSelect('stakeholder', title) }}
                      >
                        {title}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <span
              className={styles.span}
              onClick={() => {
                handleDropDown(document.getElementById('cat-3'));
              }}
            >
              <div className={styles.card}>
                <p className={styles.link}>Value Chain</p>
              </div>
            </span>
            <div id='cat-3' className={`${styles.cat_drop_down} none`}>
              <ul className={styles.ul}>
                {
                  advancedSearchText.valueChain.map(({ title }) => {
                    return (
                      <li
                        key={title}
                        onClick={() => { handleSelect('value_chain', title) }}
                      >
                        {title}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <span
              className={styles.span}
              onClick={() => {
                handleDropDown(document.getElementById('cat-4'));
              }}
            >
              <div className={`${styles.card} ${styles.last_card}`}>
                <p className={styles.link}>Geography</p>
              </div>
            </span>
            <div id='cat-4' className={`${styles.cat_drop_down} none`}>
              <ul onClick={() => { handleRefresh(); }} className={styles.ul}>
                <li>National</li>
                <li>State</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdvancedSearchCategories