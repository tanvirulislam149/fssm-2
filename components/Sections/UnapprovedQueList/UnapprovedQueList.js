import React, { useState } from 'react';
import { FormControl, MenuItem, Select, Switch } from '@mui/material';
import styles from "./UnapprovedQueList.module.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const data = [
  { question: 'qef', roleName: 'Donor/Philanthropist/CSR', creatorName: "162", creatorOn: "2022-08-05 07:53:34", id: 1 },
  { question: 'qef', roleName: 'Donor/Philanthropist/CSR', creatorName: "162", creatorOn: "2022-08-05 07:53:34", id: 2 },
  { question: 'qef', roleName: 'Donor/Philanthropist/CSR', creatorName: "162", creatorOn: "2022-08-05 07:53:34", id: 3 },
]

const UnapprovedQueList = () => {
  const [number, setNumber] = useState(10);
  const [docId, setDocId] = useState(null);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (values) => {
    console.log({ values })
    // editUserProfile('id',values, (err, res) => {
    //   if (err) return handleError(err)
    //   if (res !== null) {
    //     console.log({ res: res });
    //   }
    // })
  }

  const handleDelete = (id, confirmation) => {
    // delUserProfile(id, values, (err, res) => {
    //   if (err) return handleError(err)
    //   if (res !== null) {
    //     console.log({ res: res });
    //   }
    // })
  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label2}>Unapproved Questions</h4>
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
              <p>Approve</p>
            </div>
            <div className={styles.two}>
              <p>Action</p>
            </div>
          </div>
          {
            data.map(({ id, creatorOn, creatorName, roleName, question }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{question}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{roleName}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{creatorName}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{creatorOn}</p>
                  </div>
                  <div className={styles.two}>
                    <Switch />
                  </div>
                  <div className={styles.two}>
                    <div className={styles.two}>
                      <div
                        title="View Question"
                        className={`${styles.btn} ${styles.editbtn}`}
                        data-modal="myModal"
                        onClick={() => {
                          document.querySelector(".m7").style.display =
                            "flex";
                        }}
                      >
                        <RemoveRedEyeOutlinedIcon
                          sx={{ height: "14px", width: "14px" }}
                        />
                      </div>
                    </div>
                    <div
                      title='Edit User Profile'
                      className={`${styles.btn} ${styles.editbtn}`}
                      data-modal="myModal"
                      onClick={() => {
                        document.querySelector('.m7').style.display = "flex";
                      }}>
                      <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} />
                    </div>
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
                          document.querySelector(".m7").style.display =
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
                          document.querySelector(".m7").style.display =
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
        </div>
      </div>

      <div id="myModal" className='modal2 m7'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m7').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m7').style.display = "none";
            }}
          >
            <p>View Question</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              <h4 className={styles.label4}>Question Details</h4>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Question</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:asdfasdf</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Theme</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:PRIVATE SECTOR</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Category</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:Donor/ Philanthropist/ CSR </p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Name</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:asdfasdf</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Mobile</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:555</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Email</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:abc@gmail.com</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Organization</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:asdfasdf</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Priority</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:High</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Attachment</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:Attachment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myModal" className='modal2 m8'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m8').style.display = "none";
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m8').style.display = "none";
            }}
          >
            <p>Map Section to Role</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default UnapprovedQueList;