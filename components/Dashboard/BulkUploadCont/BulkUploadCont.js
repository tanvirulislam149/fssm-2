import React, { useState } from 'react';
import styles from './BulkUploadCont.module.css';
import Image from 'next/image';
import { imageTypes } from '../../TextArrays';
import { uploadDocs } from '../../../services/bulkUploadService';

const BulkUploadCont = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(true);

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
    console.log({ e: err })
    setError(err.message);
  }

  const handleSubmit = (files, start, end, name) => {
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
          }
        }
      })
  }

  const handleUpload = (index, start, end, name) => {
    const newState = uploadedFiles.filter((file, i) => {
      return i === index;
    })
    handleSubmit(newState, [start], [end], [name]);
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
                  document.querySelectorAll('.name'));
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
                        document.getElementById(`name${i}`),);
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
    </>
  )
}

export default BulkUploadCont