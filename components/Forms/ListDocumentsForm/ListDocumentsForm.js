import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import useOptions from '../../useOptions';
import styles from '../DocumentsFilterForm/DocumentsFilterForm.module.css';

const ListDocumentsForm = ({ handleSearch }) => {
  const [theme, setTheme] = useState('');
  const [stakeholder, setStakeholder] = useState('')
  const [subcategory, setSubcategory] = useState('');
  const [value_chain, setValue_chain] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [themeOptions, setThemeOptions] = useState([]);
  const [stakeOptions, setStakeOptions] = useState([]);
  const [valOptions, setValOptions] = useState([]);
  const [catOptions, setCatOptions] = useState([]);

  const { advancedSearchText } = useOptions();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (theme === null) setTheme('');
    if (subcategory === null) setSubcategory('');
    if (stakeholder === null) setStakeholder('');
    if (value_chain === null) setValue_chain('');

    const data = {
      theme: theme ? theme : '',
      subcategory: subcategory ? subcategory : '',
      stakeholder: stakeholder ? stakeholder : '',
      value_chain: value_chain ? value_chain : ''
    };
    console.log(data)
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
    options = [];
    advancedSearchText.valueChain.forEach(({ title }) => {
      options.push(title);
    })
    setValOptions(options);
    options = [];
    advancedSearchText.categories.forEach(({ title }) => {
      options.push(title);
    })
    setCatOptions(options);
  }, [advancedSearchText])

  return (
    <>
      <form onSubmit={(e) => { handleSubmit(e); }} className={styles.form}>
        <section>
          <div className={styles.textInput}>
            <div className={styles.label}>Theme</div>
            <Autocomplete
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
              className={styles.select}
              onChange={(event, newValue) => {
                setSubcategory(newValue);
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
            <div className={styles.label}>Value Chain</div>
            <Autocomplete
              className={styles.select}
              onChange={(event, newValue) => {
                setValue_chain(newValue);
              }}
              inputValue={inputValue6}
              onInputChange={(event, newInputValue) => {
                setInputValue6(newInputValue);
              }}
              id='value-chain'
              options={valOptions}
              renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
            />
          </div>
        </section>

        <div className={styles.cont}>
          <button className={styles.btn}>Search</button>
        </div>
      </form>
    </>
  )
}

export default ListDocumentsForm