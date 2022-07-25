import React from 'react';
import styles from './HomePageBottomSlider.module.css';
import Button from '../../Buttons/Submit/SubmitButton';

const HomePageBottomSlider = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.carousel} aria-label="Gallery">
          <ol className={styles.carousel__viewport}>
            <li id="carousel__slide_1"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}>
                <div className={styles.one}>
                  <Button title='Click here' style={styles.btn} />
                </div>
                <a href="#carousel__slide_3"
                  className={styles.carousel__prev}>Go to last slide</a>
                <a href="#carousel__slide_2"
                  className={styles.carousel__next}>Go to next slide</a>
              </div>
            </li>
            <li id="carousel__slide_2"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.two}>
                <Button title='Click here' style={styles.btn} />
              </div>
              <a href="#carousel__slide_1"
                className={styles.carousel__prev}>Go to previous slide</a>
              <a href="#carousel__slide_3"
                className={styles.carousel__next}>Go to next slide</a>
            </li>
            <li id="carousel__slide_3"
              tabindex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.three}>
                <Button title='Click here' style={styles.btn} />
              </div>
              <a href="#carousel__slide_2"
                className={styles.carousel__prev}>Go to previous slide</a>
              <a href="#carousel__slide_1"
                className={styles.carousel__next}>Go to next slide</a>
            </li>
          </ol>

          <aside className={styles.carousel__navigation}>
            <ol className={styles.carousel__navigation_list}>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_1"
                  className={styles.carousel__navigation_button}>Go to slide 1</a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_2"
                  className={styles.carousel__navigation_button}>Go to slide 2</a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_3"
                  className={styles.carousel__navigation_button}>Go to slide 3</a>
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </>
  )
}

export default HomePageBottomSlider