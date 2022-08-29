import React, { useState } from 'react';
import styles from './TenderCard.module.css';
import pdf from '../../../assets/pdf.png';
import Image from 'next/image';

const TenderCard = () => {
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
            <p className={styles.title}>BMGF MLE Wireframe for FSSM</p>
            <button className={styles.btn}>View Document</button>
          </div>
          <p className={styles.body}>Effectiveness of investments in sanitary improvements can be further
            enhanced through coordination and exchange between stakeholders. This can
            be facilitated through implementation of a homogenized Monitoring, Learning
            and Evaluation (MLE) platform for the sector, which can integrate learnings
            from multiple sources (Government and non-Government), to enhance value for
            money of interventions. This report showcases a wireframe for Monitoring
            Learning and Evaluation (MLE) platform, which could define standards for
            evidence.
          </p>

          <div id={'drop' + `1`} className='dropdown-content2'>
            <div className={styles.description}>
              <div className={styles.row2}>
                <div>
                  <p className={styles.top_p}>Citation : <span>Athena Infonomics</span></p>
                </div>
                <div>
                  <p className={styles.top_p}>Expiry Date : <span>15/11/2022</span></p>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <p>Uploaded By : <span>Athena</span></p>
                </div>
                <div>
                  <p>Theme : <span>Monitoring and Evaluation</span></p>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <p>Stakeholder : <span>Donor Agencies</span></p>
                </div>
                <div>
                  <p>Value Chain : <span>All</span></p>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <p>Geography : <span>National</span></p>
                </div>
                <div>
                  <p>Urban / Rural : <span>Urban</span></p>
                </div>
              </div>

              <div className={styles.row}>
                <p>Language : <span>English</span></p>
              </div>

              <div className={styles.row}>
                <p>Keywords : <span>Evaluation, Learning, Monitoring, Sanitation, Service delivery, Indicators</span></p>
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
                dropDown(document.getElementById('drop' + `1`), document.getElementById('show-btn'), document.getElementById('use-case'));
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