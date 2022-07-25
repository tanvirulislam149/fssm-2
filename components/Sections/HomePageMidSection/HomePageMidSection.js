import React from 'react';
import Carousel from '../Carousel/Carousel';
import styles from './HomePageMidSection.module.css';
import Button from '../../Buttons/Submit/SubmitButton';

const HomePageMidSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>The need of the hour - FSSM for India</h2>
          <p className={styles.text}>The Swachh Bharat Mission - Urban is poised at a crucial juncture.
            While cities and towns have become cleaner and free of open defecation,
            and SBM-U has captured the mind-space of citizens, there is still a lot that
            remains to be done to ensure that the gains made under the Phase I of SBM-U are
            sustained and carried forward. As outlined by the Hon’ble Finance Minister of
            India in the 2021 Budget, the focus on complete faecal sludge and septage
            management (FSSM) will be central to this effort.

            With 60% of toilets in urban India relying on on-site sanitation systems,
            FSSM promises a means to achieve the SDG target 6.2 of adequate, inclusive and
            safely managed sanitation for all in a time-bound manner. FSSM prioritizes human
            excreta management, a waste stream with the highest potential for spreading
            diseases. It is a low-cost and easily scalable sanitation solution that focuses
            on safe collection, transportation, treatment, and reuse of human waste,
            especially in small and medium cities and in areas within larger cities not
            covered by sewerage systems.</p>
          <Button title='Read More' style={styles.btn} />
        </div>
        <Carousel />
      </div>
    </>
  )
}

export default HomePageMidSection