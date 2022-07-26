import React from 'react';
import FaqCard from '../../Cards/FaqCard/FaqCard';
import { faqArray } from '../../TextArrays';

const FaqList = () => {
  return (
    <>
      {faqArray.map(({ title, id, body }) => {
        return (
          <FaqCard title={title} body={body} id={id} key={id} />
        )
      })}
    </>
  )
}

export default FaqList