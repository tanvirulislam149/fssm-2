import React, { useEffect, useState } from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import styles from "./Organization.module.css";
import useOptions from '../../useOptions';
import OrganizationList from "../OrganizationList/OrganizationList";
import Image from "next/image";
import close from "../../../assets/Close.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getOrgFilter, getOrgList } from "../../../services/orgService";

const Organization = () => {
  const [search, setSearch] = useState("");
  const [org, setOrg] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [orgOptions, setOrgOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const { advancedSearchText } = useOptions();

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  useEffect(() => {
    getOrgFilter((err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        // console.log(res)
      }
    })
  }, [])

  useEffect(() => {
    let options = [];
    advancedSearchText.partners.forEach(({ title }) => {
      options.push(title);
    });
    setOrgOptions(options);
  }, [advancedSearchText]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    getOrgList({ search: search ? search : '' }, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        setOrg(res.data.message)
      }
    })

  };

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Organization</h4>

        <h4 className={styles.label2}>Organization Filter</h4>
        <form className={styles.form}>
          <section>
            <div className={styles.textInput}>
              <div className={styles.title}>Organization</div>
              <Autocomplete
                className={styles.select}
                onChange={(event, newValue) => {
                  setSearch(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="profile"
                options={orgOptions}
                renderInput={(params) => (
                  <TextField {...params} placeholder="--Select--" />
                )}
              />
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

        <h4 className={styles.label3}>Organization List</h4>
        {
          loading ?
            <div className={styles.justify_center}><CircularProgress /></div> :
            <OrganizationList
              org={org} />
        }

      </div>
    </>
  );
};

export default Organization;
