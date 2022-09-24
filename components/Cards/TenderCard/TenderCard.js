import React, { useState } from 'react';
import styles from './TenderCard.module.css';
import pdf from '../../../assets/pdf.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const TenderCard = ({ theme, id, urban_rural, org, document_type, expiry_date, citation, description, title, value_chain, keywords, language, stake_holder, geography }) => {
  const [clicked, setClicked] = useState(true);

  const router = useRouter();
  const { subitem } = router.query;


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

  const handleNav = () => {
    router.pathname === '/knowledgedata' ? router.push(`/knowledgedatadownload?id=${id}&category=${router.query.category}&subitem=${subitem}&title=${router.query.title}`) : router.push(`/tenderdownload?id=${id}`);
  }

  return (
    <>
      <div className={styles.container}>
        <div></div>
        <div className={styles.avatar}>
          <Image width={75} height={80} src={pdf} alt='pdf icon' />
          <p className={`${styles.title} ${styles.title2}`}>{title}</p>
        </div>
        <div className={styles.main}>
          <div className={styles.top}>
            <p className={`${styles.title} ${styles.title3}`}>{title}</p>
            <button className={styles.btn} onClick={() => { handleNav(); }}>View Document</button>
          </div>
          <p className={styles.body}>{description}</p>

          <div id={'drop' + `${id}`} className='dropdown-content2'>
            <div className={styles.description}>
              <div className={styles.row}>
                <div>
                  <p className={styles.top_p}>Citation </p><span>: {citation}</span>
                </div>
                {expiry_date ? <div>
                  <p className={styles.top_p}>Expiry Date </p><span>: {expiry_date.replaceAll('-', '/')}</span>
                </div> : null}
              </div>

              <div className={styles.row}>
                <div>
                  <p>Uploaded By </p><span>: {org}</span>
                </div>
                <div>
                  <p>Theme </p><span>: {theme}</span>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <p>Stakeholder </p>
                  <span>
                    : {
                      stake_holder.map(({ stake_holderName }) => {
                        return stake_holderName + ', ';
                      })
                    }
                  </span>
                </div>
                <div>
                  <p>Value Chain </p><span>: {''}</span>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <p>Geography </p><span>: {geography}</span>
                </div>
                <div>
                  <p>Urban / Rural </p><span>: {urban_rural}</span>
                </div>
              </div>

              <div className={styles.row}>
                <p>Language </p>
                <span>
                  : {
                    language.map(({ lang }) => {
                      return lang + ', ';
                    })
                  }
                </span>
              </div>

              <div className={styles.row}>
                <p>Keywords </p><span>: {''}</span>
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