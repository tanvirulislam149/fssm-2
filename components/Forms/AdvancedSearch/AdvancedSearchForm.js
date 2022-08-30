import React, { useState } from 'react';
import styles from './AdvancedSearchForm.module.css';
import { advancedSearch } from '../../../services/advancedSearchServices';
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


const stake_holder = [
  'Academia',
  'All',
  'Corporates',
  'Development Partners',
  'Donor Agencies',
  'Elected Representatives',
  'General Citizen',
  'Government - All Levels',
  'Philantropists',
  'Policy Makers',
  'Private Sector',
  'Sanitation Professionals',
  'Training Institutes',
  'ULB Officials'
]

const themes = [
  'Capacity Building',
  'Communcations',
  'Community Engagement',
  'Finance',
  'Inclusion and Equity',
  'Latest FSSM News',
  'Learning',
  'Monitoring and Evaluation',
  'Planning',
  'Policies and Orders',
  'Procurement',
  'Technology',
  'Tenders',
  'Vendors'
]

const valueChain = [
  'All',
  'Containment',
  'Emptying',
  'Transport',
  'Treatment',
  'Reuse',
  'Not Applicable '
]

const states = [
  'All',
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Dadar and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Lakshadeep',
  'Madya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Orissa',
  'Pondicherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttaranchal',
  'West Bengal'
]

const statuses = [
  'Urban',
  'Rural'
]

const languages = [
  'Adi',
  'Angami',
  'Ao',
  'Assamese',
  'Bengali',
  'Bhili/Bhilodi',
  'Bodo',
  'Coorgi/Kodagu',
  'Dimasa',
  'Dogri',
  'English',
  'Garo',
  'Gondi',
  'Gujarati',
  'Halabi',
  'Hindi',
  'Ho',
  'Kannada',
  'Kashmiri',
  'Khandeshi',
  'Kharia',
  'Khasi',
  'Khond/Kondh',
  'Kisan',
  'Kolami',
  'Konyak',
  'Korku',
  'Korya',
  'Kui',
  'Kurukh',
  'Ladakhi',
  'Lotha',
  'Lushai/Mizo',
  'Maithili',
  'Malayalam',
  'Malto',
  'Marathi',
  'Meitei/Manipuri',
  'Miri/Mishing',
  'Munda',
  'Mundari',
  'Nepali',
  'Nissi/Dafla',
  'Odia',
  'Phom',
  'Punjabi',
  'Rabha',
  'Santali',
  'Savara',
  'Sema',
  'Sindhi',
  'Tamil',
  'Tangkhul',
  'Telugu',
  'Thado',
  'Tripuri',
  'Tulu',
  'Urdu'
]

const partners = [
  'ASCI',
  'Athena',
  'BBC Media Action',
  'BMGF',
  'CDD',
  'CEPT',
  'CFAR',
  'CG',
  'CPR',
  'CSE',
  'E&Y',
  'FICCI',
  'IIHS',
  'KPMG',
  'NFSSM',
  'NIUA',
  'PSI',
  'RTI',
  'UMC',
  'WASH'
]

const chips = [
  'request for proposals',
  'kesinga',
  'academia',
  'academia NSS sanitation FSSM',
  'academic',
  'academic collaboration',
  'access and containment',
  'action plan',
  'advisory',
  'advocacy',
  'affordable credit',
  'Agra',
  'agriculture',
  'agriculture fields',
  'AILSG',
  'Aizawl',
  'ALF',
  'All',
];

const AdvancedSearchForm = () => {
  const [loading, setLoading] = useState(false);
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

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    advancedSearch(data, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        setLoading(false);
        console.log({ r: res });
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


  return (
    <>
      <form className={styles.form} onSubmit={(e) => { handleSubmit(e); }}>
        <FormControl className={styles.chip}>
          <InputLabel id="demo-multiple-chip-label" shrink={false}>{data.words.length ? '' : 'Search for Keywords,Themes,Subcategories,Stakeholders,Value chain,State...'}</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={data.words}
            onChange={(e) => { handleChange(e, 'words') }}
            input={<OutlinedInput id="select-multiple-chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {chips.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
            {stake_holder.map((option) => (
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
            {themes.map((theme) => (
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
            {valueChain.map((option) => (
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
            {states.map((name) => (
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
            {statuses.map((option) => (
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
            {languages.map((option) => (
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
            {partners.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={data.partner.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {loading ?
          <CircularProgress /> :
          <button className={styles.btn}>Search</button>}
      </form>
    </>
  )
}

export default AdvancedSearchForm