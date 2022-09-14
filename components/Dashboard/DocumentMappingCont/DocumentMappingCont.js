import React from 'react';
import styles from './DocumentMappingCont.module.css';
import close from '../../../assets/Close.png';
import Image from 'next/image';
import MappingForm from '../../Forms/MappingForm/MappingForm';

const data = [
  { name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf', id: 1, date: '2021-08-22 08:38:40 AM' },
  { name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf', id: 2, date: '2021-08-22 08:38:40 AM' },
]

const DocumentMappingCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Documents Mapping</h4>

        <h4 className={styles.label2}>Unmapped Documents</h4>
        <section>
          <div className={styles.cont}>
            <div className={styles.heading}>
              <div className={styles.one}>
                <p>S.NO</p>
              </div>
              <div className={styles.two}>
                <p>Thumbnail</p>
              </div>
              <div className={styles.three}>
                <p>Document Name</p>
              </div>
              <div className={styles.four}>
                <p>Created Date</p>
              </div>
              <div className={styles.five}>
                <p>Action</p>
              </div>
            </div>

            {
              data.map(({ name, id, date }, i) => {
                return (
                  <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                    <div className={styles.one}>
                      <p>{i + 1}</p>
                    </div>
                    <div className={styles.two}>
                      <div className={styles.pdf}>
                        pdf
                      </div>
                    </div>
                    <div className={styles.three}>
                      <p>{name}</p>
                    </div>
                    <div className={styles.four}>
                      <p>{date}</p>
                    </div>
                    <div className={styles.five}>
                      <button
                        className={`${styles.btn} ${styles.mapbtn}`}
                        data-modal="myModal1"
                        onClick={() => {
                          document.querySelector('.modal2').style.display = "flex";
                        }}
                      >Map</button>
                      <button className={`${styles.btn} ${styles.viewbtn}`}>View</button>
                      <button className={`${styles.btn} ${styles.delbtn}`}>Delete</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>

      <div id="myModal1" className='modal2'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.modal2').style.display = "none";
            //document.getElementById('user-cat').style.display = 'none';
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.modal2').style.display = "none";
              //document.getElementById('user-cat').style.display = 'none';
            }}
          >
            <p>Documents Mapping</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.form}>
            <MappingForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentMappingCont