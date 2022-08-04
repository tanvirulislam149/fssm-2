import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from './Footer.module.css';
import nfssm from '../../assets/nfssm.png';
import Image from 'next/image';
import SubmitButton from '../Buttons/Submit/SubmitButton';
import { useRouter } from 'next/router';
import { footerText } from '../TextArrays';
import Cookies from 'js-cookie';
import { axiosInstance } from '../../services/authService';

const Footer = () => {
  const navigate = useRouter();

  const clickHandler = () => {
    Cookies.remove('access');
    Cookies.remove('refresh');
    axiosInstance.defaults.headers.common["Authorization"] = null;
    navigate.push('/signin');
  }

  return (
    <>
      <footer className={styles.container}>
        <div className={styles.left}>
          <span className={styles.logo}></span>
          <Image src={nfssm} height={130} width={85} alt='nfssm logo' />

          <div className={styles.icon_cont}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>
          <div className={styles.icon_cont}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
          <div className={styles.icon_cont}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.btn_cont}>
            <SubmitButton title='Sign In' style={styles.btn} onClick={clickHandler} />
            <SubmitButton title='Get Involved' style={styles.btn} />
          </div>
          <p className={styles.bottom_text}>{footerText.visitors}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer