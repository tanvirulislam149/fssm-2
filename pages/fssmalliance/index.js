import React from 'react';
import styles from './About.module.css';
import Header from '../../components/Headers/Header';
import AboutDescription from '../../components/Sections/AboutDescription/AboutDescription';
import Footer from '../../components/Footers/Footer';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Layout from '../../components/Sections/Layout/Layout';

const About = () => {

  return (
    <>
      <div className={styles.container}>
        <Header />
        <HeaderComponent />

        <Layout>
          <AboutDescription />
        </Layout>

        <Footer />
      </div >
    </>
  )
}

export default About