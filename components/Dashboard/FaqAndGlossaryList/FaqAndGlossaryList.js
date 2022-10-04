import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import styles from './FaqAndGlossaryList.module.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';

const FaqAndGlossaryList = ({ documents, setDocId, layout }) => {
  const [number, setNumber] = useState(10);
  const [search, setSearch] = useState('');
  const [updated, setUpdated] = useState(false);
  const [list, setList] = useState(documents);

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
            <div className={styles.three}>
              <p>Questions</p>
            </div>
            <div className={styles.three}>
              <p>Display Order</p>
            </div>
            <div className={styles.three}>
              <p>Status</p>
            </div>
            <div className={styles.three}>
              <p>Actions</p>
            </div>
          </div>
          {list.length ?
            list.map(({ name, id, order, status }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.three}>
                    <p>{name}</p>
                  </div>
                  <div className={styles.three}>
                    <p>{order}</p>
                  </div>
                  <div className={styles.three}>
                    <p>{status}</p>
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
                        //setCurrentDoc(list[i]);
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

      {/* view docs */}
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
                <button className={styles.btn2}>Edit</button>
              </p>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Question
                </div>
                <div className={styles.details}>
                  : Sanitation Value Chain
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Answer
                </div>
                <div className={styles.details}>
                  : Exposure to faecal matter occurs due to breakdowns across a sanitation value chain.
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Status
                </div>
                <div className={styles.details}>
                  : Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FaqAndGlossaryList