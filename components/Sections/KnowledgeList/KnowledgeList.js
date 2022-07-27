import React from 'react';
import { knowledgeContentText } from '../../TextArrays';
import KnowledgeCard from '../../Cards/KnowledgeCard/KnowledgeCard';

const KnowledgeList = () => {
  return (
    <>
      <div>
        {
          knowledgeContentText.sections.map(({ title, id, categories }) => {
            return (
              <KnowledgeCard id={id} key={id} title={title} categories={categories} />
            )
          })
        }
      </div>
    </>
  )
}

export default KnowledgeList