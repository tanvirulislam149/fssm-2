import React, { useState } from 'react';
import styles from './Multiselect.module.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const OptionComp = ({ optionName, res, setRes }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (res.includes(optionName)) {
      const newState = res.filter(text => {
        return text !== optionName;
      })
      setRes(newState);
    } else {
      setRes([
        ...res,
        optionName
      ])
    }
    console.log(res);
  }

  return (
    <>
      <div
        className={clicked ? styles.clicked : styles.option}
        onClick={() => {
          handleClick();
        }}
      >
        {clicked ? <CheckBoxIcon color='primary' /> : <CheckBoxOutlineBlankIcon />}<span className={styles.label}>{optionName}</span>
      </div>
    </>
  )
}

export default OptionComp