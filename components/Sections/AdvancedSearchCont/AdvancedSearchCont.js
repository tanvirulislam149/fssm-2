import React, { useState } from 'react';
//import AdvancedSearchForm from '../../Forms/AdvancedSearch/AdvancedSearchForm';
import AdvancedSearchCategories from '../AdvancedSearchCategories/AdvancedSearchCategories';
import AdvancedSearchResults from '../AdvancedSearchResults/AdvancedSearchResults';
import styles from './AdvancedSearchCont.module.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import { advancedSearch } from '../../../services/advancedSearchServices';
import { advancedSearchText } from '../../TextArrays';
import Script from "next/script";
import Head from "next/head";
import CustomizedHook from './useHook';

const AdvancedSearchCont = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [chips, setChips] = useState([]);
  const [data, setData] = useState({
    stakeholder: [],
    value_chain: [],
    state: [],
    language: [],
    partner: [],
    words: [],
    theme: [],
    status: []
  })

  const settingChips = (data) => {
    setChips(data);
    console.log(chips)
  }

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    setLoading(true);
    advancedSearch(data, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ r: res });
        setResults(res.data['Search Results']);
      }
    });
  }

  const handleChange = (event, el) => {
    const { target: { value } } = event;

    setData({
      ...data,
      [el]: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleSelect = (category, val) => {
    setData({
      stakeholder: [],
      value_chain: [],
      state: [],
      language: [],
      partner: [],
      words: [],
      theme: [],
      status: [],
      [category]: [val]
    })

    setLoading(true);
    advancedSearch(data, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ r: res });
        setResults(res.data['Search Results']);
      }
    });
  }

  return (
    <>

      {/* <Head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://phpcoder.tech/multiselect/css/jquery.multiselect.css"/>
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
<Script src="https://phpcoder.tech/multiselect/js/jquery.multiselect.js"/> */}

      <div className={styles.container}>
        <h1 className={styles.title}>Advanced Search</h1>
        <section>
          <form className={styles.form} onSubmit={(e) => { handleSubmit(e); }}>
            <CustomizedHook settingChips={settingChips} className={styles.chip} />

            <FormControl className={styles.select}>
              <InputLabel id="demo-multiple-checkbox-label" shrink={false}>{data.stakeholder.length ? '' : 'Stakeholder'}</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={data.stakeholder}
                onChange={(e) => { handleChange(e, 'stakeholder') }}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {advancedSearchText.stake_holder.map((option) => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={data.stakeholder.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={styles.select}>
              <InputLabel id="demo-multiple-checkbox-label" shrink={false}>{data.theme.length ? '' : 'Theme'}</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={data.theme}
                onChange={(e) => { handleChange(e, 'theme') }}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {advancedSearchText.themes.map((theme) => (
                  <MenuItem key={theme} value={theme}>
                    <Checkbox checked={data.theme.indexOf(theme) > -1} />
                    <ListItemText primary={theme} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={styles.select}>
              <InputLabel id="demo-multiple-checkbox-label" shrink={false}>{data.value_chain.length ? '' : 'Value Chain'}</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={data.value_chain}
                onChange={(e) => { handleChange(e, 'value_chain') }}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {advancedSearchText.valueChain.map((option) => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={data.value_chain.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={styles.select}>
              <InputLabel id="demo-multiple-checkbox-label" shrink={false}>{data.state.length ? '' : 'State'}</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={data.state}
                onChange={(e) => { handleChange(e, 'state') }}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {advancedSearchText.states.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={data.state.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={styles.select}>
              <InputLabel id="demo-multiple-checkbox-label" shrink={false}>{data.status.length ? '' : 'Urban/Rural'}</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={data.status}
                onChange={(e) => { handleChange(e, 'status') }}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {advancedSearchText.statuses.map((option) => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={data.status.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={styles.select}>
              <InputLabel id="demo-multiple-checkbox-label" shrink={false}>{data.language.length ? '' : 'Language'}</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={data.language}
                onChange={(e) => { handleChange(e, 'language') }}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {advancedSearchText.languages.map((option) => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={data.language.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={styles.select}>
              <InputLabel id="demo-multiple-checkbox-label" shrink={false}>{data.partner.length ? '' : 'Partner'}</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={data.partner}
                onChange={(e) => { handleChange(e, 'partner') }}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {advancedSearchText.partners.map((option) => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={data.partner.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <button className={styles.btn}>Search</button>
          </form>

          <p className={styles.footer_text}>Showing 0-20 of 0 Results</p>

          <div className={styles.cont}>
            <AdvancedSearchCategories handleSelect={handleSelect} />

            <AdvancedSearchResults loading={loading} results={results} />
          </div>
        </section>
      </div>
    </>
  )
}

export default AdvancedSearchCont