import React, { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
import styles from "./DatePickerComponent.module.css";

const DatePickerComponent = () => {
  const [dateOpen, setDateOpen] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  return (
    // <div className={styles.inputContainer}>
    <DatePicker
      className={styles.userInputField}
      clearable={true}
      open={dateOpen}
      onClose={() => setDateOpen(false)}
      inputFormat="YYYY/MM/DD"
      value={dueDate}
      onChange={(newValue) => {
        setDueDate(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          onClick={() => setDateOpen(true)}
        />
      )}
    />
    // </div>
  )
}

export default DatePickerComponent