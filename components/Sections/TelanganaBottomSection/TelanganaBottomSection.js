import React from 'react';
import styles from './TelanganaBottomSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import right from '../../../assets/rigtt.png';
import left from '../../../assets/left.png';
import { useRouter } from 'next/router';

const TelanganaBottomSection = () => {
  const router = useRouter();

  var id = router.pathname.slice(1);

  const handleChange = (el) => {
    document.getElementById('carousel__1').classList.remove('carousel_select');
    document.getElementById('carousel__2').classList.remove('carousel_select');
    document.getElementById('carousel__3').classList.remove('carousel_select');
    document.getElementById('carousel__4').classList.remove('carousel_select');
    el.classList.add('carousel_select');
  }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.carousel} aria-label="Gallery">
          <ol className={styles.carousel__viewport}>
            <li className={`${styles.carousel__slide} ${styles.helpers}`}></li>
            <li className={`${styles.carousel__slide} ${styles.helpers}`}></li>
            <li className={`${styles.carousel__slide} ${styles.helpers}`}></li>

            <li id="carousel__slide_1"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}>
                <div className={id === 'telangana' ? styles.one : styles.five}>
                  <Link href={id === 'telangana' ? 'https://swachhfssm.in/website/images/ta-1.jpg' : 'https://swachhfssm.in/website/images/ap-1.jpg'}><button className={styles.btn}>Click here</button></Link>
                </div>
                <a href="#carousel__slide_3"
                  onClick={() => {
                    handleChange(document.getElementById('carousel__3'));
                  }}
                  className={styles.carousel__prev}><Image height={12} width={8} alt='arrow' src={left} /></a>
                <a href="#carousel__slide_2"
                  onClick={() => {
                    handleChange(document.getElementById('carousel__2'));
                  }}
                  className={styles.carousel__next}><Image height={12} width={8} alt='arrow' src={right} /></a>
              </div>
            </li>
            <li id="carousel__slide_2"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={id === 'telangana' ? styles.two : styles.six}>
                <Link href={id === 'telangana' ? 'https://swachhfssm.in/website/images/ta-2.jpg' : 'https://swachhfssm.in/website/images/ap-2.jpg'}><button className={styles.btn}>Click here</button></Link>
              </div>
              <a href="#carousel__slide_1"
                onClick={() => {
                  handleChange(document.getElementById('carousel__1'));
                }}
                className={styles.carousel__prev}><Image height={12} width={8} alt='arrow' src={left} /></a>
              <a href="#carousel__slide_3"
                onClick={() => {
                  handleChange(document.getElementById('carousel__3'));
                }}
                className={styles.carousel__next}><Image height={12} width={8} alt='arrow' src={right} /></a>
            </li>
            <li id="carousel__slide_3"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={id === 'telangana' ? styles.three : styles.seven}>
                <Link href={id === 'telangana' ? 'https://swachhfssm.in/website/images/ta-3.jpg' : 'https://swachhfssm.in/website/images/ap-3.jpg'}><button className={styles.btn}>Click here</button></Link>
              </div>
              <a href="#carousel__slide_2"
                onClick={() => {
                  handleChange(document.getElementById('carousel__2'));
                }}
                className={styles.carousel__prev}><Image height={12} width={8} alt='arrow' src={left} /></a>
              <a href="#carousel__slide_4"
                onClick={() => {
                  handleChange(document.getElementById('carousel__4'));
                }}
                className={styles.carousel__next}><Image height={12} width={8} alt='arrow' src={right} /></a>
            </li>
            <li id="carousel__slide_4"
              tabIndex="0"
              className={styles.carousel__slide}>
              <div className={styles.carousel__snapper}></div>
              <div className={id === 'telangana' ? styles.four : styles.eight}>
                <Link href={id === 'telangana' ? 'https://swachhfssm.in/website/images/ta-4.jpg' : 'https://swachhfssm.in/website/images/ap-4.jpg'}><button className={styles.btn}>Click here</button></Link>
              </div>
              <a href="#carousel__slide_3"
                onClick={() => {
                  handleChange(document.getElementById('carousel__3'));
                }}
                className={styles.carousel__prev}><Image height={12} width={8} alt='arrow' src={left} /></a>
              <a href="#carousel__slide_1"
                onClick={() => {
                  handleChange(document.getElementById('carousel__1'));
                }}
                className={styles.carousel__next}><Image height={12} width={8} alt='arrow' src={right} /></a>
            </li>
          </ol>

          <aside className={styles.carousel__navigation}>
            <ol className={styles.carousel__navigation_list}>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_1" id='carousel__1'
                  onClick={() => {
                    handleChange(document.getElementById('carousel__1'))
                  }}
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_2" id='carousel__2'
                  onClick={() => {
                    handleChange(document.getElementById('carousel__2'))
                  }}
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_3" id='carousel__3'
                  onClick={() => {
                    handleChange(document.getElementById('carousel__3'))
                  }}
                  className={styles.carousel__navigation_button}></a>
              </li>
              <li className={styles.carousel__navigation_item}>
                <a href="#carousel__slide_4" id='carousel__4'
                  onClick={() => {
                    handleChange(document.getElementById('carousel__4'))
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

export default TelanganaBottomSection