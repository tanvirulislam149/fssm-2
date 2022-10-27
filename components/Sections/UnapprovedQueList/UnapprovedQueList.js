import React, { useEffect, useState } from 'react';
import { CircularProgress, FormControl, MenuItem, Pagination, Select } from '@mui/material';
import styles from "./UnapprovedQueList.module.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeletePopup from "../../Dashboard/DeletePopup/DeletePopup"
import { getUnapprovedDocs, changeApproval, editDoc, delQuest, getAnswers } from '../../../services/adminHelpDeskService';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import useOptions from '../../useOptions';

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

const UnapprovedQueList = ({ setMessage }) => {
  const [number, setNumber] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState([]);
  const [nPages, setNPages] = useState(1);
  const [docId, setDocId] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [themeOptions, setThemeOptions] = useState([]);
  const [profileOptions, setProfileOptions] = useState([]);
  const [dateArray2, setDateArray2] = useState([]);
  const [current, setCurrent] = useState({
    name: '',
    email: '',
    question: '',
    mobile: '',
    id: '',
    highpriority: '',
    organization: '',
    theme: '',
    attachment: ''
  })

  const { advancedSearchText } = useOptions();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    const indexOfLastRecord = currentPage * number;
    const indexOfFirstRecord = indexOfLastRecord - number;
    const records = documents.slice(indexOfFirstRecord, indexOfLastRecord);
    setCurrentRecords(records);
    const pageCount = Math.ceil(documents.length / number);
    setNPages(pageCount);
  }, [currentPage, documents, number])

  const handleError = (err) => {
    setLoading(false);
    console.log(err);
  }

  const handleDelete = (id) => {
    delQuest(id, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'Delete Successfully') {
          setMessage('Deleted Successfully');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
  }

  useEffect(() => {
    setLoading(true);
    getUnapprovedDocs({ params: 'False' }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ res });
        setDocuments(res.data.message);
        const data = res.data.message;
        let date = [];
        data.forEach(item => {
          date.push([]);
        })
        data.forEach(({ createdOn }, i) => {
          const month = createdOn.slice(5, 7);
          const day = createdOn.slice(8, 10);
          const year = createdOn.slice(0, 4);
          const hour = createdOn.slice(11, 13);
          const min = createdOn.slice(14, 16);
          date[i] = `${year}-${month}-${day} ${hour}:${min} ${hour >= 12 ? 'PM' : 'AM'}`;
        })
        setDateArray2(date);
      }
    })
  }, [update])

  useEffect(() => {
    let options = [];
    advancedSearchText.themes.forEach(({ title }) => {
      options.push(title);
    })
    setThemeOptions(options);
    options = [];
    advancedSearchText.profile.forEach(({ title }) => {
      options.push(title);
    })
    setProfileOptions(options);
  }, [advancedSearchText])

  const handleSwitch = (id) => {
    changeApproval(id, { is_approved: true }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'Updated Successfully') {
          setMessage('Updated Successfully');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
  };

  const handleAnswers = (id, params) => {
    getAnswers(id, { params }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
      }
    })
  }

  useEffect(() => {
    current.name !== '' && document.getElementById('span-click').click();
  }, [updated])

  const handleValues = (setFieldValue) => {
    setFieldValue('organization', current.organization);
    setFieldValue('name', current.name);
    setFieldValue('mobile', current.mobile);
    setFieldValue('question', current.question);
    setFieldValue('email', current.email);
    setFieldValue('theme', current.theme);
    setFieldValue('userprofile', current.userprofile);
  }

  const handleEdit = (data) => {
    // let vals = {
    //   name: data.name, organization: data.organization, mobile: data.mobile, question: data.question,
    //   email: data.email, userprofile: null, theme: 5, is_approved: data.is_approved
    // }
    // console.log(vals);
    editDoc(current.id, data, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'Updated Successfully') {
          setMessage('Edited Successfully');
          document ? document.querySelector('.m15').style.display = 'flex' : null;
          setUpdate(!update);
        }
      }
    })
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
              <div className={`${styles.two} ${styles.date}`}>
                <p>Creator On</p>
              </div>
              <div className={styles.two}>
                <p>Approve</p>
              </div>
              <div className={styles.three}>
                <p>Action</p>
              </div>
            </div>
            {
              currentRecords.map(({ id, theme, attachment, email, organization, highpriority, mobile, userprofile, name, question }, i) => {
                return (
                  <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                    <div className={styles.one}>
                      <p>{i + 1 + number * (currentPage - 1)}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{question}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{userprofile?.user_profile}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{name}</p>
                    </div>
                    <div className={`${styles.two} ${styles.date}`}>
                      <p>2022-08-05</p>
                      <p>07:53:34</p>
                      <p>{dateArray2[i]}</p>
                    </div>
                    <div className={styles.two}>
                      <AntSwitch
                        onChange={() => {
                          handleSwitch(id);
                        }}
                      />
                    </div>
                    <div className={styles.three}>
                      <div>
                        <div
                          title="View Question"
                          className={`${styles.btn} ${styles.editbtn}`}
                          data-modal="myModal"
                          onClick={() => {
                            setCurrent({
                              name: name,
                              question: question,
                              mobile: mobile,
                              email: email,
                              id: id,
                              highpriority: highpriority,
                              organization: organization,
                              theme: theme?.theme_title,
                              attachment: attachment
                            })
                            document.querySelector(".m7").style.display = "flex";
                          }}
                        >
                          <RemoveRedEyeOutlinedIcon
                            sx={{ height: "14px", width: "14px" }}
                          />
                        </div>
                      </div>
                      <div
                        title='Edit Question'
                        className={`${styles.btn} ${styles.editbtn}`}
                        data-modal="myModal"
                        onClick={() => {
                          setCurrent({
                            name: name,
                            question: question,
                            mobile: mobile,
                            email: email,
                            organization: organization,
                            id: id,
                            theme: theme?.theme_title ? theme.theme_title : '',
                            userprofile: userprofile?.user_profile ? userprofile.user_profile : ''
                          })
                          setUpdated(!updated);
                          document.querySelector('.m8').style.display = "flex";
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
                      <div>
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
                      <div>
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
          {/* View Question Modal Content */}
          <div className={styles.cover}>
            <div>
              <h4 className={styles.label4}>Question Details</h4>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Question</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:{current.question}</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Theme</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:{current.theme}</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Category</p>
                </div>
                <div className={styles.questionBody}>
                  <p>: </p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Name</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:{current.name}</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Mobile</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:{current.mobile}</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Creator Email</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:{current.email}</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Organization</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:{current.organization}</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Priority</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:{current.highpriority === true ? 'High' : 'Low'}</p>
                </div>
              </div>
              <div className={styles.questionDetails}>
                <div className={styles.questionHeading}>
                  <p>Attachment</p>
                </div>
                <div className={styles.questionBody}>
                  <p>:{current.attachment}</p>
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
            <p>Edit Question</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover}>
            <div>
              <Formik
                initialValues={{
                  question: "",
                  name: "",
                  email: "",
                  organization: "",
                  mobile: "",
                  is_approved: false,
                  theme: '',
                  userprofile: ''
                }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .required('Required')
                    .test('is title a letter?', 'Title must consist of letters only', (val) => {
                      return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
                    }),
                  email: Yup.string()
                    .required('Required')
                    .email('Invalid email address')
                    .test('is email valid?', 'Invalid email address', (val) => {
                      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
                    }),
                  userprofile: Yup.string()
                    .required('Required'),
                  theme: Yup.string()
                    .required('Required'),
                  question: Yup.string()
                    .required('Required'),
                  organization: Yup.string()
                    .required('Required'),
                })}
                onSubmit={(data, actions) => {
                  handleEdit(data);
                  actions.resetForm();
                  document.querySelector(`.m8`).style.display = "none";
                }}
              >
                {({ resetForm, setFieldValue }) => (
                  <Form>
                    <div className={styles.editQuestion}>
                      <div>
                        <div className={styles.textInput2}>
                          <label htmlFor="name">Creator Name</label>
                          <Field name="name" id='name' className={styles.input} type="text" />
                          <span className='form-error'><ErrorMessage name="name" /></span>
                        </div>
                        <div className={styles.textInput2}>
                          <label htmlFor="email">Creator Email</label>
                          <Field name="email" id='email' className={styles.input} type="text" />
                          <span className='form-error'><ErrorMessage name="email" /></span>
                        </div>
                        <div className={styles.textInput2}>
                          <label htmlFor="theme">Theme</label>
                          <Field
                            name='theme'
                            as='select'
                            id='theme'
                            className={`${styles.select2} ${styles.form_select} form-select`}>
                            <option value={''}>--Select--</option>
                            {themeOptions.map(title => {
                              return (
                                <option key={title} value={title}>{title}</option>
                              )
                            })}
                          </Field>
                          <span className='form-error'><ErrorMessage name="theme" /></span>
                        </div>
                      </div>
                      <div>
                        <div className={styles.textInput2}>
                          <label htmlFor="mobile">Mobile</label>
                          <Field name="mobile" id='mobile' className={styles.input} type="text" />
                          <span className='form-error'><ErrorMessage name="mobile" /></span>
                        </div>
                        <div className={styles.textInput2}>
                          <label htmlFor="organization">Organization</label>
                          <Field name="organization" id='organization' className={styles.input} type="text" />
                          <span className='form-error'><ErrorMessage name="organization" /></span>
                        </div>
                        <div className={styles.textInput2}>
                          <label htmlFor="userprofile">User Profile</label>
                          <Field
                            name='userprofile'
                            as='select'
                            id='userprofile'
                            className={`${styles.select2} ${styles.form_select} form-select`}>
                            <option value={''}>--Select--</option>
                            {profileOptions.map(title => {
                              return (
                                <option key={title} value={title}>{title}</option>
                              )
                            })}
                          </Field>
                          <span className='form-error'><ErrorMessage name="userprofile" /></span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.textInput2}>
                      <label htmlFor="question">Question</label>
                      <Field name="question" id='question' className={styles.input} type="text" />
                      <span className='form-error'><ErrorMessage name="question" /></span>
                    </div>

                    <div className={styles.btn_cont}>
                      <button type='submit' className={`${styles.btn3} ${styles.save}`}>Save</button>
                      <button
                        className={`${styles.btn3} ${styles.cancel}`}
                        type='reset'
                        onClick={() => {
                          resetForm();
                          document.querySelector('.m8').style.display = "none";
                        }}>
                        Cancel
                      </button>
                    </div>
                    <span id='span-click' onClick={() => { handleValues(setFieldValue) }}></span>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

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

      <p className={styles.results}>Showing {number} of {documents.length} entries</p>
      <Pagination
        count={nPages}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        color='primary'
        onChange={(e, val) => {
          setCurrentPage(val);
        }} />
    </>
  )
}

export default UnapprovedQueList;