import React from 'react';
import AdvancedSearchForm from '../../Forms/AdvancedSearch/AdvancedSearchForm';
import styles from './AdvancedSearchCont.module.css';

const AdvancedSearchCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Advanced Search</h1>
        <section>
          <AdvancedSearchForm />
        </section>
      </div>
    </>
  )
}

export default AdvancedSearchCont