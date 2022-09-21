import React, { useEffect } from 'react';
import styles from './Header.module.css';
import bharat from '../../assets/bharat.png';
import Image from 'next/image';
import moshua from '../../assets/MOHUA.png';
import amrut from '../../assets/AMRUT.png';
import sbm from '../../assets/sbm.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    var id = router.pathname.slice(1);
    var option = document.getElementById(id);

    if (router.pathname === '/discussionboard'
      || router.pathname === '/interested'
      || router.pathname === '/googlesearch') {
      return;
    } else if (id === 'discussionthread') {
      document.getElementById('header').classList.add('bg-blue');
    } else if (id === 'glossary') {
      document.querySelector('#faq').classList.add('onroute');
      document.querySelector('#faq-desktop').classList.add('onroute-desktop');
    } else if (id === 'telangana') {
      document.querySelector('#states').classList.add('onroute');
      document.querySelector('#states-desktop').classList.add('onroute-desktop');
    } else if (id === 'knowledgecontent' || id === 'advancedsearch' || id === 'knowledgedata') {
      document.querySelector('#knowledgebase').classList.add('onroute');
      document.querySelector('#knowledgebase-desktop').classList.add('onroute-desktop');
    } else if (id === 'expiredtenders') {
      document.querySelector('#tenders').classList.add('onroute');
      document.querySelector('#tenders-desktop').classList.add('onroute-desktop');
    } else if (!option) {
      document.getElementById('header').classList.add('white');
      document.querySelector('#home').classList.add('onroute');
      document.querySelector('#home-desktop').classList.add('onroute-desktop');
    } else {
      option.classList.add('onroute');
      document.getElementById(id + '-desktop').classList.add('onroute-desktop');
    }
  }, [router])

  return (
    <>
      <header>
        <div>
          <div id='header' className={styles.container}>
            <Link href='https://aatmanirbharbharat.mygov.in/'><a><div className={styles.logo_1}></div>
              <Image className={styles.logo} src={bharat} alt='logo1' height={91} width={77} /></a></Link>

            <div className={styles.logo_2}></div>
            <Link className='link' href='https://www.mohua.gov.in/'><a><Image src={moshua} alt='logo2' height={86} width={149} /></a></Link>

            <div className={styles.div}>
              <Link href='http://amrut.gov.in/content/'><a><div className={styles.logo_3}></div>
                <Image src={amrut} alt='logo3' height={74} width={139} /></a></Link>
              <div className={styles.space}></div>
              <Link href='https://swachhbharat.mygov.in/'><a><div className={styles.logo_4}></div>
                <Image src={sbm} alt='logo4' height={73} width={166} /></a></Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header