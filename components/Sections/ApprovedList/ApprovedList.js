import React, { useState } from "react";
import styles from "./ApprovedList.module.css";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from "next/image";
import close from "../../../assets/Close.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormControl, MenuItem, Select, Switch } from "@mui/material";

const data = [
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 1 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 2 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 3 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 4 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 5 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 6 },
];

const ApprovedList = () => {
  const [number, setNumber] = useState(10);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.control}>
          <div>
            <p>Show</p>
            <FormControl sx={{ m: 1, width: 55 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={number}
                className={styles.select}
                onChange={handleChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
            <p>entries</p>
          </div>
        </div>
        <div className={styles.cont}>
          <div className={styles.heading}>
            <div className={styles.one}>
              <p>S.NO</p>
            </div>
            <div className={styles.two}>
              <p>Thumbnail</p>
            </div>
            <div className={styles.two}>
              <p>Organization name</p>
            </div>
            <div className={styles.two}>
              <p>Title</p>
            </div>
            <div className={styles.two}>
              <p>Document Name</p>
            </div>
            <div className={styles.two}>
              <p>Uploaded on</p>
            </div>
            <div className={styles.two}>
              <p>Approve</p>
            </div>
            <div className={styles.two}>
              <p>Action</p>
            </div>
          </div>
          {data.map(({ id, orgName, title, documentName, uploadedOn, thumbnail }, i) => {
            return (
              <div
                key={id}
                className={i % 2 !== 0 ? styles.row : styles.row2}
              >
                <div className={styles.one}>
                  <p>{i + 1}</p>
                </div>
                <div className={styles.two}>
                  <p className={styles.thumbnail}>{thumbnail}</p>
                </div>
                <div className={styles.two}>
                  <p>{orgName}</p>
                </div>
                <div className={styles.two}>
                  <p>{title}</p>
                </div>
                <div className={styles.two}>
                  <p>{documentName}</p>
                </div>
                <div className={styles.two}>
                  <p>{uploadedOn}</p>
                </div>
                <div className={styles.two}>
                  <Switch defaultChecked color="default" />
                </div>
                <div className={styles.two}>
                  <div
                    title="Edit User Profile"
                    className={`${styles.btn} ${styles.editbtn}`}
                    data-modal="myModal"
                    onClick={() => {
                      document.querySelector(".m7").style.display =
                        "flex";
                    }}
                  >
                    <RemoveRedEyeOutlinedIcon
                      sx={{ height: "14px", width: "14px" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="myModal" className="modal2 m7">
        <div
          className={styles.bg}
          onClick={() => {
            document.querySelector(".m7").style.display = "none";
          }}
        ></div>
        <div className={styles.modal_content}>
          <div
            className={styles.close}
            onClick={() => {
              document.querySelector(".m7").style.display = "none";
            }}
          >
            <p></p>
            <span>
              <Image src={close} alt="icon" height={24} width={24} />
            </span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              <Formik
                initialValues={{
                  userProfile: "",
                  display: "",
                  displayOrder: "",
                }}
                onSubmit={(values) => {
                  //handleSubmit(values);
                }}
              >
                <Form>
                  <div className={styles.textInput2}>
                    <label htmlFor="userProfile">
                      Org Name <span>*</span>
                    </label>
                    <Field
                      name="userProfile"
                      id="userProfile"
                      className={styles.input}
                      type="text"
                    />
                    <span className="form-error">
                      <ErrorMessage name="userProfile" />
                    </span>
                  </div>
                  <div className={styles.textInput2}>
                    <label htmlFor="displayOrder">
                      Short Name <span>*</span>
                    </label>
                    <Field
                      name="displayOrder"
                      id="displayOrder"
                      className={styles.input}
                      type="text"
                    />
                    <span className="form-error">
                      <ErrorMessage name="displayOrder" />
                    </span>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className={styles.btn_cont}>
              <button className={`${styles.btn3} ${styles.save}`}>
                Save
              </button>
              <button
                className={`${styles.btn3} ${styles.cancel}`}
                onClick={() => {
                  document.querySelector(".m7").style.display = "none";
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovedList;
