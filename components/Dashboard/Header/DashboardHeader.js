import React, { useEffect, useState } from 'react';
import styles from './DashboardHeader.module.css';
import Image from 'next/image';
import swachh from '../../../assets/swachh.png';
import profile from '../../../assets/Ellipse 10.png';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { sideBarText } from '../../TextArrays';
import Link from 'next/link';

const DashboardHeader = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    router.push('/');
  }

  useEffect(() => {
    document.querySelector('.nav').classList.toggle('none');
    document.querySelector('.nav').classList.toggle('show');
    document.getElementById('d-open').classList.toggle('none');
    document.getElementById('d-close').classList.toggle('none');
  }, [clicked])

  useEffect(() => {
    document.getElementById('d-open').classList.remove('none');
    document.getElementById('d-close').classList.add('none');
  }, [])

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <span className={styles.icon_cont}>
            <CloseIcon
              id='d-close'
              className='none mobile-comp'
              onClick={() => { setClicked(!clicked); }}
              sx={{ cursor: 'pointer', color: 'white', width: '40px', height: '40px' }} />
            <MenuIcon
              id='d-open'
              className='mobile-comp'
              onClick={() => { setClicked(!clicked); }}
              sx={{ cursor: 'pointer', color: 'white', width: '40px', height: '40px' }} />
          </span>
          <Image src={swachh} height={66} width={116} alt='logo' />
        </div>
        <div className={styles.right}>
          <button onClick={() => { handleNav(); }} className={styles.btn}>Go to website</button>
          <h4>NFSSM</h4>
          <div
            className={styles.admin}
          // onClick={() => {
          //   document.getElementById('pop_up').classList.toggle('none');
          // }}
          >
            <Image src={profile} height={40} width={40} alt='logo' />
            <p>Admin</p>
          </div>
        </div>
      </nav>

      <div className={`${styles.nav2} nav none`}>
        <div className={styles.sidebar}>
          <div>
            {
              sideBarText.map(({ id, text, link, image }) => {
                return (
                  <Link key={id} href={`/${link}`}><a className='mobile-comp'>
                    <div className={`mobile-comp ${styles.card}`}>
                      <Image className='mobile-comp' height={20} width={20} src={image} alt='icon' />
                      <h6 className='mobile-comp'>{text}</h6>
                    </div>
                  </a></Link>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* <div id='pop_up' className={`none ${styles.pop_up}`}>
        <div className={styles.cont}>
          <Image src={profile} height={80} width={80} alt='logo' />
        </div>
        <div className={styles.footer}>
          <div className={styles.btn2}>Change Password</div>
          <div className={styles.btn3}>Sign Out</div>
        </div>
      </div> */}
    </>
  )
}

export default DashboardHeader