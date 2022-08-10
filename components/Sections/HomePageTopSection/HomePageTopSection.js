import React from 'react';
import styles from './HomePageTopSection.module.css';
import Button from '../../Buttons/Submit/SubmitButton';
import Card from '../../Cards/RepositoryCard/RepositoryCard';
import { homePageText } from '../../TextArrays';
import Link from 'next/link';

const HomePageTopSection = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.card_cont}>
          <div className={styles.card}>
            <div className={styles.sub_heading}>
              <h2>{homePageText.sub_title1}</h2>
            </div>
            <div className={styles.card_1}>
              <div className={styles.input_cont}>
                <select defaultValue='' className={`${styles.input} form-select`} aria-label="Default select example">
                  <option hidden value=''>Search FSSM Docs</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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
              <h2>{homePageText.sub_title2}</h2>
              <p>{homePageText.sub_title3}</p>
            </div>
            <div className={styles.card_2}>
              <div className={styles.card_4}>
                {homePageText.repository.map(({ title, id }) => {
                  return (
                    <span key={id}>
                      {id !== 10 && <Card id={id} text={title} />}
                    </span>
                  )
                })}
              </div>
              <div>
                <div>
                  <Card id={homePageText.repository[6].id} text={homePageText.repository[6].title} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.sub_heading}>
              <h2>{homePageText.sub_title4}</h2>
            </div>
            <div className={styles.card_3}>
              <Link href='/qanda'><a>
                <Button
                  style={styles.btn2}
                  title='Ask Question'
                />
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageTopSection