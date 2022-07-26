import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import styles from './HelpDesk.module.css';
import HelpDesk from '../../components/Sections/HelpDesk/HelpDesk';
import Disclaimer from '../../components/Sections/Disclaimer/Disclaimer';

const HelpDeskCont = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <HelpDesk />

      <Disclaimer />

      <Footer />
    </>
  )
}

export default HelpDeskCont