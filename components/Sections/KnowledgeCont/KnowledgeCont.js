import React from 'react';
import styles from './KnowledgeCont.module.css';
import KnowledgeCategories from '../KnowledgeCategories/KnowledgeCategories';
import Vendors from '../Vendors/Vendors';

const KnowledgeCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>All</h1>
        <section>
          <KnowledgeCategories />

          <Vendors />
        </section>
      </div>
    </>
  )
}

export default KnowledgeCont