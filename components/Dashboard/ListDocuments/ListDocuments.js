import React, { useState } from 'react';
import styles from '../MyDocuments/MyDocuments.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import ListDocumentsForm from '../../Forms/ListDocumentsForm/ListDocumentsForm';
import ListDocumentsComp from '../ListDocumentsComp/ListDocumentsComp';
import { getListedDocs } from '../../../services/listDocumentServices';
import * as XLSX from 'xlsx'
// import ReactExport from "react-export-excel";

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
  {
    name: "Johson",
    amount: 30000,
    sex: 'M',
    is_married: true
  },
  {
    name: "Monika",
    amount: 355000,
    sex: 'F',
    is_married: false
  },
  {
    name: "John",
    amount: 250000,
    sex: 'M',
    is_married: false
  },
  {
    name: "Josef",
    amount: 450500,
    sex: 'M',
    is_married: true
  }
];

const ListDocuments = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [excelData, setExcelData] = useState([]);

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
    setError(err.message);
  }

  const handleSearch = (data) => {
    setLoading(true);
    getListedDocs(data, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setDocuments([res.data['Search Results']])
        setLoading(false);
        console.log({ ret: res.data['Search Results'] });
        const data = [];
        res.data['Search Results'].forEach((obj, i) => {
          let stakeholder = obj.stake_holder[0]?.stake_holderName;
          let valueChain = obj.value_chain[0]?.vc_name;
          let state = obj.state[0]?.stateName;
          let keywords = obj.keywords[0]?.keyword;
          let language = obj.language[0]?.lang;
          for (let i = 1; i < obj.stake_holder.length; i++) {

            stakeholder = stakeholder.concat(', '.concat(obj.stake_holder[i].stake_holderName));
          }
          for (let i = 1; i < obj.value_chain.length; i++) {
            valueChain = valueChain.concat(', '.concat(obj.value_chain[i].vc_name));
          }
          for (let i = 1; i < obj.state.length; i++) {
            state = state.concat(', '.concat(obj.state[i].stateName));
          }
          for (let i = 1; i < obj.keywords.length; i++) {
            keywords = keywords.concat(', '.concat(obj.keywords[i].keyword));
          }
          for (let i = 1; i < obj.language.length; i++) {
            language = language.concat(', '.concat(obj.language[i].lang));
          }
          data.push({});
          data[i].Title = obj.title;
          data[i].Geography = obj.geography;
          data[i].City = obj.city;
          data[i].Citation = obj.citation;
          data[i].Description = obj.description;
          data[i]['Urban / Rural'] = obj.status;
          data[i].Theme = obj.theme?.theme_title;
          data[i].Organization = obj.organization?.org_name;
          data[i]['Stake Holder'] = stakeholder;
          data[i].Languages = language;
          data[i].Keywords = keywords;
          data[i].States = state;
          data[i]['Value Chain'] = valueChain;
        });
        setExcelData(data);
      }
    })
  }

  const handleExport = () => {
    const date = new Date();
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(excelData);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `Escel_Sheet_${date.toString().replaceAll(' ', '_')}.xlsx`);
  }


  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.label}>Documents</h4>

        <h4 className={styles.label2}>Documents Filter</h4>
        <ListDocumentsForm handleSearch={handleSearch} />

        <h4 className={styles.label2}>Documents List <button className={styles.btn2} onClick={handleExport}>Excel Download</button></h4>
        {
          loading ?
            <div className={styles.justify_center}><CircularProgress /></div> :
            <ListDocumentsComp documents={documents} />
        }
      </div>
    </>
  )
}

export default ListDocuments