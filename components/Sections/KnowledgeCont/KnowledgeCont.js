import React, { useEffect, useState } from 'react';
import styles from './KnowledgeCont.module.css';
import KnowledgeCategories from '../KnowledgeCategories/KnowledgeCategories';
import Vendors from '../Vendors/Vendors';
//import SetupAlerts from '../SetupAlerts/SetupAlerts';
import KnowledgeList from '../KnowledgeList/KnowledgeList';
import KnowledgeSectionNav from '../KnowledgeSectionNav/KnowledgeSectionNav';
import HeaderComponent from '../../Headers/HeaderComponent';
import { useRouter } from 'next/router';
import { getAllKnowledgeRepo } from '../../../services/knowledgeRepoService';

const KnowledgeCont = () => {
  const [category, setCategory] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  const router = useRouter();
  const id = router.query.category;

  const handleError = (err) => {
    console.log(err);  // testing
    setError(err.response.statusText);
  }

  useEffect(() => {
    getAllKnowledgeRepo(id, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setCategory(res.data['User Categories'])
        setQuestions(res.data.Questions);
      }
    });
  }, [id])

  return (
    <>
      <div className={styles.container}>
        <section>
          <HeaderComponent />
          <KnowledgeSectionNav />
          <div className={styles.cont}>

            <div>
              <KnowledgeCategories category={category} />

              {/* <SetupAlerts /> */}

              <Vendors />
            </div>

            <KnowledgeList questions={questions} />
          </div>
        </section>
      </div>
    </>
  )
}

export default KnowledgeCont