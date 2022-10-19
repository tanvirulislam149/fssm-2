import React, { useEffect, useState } from "react";
import styles from "./ApprovedList.module.css";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from "next/image";
import close from "../../../assets/Close.png";
import { Autocomplete, CircularProgress, FormControl, MenuItem, Pagination, Select, TextField } from "@mui/material";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { viewUnapprovedDoc, changeApproval } from "../../../services/docsApproveService";
import ViewDocument from "../../Dashboard/ViewDocument/ViewDocument";
import EditCategory from "../../Dashboard/EditCategory/EditCategory";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(30px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#2E69AE',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const ApprovedList = ({ searchResult, setMessage, setUpdated, updated, setDocId, docId }) => {
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
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState([]);
  const [nPages, setNPages] = useState(1);
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentDoc, setCurrentDoc] = useState([]);
  const [index, setIndex] = useState(null);
  const [click, setClick] = useState(false);
  const [update, setUpdate] = useState(false);
  const [dateArray2, setDateArray2] = useState([]);
  const [docDetails, setDocDetails] = useState({
    categories: [],
    stake_holder: [],
    valueChain: [],
    states: [],
    languages: [],
    chips: [],
    theme: ''
  });

  useEffect(() => {
    const indexOfLastRecord = currentPage * number;
    const indexOfFirstRecord = indexOfLastRecord - number;
    const records = searchResult.slice(indexOfFirstRecord, indexOfLastRecord);
    setCurrentRecords(records);
    const pageCount = Math.ceil(searchResult.length / number);
    setNPages(pageCount);
  }, [currentPage, searchResult, number])

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleError = (err) => {
    console.log(err);
  }

  const handleSwitch = (id) => {
    changeApproval(id, { is_approved: false }, (err, res) => {
      if (err) return handleError(err);
      if (res !== null) {
        console.log({ res });
        if (res.data.message === 'Updated Successfully') {
          alert('Changes Saved Successfully');
          setUpdated(!updated);
        }
      }
    })
  };

  useEffect(() => {
    setClick(!click);
    setIndex(0);
    const data = searchResult;
    let date = [];
    data.forEach(item => {
      date.push([]);
    })
    data.forEach(({ createdOn }, i) => {
      const month = createdOn.slice(5, 7);
      const day = createdOn.slice(8, 10);
      const year = createdOn.slice(0, 4);
      const hour = createdOn.slice(11, 13);
      const min = createdOn.slice(14, 16);
      date[i] = `${year}-${month}-${day} ${hour}:${min} ${hour >= 12 ? 'PM' : 'AM'}`;
    })
    setDateArray2(date);
  }, [searchResult])

  useEffect(() => {
    let data = [];
    currentRecords.forEach((doc) => {
      data.push({
        id: doc.id,
        theme: doc.theme?.theme_title,
        title: doc.title,
        citation: doc.citation,
        description: doc.description,
        city: doc.city,
        status: doc.status,
        geography: doc.geography,
        doc_type: doc.document_type === 'file' ? 'file' : 'URL',
        categories: [],
        stake_holder: [
          doc.stake_holder?.map(({ stake_holderName }) => {
            return stake_holderName;
          })
        ][0],
        valueChain: [
          doc.value_chain?.map(({ vc_name }) => {
            return vc_name;
          })
        ][0],
        states: [
          doc.state?.map(({ stateName }) => {
            return stateName;
          })
        ][0],
        languages: [
          doc.language?.map(({ lang }) => {
            return lang;
          })
        ][0],
        chips: [
          doc.keywords?.map(({ keyword }) => {
            return keyword;
          })
        ][0]
      })
    });
    setDocDetails(data[index]);
  }, [click, index])

  return (
    <>
      {searchResult.length ?
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
            {currentRecords.map(({ id, organization, title, thumbnail }, i) => {
              return (
                <div
                  key={id}
                  className={i % 2 !== 0 ? styles.row : styles.row2}
                >
                  <div className={styles.one}>
                    <p>{i + 1 + number * (currentPage - 1)}</p>
                  </div>
                  <div className={styles.two}>
                    <p className={styles.thumbnail}>{thumbnail}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{organization?.org_name}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{title}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{''}</p>
                  </div>
                  <div className={styles.two}>
                    <p>{dateArray2[i]}</p>
                  </div>
                  <div className={styles.two}>
                    <AntSwitch
                      defaultChecked={true}
                      onChange={() => {
                        handleSwitch(id);
                      }}
                    />
                  </div>
                  <div className={styles.two}>
                    <div
                      title="Edit User Profile"
                      className={`${styles.btn} ${styles.editbtn}`}
                      data-modal="myModal"
                      onClick={() => {
                        setIndex(i);
                        setMessage('Edited Successfully');
                        setCurrentDoc({ ...searchResult[i], date: dateArray2[i] });
                        document.querySelector(".m").style.display =
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
        </div> : null}

      <ViewDocument
        click={click}
        setClick={setClick}
        setDocId={setDocId}
        currentDoc={currentDoc} />

      <EditCategory update={update} setUpdate={setUpdate} docDetails={docDetails} />

      <p className={styles.results}>Showing {number} of {searchResult.length} entries</p>
      <Pagination
        count={nPages}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        color='primary'
        onChange={(e, val) => {
          setCurrentPage(val);
        }} />
    </>
  );
};

export default ApprovedList;
