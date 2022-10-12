import React, { useState } from "react";
import styles from "./UnapprovedList.module.css";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from "next/image";
import close from "../../../assets/Close.png";
import { CircularProgress, FormControl, MenuItem, Select, Switch } from "@mui/material";
import { viewUnapprovedDoc } from "../../../services/docsApproveService";

const UnapprovedList = ({ searchResult }) => {
  const [number, setNumber] = useState(10);
  const [docDetails, setDocDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { id, title, organization, theme, sub_cat, stake_holder, value_chain, geography, status, state, city, language, description, keywords, citation, createdOn, attachment } = docDetails;

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleViewDoc = (id) => {
    setLoading(true);
    viewUnapprovedDoc(id, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        setDocDetails(res.data.message);
      }
    })
  }

  return (
    <>
      {searchResult.length ?
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
              {searchResult.map(({ id, organization, title, documentName, updated, thumbnail }, i) => {
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
                      <p>{organization}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{title}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{documentName}</p>
                    </div>
                    <div className={styles.two}>
                      <p>{updated}</p>
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
                          // setDocId(id);
                          handleViewDoc(id);
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

              {loading ? <div className={styles.justify_center}><CircularProgress /></div> :
                <>
                  <div className={styles.cover}>
                    <div className={styles.content}>
                      <h4 className={styles.questionDetailsTitle}>Question Details</h4>
                      <div className={styles.documentDataCont}>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Document Name
                          </div>
                          <div className={styles.documentDetail}>
                            <p>null</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Title
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{title}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Organization Name
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{organization}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Theme
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{theme}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Sub Category
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{sub_cat}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Stakeholder
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{stake_holder}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Value Chain
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{value_chain}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Geography
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{geography}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Urban / Rural
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{status}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            State
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{state}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            City
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{city}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Language
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{language}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Description
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{description}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Keyword
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{keywords}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Citation
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{citation}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            Created On
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{createdOn}</p>
                          </div>
                        </div>
                        <div className={styles.documentData}>
                          <div className={styles.documentHeading}>
                            View Document
                          </div>
                          <div className={styles.documentDetail}>
                            <p>{attachment}</p>
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
                </>}
            </div>
          </div>
        </> : ""}
    </>
  );
};

export default UnapprovedList;
