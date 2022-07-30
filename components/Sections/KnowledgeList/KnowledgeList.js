import React from 'react';
import KnowledgeCard from '../../Cards/KnowledgeCard/KnowledgeCard';

const KnowledgeList = ({ questions }) => {
  return (
    <>
      <div>
        {
          questions.map(({ question, id }) => {
            return (
              <KnowledgeCard id={id} key={id} title={question} />
            )
          })
        }
      </div>
    </>
  )
}

export default KnowledgeList