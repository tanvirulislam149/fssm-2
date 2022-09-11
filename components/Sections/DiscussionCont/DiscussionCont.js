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
    console.log({ e: err });
    setError(err.message);
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
            error ?
              <p className='error'>{error}</p> :
              discussionData.length ?
                discussionData.map(({ category, id, topics }) => {
                  return (
                    <DiscussionCard key={id} cat_id={id} category={category} topics={topics} />
                  )
                }) :
                <div className={styles.empty}>
                  <p>No records found.</p>
                </div>
          }
        </section>
      </div>
    </>
  )
}

export default DiscussionCont