import React from 'react';
import DiscussionCard from '../../Cards/DiscussionCard/DiscussionCard';
import styles from './DiscussionCont.module.css';

const DiscussionCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Discussion Forum</h1>
        <section>
          <DiscussionCard />
        </section>
      </div>
    </>
  )
}

export default DiscussionCont