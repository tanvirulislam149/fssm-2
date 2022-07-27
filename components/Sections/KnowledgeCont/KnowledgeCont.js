import React from 'react';
import styles from './KnowledgeCont.module.css';
import KnowledgeCategories from '../KnowledgeCategories/KnowledgeCategories';
import Vendors from '../Vendors/Vendors';
import SetupAlerts from '../SetupAlerts/SetupAlerts';
import KnowledgeList from '../KnowledgeList/KnowledgeList';
import KnowledgeSectionNav from '../KnowledgeSectionNav/KnowledgeSectionNav';

const KnowledgeCont = () => {
  return (
    <>
      <div className={styles.container}>
        <KnowledgeSectionNav />

        <section>
          <div>
            <KnowledgeCategories />

            <SetupAlerts />

            <Vendors />
          </div>

          <KnowledgeList />
        </section>
      </div>
    </>
  )
}

export default KnowledgeCont