import React, { useEffect, useState } from 'react';
import styles from './SiteBackground.module.css';
import { useRouter } from 'next/router';

const SiteBackground = ({ children }) => {
  const [state, setState] = useState(true);

  const router = useRouter();

  useEffect(() => {
    var id = router.pathname;
    console.log({ id })
    if (id === '/' || id === '/telangana' || id === '/andhra_pradesh') {
      setState(false);
    } else setState(true);
  }, [router])

  return (
    <>
      <div className={state ? styles.container : styles.container2}>
        {children}
      </div>
    </>
  )
}

export default SiteBackground