import React from 'react';
import styles from './About.module.css';
import Header from '../../components/Headers/Header';
import AboutDescription from '../../components/Sections/AboutDescription/AboutDescription';
import Footer from '../../components/Footers/Footer';
import HeaderComponent from '../../components/Headers/HeaderComponent';

const About = () => {

  return (
    <>
      <div className={styles.container}>
        <Header />
        <HeaderComponent />

        <AboutDescription />

        <Footer />
      </div>
    </>
  )
}

export default About