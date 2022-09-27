import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./Organization.module.css";
import useOptions from '../../useOptions';
import OrganizationList from "../OrganizationList/OrganizationList";
import Image from "next/image";
import close from "../../../assets/Close.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Organization = () => {
  const [profile, setProfile] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [profileOptions, setProfileOptions] = useState([]);

  const { advancedSearchText } = useOptions();

  useEffect(() => {
    let options = [];
    advancedSearchText.partners.forEach(({ title }) => {
      options.push(title);
    });
    setProfileOptions(options);
  }, [advancedSearchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
                  setProfile(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="profile"
                options={profileOptions}
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
        <OrganizationList />
      </div>
    </>
  );
};

export default Organization;
