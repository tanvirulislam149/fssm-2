import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import UnapprovedList from '../../Sections/UnapprovedList/UnapprovedList';
import styles from "./UnapprovedDocs.module.css"
import useOptions from "../../useOptions";
import { getUnapprovedDocs } from '../../../services/docsApproveService';
import DeletePopup from '../DeletePopup/DeletePopup';

const UnapprovedDocs = ({ handleDelete, setUpdate, update, setMessage }) => {
  const [themeInput, setThemeInput] = useState("");
  const [stakeInput, setStakeInput] = useState("");
  const [orgInput, setOrgInput] = useState("");
  const [subCatInput, setSubCatInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [docTypeInput, setDocTypeInput] = useState("");
  const [theme, setTheme] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [subCat, setSubCat] = useState("");
  const [valueChain, setValueChain] = useState("");
  const [org, setOrg] = useState("");
  const [docType, setDocType] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [originalReq, setOriginaReq] = useState({});
  const [docId, setDocId] = useState(null);


  const { advancedSearchText } = useOptions();

  const themeOptions = [];
  advancedSearchText.themes.forEach(({ title }) => {
    themeOptions.push(title);
  });
  const stakeholderOptions = [];
  advancedSearchText.stake_holder.forEach(({ title }) => {
    stakeholderOptions.push(title);
  });
  const valueChainOption = [];
  advancedSearchText.valueChain.forEach(({ title }) => {
    valueChainOption.push(title);
  });
  const organizationOption = [];
  advancedSearchText.partners.forEach(({ title }) => {
    organizationOption.push(title);
  });
  const subCategoryOption = [];
  advancedSearchText.categories.forEach(({ title }) => {
    subCategoryOption.push(title);
  });
  const documentTypeOption = [];
  advancedSearchText.types.forEach(({ title }) => {
    documentTypeOption.push(title);
  });

  const handleError = (err) => {
    console.log(err);
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      theme: `${theme}`,
      sub_cat: `${subCat}`,
      stake_holder: `${stakeholder}`,
      value_chain: `${valueChain}`,
      document_type: `${docType}`,
      organization: `${org}`
    }

    setOriginaReq(data);

    getUnapprovedDocs({ params: 'False' }, data, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        console.log({ res })
        setSearchResult(res.data.message);
      }
    })
  };

  useEffect(() => {
    if (typeof originalReq.theme === 'string') {
      setLoading(true);
      getUnapprovedDocs({ params: 'False' }, originalReq, (err, res) => {
        if (err) return handleError(err)
        if (res !== null) {
          setLoading(false);
          console.log({ res })
          setSearchResult(res.data.message);
        }
      })
    }
  }, [update])


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
      {
        loading ?
          <div className={styles.justify_center}><CircularProgress /></div> :
          <UnapprovedList
            searchResult={searchResult}
            updated={update}
            setUpdated={setUpdate}
            setDocId={setDocId}
            docId={docId}
            setMessage={setMessage}
          />
      }


      <DeletePopup docId={docId} handleDelete={handleDelete} />
    </>
  )
}

export default UnapprovedDocs