import React from 'react';
import styles from './Carousel.module.css';
import Button from '../../Buttons/Submit/SubmitButton';
import { homePageMidSectionText } from '../../TextArrays';

const Carousel = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.carousel} aria-label="Gallery">
          <ol className={styles.carousel__viewport}>
            <li id="carousel__slide1"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}>
                <div className={styles.one}>
                  <h3 className={styles.title}>{homePageMidSectionText.slide1}</h3>
                  <ul className={styles.list}>
                    <li>{homePageMidSectionText.cardText}</li>
                    <li>{homePageMidSectionText.cardText}</li>
                    <li>{homePageMidSectionText.cardText}</li>
                  </ul>
                  <Button title='Show more' style={styles.btn} />
                </div>
                <a href="#carousel__slide4"
                  className={styles.carousel__prev}></a>
                <a href="#carousel__slide2"
                  className={styles.carousel__next}></a>
              </div>
            </li>
            <li id="carousel__slide2"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.two}>
                <h3 className={styles.title}>{homePageMidSectionText.slide2}</h3>
                <ul className={styles.list}>
                  <li>{homePageMidSectionText.cardText}</li>
                  <li>{homePageMidSectionText.cardText}</li>
                  <li>{homePageMidSectionText.cardText}</li>
                </ul>
                <Button title='Show more' style={styles.btn} />
              </div>
              <a href="#carousel__slide1"
                className={styles.carousel__prev}></a>
              <a href="#carousel__slide3"
                className={styles.carousel__next}></a>
            </li>
            <li id="carousel__slide3"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.three}>
                <h3 className={styles.title}>{homePageMidSectionText.slide3}</h3>
                <ul className={styles.list}>
                  <li>{homePageMidSectionText.cardText}</li>
                  <li>{homePageMidSectionText.cardText}</li>
                  <li>{homePageMidSectionText.cardText}</li>
                </ul>
                <Button title='Show more' style={styles.btn} />
              </div>
              <a href="#carousel__slide2"
                className={styles.carousel__prev}></a>
              <a href="#carousel__slide4"
                className={styles.carousel__next}></a>
            </li>
            <li id="carousel__slide4"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.four}>
                <h3 className={styles.title}>{homePageMidSectionText.slide4}</h3>
                <ul className={styles.list}>
                  <li>{homePageMidSectionText.cardText}</li>
                  <li>{homePageMidSectionText.cardText}</li>
                  <li>{homePageMidSectionText.cardText}</li>
                </ul>
                <Button title='Show more' style={styles.btn} />
              </div>
              <a href="#carousel__slide3"
                className={styles.carousel__prev}></a>
              <a href="#carousel__slide1"
                className={styles.carousel__next}></a>
            </li>
          </ol>
          <aside className={styles.carousel__navigation}>
            <ol className={styles.carousel__navigation_list}>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide1"
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide2"
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide3"
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide4"
                  className={styles.carousel__navigation_button}></a>
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </>
  )
}


export default Carousel