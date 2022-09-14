import React, { useEffect, useState } from 'react';
import AdvancedSearchCategories from '../AdvancedSearchCategories/AdvancedSearchCategories';
import AdvancedSearchResults from '../AdvancedSearchResults/AdvancedSearchResults';
import styles from './AdvancedSearchCont.module.css';
import { advancedSearch } from '../../../services/advancedSearchServices';
import { advancedSearchText } from '../../TextArrays';
import CustomizedHook from './useHook';
import { useRouter } from 'next/router';
import Multiselect from '../../Inputs/Multiselect/Multiselect';

const AdvancedSearchCont = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
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

  const router = useRouter();
  const theme = router.query.theme;

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

  useEffect(() => {
    if (theme === 'latest') {
      setData({
        ...data,
        theme: ['Latest FSSM News'],
      });

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
  }, [])

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

  const settingData = (res) => {
    setData({
      ...data,
      words: res
    });
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Advanced Search</h1>
        <section>
          <form className={styles.form} onSubmit={(e) => { handleSubmit(e); }}>

            <span className={styles.chip}></span>
            <CustomizedHook setData={settingData} />

            <div className={`${styles.grid} ${styles.top}`}>
              <div className={styles.select}>
                <Multiselect placeholder='Stakeholder' data={data} setData={setData} val={data.stakeholder} content={advancedSearchText.stake_holder} id='stakeholder' />
              </div>
              <div className={styles.select}>
                <Multiselect placeholder='Theme' data={data} setData={setData} val={data.theme} content={advancedSearchText.themes} id='theme' />
              </div>
              <div className={styles.select}>
                <Multiselect placeholder='Value Chain' data={data} setData={setData} val={data.value_chain} content={advancedSearchText.valueChain} id='value_chain' />
              </div>
              <div className={styles.select}>
                <Multiselect placeholder='State' data={data} setData={setData} val={data.state} content={advancedSearchText.states} id='state' />
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.select}>
                <Multiselect placeholder='Urban/Rural' data={data} setData={setData} val={data.status} content={advancedSearchText.statuses} id='status' />
              </div>
              <div className={styles.select}>
                <Multiselect placeholder='Language' data={data} setData={setData} val={data.language} content={advancedSearchText.languages} id='language' />
              </div>
              <div className={styles.select}>
                <Multiselect placeholder='Partner' data={data} setData={setData} val={data.partner} content={advancedSearchText.partners} id='partner' />
              </div>

              <button className={styles.btn}>Search</button>
            </div>
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