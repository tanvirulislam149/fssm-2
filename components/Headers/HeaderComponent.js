import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Input from '../../components/Inputs/Input';
import search from '../../assets/search.png';
import down from '../../assets/down.png';
import { useRouter } from 'next/router';
import ComponentLayout from '../Sections/ComponentLayout/ComponentLayout';

const HeaderComponent = () => {
  const router = useRouter();

  const handleRefresh = () => {
    router.reload(window.location.pathname);
  }

  return (
    <>
      <div id='cont'>
        <ComponentLayout>
          <div className={styles.cont_2}>
            <p className={styles.text} onClick={() => { handleRefresh() }}>Faecal Sludge and Septage <br />Management in India(FSSM)</p>
            <ul className={styles.links}>
              <li id='home-desktop'><Link href='/'>Home</Link></li>
              <li id='fssmalliance-desktop'><Link href='/fssmalliance'>About</Link></li>
              <li id='qanda-desktop'><Link href='/qanda'>Help Desk</Link></li>
              <li id='faq-desktop'><Link href='/faq'>FAQs and Glosarry</Link></li>

              <div className={styles.flex_align_center}>
                <li id='knowledgebase-desktop' className={`${styles.li} ${styles.li2}`}>FSSM Knowledge Base <span className={styles.down}></span><Image src={down} alt='drop down' height={8} width={12} />
                  <ul className={styles.ul}>
                    <li className={styles.li}><Link href="/knowledgecontent">Knowledge Repository</Link></li>
                    <li className={styles.li}><Link href="/advancedsearch">Advanced Search</Link></li>
                  </ul>
                </li>
              </div>

              <div className={styles.flex_align_center}>
                <li id='states-desktop' className={`${styles.li} ${styles.li2}`}>States <span className={styles.down}></span><Image src={down} alt='drop down' height={8} width={12} />
                  <ul className={styles.ul}>
                    <li className={styles.li}><Link href="/telangana">Telangana</Link></li>
                    <li className={styles.li}><Link href="/andhra_pradesh">Andhra Pradesh</Link></li>
                  </ul>
                </li>
              </div>

              <li id='tenders-desktop'><Link href='/tenders'>Tender</Link></li>
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
              <Link href='/qanda'><h2 className={styles.item} id='qanda'>Help Desk</h2></Link>
              <Link href='/faq'><h2 className={styles.item} id='faq'>FAQs and Glosarry</h2></Link>
              <li id='knowledgebase' className={`${styles.item} ${styles.li}`}>FSSM Knowledge Base <span className={styles.down}></span><Image src={down} alt='drop down' height={8} width={12} />
                <ul className={styles.ul}>
                  <li className={styles.li}><Link href="/knowledgecontent">Knowledge Repository</Link></li>
                  <li className={styles.li}><Link href="/advancedsearch">Advanced Search</Link></li>
                </ul>
              </li>
              <li id='states' className={`${styles.item} ${styles.li}`}>States <span className={styles.down}></span><Image src={down} alt='drop down' height={8} width={12} />
                <ul className={styles.ul}>
                  <li className={styles.li}><Link href="/telangana">Telangana</Link></li>
                  <li className={styles.li}><Link href="/andhra_pradesh">Andhra Pradesh</Link></li>
                </ul>
              </li>
              <Link href='/tenders'><h2 className={styles.item} id='tenders'>Tenders</h2></Link>
            </div>
          </div>
        </ComponentLayout>
      </div>
    </>
  )
}

export default HeaderComponent