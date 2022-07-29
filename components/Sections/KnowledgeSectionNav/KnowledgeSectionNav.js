import React, { useEffect, useState } from 'react';
import styles from './KnowledgeSectionNav.module.css';
import { useRouter } from 'next/router';
import { knowledgeContentText } from '../../TextArrays';

const KnowledgeSectionNav = () => {
  const [title, setTitle] = useState('');

  const router = useRouter();

  const id = router.query.category;

  useEffect(() => {
    switch (id) {
      case '2':
        setTitle('Govt-National/state');
        break;
      case '3':
        setTitle('Technical consultants/Agencies');
        break;
      case '4':
        setTitle('Private Sector');
        break;
      case '5':
        setTitle('Academia/ Training');
        break;
      case '6':
        setTitle('NGO’s/Development Partners');
        break;
      case '7':
        setTitle('Donor/Philanthropist/CSR');
        break;
      case '8':
        setTitle('General Citizen /CBO');
        break;
      default:
        setTitle('All')
        break;
    }
  }, [router])

  return (
    <>
      <h1 className={styles.title}>
        {title}
      </h1>
    </>
  )
}

export default KnowledgeSectionNav