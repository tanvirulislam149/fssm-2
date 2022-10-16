import React, { useEffect, useState } from 'react';
import { CircularProgress, FormControl, MenuItem, Select } from '@mui/material';
import styles from "./Question.module.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getUnapprovedDocs, changeApproval, delQuest, getAnswers } from '../../../services/adminHelpDeskService';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeletePopup from "../../Dashboard/DeletePopup/DeletePopup"
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

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

const Questions = ({ setMessage }) => {
  const [number, setNumber] = useState(10);
  const [docId, setDocId] = useState(null);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleError = (err) => {
    setLoading(false);
    console.log(err);
  }

  // const handleDelete = (id) => {
  //   delQuest(id, (err, res) => {
  //     if (err) return handleError(err);
  //     if (res !== null) {
  //       console.log({ res });
  //       if (res.data.message === 'Delete Successfully') {
  //         setMessage('Deleted Successfully');
  //         document ? document.querySelector('.m15').style.display = 'flex' : null;
  //         setUpdate(!update);
  //       }
  //     }
  //   })
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   getUnapprovedDocs({ params: 'True' }, (err, res) => {
  //     if (err) return handleError(err);
  //     if (res !== null) {
  //       setLoading(false);
  //       console.log({ res });
  //       setDocuments(res.data.message);
  //     }
  //   })
  // }, [update])

  // const handleSwitch = (id) => {
  //   changeApproval(id, { is_approved: false }, (err, res) => {
  //     if (err) return handleError(err);
  //     if (res !== null) {
  //       console.log({ res });
  //       if (res.data.message === 'Updated Successfully') {
  //         setMessage('Updated Successfully');
  //         document ? document.querySelector('.m15').style.display = 'flex' : null;
  //         setUpdate(!update);
  //       }
  //     }
  //   })
  // };

  // const handleAnswers = (id, params) => {
  //   getAnswers(id, { params }, (err, res) => {
  //     if (err) return handleError(err);
  //     if (res !== null) {
  //       console.log({ res });
  //     }
  //   })
  // }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label2}>Questions</h4>
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
        </div>

        {loading ?
          <div className={styles.justify_center}><CircularProgress /></div> :
          <div className={styles.cont}>
            <div className={styles.heading}>
              <div className={styles.one}>
                <p>S.NO</p>
              </div>
              <div className={styles.two}>
                <p>Questions</p>
              </div>
              <div className={styles.two}>
                <p>Role Name</p>
              </div>
              <div className={styles.two}>
                <p>Creator name</p>
              </div>
              <div className={styles.two}>
                <p>Creator On</p>
              </div>
              <div className={styles.two}>
                <p>No of Unapproved Answers</p>
              </div>
              <div className={styles.two}>
                <p>Approve</p>
              </div>
              <div className={styles.two}>
                <p>Action</p>
              </div>
            </div>
            {
              documents.map(({ id, theme, attachment, email, organization, highpriority, mobile, userprofile, name, question }, i) => {
                return (
                  <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                    <div className={styles.one}>
                      <p>{i + 1}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{question}</p>
                    </div>
                    <div className={styles.two}>
                      <p>roleName</p>
                    </div>
                    <div className={styles.two}>
                      <p>{name}</p>
                    </div>
                    <div className={styles.two}>
                      <p>date</p>
                    </div>
                    <div className={styles.two}>
                      <p>0</p>
                    </div>
                    <div className={styles.two}>
                      <AntSwitch
                        defaultChecked={true}
                        onChange={() => {
                          handleSwitch(id);
                        }}
                      />
                    </div>
                    <div className={styles.two}>
                      <div
                        title='Delete User Profile'
                        className={`${styles.btn} ${styles.delbtn}`}
                        onClick={() => {
                          setDocId(id);
                          document.querySelector('.m10').style.display = "flex";
                        }}>
                        <DeleteOutlineOutlinedIcon sx={{ color: '#e95454', height: '15px', width: '15px' }} />
                      </div>
                      <div className={styles.two}>
                        <div
                          title="View Unapproved Answer"
                          className={`${styles.btn} ${styles.unapprovedAns}`}
                          data-modal="myModal"
                          onClick={() => {
                            handleAnswers(id, 'False');
                            document.querySelector(".m11").style.display =
                              "flex";
                          }}
                        >
                          <RemoveRedEyeOutlinedIcon
                            sx={{ height: "14px", width: "14px" }}
                          />
                        </div>
                      </div>
                      <div className={styles.two}>
                        <div
                          title="View Approved Answer"
                          className={`${styles.btn} ${styles.approvedAns}`}
                          data-modal="myModal"
                          onClick={() => {
                            handleAnswers(id, 'True');
                            document.querySelector(".m12").style.display =
                              "flex";
                          }}
                        >
                          <RemoveRedEyeOutlinedIcon
                            sx={{ height: "14px", width: "14px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>}
      </div>

      <DeletePopup docId={docId} handleDelete={handleDelete} />

      <div id="myModal" className='modal2 m11'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m11').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m11').style.display = "none";
            }}
          >
            <p>Unapproved Answer</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>
          {/* Unapproved Answer Modal Content */}
          <div className={styles.cover}>
            <div className={styles.content}>
              <h4 className={styles.label5}>No records</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal" className='modal2 m12'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m12').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m12').style.display = "none";
            }}
          >
            <p>Approved Answer</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>
          {/* Approved Answer Modal Content */}
          <div className={styles.cover}>
            <div className={styles.content}>
              <h4 className={styles.label5}>No records</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Questions;