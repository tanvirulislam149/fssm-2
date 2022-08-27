import React from 'react';
import styles from './Statistics.module.css';
import Image from 'next/image';
import ic1 from '../../../../assets/ic1.png';
import ic2 from '../../../../assets/ic2.png';
import ic3 from '../../../../assets/ic3.png';

const Statistics = () => {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.one}>
          <div>
            <Image height={40} width={40} src={ic1} alt='icon' />
          </div>
          <div>
            <p>No of Docs Uploa.....</p>
            <h6>342</h6>
          </div>
        </div>
        <div className={styles.two}>
          <div>
            <Image height={40} width={40} src={ic2} alt='icon' />
          </div>
          <div>
            <p>No of Docs Mapp.....</p>
            <h6>546</h6>
          </div>
        </div>
        <div className={styles.three}>
          <div>
            <Image height={40} width={40} src={ic3} alt='icon' />
          </div>
          <div>
            <p>No of Docs Appr.....</p>
            <h6>129</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics