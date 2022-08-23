import React, { useEffect } from 'react';
import styles from './TendersNavigation.module.css';
import { useRouter } from 'next/router';

const TendersNavigation = () => {
  const router = useRouter();

  useEffect(() => {
    var id = router.pathname.slice(1);
    var live = document.getElementById('tender-btn');
    var expired = document.getElementById('expired-tender-btn');
    id === 'tenders' ? live.classList.add('onroute') : expired.classList.add('onroute');
  }, [router])

  const navigate = (id) => {
    id === 2 ? router.push('/expiredtenders') : router.push('/tenders');
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <div className={styles.cont}>
        <p
          id='tender-btn'
          onClick={() => {
            navigate(1);
          }}
        >Live Tenders
        </p>
        <p
          id='expired-tender-btn'
          onClick={() => {
            navigate(2);
          }}
        >Expired Tenders
        </p>
      </div>
    </>
  )
}

export default TendersNavigation