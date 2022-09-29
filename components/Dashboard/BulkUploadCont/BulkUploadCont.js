import React, { useState } from 'react';
import styles from './BulkUploadCont.module.css';
import Image from 'next/image';
import { imageTypes } from '../../TextArrays';
import { uploadDocs } from '../../../services/bulkUploadService';
import AlertCard from '../AlertCard/AlertCard';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const BulkUploadCont = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    const uploaded = [...uploadedFiles];

    chosenFiles.forEach((file, i) => {
      file.image = URL.createObjectURL(e.target.files[i]);
      uploaded.push(file);
    })
    setUploadedFiles(uploaded);
  }

  const handleCancel = (index) => {
    const newState = uploadedFiles.filter((file, i) => {
      return i !== index;
    })
    setUploadedFiles(newState);
  }

  const handleError = (err) => {
    setLoading(false);
    //setError(err.message);
    if (err?.response?.data?.code === 'token_not_valid') {
      Cookies.remove('access');
      Cookies.remove('refresh');
      Cookies.remove('isAdmin');
      router.push('/signin');
    }
    console.log({ e: err })
  }

  const handleSubmit = (files, start, end, name, confirmation) => {
    setLoading(true);
    uploadDocs(
      { document: files }
      , (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          setLoading(false);
          console.log({ r: res.data.message })
          if (res.data.message === 'Documents have been added') {
            name.forEach(item => {
              item.classList.add('onroute-desktop');
            })
            start.forEach(item => {
              item.classList.add('none');
            })
            end.forEach(item => {
              item.classList.add('none');
            })
            confirmation.style.display = 'flex';
          }
        }
      })
  }

  const handleUpload = (index, start, end, name, confirmation) => {
    const newState = uploadedFiles.filter((file, i) => {
      return i === index;
    })
    handleSubmit(newState, [start], [end], [name], confirmation);
  }

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Upload</h4>

        <div className={styles.files}>
          <section>
            <input
              className='none'
              id='fileUpload'
              multiple
              //accept='image/png, image/jpg, image/jpeg'
              type='file'
              onChange={(e) => { handleFileEvent(e); }}
            />
            <label htmlFor='fileUpload'>
              <span className={`${styles.btn} ${styles.one}`}>Add files</span>
            </label>
            <span
              className={`${styles.btn} ${styles.two}`}
              onClick={() => {
                handleSubmit(uploadedFiles,
                  document.querySelectorAll('.start'),
                  document.querySelectorAll('.end'),
                  document.querySelectorAll('.name'),
                  document.querySelector('.m15'));
              }}
            >Start Upload</span>
            <span
              className={`${styles.btn} ${styles.three}`}
              onClick={() => { setUploadedFiles([]); }}
            >Cancel Upload</span>
          </section>

          {
            uploadedFiles.map(({ name, image, size, type }, i) => {
              return (
                <div key={i} className={i % 2 === 0 ? styles.display2 : styles.display}>
                  <div className={styles.img}>
                    {imageTypes.includes(type) && <Image layout='fill' objectFit='contain' alt='' src={image} />}
                  </div>
                  <div id={`name${i}`} className={`name ${styles.name}`}>
                    <p>{name}</p>
                  </div>
                  <div className={styles.size}>
                    <p>{size < 1000 ? 0 : size.toString().slice(0, size.toString().length - 3)} KB</p>
                  </div>
                  <span
                    id={`start${i}`}
                    className={`start ${styles.start}`}
                    onClick={() => {
                      handleUpload(i,
                        document.getElementById(`start${i}`),
                        document.getElementById(`end${i}`),
                        document.getElementById(`name${i}`),
                        document.querySelector('.m15'));
                    }}
                  >Start</span>
                  <span
                    id={`end${i}`}
                    className={`end ${styles.cancel}`}
                    onClick={() => { handleCancel(i); }}
                  >Cancel</span>
                </div>
              )
            })
          }
        </div>
      </div>

      <AlertCard message='Documents have been added' />
    </>
  )
}

export default BulkUploadCont