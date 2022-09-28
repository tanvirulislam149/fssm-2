import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styles from '../DocumentsFilterForm/DocumentsFilterForm.module.css';
import useOptions from '../../useOptions';

const AllDocumentsForm = ({ handleSearch }) => {
  const [theme, setTheme] = useState('');
  const [stakeholder, setStakeholder] = useState('')
  const [subcategory, setSubcategory] = useState('');
  const [organization, setOrganization] = useState('');
  const [doc_type, setDoc_type] = useState('');
  const [value_chain, setValue_chain] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [themeOptions, setThemeOptions] = useState([]);
  const [stakeOptions, setStakeOptions] = useState([]);
  const [valOptions, setValOptions] = useState([]);
  const [orgOptions, setOrgOptions] = useState([]);
  const [catOptions, setCatOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);

  const { advancedSearchText } = useOptions();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { theme, subcategory, stakeholder, value_chain, organization, doc_type };
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
    advancedSearchText.partners.forEach(({ title }) => {
      options.push(title);
    })
    setOrgOptions(options);
    options = [];
    advancedSearchText.categories.forEach(({ title }) => {
      options.push(title);
    })
    setCatOptions(options);
    options = [];
    advancedSearchText.types.forEach(({ title }) => {
      options.push(title);
    })
    setTypeOptions(options);
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
            <div className={styles.label}>Organization</div>
            <Autocomplete
              className={styles.select}
              onChange={(event, newValue) => {
                setOrganization(newValue);
              }}
              inputValue={inputValue4}
              onInputChange={(event, newInputValue) => {
                setInputValue4(newInputValue);
              }}
              id='organization'
              options={orgOptions}
              renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
            />
          </div>

          <div className={styles.textInput}>
            <div className={styles.label}>Document Type</div>
            <Autocomplete
              className={styles.select}
              onChange={(event, newValue) => {
                setDoc_type(newValue);
              }}
              inputValue={inputValue5}
              onInputChange={(event, newInputValue) => {
                setInputValue5(newInputValue);
              }}
              id='type'
              options={typeOptions}
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

export default AllDocumentsForm