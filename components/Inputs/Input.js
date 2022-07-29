import React from 'react';

const Input = ({ type, name, placeholder, style, value, onChange, id }) => {
  return (
    <>
      <input
        className={style}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
      />
    </>
  )
}

export default Input