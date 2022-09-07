import React, { useEffect, useState } from 'react';
import styles from './TenderDownloadCont.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { getExpiredTenders } from '../../../services/tenderServices';
import { useRouter } from 'next/router';
import pdf from '../../../assets/pdf.png';
import Image from 'next/image';

const TenderDownloadCont = () => {
  const [loading, setLoading] = useState(true);
  const [tenders, setTenders] = useState([]);
  const [clicked, setClicked] = useState(true);

  const router = useRouter();
  const path = router.query.id;

  const dropDown = (e, s, u, u2, c, ex, m) => {
    if (e.classList.contains("active-dropdown")) {
      e.style.maxHeight = 0;
      e.classList.remove("active-dropdown");
      u.style.display = 'block';
      u2.classList.add('none');
      c.style.display = 'flex';
      ex.classList.add('none');
      s.style.display = 'flex';
      m.classList.add('none');
    } else {
      e.style.maxHeight = 'max-content';
      e.classList.add("active-dropdown");
      u.style.display = 'none';
      u2.classList.remove('none');
      c.style.display = 'none';
      ex.classList.remove('none');
      s.style.display = 'block';
      m.classList.remove('none');
    }
  }

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  useEffect(() => {
    getExpiredTenders((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        console.log({ r: res })
        res.data['Expired Tenders'].forEach(item => {
          if (item.id === Number(path)) {
            setTenders(item);
            return;
          }
        });
      }
    });
  }, [])

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Tenders</h1>

        <section>
          {
            loading ? <div className={styles.justify_center}><CircularProgress /></div> :
              <div className={styles.cont}>
                <div className={styles.avatar}>
                  <Image width={75} height={80} src={pdf} alt='pdf icon' />
                </div>
                <div className={styles.main}>
                  <div className={styles.top}>
                    <p className={styles.heading}>{tenders?.title}</p>
                    <button className={styles.btn}>Dowload</button>
                  </div>
                  <p className={styles.body}>{tenders?.description}</p>

                  <div id={'drop' + `${path}`} className='active-dropdown'>
                    <div className={styles.description}>
                      <div id='use-case2' className={`${styles.use_case2}`}>
                        <p className={styles.head}>Use cases / Application</p>
                        <p>This document can be used by relevant stakeholders to
                          compare different technologies in India with respect to -
                          features, performance, application, O&M, challenges & costing</p>
                      </div>

                      <div id='cite' style={{ display: 'none' }} className={`none ${styles.row2}`}>
                        <div>
                          <p className={styles.top_p}>Citation : <span>{tenders?.citation}</span></p>
                        </div>
                        {tenders?.expiry_date ? <div>
                          <p className={styles.top_p}>Expiry Date : <span>{tenders?.expiry_date.replaceAll('-', '/')}</span></p>
                        </div> : null}
                      </div>

                      <div id='main' className={styles.main2}>
                        <div className={styles.row}>
                          <div>
                            <p>Uploaded By </p><span>: {tenders?.organization?.org_name}</span>
                          </div>
                          <div>
                            <p>Theme </p><span>: {tenders?.theme?.theme_title}</span>
                          </div>
                        </div>

                        <div className={styles.row}>
                          <div>
                            <p>Stakeholder </p>
                            <span>
                              : {
                                tenders?.stake_holder?.map(({ stake_holderName }) => {
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
                            <p>Geography </p><span>: {tenders?.geography}</span>
                          </div>
                          <div>
                            <p>Urban / Rural </p><span>: {tenders?.status}</span>
                          </div>
                        </div>

                        <div className={styles.row}>
                          <p>Language </p>
                          <span>
                            : {
                              tenders?.language?.map(({ lang }) => {
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
                  </div>

                  <div id='show-btn' className={styles.show_btn}>
                    <div id='use-case' className={`none ${styles.use_case}`}>
                      <p className={styles.head}>Use cases / Application</p>
                      <p>This document can be used by relevant stakeholders to
                        compare different technologies in India with respect to -
                        features, performance, application, O&M, challenges & costing</p>
                    </div>

                    <div id='extra' className={`${styles.extra}`}>
                      <div className={styles.box}>
                        <p className={styles.h5}>How is this document helpful</p>
                        <p>This Compendium plays the role of a reference tool for
                          decision-makers, technologies and relevant stakeholders</p>
                      </div>

                      <div className={styles.box}>
                        <p className={styles.h5}>Objective of the document</p>
                        <p>This Compendium is primarily focused on the non-sewered urban
                          centres with and does not relate to the requirements for sewage treatment</p>
                      </div>

                      <div className={styles.key_highlights}>
                        <p className={styles.h5}>Keyhighlights</p>
                        <p>The technologies based on the treatment mechanism are grouped under the categories listed
                          below:</p>
                        <br />
                        <p className={styles.ul}>A. Biological Treatment</p>
                        <ol>
                          <li>Decentralized wastewater treatment System (DEWATS)</li>
                          <li>Sludge Drying Beds, also with Co-composting (mostly in combination with sludge drying bed)</li>
                          <li>Planted Drying Beds</li>
                          <li>Upflow Anaerobic Sludge Blanket (UASB)</li>
                          <li>Co-treatment with Sewage</li>
                          <li>Sludge settling and MBBR: Jabalpur FSTP</li>
                        </ol>
                        <br />
                        <p className={styles.ul}>B. Non-biological treatment</p>
                        <ol>
                          <li>Pyrolysis (thermal process)</li>
                          <li>Mechanized De-watering and MBBR</li>
                        </ol>
                      </div>
                    </div>

                    <div className={styles.btn_cont}>
                      <p
                        className={styles.drop_btn}
                        onClick={() => {
                          dropDown(document.getElementById('drop' + `${path}`),
                            document.getElementById('show-btn'),
                            document.getElementById('use-case'),
                            document.getElementById('use-case2'),
                            document.getElementById('cite'),
                            document.getElementById('extra'),
                            document.getElementById('main')
                          );
                          setClicked(!clicked);
                        }}
                      >{clicked ? 'Show Less...' : 'Show More...'}</p>
                    </div>
                  </div>
                </div>
              </div>
          }
        </section>
      </div>
    </>
  )
}

export default TenderDownloadCont