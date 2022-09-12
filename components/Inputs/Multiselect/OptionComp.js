import React, { useState } from 'react';
import styles from './Multiselect.module.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const OptionComp = ({ val, optionName, setData, data, id }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (val.includes(optionName)) {
      const newState = val.filter(text => {
        return text !== optionName;
      }).sort();
      //setData(newState);
      setData({
        ...data,
        [id]: newState
      });
    } else {
      setData({
        ...data,
        [id]: [...val, optionName].sort()
      })
    }
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