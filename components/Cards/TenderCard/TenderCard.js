import React, { useState } from 'react';
import styles from './TenderCard.module.css';
import pdf from '../../../assets/pdf.png';
import Image from 'next/image';

const TenderCard = ({ theme, id, urban_rural, org, document_type, expiry_date, citation, description, title, value_chain, keywords, language, stake_holder, geography }) => {
  const [clicked, setClicked] = useState(true);

  const dropDown = (e, s, u) => {
    if (e.classList.contains("active-dropdown")) {
      e.style.maxHeight = 0;
      e.classList.remove("active-dropdown");
      u.style.display = 'block';
      s.style.justifyContent = 'space-between'
    } else {
      e.style.maxHeight = 'max-content';
      e.classList.add("active-dropdown");
      u.style.display = 'none';
      s.style.justifyContent = 'flex-end'
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <Image width={75} height={80} src={pdf} alt='pdf icon' />
        </div>
        <div className={styles.main}>
          <div className={styles.top}>
            <p className={styles.title}>{title}</p>
            <button className={styles.btn}>View Document</button>
          </div>
          <p className={styles.body}>{description}</p>

          <div id={'drop' + `${id}`} className='dropdown-content2'>
            <div className={styles.description}>
              <div className={styles.row2}>
                <div>
                  <p className={styles.top_p}>Citation : <span>{citation}</span></p>
                </div>
                <div>
                  <p className={styles.top_p}>Expiry Date : <span>{expiry_date.replaceAll('-', '/')}</span></p>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <p>Uploaded By : <span>{org}</span></p>
                </div>
                <div>
                  <p>Theme : <span>{theme}</span></p>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <p>Stakeholder : <span>
                    {
                      stake_holder.map(({ stake_holderName }) => {
                        return stake_holderName + ', ';
                      })
                    }
                  </span></p>
                </div>
                <div>
                  <p>Value Chain : <span>{''}</span></p>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <p>Geography : <span>{geography}</span></p>
                </div>
                <div>
                  <p>Urban / Rural : <span>{urban_rural}</span></p>
                </div>
              </div>

              <div className={styles.row}>
                <p>Language : <span>
                  {
                    language.map(({ lang }) => {
                      return lang + ', ';
                    })
                  }
                </span></p>
              </div>

              <div className={styles.row}>
                <p>Keywords : <span>{''}</span></p>
              </div>
            </div>
          </div>

          <div id='show-btn' className={styles.show_btn}>
            <div id='use-case' className={styles.use_case}>
              <p className={styles.head}>Use cases / Application</p>
              <p>This document can be used by relevant stakeholders to
                compare different technologies in India with respect to -
                features, performance, application, O&M, challenges & costing</p>
            </div>
            <p
              className={styles.drop_btn}
              onClick={() => {
                dropDown(document.getElementById('drop' + `${id}`), document.getElementById('show-btn'), document.getElementById('use-case'));
                setClicked(!clicked);
              }}
            >{clicked ? 'Show More...' : 'Show Less...'}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TenderCard