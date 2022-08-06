import React from 'react';
import styles from './HomePageBottomSlider.module.css';
import Link from 'next/link';

const HomePageBottomSlider = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.carousel} aria-label="Gallery">
          <ol className={styles.carousel__viewport}>
            <li className={`${styles.carousel__slide} ${styles.helpers}`}></li>
            <li className={`${styles.carousel__slide} ${styles.helpers}`}></li>

            <li id="carousel__slide_1"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}>
                <div className={styles.one}>
                  <Link href='https://niti.gov.in/sites/default/files/2021-01/NITI-NFSSM-Alliance-Report-for-digital.pdf'><button className={styles.btn}>Click here</button></Link>
                </div>
                {/* <a href="#carousel__slide_3"
                  className={styles.carousel__prev}>&lt;</a>
                <a href="#carousel__slide_2"
                  className={styles.carousel__next}>&gt;</a> */}
              </div>
            </li>
            <li id="carousel__slide_2"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.two}>
                <Link href='http://swachhfssm.in/files/Toilet%20Ke%20Baad%20Kya.pdf'><button className={styles.btn}>Click here</button></Link>
              </div>
              {/* <a href="#carousel__slide_1"
                className={styles.carousel__prev}>&lt;</a>
              <a href="#carousel__slide_3"
                className={styles.carousel__next}>&gt;</a> */}
            </li>
            <li id="carousel__slide_3"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.three}>
                <Link href='https://www.niua.org/scbp/?q=training-modules'><button className={styles.btn}>Click here</button></Link>
              </div>
              {/* <a href="#carousel__slide_2"
                className={styles.carousel__prev}>&lt;</a>
              <a href="#carousel__slide_1"
                className={styles.carousel__next}>&gt;</a> */}
            </li>
          </ol>

          <aside className={styles.carousel__navigation}>
            <ol className={styles.carousel__navigation_list}>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_1"
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_2"
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_3"
                  className={styles.carousel__navigation_button}></a>
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </>
  )
}

export default HomePageBottomSlider