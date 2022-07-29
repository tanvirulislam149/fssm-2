import React from 'react';
import FaqCard from '../../Cards/FaqCard/FaqCard';

const FaqList = ({ faqData, error }) => {
  return (
    <>
      {!error ?
        faqData.map(({ question, id, answer }) => {
          return (
            <FaqCard title={question} body={answer} id={id} key={id} />
          )
        }) :
        <p className='error'>{error}</p>
      }
    </>
  )
}

export default FaqList