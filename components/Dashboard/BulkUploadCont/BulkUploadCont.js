import React, { useState } from 'react';
import styles from './BulkUploadCont.module.css';
import Image from 'next/image';
import { imageTypes } from '../../TextArrays';

const BulkUploadCont = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

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

  // const handleUpload = (index, start, end, name) => {
  //   const newState = uploadedFiles.filter((file, i) => {
  //     return i === index;
  //   })
  //   start.classList.add('none');
  //   end.classList.add('none');
  //   name.classList.add('onroute-desktop');
  // }

  // const handleSubmit=()=>{

  // }

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
            // onClick={()=>{handleSubmit();}}
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
                  <div id={`name${i}`} className={styles.name}>
                    <p>{name}</p>
                  </div>
                  <div className={styles.size}>
                    <p>{size < 1000 ? 0 : size.toString().slice(0, size.toString().length - 3)} KB</p>
                  </div>
                  <span
                    id={`start${i}`}
                    className={styles.start}
                  // onClick={() => {
                  //   handleUpload(i,
                  //     document.getElementById(`start${i}`),
                  //     document.getElementById(`end${i}`),
                  //     document.getElementById(`name${i}`),);
                  // }}
                  >Start</span>
                  <span
                    id={`end${i}`}
                    className={styles.cancel}
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