import React from 'react';
import styles from './Carousel.module.css';
import Button from '../../Buttons/Submit/SubmitButton';

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
                  <h3 className={styles.title}>Latest News</h3>
                  <ul className={styles.list}>
                    <li>Amet minim mollit non deserunt ullamco est sit aliqua</li>
                    <li>Amet minim mollit non deserunt ullamco est sit aliqua</li>
                    <li>Amet minim mollit non deserunt ullamco est sit aliqua</li>
                  </ul>
                  <Button title='Show more' style={styles.btn} />
                </div>
                <a href="#carousel__slide4"
                  className={styles.carousel__prev}>Go to last slide</a>
                <a href="#carousel__slide2"
                  className={styles.carousel__next}>Go to next slide</a>
              </div>
            </li>
            <li id="carousel__slide2"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.two}></div>
              <a href="#carousel__slide1"
                className={styles.carousel__prev}>Go to previous slide</a>
              <a href="#carousel__slide3"
                className={styles.carousel__next}>Go to next slide</a>
            </li>
            <li id="carousel__slide3"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.three}></div>
              <a href="#carousel__slide2"
                className={styles.carousel__prev}>Go to previous slide</a>
              <a href="#carousel__slide4"
                className={styles.carousel__next}>Go to next slide</a>
            </li>
            <li id="carousel__slide4"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.four}></div>
              <a href="#carousel__slide3"
                className={styles.carousel__prev}>Go to previous slide</a>
              <a href="#carousel__slide1"
                className={styles.carousel__next}>Go to first slide</a>
            </li>
          </ol>
          <aside className={styles.carousel__navigation}>
            <ol className={styles.carousel__navigation_list}>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide1"
                  className={styles.carousel__navigation_button}>Go to slide 1</a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide2"
                  className={styles.carousel__navigation_button}>Go to slide 2</a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide3"
                  className={styles.carousel__navigation_button}>Go to slide 3</a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide4"
                  className={styles.carousel__navigation_button}>Go to slide 4</a>
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </>
  )
}


export default Carousel