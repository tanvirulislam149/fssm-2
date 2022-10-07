import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import styles from './FaqAndGlossaryList.module.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { editFaq, editGlossary } from '../../../services/adminFaqGlossaryService';

const FaqAndGlossaryList = ({ documents, setMessage, setUpdate, update, setDocId, layout }) => {
  const [number, setNumber] = useState(10);
  const [search, setSearch] = useState('');
  const [updated, setUpdated] = useState(false);
  const [list, setList] = useState(documents);
  const [text, setText] = useState('');
  const [ans, setAns] = useState('');
  const [order, setOrder] = useState('');
  const [status, setStatus] = useState('');
  const [current, setCurrent] = useState({
    question: '',
    answer: '',
    is_active: '',
    display_order: '',
    id: ''
  })

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const filterIt = (arr, searchKey) => {
    return arr.filter(obj => {
      return Object.keys(obj).some(key => {
        if (typeof obj[key] === 'string') {
          return obj[key].toLowerCase().trim().includes(searchKey);
        }
      })
    });
  }

  const handleFilter = () => {
    const results = filterIt(documents, search.toLowerCase().trim());
    setList(results);
  }

  useEffect(() => {
    handleFilter();
  }, [updated])

  useEffect(() => {
    setList(documents);
  }, [documents])

  const handleSubmit = (id, popup) => {
    layout === 1 && editFaq(id, { ques: text, ans, order: Number(order), status }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'FAQ has been edited') {
          setMessage('FAQ has been edited');
          popup.style.display = 'flex';
          setUpdate(!update);
        }
      }
    })

    layout === 2 && editGlossary(id, { word: text, ans, order: Number(order), status }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'Glossary has been edited') {
          setMessage('Glossary has been edited');
          popup.style.display = 'flex';
          setUpdate(!update);
        }
      }
    })
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.control}>
          <div>
            <p>Show</p>
            <FormControl sx={{ m: 1, width: 55 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={number}
                className={styles.select}
                onChange={handleChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
            <p>entries</p>
          </div>

          <div>
            <p>Search : </p>
            <input
              type="text"
              className={styles.input}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setUpdated(!updated);
              }} />
          </div>
        </div>

        <div className={styles.cont}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={layout === 1 ? styles.three : styles.four}>
              <p>Questions</p>
            </div>
            {layout === 1 && <div className={styles.three}>
              <p>Display Order</p>
            </div>}
            <div className={styles.three}>
              <p>Status</p>
            </div>
            <div className={styles.three}>
              <p>Actions</p>
            </div>
          </div>
          {list.length ?
            list.map(({ question, id, word, answer, display_order, is_active }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={layout === 1 ? styles.three : styles.four}>
                    <p>{layout === 1 ? question : word}</p>
                  </div>
                  {layout === 1 && <div className={styles.three}>
                    <p>{display_order}</p>
                  </div>}
                  <div className={styles.three}>
                    <p>{is_active ? 'Active' : 'Inactive'}</p>
                  </div>
                  <div className={styles.three}>
                    <div
                      title='delete'
                      onClick={() => {
                        setDocId(id);
                        document.querySelector('.m10').style.display = "flex";
                      }}
                      className={`${styles.btn} ${styles.delbtn}`}>
                      <DeleteOutlineOutlinedIcon sx={{ color: '#e95454', height: '15px', width: '15px' }} />
                    </div>
                    <div
                      className={`${styles.btn} ${styles.viewbtn}`}
                      title='view'
                      onClick={() => {
                        setCurrent({
                          question: layout === 1 ? question : word,
                          answer: answer,
                          is_active: is_active,
                          display_order: display_order,
                          id: id
                        })
                        document.querySelector('.m').style.display = "flex";
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon sx={{ height: '15px', width: '15px' }} />
                    </div>
                  </div>
                </div>
              )
            }) :
            <p className={styles.no_results}>No records</p>
          }
        </div>
      </div>


      <div id="myModal" className='modal2 m'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m').style.display = "none";
            }}>
            <p>{layout === 1 ? 'View FAQ' : 'View Glossary'}</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              <p className={styles.head}>
                {layout === 1 ? 'FAQ Details' : 'Glossary Details'}
                <button
                  className={styles.btn2}
                  onClick={() => {
                    setStatus(current.is_active);
                    setText(current.question);
                    setAns(current.answer);
                    setOrder(current.display_order);
                    document.querySelector('.m4').style.display = "flex";
                  }}>
                  Edit
                </button>
              </p>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Question
                </div>
                <div className={styles.details}>
                  : {current.question}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Answer
                </div>
                <div className={styles.details}>
                  : {current.answer}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Status
                </div>
                <div className={styles.details}>
                  : {current.is_active === true ? 'Active' : 'Inactive'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myModal" className='modal2 m4'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m4').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m4').style.display = "none";
            }}>
            <p>{layout === 1 ? 'Edit FAQ' : 'Edit Glossary'}</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover2}>
            <div className={styles.content2}>
              <label htmlFor='quest'>Question <span>*</span></label>
              <input
                id='quest'
                type='text'
                value={text}
                onChange={(e) => { setText(e.target.value); }}
                className={styles.input3} />
              <span className="none form-error">Required</span>
              <div className={styles.textInput2}>
                <label htmlFor="status">Status <span>*</span></label>
                <select
                  onChange={(e) => {
                    if (e.target.value === 'true') {
                      setStatus(true);
                    } else {
                      setStatus(false);
                    }
                  }}
                  value={status}
                  required
                  id='status'
                  className={`${styles.select2} ${styles.form_select} form-select`}>
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </div>
              <label htmlFor='order'>Display Order</label>
              <input
                id='order'
                type='number'
                value={order}
                onChange={(e) => { setOrder(e.target.value); }}
                className={styles.input3} />
              <label htmlFor='ans'>Answer</label>
              <textarea
                type="text"
                id='ans'
                value={ans}
                onChange={(e) => { setAns(e.target.value); }}
                className={styles.textarea}
                cols="30"
                rows="7" >
              </textarea>
              <div className={styles.btn_cont}>
                <button
                  type='submit'
                  onClick={() => {
                    if (!text.trim().length) {
                      document.querySelector('.form-error').classList.remove('none');
                      return;
                    } else {
                      document.querySelector('.form-error').classList.add('none');
                      handleSubmit(current.id, document.querySelector('.m15'));
                      document.querySelector('.m4').style.display = "none";
                      document.querySelector('.m').style.display = "none";
                    }
                  }}
                  className={`${styles.btn3} ${styles.save}`}>Save</button>
                <button
                  type='reset'
                  className={`${styles.btn3} ${styles.cancel}`}
                  onClick={() => {
                    document.querySelector('.m4').style.display = "none";
                    setText('');
                  }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FaqAndGlossaryList