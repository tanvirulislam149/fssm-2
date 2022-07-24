import React from 'react';
import styles from './HomePageTopSection.module.css';
import Input from '../../Inputs/Input';
import Button from '../../Buttons/Submit/SubmitButton';
import Image from 'next/image';
import down from '../../../assets/down-g.png';
import Card from '../../Cards/RepositoryCard/RepositoryCard';
import { homePageText } from '../../TextArrays';

const HomePageTopSection = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.card_cont}>
          <div className={styles.card}>
            <div className={styles.sub_heading}>
              <h2>Quick Search</h2>
            </div>
            <div className={styles.card_1}>
              <div className={styles.input_cont}>
                <Input
                  placeholder='Search FSSM Docs..'
                  style={styles.input}
                />
                <Image alt='icon' height={8} width={12} src={down} />
              </div>
              <div className={styles.btn_cont}>
                <Button
                  title='Search'
                  style={styles.btn}
                />
                <Button
                  title='Advance search'
                  style={styles.btn}
                />
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.sub_heading}>
              <h2>Repository</h2>
              <p>Curated Knowledge for user-profiles</p>
            </div>
            <div className={styles.card_2}>
              {homePageText.repository.map((text, i) => {
                return (
                  <Card key={i} text={text} />
                )
              })}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.sub_heading}>
              <h2>Help Desk</h2>
            </div>
            <div className={styles.card_3}>
              <Button
                style={styles.btn}
                title='Ask Question'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageTopSection