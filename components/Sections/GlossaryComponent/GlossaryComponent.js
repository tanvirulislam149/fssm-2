import React from 'react';
import styles from './GlossaryComponent.module.css';
import FaqNavigation from '../FaqNavigation/FaqNavigation';
import GlossaryList from '../GlossaryList/GlossaryList';
import GlossaryLinkCard from '../../Cards/GlossaryLinkCard/GlossaryLinkCard';

const GlossaryComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Glossary</h1>
        <section>
          <FaqNavigation />

          <GlossaryLinkCard />

          <GlossaryList />
        </section>
      </div>
    </>
  )
}

export default GlossaryComponent