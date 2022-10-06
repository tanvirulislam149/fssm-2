import React, { useEffect, useState } from 'react';
import styles from './ViewDocument.module.css';
import Image from 'next/image';
import close from '../../../assets/Close.png';
import MapSection from '../MapSection/MapSection';
import { getMappedData } from '../../../services/userCatServices';

const ViewDocument = ({ click, setClick, currentDoc, setDocId }) => {
  const [addItemsText, setAddItemsText] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleItems = (arr) => {
    const data = [];
    arr.forEach(item => {
      if (item.user_profile) {
        data.push({});
        data[data.length - 1].title = item.user_profile;
        data[data.length - 1].display_order = item.display_order;
        data[data.length - 1].id = item.id;
        data[data.length - 1].subitems = handleItems(item.section);
      }
      if (item.question) {
        data.push({});
        data[data.length - 1].title = item.question;
        data[data.length - 1].display_order = item.display_order;
        data[data.length - 1].id = item.id;
        data[data.length - 1].subitems = handleItems(item.items);
      }
      if (item.item_title) {
        data.push({});
        data[data.length - 1].title = item.item_title;
        data[data.length - 1].display_order = item.display_order;
        data[data.length - 1].id = item.id;
        data[data.length - 1].subitems = handleItems(item.subitems);
      }
      if (item.subitem_title) {
        data.push({});
        data[data.length - 1].title = item.subitem_title;
        data[data.length - 1].display_order = item.display_order;
        data[data.length - 1].id = item.id;
        data[data.length - 1].subitems = [];
      }
    })
    return data;
  }

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  useEffect(() => {
    getMappedData((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        const data = handleItems(res.data.message);
        setAddItemsText(data);
        setLoading2(false);
        document.getElementById('form') && document.getElementById('form').classList.add("none");
        document.getElementById('del') && document.getElementById('del').classList.add('none');
      }
    })
  }, [update])

  return (
    <>
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
                  : {currentDoc.attachment?.split("/").pop()}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Title
                </div>
                <div className={styles.details}>
                  : {currentDoc.title}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Organization Name
                </div>
                <div className={styles.details}>
                  : {currentDoc.organization?.org_name}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Theme
                </div>
                <div className={styles.details}>
                  : {currentDoc.theme?.theme_title}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Sub Category
                </div>
                <div className={styles.details}>
                  : Sub Category not provided
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Stakeholder
                </div>
                <div className={styles.details}>
                  : {
                    currentDoc.stake_holder?.map(({ stake_holderName }) => {
                      return stake_holderName + ', ';
                    })
                  }
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Value Chain
                </div>
                <div className={styles.details}>
                  : {
                    currentDoc.value_chain?.map(({ vc_name }) => {
                      return vc_name + ', ';
                    })
                  }
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Geography
                </div>
                <div className={styles.details}>
                  : {currentDoc.geography}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Urban / Rural
                </div>
                <div className={styles.details}>
                  : {currentDoc.status}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  State
                </div>
                <div className={styles.details}>
                  : {
                    currentDoc.state?.map(({ stateName }) => {
                      return stateName + ', ';
                    })
                  }
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  City
                </div>
                <div className={styles.details}>
                  : {currentDoc.city}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Language
                </div>
                <div className={styles.details}>
                  : {
                    currentDoc.language?.map(({ lang }) => {
                      return lang + ', ';
                    })
                  }
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Description
                </div>
                <div className={styles.details}>
                  : {currentDoc.description}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Keywords
                </div>
                <div className={styles.details}>
                  : {
                    currentDoc.keywords?.map(({ keyword }) => {
                      return keyword + ', ';
                    })
                  }
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Citation
                </div>
                <div className={styles.details}>
                  : {currentDoc.citation}
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  Created On
                </div>
                <div className={styles.details}>
                  : Created On not provided 2022-04-07 12:16
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.title}>
                  View Document
                </div>
                <div className={styles.details}>
                  <div className={styles.view}>
                    View
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className={styles.btn2}
                onClick={() => {
                  setClick(!click);
                  document.querySelector('.m2').style.display = "flex";
                }}>
                Edit Document
              </button>
              <button
                className={styles.btn3}
                onClick={() => {
                  setDocId(currentDoc.id);
                  document.querySelector('.m10').style.display = "flex";
                }}>
                Delete Document
              </button>
              <button
                className={styles.btn2}
                onClick={() => {
                  document.querySelector('.m8').style.display = "flex";
                }}>
                Map Document
              </button>
            </div>
          </div>
        </div>
      </div>

      <MapSection update={update} setUpdate={setUpdate} addItemsText={addItemsText} loading2={loading2} setLoading2={setLoading2} />
    </>
  )
}

export default ViewDocument