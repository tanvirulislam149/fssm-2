import React, { useState } from "react";
import styles from "./UnapprovedList.module.css";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from "next/image";
import close from "../../../assets/Close.png";
import { FormControl, MenuItem, Select, Switch } from "@mui/material";

const data = [
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 1 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 2 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 3 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 4 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 5 },
  { orgName: "NFSSM", thumbnail: "", title: "DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places", documentName: "", uploadedOn: "2022-08-05 07:53:34", id: 6 },
];

const UnapprovedList = () => {
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
            <p>View Document Data</p>
            <span>
              <Image src={close} alt="icon" height={24} width={24} />
            </span>
          </div>

          <div className={styles.cover}>
            <div className={styles.content}>
              <h4 className={styles.questionDetailsTitle}>Question Details</h4>
              <div className={styles.documentDataCont}>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Document Name
                  </div>
                  <div className={styles.documentDetail}>
                    <p>https://www.google.com/url?rct=j&sa=t&url=https://timesofindia.indiatimes.com/city/trichy/drda-picks-47-trichy-villages-to-make-them-odf-plus-model-places/articleshow/90652027.cms&ct=ga&cd=CAEYACoTNjc2MjM5ODI2MzUwMTEwNDIzMzIeMDJmYThkNjY5YjhjZWYyZDpjby5pbjplbjpJTjpS&usg=AOvVaw2qiQ909V1JLFhUCTYXW-Pi</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Title
                  </div>
                  <div className={styles.documentDetail}>
                    <p>DRDA Picks 47 Trichy Villages To Make Them Odf Plus Model Places</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Organization Name
                  </div>
                  <div className={styles.documentDetail}>
                    <p>NFSSM</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Theme
                  </div>
                  <div className={styles.documentDetail}>
                    <p>Latest FSSM News</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Sub Category
                  </div>
                  <div className={styles.documentDetail}>
                    <p>555</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Stakeholder
                  </div>
                  <div className={styles.documentDetail}>
                    <p>All</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Value Chain
                  </div>
                  <div className={styles.documentDetail}>
                    <p>All</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Geography
                  </div>
                  <div className={styles.documentDetail}>
                    <p>State</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Urban / Rural
                  </div>
                  <div className={styles.documentDetail}>
                    <p>Rural</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    State
                  </div>
                  <div className={styles.documentDetail}>
                    <p>Tamil Nadu</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    City
                  </div>
                  <div className={styles.documentDetail}>
                    <p>Trichy</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Language
                  </div>
                  <div className={styles.documentDetail}>
                    <p>English</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Description
                  </div>
                  <div className={styles.documentDetail}>
                    <p>The District Rural Development Agency (DRDA) has selected 47 more villages in Trichy district to make them open defecation free (ODF) plus model ...</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Keyword
                  </div>
                  <div className={styles.documentDetail}>
                    <p>AMRUT,Faecal Sludge and Septage Management,FSM,FSSM,FSTP,Open Defecation Free,Open Defecation Free and Sanitation,sanitation,Septage Management,Swachh Bharat Mission,Urban Local Bodies Faecal Sludge and Septage Management,Urban Sanitation,Water, Sanitation and Hygiene</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Citation
                  </div>
                  <div className={styles.documentDetail}>
                    <p>Attachment</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    Created On
                  </div>
                  <div className={styles.documentDetail}>
                    <p>2022-04-07 12:16:07</p>
                  </div>
                </div>
                <div className={styles.documentData}>
                  <div className={styles.documentHeading}>
                    View Document
                  </div>
                  <div className={styles.documentDetail}>
                    <p>view</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btn_cont}>
              <button className={`${styles.btn3} ${styles.save}`}>
                Edit Document
              </button>
              <button
                className={`${styles.btn3} ${styles.cancel}`}
                onClick={() => {
                  document.querySelector(".m7").style.display = "none";
                }}
              >
                Delete Document
              </button>
              <button className={`${styles.btn3} ${styles.save}`}>
                Map Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnapprovedList;
