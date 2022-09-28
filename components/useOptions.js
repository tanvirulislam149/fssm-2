import { useEffect, useState } from 'react';
import { getOptions } from '../services/advancedSearchServices';

const useOptions = () => {
  const [advancedSearchText, setAdvancedSearchText] = useState({
    chips: [],
    themes: [],
    partners: [],
    stake_holder: [],
    valueChain: [],
    types: [],
    states: [],
    statuses: [],
    languages: [],
    categories: []
  })

  useEffect(() => {
    getOptions((err, res) => {
      if (err) {
        console.log({ err });
        return;
      }
      if (res !== null) {
        setAdvancedSearchText({
          stake_holder: [
            res.data['Stake Holders'].map(item => {
              return { title: item }
            })
          ][0],
          themes: [
            res.data.Themes.map(item => {
              return { title: item }
            })
          ][0],
          valueChain: [
            res.data['Value Chain'].map(item => {
              return { title: item }
            })
          ][0],
          states: [
            res.data.States.map(item => {
              return { title: item }
            })
          ][0],
          statuses: [
            res.data.status.map(item => {
              return { title: item }
            })
          ][0],
          languages: [
            res.data.Languages.map(item => {
              return { title: item }
            })
          ][0],
          chips: [
            res.data.Keywords.map(item => {
              return { title: item }
            })
          ][0],
          types: [
            res.data['Document Type'].map(item => {
              return { title: item }
            })
          ][0],
          partners: [
            res.data.Organization.map(item => {
              return { title: item }
            })
          ][0],
          categories: [
            res.data['Sub Categories'].map(item => {
              return { title: item }
            })
          ][0]
        })
      }
    })
  }, [])

  return { advancedSearchText };
}

export default useOptions