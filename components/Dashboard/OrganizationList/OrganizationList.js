import React, { useState } from "react";
import styles from "./OrganizationList.module.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Image from "next/image";
import close from "../../../assets/Close.png";
import { Formik, Field, Form, ErrorMessage } from "formik";

const data = [
  { profile: "NFSSM", shortName: "NFSSM", id: 1 },
  { profile: "NFSSM", shortName: "NFSSM", id: 2 },
  { profile: "NFSSM", shortName: "NFSSM", id: 3 },
];

const OrganizationList = () => {
  const [number, setNumber] = useState(10);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
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
          {data.map(({ id, shortName, profile }, i) => {
            return (
              <div
                key={id}
                className={i % 2 !== 0 ? styles.row : styles.row2}
              >
                <div className={styles.one}>
                  <p>{i + 1}</p>
                </div>
                <div className={styles.two}>
                  <p>{profile}</p>
                </div>
                <div className={styles.two}>
                  <p>{shortName}</p>
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

export default OrganizationList;
