import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import UnapprovedList from '../../Sections/UnapprovedList/UnapprovedList';
import styles from "./UnapprovedDocs.module.css"
import useOptions from "../../useOptions";

const UnapprovedDocs = () => {

  const { advancedSearchText } = useOptions();

  const [inputValue, setInputValue] = useState("");
  const [themeOptions, setThemeOptions] = useState([]);
  const [stakeholderOptions, setStakeholderOptions] = useState([]);
  const [organizationOption, setOrganizationOption] = useState([]);
  const [valueChainOption, setValueChainOption] = useState([]);
  const [subCategoryOption, setSubCategoryOption] = useState([]);
  const [documentTypeOption, setDocumentTypeOption] = useState([]);

  useEffect(() => {
    let options = [];
    advancedSearchText.themes.forEach(({ title }) => {
      options.push(title);
    });
    setThemeOptions(options);
  }, []);
  useEffect(() => {
    let options = [];
    advancedSearchText.stake_holder.forEach(({ title }) => {
      options.push(title);
    });
    setStakeholderOptions(options);
  }, []);
  useEffect(() => {
    let options = [];
    advancedSearchText.partners.forEach(({ title }) => {
      options.push(title);
    });
    setOrganizationOption(options);
  }, []);
  useEffect(() => {
    let options = [];
    advancedSearchText.valueChain.forEach(({ title }) => {
      options.push(title);
    });
    setValueChainOption(options);
  }, []);
  useEffect(() => {
    let options = [];
    advancedSearchText.categories.forEach(({ title }) => {
      options.push(title);
    });
    setSubCategoryOption(options);
  }, []);
  useEffect(() => {
    let options = advancedSearchText.types;
    setDocumentTypeOption(options);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <h4 className={styles.label2}>Un Approved Documents</h4>
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
      <h4 className={styles.label3}>Un Approved List</h4>
      <UnapprovedList></UnapprovedList>
    </>
  )
}

export default UnapprovedDocs