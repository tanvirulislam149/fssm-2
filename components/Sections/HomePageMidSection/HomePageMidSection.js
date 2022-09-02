import React from 'react';
import Carousel from '../Carousel/Carousel';
import styles from './HomePageMidSection.module.css';
import Button from '../../Buttons/Submit/SubmitButton';
import { homePageMidSectionText } from '../../TextArrays';
import { useRouter } from 'next/router';

const HomePageMidSection = () => {
  const navigate = useRouter();
  const handleRoute = () => {
    navigate.push('/fssmalliance');
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>{homePageMidSectionText.title}  {homePageMidSectionText.title2}</h2>
          <p className={styles.text}>{homePageMidSectionText.body} <br />{homePageMidSectionText.body2}</p>
          <Button
            title='Read More'
            onClick={() => { handleRoute() }}
            style={styles.btn} />
        </div>
        <Carousel />
      </div>
    </>
  )
}

export default HomePageMidSection