import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from './Footer.module.css';
import nfssm from '../../assets/nfssm.png';
import Image from 'next/image';
import SubmitButton from '../Buttons/Submit/SubmitButton';
import { useRouter } from 'next/router';
import { footerText } from '../TextArrays';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { axiosInstance } from '../../services/authService';

const Footer = () => {
  const [action, setAction] = useState('Sign In');

  const navigate = useRouter();

  useEffect(() => {
    Cookies.get('access') ?
      Cookies.get('isAdmin') === 'true' ?
        setAction('Admin Dashboard') : setAction('Sign Out')
      : setAction('Sign In')
  }, [])

  const handleRoute = () => {
    navigate.push('/interested');
  }

  const clickHandler = () => {
    if (Cookies.get('isAdmin') === 'true') {
      navigate.push('/dashboard');
    } else {
      Cookies.remove('access');
      Cookies.remove('refresh');
      Cookies.remove('isAdmin');
      axiosInstance.defaults.headers.common["Authorization"] = null;
      navigate.push('/signin');
    }
  }

  return (
    <>
      <footer className={styles.container}>
        <div className={styles.left}>
          <Link href='https://nfssmalliance.org/'><a><span className={styles.logo}></span>
            <Image src={nfssm} height={130} width={85} alt='nfssm logo' /></a></Link>

          <Link href='https://twitter.com/nfssmalliance?lang=en'><a><div className={styles.icon_cont}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div></a></Link>
          <Link href='https://www.linkedin.com/company/nfssmalliance'><a><div className={styles.icon_cont}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div></a></Link>
          <Link href='https://www.instagram.com/nfssmalliance/'><a><div className={styles.icon_cont}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div></a></Link>
        </div>

        <div className={styles.right}>
          <div className={styles.btn_cont}>
            <SubmitButton title={action} style={styles.btn} onClick={clickHandler} />
            <SubmitButton onClick={() => { handleRoute(); }} title='Get Involved' style={styles.btn} />
          </div>
          <p className={styles.bottom_text}>{footerText.visitors}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer