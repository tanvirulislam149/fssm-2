import React from 'react';
import Footer from '../../components/Footers/Footer';
import HomePageMidSection from '../../components/Sections/HomePageMidSection/HomePageMidSection';
import TelanganaTopSection from '../../components/Sections/TelanganaTopSection/TelanganaTopSection';
import TelanganaMidSection from '../../components/Sections/TelanganaMidSection/TelanganaMidSection';
import TelanganaBottomSection from '../../components/Sections/TelanganaBottomSection/TelanganaBottomSection';
import TelanganaHeader from '../../components/Headers/TelanganaHeader';
import TelanganaHeaderComponent from '../../components/Headers/TelanganaHeaderComponent';
import Layout from '../../components/Sections/Layout/Layout';

const Telangana = () => {
  return (
    <>
      <TelanganaHeader />
      <TelanganaHeaderComponent />

      <div
        onClick={() => {
          if (document.querySelector('.nav').classList.contains('none')) return;
          document.getElementById('check').click();
        }}>
        <TelanganaTopSection />

        <Layout>

          <HomePageMidSection />

          <TelanganaMidSection />

          <TelanganaBottomSection />
        </Layout>
      </div>

      <Footer />
    </>
  )
}

export default Telangana