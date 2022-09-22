import React, { useEffect, useState } from 'react';
import styles from './KnowledgeCont.module.css';
import KnowledgeCategories from '../KnowledgeCategories/KnowledgeCategories';
import Vendors from '../Vendors/Vendors';
import SetupAlerts from '../SetupAlerts/SetupAlerts';
import KnowledgeList from '../KnowledgeList/KnowledgeList';
import KnowledgeSectionNav from '../KnowledgeSectionNav/KnowledgeSectionNav';
import HeaderComponent from '../../Headers/HeaderComponent';
import { useRouter } from 'next/router';
import { getAllKnowledgeRepo } from '../../../services/knowledgeRepoService';
import Layout from '../Layout/Layout';

const KnowledgeCont = () => {
  const [category, setCategory] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const id = router.query.category;

  const handleError = (err) => {
    console.log(err);  // testing
    setLoading(false);
    setError(err.response.statusText);
  }

  useEffect(() => {
    getAllKnowledgeRepo(id, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        console.log({ r: res })
        setLoading(false);
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
          <Layout>
            <KnowledgeSectionNav />
            <div className={styles.cont}>

              <div>
                <KnowledgeCategories loading={loading} category={category} />

                <SetupAlerts />

                <Vendors />
              </div>

              <KnowledgeList loading={loading} questions={questions} />
            </div>
          </Layout>
        </section>
      </div>
    </>
  )
}

export default KnowledgeCont