import React, { useState, useEffect } from 'react';
import styles from './ListDocumentsComp.module.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Pagination } from '@mui/material';

const ListDocumentsComp = ({ dateArray, documents }) => {
  const [number, setNumber] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState([]);
  const [nPages, setNPages] = useState(1);
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const indexOfLastRecord = currentPage * number;
    const indexOfFirstRecord = indexOfLastRecord - number;
    const records = list.slice(indexOfFirstRecord, indexOfLastRecord);
    setCurrentRecords(records);
    const pageCount = Math.ceil(list.length / number);
    setNPages(pageCount);
  }, [currentPage, list, number])

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
  }, [update])

  useEffect(() => {
    documents.length && setList(...documents);
  }, [documents])

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
                setUpdate(!update);
              }} />
          </div>
        </div>

        <div className={styles.cont}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.two}>
              <p>Thumbnail</p>
            </div>
            <div className={styles.two}>
              <p>Title</p>
            </div>
            <div className={styles.two}>
              <p>Document Name</p>
            </div>
            <div className={styles.two}>
              <p>Created On</p>
            </div>
            <div className={styles.two}>
              <p>Partner</p>
            </div>
            <div className={styles.two}>
              <p>Theme</p>
            </div>
            <div className={styles.two}>
              <p>Sub Category</p>
            </div>
            <div className={styles.two}>
              <p>Stake Holder</p>
            </div>
            <div className={styles.two}>
              <p>Value Chain</p>
            </div>
            <div className={styles.two}>
              <p>State</p>
            </div>
            <div className={styles.two}>
              <p>City</p>
            </div>
            <div className={styles.two}>
              <p>Language</p>
            </div>
            <div className={styles.two}>
              <p>Geography</p>
            </div>
            <div className={styles.two}>
              <p>Urban/Rural</p>
            </div>
            <div className={styles.two}>
              <p>Citation</p>
            </div>
          </div>
          {
            currentRecords.length ?
              currentRecords.map(({ id, sub_cat, description, title, theme, organization, language, geography, stake_holder, status, state, value_chain, citation, city }, i) => {
                return (
                  <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                    <div className={styles.one}>
                      <p>{i + 1 + number * (currentPage - 1)}</p>
                    </div>
                    <div className={styles.two}>
                      <div className={styles.pdf}>
                        pdf
                      </div>
                    </div>
                    <div className={styles.two}>
                      <p>{title}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{description}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{dateArray[i]}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{organization?.org_name}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{theme?.theme_title}</p>
                    </div>
                    <div className={styles.two}>
                      <p>
                        {
                          sub_cat?.map(({ subcat_title }) => {
                            return subcat_title + ', ';
                          })
                        }
                      </p>
                    </div>
                    <div className={styles.two}>
                      <p>
                        {
                          stake_holder?.map(({ stake_holderName }) => {
                            return stake_holderName + ', ';
                          })
                        }
                      </p>
                    </div>
                    <div className={styles.two}>
                      <p>
                        {
                          value_chain?.map(({ vc_name }) => {
                            return vc_name + ', ';
                          })
                        }
                      </p>
                    </div>
                    <div className={styles.two}>
                      <p>
                        {
                          state?.map(({ stateName }) => {
                            return stateName + ', ';
                          })
                        }
                      </p>
                    </div>
                    <div className={styles.two}>
                      <p>{city}</p>
                    </div>
                    <div className={styles.two}>
                      <p>
                        {
                          language?.map(({ lang }) => {
                            return lang + ', ';
                          })
                        }
                      </p>
                    </div>
                    <div className={styles.two}>
                      <p>{geography}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{status}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{citation}</p>
                    </div>
                  </div>
                )
              }) :
              <p className={styles.no_results}>No results</p>
          }
        </div>
      </div>
      <p className={styles.results}>Showing {number} of {list.length} entries</p>
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

export default ListDocumentsComp