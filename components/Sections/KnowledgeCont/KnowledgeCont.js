import React from 'react';
import styles from './KnowledgeCont.module.css';
import KnowledgeCategories from '../KnowledgeCategories/KnowledgeCategories';
import Vendors from '../Vendors/Vendors';
import SetupAlerts from '../SetupAlerts/SetupAlerts';
import KnowledgeList from '../KnowledgeList/KnowledgeList';
import KnowledgeSectionNav from '../KnowledgeSectionNav/KnowledgeSectionNav';
import HeaderComponent from '../../Headers/HeaderComponent';

const KnowledgeCont = () => {
  return (
    <>
      <div className={styles.container}>
        <section>
          <HeaderComponent />
          <KnowledgeSectionNav />
          <div className={styles.cont}>

            <div>
              <KnowledgeCategories />

              <SetupAlerts />

              <Vendors />
            </div>

            <KnowledgeList />
          </div>
        </section>
      </div>
    </>
  )
}

export default KnowledgeCont