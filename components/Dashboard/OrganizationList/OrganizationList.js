import React, { useState } from "react";
import styles from "./OrganizationList.module.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Image from "next/image";
import close from "../../../assets/Close.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DeletePopup from "../DeletePopup/DeletePopup";
import { editOrgList, delOrg } from "../../../services/orgService";
import { useForm } from "react-hook-form";

const OrganizationList = ({ org, setMessage }) => {
  const [number, setNumber] = useState(10);
  const [orgName, setOrgName] = useState("");
  const [docId, setDocId] = useState(0);
  const [orgId, setOrgId] = useState(0);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleError = (err) => {
    console.log({ e: err })
  }

  const handleDelete = (id, confirmation) => {
    delOrg(id, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        console.log({ res: res.data.message });
        if (res.data.message === 'Delete Successfully') {
          confirmation.style.display = 'flex';
        }
      }
    })
  }

  const { register, handleSubmit } = useForm();
  const handleEditOrgList = (data, id, confirmation) => {
    editOrgList(data, id, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        console.log({ res: res.data.message });
        if (res.data.message === 'Updated Successfully') {
          setMessage("Updated Successfully");
          confirmation.style.display = 'flex';
        }
      }
    })
  };


  return (
    <>
      {
        org.length ?
          <>
            <div className={styles.container}>
              <div className={styles.cont}>
                <div className={styles.heading}>
                  <div className={styles.one}>
                    <p>S.NO</p>
                  </div>
                  <div className={styles.two}>
                    <p>Organization name</p>
                  </div>
                  <div className={styles.two}>
                    <p>Short name</p>
                  </div>
                  <div className={styles.two}>
                    <p>Action</p>
                  </div>
                </div>
                {org.map(({ id, short_name, org_name }, i) => {
                  return (
                    <div
                      key={id}
                      className={i % 2 !== 0 ? styles.row : styles.row2}
                    >
                      <div className={styles.one}>
                        <p>{i + 1}</p>
                      </div>
                      <div className={styles.two}>
                        <p>{org_name}</p>
                      </div>
                      <div className={styles.two}>
                        <p>{short_name}</p>
                      </div>
                      <div className={styles.two}>
                        <div
                          title="Edit User Profile"
                          className={`${styles.btn} ${styles.editbtn}`}
                          data-modal="myModal"
                          onClick={() => {
                            setOrgId(id)
                            document.querySelector(".m7").style.display =
                              "flex";
                            setOrgName(org_name);
                          }}
                        >
                          <CheckBoxOutlinedIcon
                            sx={{ height: "15px", width: "15px" }}
                          />
                        </div>
                        <div
                          title="Delete User Profile"
                          className={`${styles.btn} ${styles.delbtn}`}
                        >
                          <DeleteOutlineOutlinedIcon
                            sx={{
                              color: "#e95454",
                              height: "15px",
                              width: "15px",
                            }}
                            onClick={() => {
                              setDocId(id);
                              document.querySelector('.m10').style.display = "flex";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </> : ""
      }

      <DeletePopup handleDelete={handleDelete} docId={docId} />

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
              <form onSubmit={handleSubmit(data => handleEditOrgList(data, orgId))}>
                <div className={styles.textInput2}>
                  <label htmlFor="orgName">
                    Org Name <span>*</span>
                  </label>
                  <input className={styles.input} {...register("org_name", { required: true })} defaultValue={orgName} />
                </div>
                <div className={styles.textInput2}>
                  <label htmlFor="shortName">
                    Short Name <span>*</span>
                  </label>
                  <input className={styles.input} {...register("short_name", { required: true })} />
                </div>
                <div className={styles.btn_cont}>
                  <button type="submit" className={`${styles.btn3} ${styles.save}`}>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationList;
