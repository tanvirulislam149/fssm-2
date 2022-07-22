import React from 'react';

const TextInput = ({ type, placeholder, style, value, onChange, id }) => {
  return (
    <>
      <input
        className={style}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
      />
    </>
  )
}

export default TextInput