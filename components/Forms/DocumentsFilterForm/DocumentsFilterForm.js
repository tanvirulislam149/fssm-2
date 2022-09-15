import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styles from './DocumentsFilterForm.module.css';
import { advancedSearchText } from '../../TextArrays';

const DocumentsFilterForm = ({ handleSearch }) => {
  const [theme, setTheme] = useState('');
  const [stakeholder, setStakeholder] = useState('')
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [themeOptions, setThemeOptions] = useState([]);
  const [stakeOptions, setStakeOptions] = useState([]);
  const [catOptions, setCatOptions] = useState([]);
  const [chipKey, setChipKey] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { theme, category, keyword, stakeholder };
    handleSearch(data);
  }

  useEffect(() => {
    let options = [];
    advancedSearchText.themes.forEach(({ title }) => {
      options.push(title);
    })
    setThemeOptions(options);
    options = [];
    advancedSearchText.stake_holder.forEach(({ title }) => {
      options.push(title);
    })
    setStakeOptions(options);
  }, [])

  return (
    <>
      <form onSubmit={(e) => { handleSubmit(e); }} className={styles.form}>
        <section>
          <div className={styles.textInput}>
            <div className={styles.label}>Theme</div>
            <Autocomplete
              key={chipKey}
              className={styles.select}
              onChange={(event, newValue) => {
                setTheme(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id='theme'
              options={themeOptions}
              renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
            />
          </div>

          <div className={styles.textInput}>
            <div className={styles.label}>Sub Category</div>
            <Autocomplete
              key={chipKey}
              className={styles.select}
              onChange={(event, newValue) => {
                setCategory(newValue);
              }}
              inputValue={inputValue2}
              onInputChange={(event, newInputValue) => {
                setInputValue2(newInputValue);
              }}
              id='category'
              options={catOptions}
              renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
            />
          </div>

          <div className={styles.textInput}>
            <div className={styles.label}>Stakeholder</div>
            <Autocomplete
              key={chipKey}
              className={styles.select}
              onChange={(event, newValue) => {
                setStakeholder(newValue);
              }}
              inputValue={inputValue3}
              onInputChange={(event, newInputValue) => {
                setInputValue3(newInputValue);
              }}
              id='stakeholder'
              options={stakeOptions}
              renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
            />
          </div>

          <div className={styles.textInput}>
            <div className={styles.label}>Keyword</div>
            <input
              className={styles.input}
              type='text'
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }} />
          </div>
        </section>

        <div className={styles.cont}>
          <button className={styles.btn}>Search</button>
        </div>
      </form>
    </>
  )
}

export default DocumentsFilterForm