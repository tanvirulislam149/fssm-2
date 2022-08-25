import React, { useState } from 'react';
import styles from './TenderCard.module.css';
import pdf from '../../../assets/pdf.png';
import Image from 'next/image';

const TenderCard = () => {
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
      <div className={styles.container}>
        <div className={styles.avatar}>
          <Image width={77} height={82} src={pdf} alt='pdf icon' />
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

          <p>Citation : <span>Athena Infonomics</span></p>

          <div id={'drop' + `1`} className='dropdown-content2'>
            <div className={styles.description}>
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
                <p>Keywords : <span>Evaluation,Learning,Monitoring,Sanitation service delivery,Indicators</span></p>
              </div>
            </div>
          </div>

          <div className={styles.show_btn}>
            <p
              onClick={() => {
                dropDown(document.getElementById('drop' + `1`));
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