import React from 'react';
import Footer from '../../components/Footers/Footer';
import HomePageMidSection from '../../components/Sections/HomePageMidSection/HomePageMidSection';
import TelanganaTopSection from '../../components/Sections/TelanganaTopSection/TelanganaTopSection';
import TelanganaMidSection from '../../components/Sections/TelanganaMidSection/TelanganaMidSection';
import TelanganaBottomSection from '../../components/Sections/TelanganaBottomSection/TelanganaBottomSection';
import TelanganaHeader from '../../components/Headers/TelanganaHeader';
import TelanganaHeaderComponent from '../../components/Headers/TelanganaHeaderComponent';
import Layout from '../../components/Sections/Layout/Layout';
import Head from 'next/head';

const Telangana = () => {
  return (
    <>
      <Head>
        <title>Telangana</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <TelanganaHeader />
      <TelanganaHeaderComponent />

      <TelanganaTopSection />

      <Layout>
        <HomePageMidSection />

        <TelanganaMidSection />

        <TelanganaBottomSection />
      </Layout>

      <Footer />
    </>
  )
}

export default Telangana