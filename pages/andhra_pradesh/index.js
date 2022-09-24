import React, { useEffect } from 'react';
import Footer from '../../components/Footers/Footer';
import TelanganaHeader from '../../components/Headers/TelanganaHeader';
import HomePageTopSection from '../../components/Sections/HomePageTopSection/HomePageTopSection';
import { homePageText } from '../../components/TextArrays';
import HomePageMidSection from '../../components/Sections/HomePageMidSection/HomePageMidSection';
import styles from '../../styles/Home.module.css';
import TelanganaBottomSection from '../../components/Sections/TelanganaBottomSection/TelanganaBottomSection';
import TelanganaMidSection from '../../components/Sections/TelanganaMidSection/TelanganaMidSection';
import TelanganaHeaderComponent from '../../components/Headers/TelanganaHeaderComponent';
import Layout from '../../components/Sections/Layout/Layout';

const AndraPradesh = () => {
  const handleScroll = () => {
    if (document.querySelector('#heading').getBoundingClientRect().bottom <= document.querySelector('#cont').getBoundingClientRect().bottom) {
      document.querySelector('#float').style.display = 'block';
    } else {
      document.querySelector('#float').style.display = 'none';
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <>
      <div id='float' className={styles.float}>
        <div>Towards ODF++</div>
      </div>

      <TelanganaHeader />
      <TelanganaHeaderComponent />

      <div
        onClick={() => {
          if (document.querySelector('.nav').classList.contains('none')) return;
          document.getElementById('check').click();
        }}>
        <h1 id='heading' className={styles.title2}><p>{homePageText.h1}</p>      <span>Towards ODF++</span></h1>

        <Layout>
          <HomePageTopSection />

          <HomePageMidSection />

          <TelanganaMidSection />

          <TelanganaBottomSection />
        </Layout>
      </div>

      <Footer />
    </>
  )
}

export default AndraPradesh