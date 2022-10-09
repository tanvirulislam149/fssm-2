import React, { useEffect, useState } from 'react';
import styles from '../ForumList/ForumList.module.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { editCategory } from '../../../services/adminForumServices';

const ForumCategories = ({ categories, update, setUpdate, setMessage, setReactKey, reactKey, docId, setDocId }) => {
  const [list, setList] = useState(categories);
  const [index, setIndex] = useState(0);
  const [updated, setUpdated] = useState([]);

  useEffect(() => {
    list.length && document.getElementById('span-click').click();
  }, [updated])

  const handleValues = (setFieldValue) => {
    setFieldValue('name', list[index].category);
    setFieldValue('order', list[index].display_order ? list[index].display_order : '');
    setFieldValue('status', list[index].status ? list[index].status : '');
  }

  const handleSubmit = (confirmation, data) => {
    editCategory(docId, data, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message = 'Forum Category has been edited') {
          setMessage('Forum Category has been edited');
          confirmation.style.display = 'flex';
          setReactKey(!reactKey);
          setUpdate(!update);
        }
      }
    })
  }

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.cont2} ${styles.cont}`}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.three}>
              <p>Category Name</p>
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
          {list.map(({ status, id, display_order, category }, i) => {
            return (
              <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                <div className={styles.one}>
                  <p>{i + 1}</p>
                </div>
                <div className={styles.three}>
                  <p> {category}</p>
                </div>
                <div className={styles.three}>
                  <p> {display_order}</p>
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
                    title='edit'
                    className={`${styles.btn} ${styles.editbtn}`}
                    onClick={() => {
                      setDocId(id);
                      setIndex(i);
                      setUpdated(!updated);
                      document.querySelector('.m7').style.display = "flex"
                    }}
                  >
                    <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div id="myModal" className='modal2 m7'>
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector('.m7').style.display = "none";
            setReactKey(!reactKey);
          }}>
        </div>
        <div className={styles.modal_content2}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector('.m7').style.display = "none";
              setReactKey(!reactKey);
            }}
          >
            <p>Edit Category</p>
            <span><Image src={close} alt='icon' height={24} width={24} /></span>
          </div>

          <div className={styles.cover2}>
            <div className={styles.content2}>
              <Formik
                key={reactKey}
                initialValues={{ name: '', status: '', order: '' }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .test('is value valid?', 'Characters must consist of letters only', (val) => {
                      return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(val);
                    }),
                  order: Yup.string()
                    .test('is value a number?', 'Display order must be a number', (val) => {
                      return !isNaN(val);
                    })
                    .nullable(),
                })}
                onSubmit={(values, actions) => {
                  handleSubmit(document.querySelector('.m15'), { ...values, order: Number(values.order) });
                  actions.resetForm();
                  document.querySelector('.m7').style.display = "none";
                }}
              >
                {({ setFieldValue, resetForm }) => (
                  <Form>
                    <div className={styles.textInput2}>
                      <label htmlFor="name">Category Name</label>
                      <Field name="name" id='name' className={styles.input2} type="text" />
                      <span className='form-error'><ErrorMessage name="name" /></span>
                    </div>

                    <div className={styles.textInput2}>
                      <label htmlFor="order">Display Order</label>
                      <Field name="order" id='order' className={styles.input2} type="text" />
                      <span className='form-error'><ErrorMessage name="order" /></span>
                    </div>

                    <div className={styles.textInput2}>
                      <label htmlFor="status">Status</label>
                      <Field name='status' as='select' id='status' className={`${styles.select2} ${styles.form_select} form-select`}>
                        <option hidden value=''>--Select--</option>
                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                        <option value='Partners Only'>Partners Only</option>
                      </Field>
                    </div>

                    <div className={styles.btn_cont}>
                      <button type='submit' className={`${styles.btn3} ${styles.save}`}>Save</button>
                      <button
                        className={`${styles.btn3} ${styles.cancel}`}
                        type='reset'
                        onClick={() => {
                          resetForm();
                          document.querySelector('.m7').style.display = "none";
                          setReactKey(!reactKey);
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
    </>
  )
}

export default ForumCategories