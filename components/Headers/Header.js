import React, { useEffect } from 'react';
import styles from './Header.module.css';
import bharat from '../../assets/bharat.png';
import Image from 'next/image';
import moshua from '../../assets/MOHUA.png';
import amrut from '../../assets/AMRUT.png';
import sbm from '../../assets/sbm.png';
import Input from '../../components/Inputs/Input';
import Link from 'next/link';
import search from '../../assets/search.png';
import down from '../../assets/down.png';
import { useRouter } from 'next/router';
import HeaderComponent from './HeaderComponent';

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    var id = router.pathname.slice(1);

    var option = document.getElementById(id);
    if (!option) {
      document.querySelector('#home').classList.add('onroute');
      document.querySelector('#home-desktop').classList.add('onroute-desktop');
    } else {
      option.classList.add('onroute');
      document.getElementById(id + '-desktop').classList.add('onroute-desktop');
    }

  }, [])

  return (
    <>
      <header>
        <div>
          <div className={styles.container}>
            <div className={styles.logo_1}></div>
            <Image className={styles.logo} src={bharat} alt='logo1' height={91} width={77} />

            <div className={styles.logo_2}></div>
            <Image src={moshua} alt='logo2' height={86} width={149} />

            <div className={styles.div}>
              <div className={styles.logo_3}></div>
              <Image src={amrut} alt='logo3' height={74} width={139} />

              <div className={styles.logo_4}></div>
              <Image src={sbm} alt='logo4' height={73} width={166} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header