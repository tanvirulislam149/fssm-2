import React, { useState } from 'react';
import styles from './DocumentsList.module.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import EditCategory from '../EditCategory/EditCategory';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const data = [
  { name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf', id: 1, date: '2021-08-22 08:38:40 AM' },
  { name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf', id: 2, date: '2021-08-22 08:38:40 AM' },
  { name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf', id: 3, date: '2021-08-22 08:38:40 AM' },
]

const DocumentsList = () => {
  const [number, setNumber] = useState(10);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.control}>
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

        <div className={styles.cont}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.two}>
              <p>Thumbnail</p>
            </div>
            <div className={styles.three}>
              <p>Document Name</p>
            </div>
            <div className={styles.four}>
              <p>Created Date</p>
            </div>
            <div className={styles.five}>
              <p>Action</p>
            </div>
          </div>
          {
            data.map(({ name, id, date }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.two}>
                    <div className={styles.pdf}>
                      pdf
                    </div>
                  </div>
                  <div className={styles.three}>
                    <p>{name}</p>
                  </div>
                  <div className={styles.four}>
                    <p>{date}</p>
                  </div>
                  <div className={styles.five}>
                    <div title='delete' className={`${styles.btn} ${styles.delbtn}`}>
                      <DeleteOutlineOutlinedIcon sx={{ color: '#e95454', height: '15px', width: '15px' }} />
                    </div>
                    <div
                      className={`${styles.btn} ${styles.viewbtn}`}
                      title='view'
                      data-modal="myModal"
                      onClick={() => {
                        document.querySelector('.m').style.display = "flex";
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon sx={{ color: 'white', height: '15px', width: '15px' }} />
                    </div>
                    <div
                      title='edit'
                      className={`${styles.btn} ${styles.editbtn}`}
                      data-modal="myModal"
                      onClick={() => {
                        document.querySelector('.m2').style.display = "flex";
                      }}
                    >
                      <CreateOutlinedIcon sx={{ color: 'white', height: '15px', width: '15px' }} />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <p className={styles.results}>Showing 10 of 10 entries</p>

      <div id="myModal" className='modal2 m'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m').style.display = "none";
            //document.getElementById('user-cat').style.display = 'none';
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m').style.display = "none";
              //document.getElementById('user-cat').style.display = 'none';
            }}
          >
            <p>View Document Data</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              <h4>Document Details</h4>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Document Name
                </div>
                <div className={styles.details}>
                  : https://www.google.com/url?rct=jsa=turl
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Title
                </div>
                <div className={styles.details}>
                  : DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Organization Name
                </div>
                <div className={styles.details}>
                  : NFSSM
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Theme
                </div>
                <div className={styles.details}>
                  : Latest FSSM News
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Sub Category
                </div>
                <div className={styles.details}>
                  : All
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Stakeholder
                </div>
                <div className={styles.details}>
                  : All
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Value Chain
                </div>
                <div className={styles.details}>
                  : All
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Geography
                </div>
                <div className={styles.details}>
                  : All
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Urban / Rural
                </div>
                <div className={styles.details}>
                  : All
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  State
                </div>
                <div className={styles.details}>
                  : All
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  City
                </div>
                <div className={styles.details}>
                  : All
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Language
                </div>
                <div className={styles.details}>
                  : English
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Description
                </div>
                <div className={styles.details}>
                  : The District Rural Development Agency
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Keywords
                </div>
                <div className={styles.details}>
                  : AMRUT,Faecal Sludge and Septage Management, FSM, FSSM, FSTP, Open Defecation Free, Open Defecation Free and Sanitation, sanitation, Septage Management, Swachh Bharat Mission, Urban Local Bodies Faecal Sludge and Septage Management
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Citation
                </div>
                <div className={styles.details}>
                  : All
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Created On
                </div>
                <div className={styles.details}>
                  : 2022-04-07 12:16:07
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  View Document
                </div>
                <div className={styles.details}>

                </div>
              </div>
            </div>
            <div>
              <button className={styles.btn2}>Edit Document</button>
              <button className={styles.btn3}>Delete Document</button>
              <button className={styles.btn2}>Map Document</button>
            </div>
          </div>
        </div>
      </div>

      <EditCategory />
    </>
  )
}

export default DocumentsList