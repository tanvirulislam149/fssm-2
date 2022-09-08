import React, { useState } from 'react';
import styles from './Multiselect.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import OptionComp from './OptionComp';

const arr = [
  'abc',
  'cde',
  'efg',
  'ghi',
  'ijk',
  'klm',
  'mno',
  'opq',
  'qrs',
  'rst'
]

const Multiselect = ({ id }) => {
  const [res, setRes] = useState([]);

  const handleDropDown = (el) => {
    el.classList.toggle('none');
  }

  return (
    <>
      <div
        className={styles.display}
        onClick={() => { handleDropDown(document.getElementById(`option-${id}`)); }}
      >
        <div></div>
        <span>
          {res.length ?
            res.length > 2 ?
              res.length + ' selected' :
              res.map(text => <span key={text}>{text + ', '}</span>) :
            'Theme'}
        </span>
        <ArrowDropDownIcon />
      </div>

      <div id={`option-${id}`} className={`none ${styles.options}`}>
        <input className={styles.input} type="text" placeholder='Search' />
        {
          arr.map(item => {
            return (
              <OptionComp res={res} setRes={setRes} key={item} optionName={item} />
            )
          })
        }
      </div>
    </>
  )
}

export default Multiselect