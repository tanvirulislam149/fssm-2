import React, { useEffect, useState } from 'react';
import GlossaryCard from '../../Cards/GlossaryCard/GlossaryCard';
import { glossaryItems } from '../../TextArrays';
import { useRouter } from 'next/router';
import styles from './GlossaryList.module.css';

const GlossaryList = () => {
  const [items, setItems] = useState([]);

  const router = useRouter();
  const alphabet = router.query.alphabet;

  useEffect(() => {
    if (!alphabet) {
      setItems(glossaryItems);
    } else {
      const filteredGlossary = glossaryItems.filter(item => {
        return item.title[0] === alphabet;
      })
      setItems(filteredGlossary);
    }
  }, [router])

  return (
    <>
      {items.map(({ title, id, body }) => {
        return (
          <GlossaryCard title={title} body={body} id={id} key={id} />
        )
      })}

      {items.length ? <p className={styles.footer_text}>Showing 0-20 of {items.length} Results</p> : <p className={styles.footer_text2}>No records found</p>}
    </>
  )
}

export default GlossaryList