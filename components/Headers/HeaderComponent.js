import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Input from '../../components/Inputs/Input';
import search from '../../assets/search.png';
import down from '../../assets/down.png';

const HeaderComponent = () => {
  return (
    <>
      <div id='cont'>
        <div className={styles.cont_2}>
          <p className={styles.text}>Faecal Sludge and Septage <br />Management in India(FSSM)</p>
          <ul className={styles.links}>
            <li id='home-desktop'><Link href='/'>Home</Link></li>
            <li id='fssmalliance-desktop'><Link href='/fssmalliance'>About</Link></li>
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

          <div className='dropdown'>
            <div className='hamburger'>
              <label htmlFor="check">
                <input
                  type="checkbox"
                  id="check"
                  onClick={() => {
                    document.querySelector('.nav').classList.toggle("none")
                    document.querySelector('.nav').classList.toggle("show")
                  }}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </div>

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
        <div className='nav none'>
          <div>
            <div className={styles.search2}>
              <Input
                type='text'
                placeholder='Search'
                style={styles.search3}
              />
              <span className={styles.search_icon2}></span>
              <Image src={search} alt='search icon' height={11} width={11} />
            </div>
            <Link href='/'><h2 className={styles.item} id='home'>Home</h2></Link>
            <Link href='/fssmalliance'><h2 className={styles.item} id='fssmalliance'>About</h2></Link>
            <Link href='/'><h2 className={styles.item}>Help Desk</h2></Link>
            <Link href='/'><h2 className={styles.item}>PAQs and Glosarry</h2></Link>
            <h2 className={styles.item}>FSSM Knowledge Base <span className={styles.down}></span><Image src={down} alt='drop down' height={8} width={12} /></h2>
            <h2 className={styles.item}>States <span className={styles.down}></span><Image src={down} alt='drop down' height={8} width={12} /></h2>
            <Link href='/'><h2 className={styles.item}>Tenders</h2></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent