import React from 'react';
import styles from './SideBar.module.css';
import { sideBarText } from '../../TextArrays';
import Link from 'next/link';
import Image from 'next/image';


const SideBar = () => {
  return (
    <>
      <div className={styles.container}>
        {
          sideBarText.map(({ id, text, link, image }) => {
            return (
              <Link key={id} href={`/${link}`}><a>
                <div className={styles.card}>
                  <Image height={20} width={20} src={image} alt='icon' />
                  <h6>{text}</h6>
                </div>
              </a></Link>
            )
          })
        }
      </div>
    </>
  )
}

export default SideBar