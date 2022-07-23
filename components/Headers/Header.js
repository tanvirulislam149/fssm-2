import React from 'react';
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

const Header = () => {
  return (
    <>
      <header>
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

        <div className={styles.cont_2}>
          <p className={styles.text}>Faecal Sludge and Septage <br />Management in India(FSSM)</p>
          <ul className={styles.links}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/fssmalliance'>About</Link></li>
            <li><Link href='/'>Help Desk</Link></li>
            <li><Link href='/'>PAQs and Glosarry</Link></li>

            <div className={styles.flex_align_center}>
              <li>FSSM Knowledge Base <span className={styles.down}></span><Image src={down} alt='drop down' height={8} width={12} /></li>

            </div>

            <div className={styles.flex_align_center}>
              <li>States <span className={styles.down}></span><Image src={down} alt='drop down' height={8} width={12} /></li>
            </div>

            <li><Link href='/'>Tender</Link></li>
          </ul>

          <div className={styles.search_cont}>
            <Input
              type='text'
              placeholder='Search'
              style={styles.search}
            />
            <span className={styles.search_icon}></span>
            <Image src={search} alt='search icon' height={11} width={11} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header