import React, { useEffect, useState } from 'react';
import styles from './RepliesCard.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const RepliesCard = ({ comment, createdOn, creatorName }) => {
  const [dateArray, setDateArray] = useState([]);

  useEffect(() => {
    let date = [];
    let month;
    const day = createdOn.slice(8, 10);
    const year = createdOn.slice(0, 4);
    const hour = createdOn.slice(11, 13);
    const min = createdOn.slice(14, 16);
    switch (createdOn.slice(5, 7)) {
      case '01':
        month = 'January';
        break;
      case '02':
        month = 'February';
        break;
      case '03':
        month = 'March';
        break;
      case '04':
        month = 'April';
        break;
      case '05':
        month = 'May';
        break;
      case '06':
        month = 'June';
        break;
      case '07':
        month = 'July';
        break;
      case '08':
        month = 'August';
        break;
      case '09':
        month = 'September';
        break;
      case '10':
        month = 'October';
        break;
      case '11':
        month = 'November';
        break;
      case '12':
        month = 'December';
        break;
      default: ''
        break;
    }
    date[0] = `${month} ${day}, ${year}`;
    date[1] = `${hour}:${min}`;
    setDateArray(date);
  }, [createdOn])

  return (
    <>
      <div className={styles.cont}>
        <AccountCircleIcon fontSize="large" />
        <div>
          <p className={styles.name}>{creatorName}</p>
          <p className={styles.date}>{dateArray[0]}</p>
          <p className={styles.date}>{dateArray[1]}</p>
          <p className={styles.body}>{comment}</p>
        </div>
      </div>
    </>
  )
}

export default RepliesCard