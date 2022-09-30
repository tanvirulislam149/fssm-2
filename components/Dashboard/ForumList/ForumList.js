import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import styles from './ForumList.module.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Image from 'next/image';
import close from '../../../assets/Close.png';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(30px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#2E69AE',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const ForumList = ({ documents, setDocId, reactKey, layout }) => {
  const [number, setNumber] = useState(10);
  const [search, setSearch] = useState('');
  const [updated, setUpdated] = useState(false);
  const [list, setList] = useState(documents);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSwitch = (event) => {
    console.log(event.target.checked);
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
            <div className={styles.one}>
              <p>Category Name</p>
            </div>
            <div className={styles.two}>
              <p>Topic Name</p>
            </div>
            <div className={styles.one}>
              <p>Creator Name</p>
            </div>
            <div className={styles.two}>
              <p>Created On</p>
            </div>
            <div className={styles.two}>
              <p>Approve</p>
            </div>
            <div className={styles.two}>
              <p>Actions</p>
            </div>
          </div>
          {list.length ?
            list.map(({ name, id, date, cat, topic }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.one}>
                    <p> {cat}</p>
                  </div>
                  <div className={styles.two}>
                    <p> {topic}</p>
                  </div>
                  <div className={styles.one}>
                    <p>{name}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{date}</p>
                  </div>
                  <div className={styles.two}>
                    <AntSwitch
                      key={reactKey}
                      defaultChecked={layout === 2 || layout === 4 ? true : false}
                      onChange={handleSwitch} />
                  </div>
                  <div className={styles.two}>
                    <div
                      title='delete'
                      onClick={() => {
                        setDocId(id);
                        document.querySelector('.m10').style.display = "flex";
                      }}
                      className={`${styles.btn} ${styles.delbtn}`}>
                      <DeleteOutlineOutlinedIcon sx={{ color: '#e95454', height: '15px', width: '15px' }} />
                    </div>
                    {layout !== 1 && <div
                      className={`${styles.btn} ${styles.viewbtn}`}
                      title='view'
                      onClick={() => {
                        //setCurrentDoc(list[i]);
                        document.querySelector('.m').style.display = "flex";
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon sx={{ color: 'white', height: '15px', width: '15px' }} />
                    </div>}
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
            <p>Approved Topic Answers</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              <p className={styles.empty}>No records</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForumList