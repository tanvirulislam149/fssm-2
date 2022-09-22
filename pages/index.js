import Head from 'next/head';
import Header from '../components/Headers/Header';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footers/Footer';
import HomePageTopSection from '../components/Sections/HomePageTopSection/HomePageTopSection';
import HeaderComponent from '../components/Headers/HeaderComponent';
import { homePageText } from '../components/TextArrays';
import HomePageMidSection from '../components/Sections/HomePageMidSection/HomePageMidSection';
import HomePageBottomSlider from '../components/Sections/HomePageBottomSlider/HomePageBottomSlider';
import Layout from '../components/Sections/Layout/Layout';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{homePageText.title}</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <Header />
        <HeaderComponent />

        <h1 className={styles.title}>{homePageText.h1}</h1>

        <Layout>
          <HomePageTopSection />

          <HomePageMidSection />

          <HomePageBottomSlider />
        </Layout>

        <Footer />
      </div>
    </>
  )
}
