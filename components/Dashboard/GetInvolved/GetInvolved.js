import React, { useState } from 'react';
import { FormControl, MenuItem, Select, Switch } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeletePopup from "../../Dashboard/DeletePopup/DeletePopup"
import styles from "./GetInvolved.module.css"

const data = [
  { name: 'Nandini', email: 'abc@gmail.com', joinNFSSM: "Yes", knowFSM: "No", creatorOn: "2022-08-05 07:53:34", id: 1 },
  { name: 'Jane Copper', email: 'abc@gmail.com', joinNFSSM: "No", knowFSM: "Yes", creatorOn: "2022-08-05 07:53:34", id: 2 },
  { name: 'Nandini', email: 'abc@gmail.com', joinNFSSM: "Yes", knowFSM: "No", creatorOn: "2022-08-05 07:53:34", id: 1 },
  { name: 'Jane Copper', email: 'abc@gmail.com', joinNFSSM: "No", knowFSM: "Yes", creatorOn: "2022-08-05 07:53:34", id: 2 },
  { name: 'Nandini', email: 'abc@gmail.com', joinNFSSM: "Yes", knowFSM: "No", creatorOn: "2022-08-05 07:53:34", id: 1 },
  { name: 'Jane Copper', email: 'abc@gmail.com', joinNFSSM: "No", knowFSM: "Yes", creatorOn: "2022-08-05 07:53:34", id: 2 },
]

const GetInvolved = () => {
  const [number, setNumber] = useState(10);
  const [docId, setDocId] = useState(null);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label2}>Get Involved</h4>
        <div className={styles.controlCont}>
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
          <div className={styles.search}>
            <p>Search:</p>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div className={styles.cont}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.two}>
              <p>Name</p>
            </div>
            <div className={styles.two}>
              <p>Email</p>
            </div>
            <div className={styles.two}>
              <p>Join NFSSM</p>
            </div>
            <div className={styles.two}>
              <p>Know about FSM</p>
            </div>
            <div className={styles.two}>
              <p>Created on</p>
            </div>
            <div className={styles.two}>
              <p>Action</p>
            </div>
          </div>
          {
            data.map(({ id, creatorOn, name, email, joinNFSSM, knowFSM }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{name}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{email}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{joinNFSSM}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{knowFSM}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{creatorOn}</p>
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
                      title='Delete User Profile'
                      className={`${styles.btn} ${styles.delbtn}`}
                      onClick={() => {
                        setDocId(id);
                        document.querySelector('.m10').style.display = "flex";
                      }}>
                      <DeleteOutlineOutlinedIcon sx={{ color: '#e95454', height: '15px', width: '15px' }} />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <DeletePopup />

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
            <p>View Get Involved</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>
          {/* View Question Modal Content */}
          <div className={styles.cover}>
            <div className={styles.content}>
              <h4 className={styles.label4}>View Details</h4>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Name</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:Nandhini</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Email</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:abc@gmail</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Join FSSM</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:No</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Know about FSSM</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:No</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Short Notes</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator on</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:2021-07-27 16:46:31</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInvolved;