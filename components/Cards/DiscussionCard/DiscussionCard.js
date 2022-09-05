import React, { useEffect, useState } from 'react';
import styles from './DiscussionCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import talk from '../../../assets/talk 1.png';
import Image from 'next/image';
import i1 from '../../../assets/i1.png';
import i2 from '../../../assets/i2.png';
import i3 from '../../../assets/i3.png';
import Cookies from 'js-cookie';
import Input from '../../Inputs/Input';
import { startDiscussion } from '../../../services/discussionService';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';

const DiscussionCard = ({ category, cat_id, topics }) => {
  const [clicked, setClicked] = useState(true);
  const [disc_topic, setDisc_topic] = useState('');
  const [loading, setLoading] = useState(false);
  const [dateArray, setDateArray] = useState([]);
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    let date = [];
    topics.forEach(({ createdOn }, i) => {
      let month;
      const day = createdOn.slice(8, 10);
      const year = createdOn.slice(0, 4)
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
      date[i] = `${month} ${day}, ${year}`;
    });
    setDateArray(date);
  }, [])

  const dropDown = (e) => {
    if (e.classList.contains("active-dropdown")) {
      e.style.maxHeight = 0;
      e.classList.remove("active-dropdown");
    } else {
      e.style.maxHeight = 'max-content';
      e.classList.add("active-dropdown");
    }
  }

  const handleAction = () => {
    if (Cookies.get('access')) {
      document.querySelector('#file').style.display = 'flex';
    } else {
      setModalText('Please Login to the application to start a discussion.');
      document.querySelector('.modal2').style.display = "flex";
    }
  }

  const handleCancel = () => {
    document.querySelector('#file').style.display = 'none';
  }

  const handleQuest = (val) => {
    setDisc_topic(val);
  }

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err });
  }

  const handleSubmit = (values) => {
    setLoading(true);
    startDiscussion(values, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        setDisc_topic('');
        setModalText('Thank you. Your Question has been posted successfully.');
        document.querySelector('.modal2').style.display = "flex";
        handleCancel();
        console.log({ r: res });
      }
    })
  }

  return (
    <>
      <div className={styles.cont}>
        <div id="myModal2" className='modal2'>
          <div
            className={styles.bg}
            onClick={() => {
              document.querySelector('.modal2').style.display = "none";
            }}>
          </div>
          <div className={styles.modal_content}>
            <div
              className={styles.close}
              onClick={() => {
                document.querySelector('.modal2').style.display = "none";
              }}
            >
              <p>Attention !!</p>
              <span>x</span>
            </div>
            <div className={styles.modal_header}>
              <h2>{modalText}</h2>
            </div>
            <div className={styles.ok}>
              <div
                onClick={() => {
                  document.querySelector('.modal2').style.display = "none";
                }}
              >Ok</div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div
            className={clicked ? styles.plus : styles.minus}
            onClick={() => {
              dropDown(document.getElementById('drop' + `${cat_id}`));
              setClicked(!clicked);
            }}>
            {
              clicked ?
                <FontAwesomeIcon color='#024c73' icon={faPlus} size="xs" /> :
                <FontAwesomeIcon color='#024c73' icon={faMinus} size="xs" />
            }
          </div>

          <p
            className={styles.title}
            onClick={() => {
              dropDown(document.getElementById('drop' + `${cat_id}`));
              setClicked(!clicked);
            }}>{category}</p>

          <button
            className={styles.btn}
            onClick={() => {
              handleAction();
            }}
          >Start a Discussion</button>
        </div>

        <div id={'drop' + `${cat_id}`} className='dropdown-content'>
          <div className={styles.cont2}>
            <div id='file' className={styles.form}>
              <Input
                style={styles.input}
                type='text'
                placeholder='Start your disscussion here'
                value={disc_topic}
                onChange={(e) => { handleQuest(e.target.value); }}
              />

              {loading ?
                <CircularProgress /> :
                <>
                  <button
                    className={styles.submit}
                    data-modal="myModal2"
                    onClick={() => { handleSubmit({ category_id: category, disc_topic }); }}
                  >Submit</button>
                  <button className={styles.cancel} onClick={() => { handleCancel(); }}>Cancel</button>
                </>}
            </div>

            <div className={styles.shade}>
              {
                topics.map(({ topic_name, creatorName, id, replies }, i) => {
                  return (
                    <div key={id}>
                      <div className={styles.img_cont}>
                        <Image height={64} width={64} alt='talk' src={talk} />
                      </div>

                      <div className={styles.details}>
                        <p>{topic_name}</p>
                        <div className={styles.footer}>
                          <span><Image height={14} width={14} alt='icon' src={i1} /><p>{dateArray[i]}</p></span>
                          <span><Image height={14} width={14} alt='icon' src={i2} /><p>By <span>{creatorName}</span></p></span>
                          <span><Image height={14} width={14} alt='icon' src={i3} /><Link href={`/discussionthread?category=${cat_id - 1}&topicId=${id - 1}&date=${dateArray[i]}`}><a><p className={styles.replies}>{replies.length} Replies</p></a></Link></span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DiscussionCard