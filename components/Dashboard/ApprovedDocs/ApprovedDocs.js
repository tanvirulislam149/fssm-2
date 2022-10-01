import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styles from "./ApprovedDocs.module.css"
import ApprovedList from '../../Sections/ApprovedList/ApprovedList';
import useOptions from '../../useOptions';

const ApprovedDocs = () => {

  const { advancedSearchText } = useOptions();

  const themeOptions = [];
  advancedSearchText.themes.forEach(({ title }) => {
    themeOptions.push(title);
  });
  const stakeholderOptions = [];
  advancedSearchText.stake_holder.forEach(({ title }) => {
    stakeholderOptions.push(title);
  });
  const organizationOption = [];
  advancedSearchText.partners.forEach(({ title }) => {
    organizationOption.push(title);
  });
  const valueChainOption = [];
  advancedSearchText.valueChain.forEach(({ title }) => {
    valueChainOption.push(title);
  });
  const subCategoryOption = [];
  advancedSearchText.categories.forEach(({ title }) => {
    subCategoryOption.push(title);
  });
  const documentTypeOption = [];
  advancedSearchText.types.forEach(({ title }) => {
    documentTypeOption.push(title);
  });

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <h4 className={styles.label2}>Approved Documents</h4>
      <form className={styles.form}>
        <section>
          <div className={styles.textInputContainer}>
            <div className={styles.textInputSubCont1}>
              <div className={styles.textInput}>
                <div className={styles.title}>Theme</div>
                <Autocomplete
                  className={styles.select}
                  onChange={(event, newValue) => {
                    setProfile(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="profile"
                  options={themeOptions}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="--Select--" />
                  )}
                />
              </div>
              <div className={styles.textInput}>
                <div className={styles.title}>Stakeholder</div>
                <Autocomplete
                  className={styles.select}
                  onChange={(event, newValue) => {
                    setProfile(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="profile"
                  options={stakeholderOptions}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="--Select--" />
                  )}
                />
              </div>
              <div className={styles.textInput}>
                <div className={styles.title}>Organization</div>
                <Autocomplete
                  className={styles.select}
                  onChange={(event, newValue) => {
                    setProfile(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="profile"
                  options={organizationOption}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="--Select--" />
                  )}
                />
              </div>
            </div>
            <div className={styles.textInputSubCont2}>
              <div className={styles.textInput}>
                <div className={styles.title}>Sub Category</div>
                <Autocomplete
                  className={styles.select}
                  onChange={(event, newValue) => {
                    setProfile(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="profile"
                  options={subCategoryOption}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="--Select--" />
                  )}
                />
              </div>
              <div className={styles.textInput}>
                <div className={styles.title}>Value Chain</div>
                <Autocomplete
                  className={styles.select}
                  onChange={(event, newValue) => {
                    setProfile(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="profile"
                  options={valueChainOption}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="--Select--" />
                  )}
                />
              </div>
              <div className={styles.textInput}>
                <div className={styles.title}>Document Type</div>
                <Autocomplete
                  className={styles.select}
                  onChange={(event, newValue) => {
                    setProfile(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="profile"
                  options={documentTypeOption}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="--Select--" />
                  )}
                />
              </div>
            </div>
          </div>
        </section>

        <div className={styles.cont}>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className={styles.btn}
          >
            Search
          </button>
        </div>
      </form>
      <h4 className={styles.label3}>Approved List</h4>
      <ApprovedList></ApprovedList>
    </>
  )
}

export default ApprovedDocs