import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import UnapprovedList from '../../Sections/UnapprovedList/UnapprovedList';
import styles from "./UnapprovedDocs.module.css"
import useOptions from "../../useOptions";
import { getUnapprovedDocs } from '../../../services/docsApproveService';

const UnapprovedDocs = () => {
  const [themeInput, setThemeInput] = useState("");
  const [stakeInput, setStakeInput] = useState("");
  const [orgInput, setOrgInput] = useState("");
  const [subCatInput, setSubCatInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [docTypeInput, setDocTypeInput] = useState("");
  const [theme, setTheme] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [org, setOrg] = useState("");
  const [subCat, setSubCat] = useState("");
  const [valueChain, setValueChain] = useState("");
  const [docType, setDocType] = useState("");


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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      theme: `${theme}`,
      sub_cat: `${subCat}`,
      stake_holder: `${stakeholder}`,
      value_chain: `${valueChain}`,
      document_type: `${docType}`,
      organization: `${org}`
    }

    getUnapprovedDocs(data, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        console.log(res.data.message)
      }
    })
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
                    setTheme(newValue);
                  }}
                  inputValue={themeInput}
                  onInputChange={(event, newInputValue) => {
                    setThemeInput(newInputValue);
                  }}
                  id="profile"
                  options={themeOptions}
                  renderInput={(params) => (
                    <TextField name='theme' {...params} placeholder="--Select--" />
                  )}
                />
              </div>
              <div className={styles.textInput}>
                <div className={styles.title}>Stakeholder</div>
                <Autocomplete
                  className={styles.select}
                  onChange={(event, newValue) => {
                    setStakeholder(newValue);
                  }}
                  inputValue={stakeInput}
                  onInputChange={(event, newInputValue) => {
                    setStakeInput(newInputValue);
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
                    setOrg(newValue);
                  }}
                  inputValue={orgInput}
                  onInputChange={(event, newInputValue) => {
                    setOrgInput(newInputValue);
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
                    setSubCat(newValue);
                  }}
                  inputValue={subCatInput}
                  onInputChange={(event, newInputValue) => {
                    setSubCatInput(newInputValue);
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
                    setValueChain(newValue);
                  }}
                  inputValue={valueInput}
                  onInputChange={(event, newInputValue) => {
                    setValueInput(newInputValue);
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
                    setDocType(newValue);
                  }}
                  inputValue={docTypeInput}
                  onInputChange={(event, newInputValue) => {
                    setDocTypeInput(newInputValue);
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
      <UnapprovedList />
    </>
  )
}

export default UnapprovedDocs