import React, { useEffect, useState } from 'react';
import DiscussionCard from '../../Cards/DiscussionCard/DiscussionCard';
import styles from './DiscussionCont.module.css';
import { getDiscussion } from '../../../services/discussionService';
import CircularProgress from '@mui/material/CircularProgress';

const DiscussionCont = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [discussionData, setDiscussionData] = useState([]);

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
    //setError(err.response.statusText);
  }

  useEffect(() => {
    getDiscussion((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        console.log({ r: res })
        setDiscussionData(res.data.forum_categories);
      }
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Discussion Forum</h1>
        <section>
          {loading ? <div className={styles.justify_center}><CircularProgress /></div> :
            discussionData.map(({ category, id, topics }) => {
              return (
                <DiscussionCard key={id} id={id} category={category} topics={topics} />
              )
            })
          }
        </section>
      </div>
    </>
  )
}

export default DiscussionCont