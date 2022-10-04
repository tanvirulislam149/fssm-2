import React, { useEffect, useState } from 'react';
import styles from './DocumentsList.module.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EditCategory from '../EditCategory/EditCategory';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { delMyDocs } from '../../../services/mydocumentServices';
import DeletePopup from '../DeletePopup/DeletePopup';
import { useRouter } from 'next/router';
import { delAllDocs } from '../../../services/allDocumentServices';
import ViewDocument from '../ViewDocument/ViewDocument';
import AlertCard from '../AlertCard/AlertCard';

const DocumentsList = ({ documents }) => {
  const [number, setNumber] = useState(10);
  const [search, setSearch] = useState('');
  const [list, setList] = useState(documents);
  const [updated, setUpdated] = useState(false);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState(null);
  const [docId, setDocId] = useState(null);
  const [currentDoc, setCurrentDoc] = useState([]);
  const [index, setIndex] = useState(null);
  const [click, setClick] = useState(false);
  const [docDetails, setDocDetails] = useState({
    categories: [],
    stake_holder: [],
    valueChain: [],
    states: [],
    languages: [],
    chips: [],
    theme: ''
  });

  const router = useRouter();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const filterIt = (arr, searchKey) => {
    return arr.filter(obj => {
      return Object.keys(obj).some(key => {
        if (typeof obj[key] === 'string') {
          return obj[key].toLowerCase().trim().includes(searchKey);
        }
      })
    });
  }

  const handleFilter = () => {
    const results = filterIt(documents, search.toLowerCase().trim());
    setList(results);
  }

  useEffect(() => {
    handleFilter();
  }, [updated])

  useEffect(() => {
    setList(documents);
    setClick(!click);
    setIndex(0);
  }, [documents])

  const handleError = (err) => {
    console.log({ e: err })
    setError(err.message);
  }

  const handleDelete = (id, confirmation) => {
    console.log(id);
    if (router.pathname === '/mydocuments') {
      delMyDocs(id, (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          console.log({ r: res })
          if (res.data.message === 'Document has been deleted') {
            confirmation.style.display = "flex";
          }
        }
      })
    } else if (router.pathname === '/documents') {
      delAllDocs(id, (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          console.log({ r: res })
          if (res.data.message === 'Document has been deleted') {
            confirmation.style.display = "flex";
          }
        }
      })
    }
  }

  useEffect(() => {
    let data = [];
    list.forEach((doc) => {
      data.push({
        id: doc.id,
        theme: doc.theme?.theme_title,
        title: doc.title,
        citation: doc.citation,
        description: doc.description,
        city: doc.city,
        status: doc.status,
        geography: doc.geography,
        doc_type: doc.document_type === 'file' ? 'file' : 'URL',
        categories: [],
        stake_holder: [
          doc.stake_holder?.map(({ stake_holderName }) => {
            return stake_holderName;
          })
        ][0],
        valueChain: [
          doc.value_chain?.map(({ vc_name }) => {
            return vc_name;
          })
        ][0],
        states: [
          doc.state?.map(({ stateName }) => {
            return stateName;
          })
        ][0],
        languages: [
          doc.language?.map(({ lang }) => {
            return lang;
          })
        ][0],
        chips: [
          doc.keywords?.map(({ keyword }) => {
            return keyword;
          })
        ][0]
      })
    });
    setDocDetails(data[index]);
  }, [click, index])

  return (
    <>
      <div className={styles.container}>
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

          <div>
            <p>Search : </p>
            <input
              type="text"
              className={styles.input}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setUpdated(!updated);
              }} />
          </div>
        </div>

        <div className={styles.cont}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.one}>
              <p>Thumbnail</p>
            </div>
            <div className={styles.two}>
              <p>Title</p>
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
          {list?.length ?
            list.map(({ name, id, description, title }, i) => {
              return (
                <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                  <div className={styles.one}>
                    <p>{i + 1}</p>
                  </div>
                  <div className={styles.one}>
                    <div className={styles.pdf}>
                      pdf
                    </div>
                  </div>
                  <div className={styles.two}>
                    {title}
                  </div>
                  <div className={styles.three}>
                    <p>{description}</p>
                  </div>
                  <div className={styles.four}>
                    <p>date</p>
                  </div>
                  <div className={styles.five}>
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
                      className={`${styles.btn} ${styles.viewbtn}`}
                      title='view'
                      data-modal="myModal"
                      onClick={() => {
                        setCurrentDoc(list[i]);
                        setIndex(i);
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
                        setClick(!click);
                        setIndex(i);
                        document.querySelector('.m2').style.display = "flex";
                      }}
                    >
                      <CheckBoxOutlinedIcon sx={{ height: '15px', width: '15px' }} />
                    </div>
                  </div>
                </div>
              )
            }) :
            <p className={styles.no_results}>No results</p>
          }
        </div>
      </div>
      <p className={styles.results}>Showing {number} of {list?.length} entries</p>

      <ViewDocument click={click} setClick={setClick} setDocId={setDocId} currentDoc={currentDoc} />

      <EditCategory update={update} setUpdate={setUpdate} docDetails={docDetails} />

      <DeletePopup docId={docId} handleDelete={handleDelete} />

      <AlertCard message='Document Edited Sucessfully' />
    </>
  )
}

export default DocumentsList