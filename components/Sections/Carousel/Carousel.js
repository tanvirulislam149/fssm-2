import React, { useEffect } from 'react';
import styles from './Carousel.module.css';
import Button from '../../Buttons/Submit/SubmitButton';
import { homePageMidSectionText } from '../../TextArrays';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Carousel = () => {
  const router = useRouter();

  const id = router.asPath.slice(router.asPath.length - 1);

  useEffect(() => {
    document.getElementById(`carousel_${id}`).classList.add('carousel_select');
  }, [])

  const handleChange = (el) => {
    document.getElementById('carousel_1').classList.remove('carousel_select');
    document.getElementById('carousel_2').classList.remove('carousel_select');
    document.getElementById('carousel_3').classList.remove('carousel_select');
    document.getElementById('carousel_4').classList.remove('carousel_select');
    el.classList.add('carousel_select');
  }


  return (
    <>
      <div className={styles.container}>
        <section className={styles.carousel} aria-label="Gallery">
          <ol className={styles.carousel__viewport}>
            <li id="carousel__slide1"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}>
                <div className={styles.one}>
                  <h3 className={styles.title}>{homePageMidSectionText.slide1}</h3>
                  <ul className={styles.list}>
                    {homePageMidSectionText.card1.map(({ id, link, text }) => {
                      return (
                        <Link href={link} key={id}><a><li>{text}</li></a></Link>
                      )
                    })}
                  </ul>
                  <Button title='Show more' style={styles.btn} />
                </div>
                <a href="#carousel__slide4"
                  onClick={() => {
                    handleChange(document.getElementById('carousel_4'));
                  }}
                  className={styles.carousel__prev}>&lt;</a>
                <a href="#carousel__slide2"
                  onClick={() => {
                    handleChange(document.getElementById('carousel_2'));
                  }}
                  className={styles.carousel__next}>&gt;</a>
              </div>
            </li>
            <li id="carousel__slide2"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.two}>
                <h3 className={styles.title}>{homePageMidSectionText.slide2}</h3>
                <ul className={styles.list}>
                  {homePageMidSectionText.card2.map(({ id, link, text }) => {
                    return (
                      <Link href={link} key={id}><a><li>{text}</li></a></Link>
                    )
                  })}
                </ul>
                <Button title='Show more' style={styles.btn} />
              </div>
              <a href="#carousel__slide1"
                onClick={() => {
                  handleChange(document.getElementById('carousel_1'));
                }}
                className={styles.carousel__prev}>&lt;</a>
              <a href="#carousel__slide3"
                onClick={() => {
                  handleChange(document.getElementById('carousel_3'));
                }}
                className={styles.carousel__next}>&gt;</a>
            </li>
            <li id="carousel__slide3"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.three}>
                <h3 className={styles.title}>{homePageMidSectionText.slide3}</h3>
                <ul className={styles.list}>
                  {homePageMidSectionText.card3.map(({ id, link, text }) => {
                    return (
                      <Link href={link} key={id}><a><li>{text}</li></a></Link>
                    )
                  })}
                </ul>
                <Button title='Show more' style={styles.btn} />
              </div>
              <a href="#carousel__slide2"
                onClick={() => {
                  handleChange(document.getElementById('carousel_2'));
                }}
                className={styles.carousel__prev}>&lt;</a>
              <a href="#carousel__slide4"
                onClick={() => {
                  handleChange(document.getElementById('carousel_4'));
                }}
                className={styles.carousel__next}>&gt;</a>
            </li>
            <li id="carousel__slide4"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={styles.four}>
                <h3 className={styles.title}>{homePageMidSectionText.slide4}</h3>
                <ul className={styles.list}>
                  {homePageMidSectionText.card4.map(({ id, link, text }) => {
                    return (
                      <Link href={link} key={id}><a><li>{text}</li></a></Link>
                    )
                  })}
                </ul>
                <Button title='Show more' style={styles.btn} />
              </div>
              <a href="#carousel__slide3"
                onClick={() => {
                  handleChange(document.getElementById('carousel_3'));
                }}
                className={styles.carousel__prev}>&lt;</a>
              <a href="#carousel__slide1"
                onClick={() => {
                  handleChange(document.getElementById('carousel_1'));
                }}
                className={styles.carousel__next}>&gt;</a>
            </li>
          </ol>
          <aside className={styles.carousel__navigation}>
            <ol className={styles.carousel__navigation_list}>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide1" id='carousel_1'
                  onClick={() => {
                    handleChange(document.getElementById('carousel_1'))
                  }}
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide2" id='carousel_2'
                  onClick={() => {
                    handleChange(document.getElementById('carousel_2'))
                  }}
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide3" id='carousel_3'
                  onClick={() => {
                    handleChange(document.getElementById('carousel_3'))
                  }}
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide4" id='carousel_4'
                  onClick={() => {
                    handleChange(document.getElementById('carousel_4'))
                  }}
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