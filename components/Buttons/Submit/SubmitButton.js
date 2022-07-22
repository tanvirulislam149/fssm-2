import React from 'react'

const SubmitButton = ({ title, style }) => {
  return (
    <>
      <button className={style}>{title}</button>
    </>
  )
}

export default SubmitButton