import React, { useState } from "react";
import styles from "./UnapprovedList.module.css";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from "next/image";
import close from "../../../assets/Close.png";
import { Autocomplete, CircularProgress, FormControl, MenuItem, Select, Switch, TextField } from "@mui/material";
import { viewUnapprovedDoc } from "../../../services/docsApproveService";
import useOptions from "../../useOptions";

const UnapprovedList = ({ searchResult }) => {
  const [themeInput, setThemeInput] = useState("");
  const [subCatInput, setSubCatInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [stakeInput, setStakeInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");
  const [themeValue, setThemeValue] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [subCat, setSubCat] = useState("");
  const [valueChain, setValueChain] = useState("");
  const [languageValue, setLanguageValue] = useState("");
  const [keywordInput, setKeywordInput] = useState("");
  const [keywordValue, setKeywordValue] = useState("");
  const [number, setNumber] = useState(10);
  const [docDetails, setDocDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { id, title, organization, theme, sub_cat, stake_holder, value_chain, geography, status, state, city, language, description, keywords, citation, createdOn, attachment } = docDetails;

  // console.log(document.getElementsByName("title")[0].value);
  // console.log(document.querySelector('input[name="fav_language"]:checked').value);
  const { advancedSearchText } = useOptions();

  const themeOptions = [];
  advancedSearchText.themes.forEach(({ title }) => {
    themeOptions.push(title);
  });
  const stakeholderOptions = [];
  advancedSearchText.stake_holder.forEach(({ title }) => {
    stakeholderOptions.push(title);
  });
  const valueChainOption = [];
  advancedSearchText.valueChain.forEach(({ title }) => {
    valueChainOption.push(title);
  });
  const subCategoryOption = [];
  advancedSearchText.categories.forEach(({ title }) => {
    subCategoryOption.push(title);
  });
  const languageOption = [];
  advancedSearchText.languages.forEach(({ title }) => {
    languageOption.push(title);
  });
  const keywordOption = [];
  advancedSearchText.chips.forEach(({ title }) => {
    keywordOption.push(title);
  });


  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = () => {
    console.log(newTitle);
  }

  const handleError = (err) => {
    console.log(err);
  }

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
                            <p></p>
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
                      <button
                        onClick={() => {
                          document.querySelector(".m8").style.display =
                            "flex";
                        }}
                        className={`${styles.btn3} ${styles.save}`}>
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


          <div id="myModal" className="modal2 m8">
            <div
              className={styles.bg}
              onClick={() => {
                document.querySelector(".m8").style.display = "none";
              }}
            ></div>
            <div className={styles.modal_content}>
              <div
                className={styles.close}
                onClick={() => {
                  document.querySelector(".m8").style.display = "none";
                }}
              >
                <p>View Document Data</p>
                <span>
                  <Image src={close} alt="icon" height={24} width={24} />
                </span>
              </div>

              {loading ? <div className={styles.justify_center}><CircularProgress /></div> :
                <>
                  <div className={styles.cover3}>
                    <div>
                      <label htmlFor="display_order">Title <span>*</span></label>
                      <input className={styles.input} type="text" name="title" />
                      <label htmlFor="display_order">Theme <span>*</span></label>
                      <Autocomplete
                        onChange={(event, newValue) => {
                          setThemeValue(newValue);
                        }}
                        inputValue={themeInput}
                        onInputChange={(event, newInputValue) => {
                          setThemeInput(newInputValue);
                        }}
                        id="profile"
                        options={themeOptions}
                        renderInput={(params) => (
                          <TextField className={styles.select} name='theme' {...params} placeholder="--Select--" />
                        )}
                      />
                      <label htmlFor="display_order">Sub Category</label>
                      <Autocomplete
                        onChange={(event, newValue) => {
                          setSubCat(newValue);
                        }}
                        inputValue={subCatInput}
                        onInputChange={(event, newInputValue) => {
                          setSubCatInput(newInputValue);
                        }}
                        id="profile"
                        options={subCategoryOption}
                        renderInput={(params) => (
                          <TextField className={styles.select} name='theme' {...params} placeholder="--Select--" />
                        )}
                      />
                      <label htmlFor="display_order">Stakeholder</label>
                      <Autocomplete
                        onChange={(event, newValue) => {
                          setStakeholder(newValue);
                        }}
                        inputValue={stakeInput}
                        onInputChange={(event, newInputValue) => {
                          setStakeInput(newInputValue);
                        }}
                        id="profile"
                        options={stakeholderOptions}
                        renderInput={(params) => (
                          <TextField className={styles.select} name='theme' {...params} placeholder="--Select--" />
                        )}
                      />
                      <label htmlFor="display_order">Value Chain</label>
                      <Autocomplete
                        onChange={(event, newValue) => {
                          setValueChain(newValue);
                        }}
                        inputValue={valueInput}
                        onInputChange={(event, newInputValue) => {
                          setValueInput(newInputValue);
                        }}
                        id="profile"
                        options={valueChainOption}
                        renderInput={(params) => (
                          <TextField className={styles.select} name='theme' {...params} placeholder="--Select--" />
                        )}
                      />
                      <label htmlFor="display_order">Geography</label> <br />
                      <div className={styles.radio}>
                        <input type="radio" id="National" name="geography" value="National" />
                        <label for="National">National</label>
                        <input type="radio" id="State" name="geography" value="State" />
                        <label for="State">State</label>
                        <input type="radio" id="Not Applicable" name="geography" value="Not Applicable" />
                        <label for="Not Applicable">Not Applicable</label>
                      </div>
                      <label htmlFor="display_order">Urbal / Rural</label> <br />
                      <div className={styles.radio}>
                        <input type="radio" id="Urban" name="urban" value="urban" />
                        <label for="Urban">Urban</label>
                        <input type="radio" id="Rural" name="urban" value="Rural" />
                        <label for="Rural">Rural</label>
                      </div>
                      <label htmlFor="display_order">Language</label>
                      <Autocomplete
                        onChange={(event, newValue) => {
                          setLanguageValue(newValue);
                        }}
                        inputValue={languageInput}
                        onInputChange={(event, newInputValue) => {
                          setLanguageInput(newInputValue);
                        }}
                        id="profile"
                        options={languageOption}
                        renderInput={(params) => (
                          <TextField className={styles.select} name='theme' {...params} placeholder="--Select--" />
                        )}
                      />
                      <label htmlFor="display_order">Description</label><br />
                      <textarea className={styles.input} name="description" id="description"></textarea>
                      <label htmlFor="display_order">Keywords</label>
                      <Autocomplete
                        onChange={(event, newValue) => {
                          setKeywordValue(newValue);
                        }}
                        inputValue={languageInput}
                        onInputChange={(event, newInputValue) => {
                          setKeywordInput(newInputValue);
                        }}
                        id="profile"
                        options={keywordOption}
                        renderInput={(params) => (
                          <TextField className={styles.select} name='theme' {...params} placeholder="--Select--" />
                        )}
                      />
                      <label htmlFor="display_order">Citation</label><br />
                      <textarea className={styles.input} name="citation" id="citation"></textarea>
                      <label htmlFor="display_order">Document Type <span>*</span></label>
                      <input className={styles.input} type="text" name="docType" />
                      <label htmlFor="file">Choose File ( Accepts Only gif,jpe?g,png,pdf,doc,docx,xls,xlsx,mp4,mp3,avi,flv,mkv,mov,mpeg,mpg,webm,wmv)</label><br />
                      <input type="file" id="myfile" name="myfile" /><br />
                    </div>
                    <div className={styles.btn_cont}>
                      <button
                        onClick={() => {
                          handleSubmit()
                          document.querySelector(".m8").style.display = "none";
                        }}
                        className={`${styles.btn3} ${styles.save}`}>
                        Submit
                      </button>
                      <button
                        className={`${styles.btn3} ${styles.cancel}`}
                        onClick={() => {
                          document.querySelector(".m8").style.display = "none";
                        }}
                      >
                        Cancel
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
