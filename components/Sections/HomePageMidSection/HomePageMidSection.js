import React from 'react';
import Carousel from '../Carousel/Carousel';
import styles from './HomePageMidSection.module.css';
import Button from '../../Buttons/Submit/SubmitButton';
import { homePageMidSectionText } from '../../TextArrays';
import Link from 'next/link';

const HomePageMidSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>{homePageMidSectionText.title}</h2>
          <p className={styles.text}>{homePageMidSectionText.body}</p>
          <Link href='/fssmalliance'><Button title='Read More' style={styles.btn} /></Link>
        </div>
        <Carousel />
      </div>
    </>
  )
}

export default HomePageMidSection