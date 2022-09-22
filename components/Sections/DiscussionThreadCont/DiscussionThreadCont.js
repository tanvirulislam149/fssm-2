import React, { useEffect, useState } from 'react';
import styles from './DiscussionThreadCont.module.css';
import { useRouter } from 'next/router';
import { getDiscussion } from '../../../services/discussionService';
import CircularProgress from '@mui/material/CircularProgress';
import talk from '../../../assets/talk 1.png';
import Image from 'next/image';
import i1 from '../../../assets/i1.png';
import i2 from '../../../assets/i2.png';
import i3 from '../../../assets/i3.png';
import RepliesCard from '../../Cards/RepliesCard/RepliesCard';
import { postComment } from '../../../services/discussionService';

const DiscussionThreadCont = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [topic, setTopic] = useState(null);
  const [text, setText] = useState('');

  const router = useRouter();
  const { date } = router.query;

  const handleRefresh = () => {
    router.reload(window.location.pathname);
  }

  const handleError = (err) => {
    setLoading(false);
    setLoading2(false);
    console.log({ e: err })
  }

  const handleTopic = (item, id) => {
    item.topics.forEach(obj => {
      if (obj.id === Number(id)) {
        setTopic(obj);
      }
    })
  }

  useEffect(() => {
    getDiscussion((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        console.log({ r: res })

        const { search } = window.location;
        const category = new URLSearchParams(search).get('category');
        const topicId = new URLSearchParams(search).get('topicId');

        res.data.forum_categories.forEach(item => {
          if (item.id === Number(category)) {
            handleTopic(item, topicId);
          }
        })
      }
    });
  }, []);

  const handleSubmit = () => {
    postComment(
      {
        comment: text,
        dis_ref: topic.topic_name
      },
      (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          setLoading2(false);
          console.log({ r: res });
          document.querySelector('.modal2').style.display = "flex";
        }
      });
  }

  return (
    <>
      <div id="myModal2" className='modal2'>
        <div
          className={styles.bg}
          onClick={() => {
            handleRefresh();
            document.querySelector('.modal2').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              handleRefresh();
              document.querySelector('.modal2').style.display = "none";
            }}
          >
            <p>Attention !!</p>
            <span>x</span>
          </div>
          <div className={styles.modal_header}>
            <h2>Thank you. Your Comment has been posted successfully.</h2>
          </div>
          <div className={styles.ok}>
            <div
              onClick={() => {
                handleRefresh();
                document.querySelector('.modal2').style.display = "none";
              }}
            >Ok</div>
          </div>
        </div>
      </div>

      <h1 className={styles.title}>Discussion Forum</h1>
      <div className={styles.container}>
        {loading ?
          <div className={styles.justify_center}><CircularProgress /></div> :
          <section>
            <div className={styles.shade}>
              <div>
                <div className={styles.img_cont}>
                  <Image height={64} width={64} alt='talk' src={talk} />
                </div>

                <div className={styles.details}>
                  <p>{topic?.topic_name}</p>
                  <div className={styles.footer}>
                    <span><Image height={14} width={14} alt='icon' src={i1} /><p>{date}</p></span>
                    <span><Image height={14} width={14} alt='icon' src={i2} /><p>By <span>{topic?.creatorName}</span></p></span>
                    <span><Image height={14} width={14} alt='icon' src={i3} /><p>{topic?.replies?.length} Replies</p></span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.replies}>
              <p className={styles.head}>Replies {`(${topic?.replies?.length})`}</p>
              <div className={styles.content}>
                {
                  topic?.replies?.map(({ comment, createdOn, creatorName, id }) => {
                    return (
                      <RepliesCard
                        key={id}
                        comment={comment}
                        createdOn={createdOn}
                        creatorName={creatorName}
                      />
                    )
                  })
                }
              </div>
            </div>

            <div className={styles.comment}>
              <div>
                <p className={styles.instruction}>Leave a comment</p>
                <input
                  className={styles.input}
                  value={text}
                  required
                  placeholder='Leave a comment here...'
                  onChange={(e) => { setText(e.target.value) }}
                  onFocus={() => { document.querySelector('.form-error').classList.add('none'); }}
                />
                <span className={`${styles.error} form-error none`}>Comment cannot be empty</span>
                {loading2 ?
                  <CircularProgress /> :
                  <button
                    data-modal="myModal2"
                    onClick={() => {
                      if (text.length) {
                        setLoading2(true);
                        handleSubmit();
                      } else {
                        document.querySelector('.form-error').classList.remove('none');
                      }
                    }}
                    className={styles.btn}>
                    Post Comment
                  </button>}
              </div>
            </div>
          </section>}
      </div>
    </>
  )
}

export default DiscussionThreadCont