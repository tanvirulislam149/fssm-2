import React, { useState, useEffect } from 'react';
import styles from './ListDocumentsComp.module.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const data = [
  {
    name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf',
    id: 1,
    date: '2021-08-22',
    title: 'Working In Tandem: The Informal Septic Tank Emptying Market In Aya Nagar, Delhi',
    partner: 'CFAR',
    theme: 'Capacity Building',
    category: 'Training Modules',
    stakeholder: 'All',
    value_chain: ['Emptying', 'Reuse', 'Transport', 'Treat'],
    state: 'Delhi',
    city: 'New Delhi',
    language: 'Hindi',
    geography: 'National',
    status: 'Rural',
    citation: 'Null'
  },
  {
    name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf',
    id: 2,
    date: '2022-08-22',
    title: 'Working In Tandem: The Informal Septic Tank Emptying Market In Aya Nagar, Delhi',
    partner: 'CFAR',
    theme: 'Capacity Building',
    category: 'Training Modules',
    stakeholder: 'All',
    value_chain: ['Emptying', 'Reuse', 'Transport', 'Treat'],
    state: 'Delhi',
    city: 'New Delhi',
    language: 'Hindi',
    geography: 'National',
    status: 'Rural',
    citation: 'Null'
  },
  {
    name: 'PPE for sanitation workers_ReadyReckoner-NFSSMAlliance (1).pdf',
    id: 3,
    date: '2021-08-22',
    title: 'Working In Tandem: The Informal Septic Tank Emptying Market In Aya Nagar, Delhi',
    partner: 'BBC',
    theme: 'Capacity Building',
    category: 'Training Modules',
    stakeholder: 'All',
    value_chain: ['Emptying', 'Reuse', 'Transport', 'Treat'],
    state: 'Delhi',
    city: 'New Delhi',
    language: 'Hindi',
    geography: 'National',
    status: 'Rural',
    citation: 'Null'
  },
]

const ListDocumentsComp = () => {
  const [number, setNumber] = useState(10);
  const [search, setSearch] = useState('');
  const [list, setList] = useState(data);
  const [update, setUpdate] = useState(false);

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
    console.log({ s: search })
    const results = filterIt(data, search.toLowerCase().trim());
    setList(results)
  }

  useEffect(() => {
    handleFilter();
  }, [update])

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
            list.length ?
              list.map(({ name, id, date, title, partner, theme, category, language, geography, stakeholder, status, state, value_chain, citation, city }, i) => {
                return (
                  <div key={id} className={i % 2 !== 0 ? styles.row : styles.row2}>
                    <div className={styles.one}>
                      <p>{i + 1}</p>
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
                      <p>{name}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{date}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{partner}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{theme}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{category}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{stakeholder}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{value_chain}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{state}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{city}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{language}</p>
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
      <p className={styles.results}>Showing 10 of 10 entries</p>
    </>
  )
}

export default ListDocumentsComp