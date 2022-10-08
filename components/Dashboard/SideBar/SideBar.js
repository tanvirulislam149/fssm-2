import React, { useEffect, useState } from 'react';
import styles from './SideBar.module.css';
import { sideBarText } from '../../TextArrays';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';

const SideBar = () => {
  const [data, setData] = useState(sideBarText);

  useEffect(() => {
    if (Cookies.get('isAdmin') !== 'true') {
      const newState = sideBarText.filter(({ id }) => {
        return id < 6 || id === 11 || id === 14;
      })
      setData(newState);
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        {
          data.map(({ id, text, link, image }) => {
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