import React from 'react';
import Header from '../../components/Headers/Header';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import Footer from '../../components/Footers/Footer';
import styles from './HelpDesk.module.css';
import QuestionForm from '../../components/Forms/Help Desk/QuestionForm';

const HelpDesk = () => {
  return (
    <>
      <Header />
      <HeaderComponent />

      <QuestionForm />

      <Footer />
    </>
  )
}

export default HelpDesk