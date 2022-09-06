import React, { useEffect, useState } from 'react';
import styles from './KnowledgeDataCont.module.css';
import KnowledgeSectionNav from '../KnowledgeSectionNav/KnowledgeSectionNav';
import HeaderComponent from '../../Headers/HeaderComponent';
import KnowledgeCategories from '../KnowledgeCategories/KnowledgeCategories';
import { getExpiredTenders } from '../../../services/tenderServices';
import { getAllKnowledgeRepo, getSubItem } from '../../../services/knowledgeRepoService';
import TenderCard from '../../Cards/TenderCard/TenderCard';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';

const KnowledgeDataCont = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [route, setRoute] = useState('');

  const router = useRouter();
  const { title, subitem } = router.query;
  const id = router.query.category;
  const path = id === 'undefined' ? '1' : id;
  console.log(path)

  const handleError = (err) => {
    setLoading(false);
    console.log({ e: err })
  }

  useEffect(() => {
    getAllKnowledgeRepo(path, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        setCategory(res.data['User Categories']);
      }
    });

    getSubItem({
      id: path,
      subitem
    }, (err, res) => {
      if (err) return handleError(err)
      if (res !== null) {
        setLoading(false);
        console.log({ z: res })
        setTenders(res.data.data);
      }
    });
  }, [id])

  useEffect(() => {
    switch (id) {
      case '2':
        setRoute('Govt-National/state');
        break;
      case '4':
        setRoute('Technical consultants/Agencies');
        break;
      case '5':
        setRoute('Private Sector');
        break;
      case '6':
        setRoute('Academia/ Training');
        break;
      case '8':
        setRoute('NGO’s/Development Partners');
        break;
      case '9':
        setRoute('Donor/Philanthropist/CSR');
        break;
      case '10':
        setRoute('General Citizen /CBO');
        break;
      default:
        setRoute('All')
        break;
    }
  }, [id])

  return (
    <>
      <div className={styles.container}>
        <section>
          <HeaderComponent />
          <KnowledgeSectionNav />
          <div className={styles.cont}>

            <div>
              <KnowledgeCategories loading={loading} category={category} />
            </div>
            <div style={{ minHeight: '500px' }}>
              <div className={styles.description}>Home / {route.replace('/', '-')} / {title}</div>
              {loading ? <div className={styles.justify_center}><CircularProgress /></div> :
                tenders.length ?
                  tenders.map(({ theme, id, status, organization, document_type, expiry_date, citation, description, title, value_chain, keywords, language, stake_holder, geography }) => {
                    return (
                      <TenderCard
                        key={id}
                        id={id}
                        title={title}
                        document_type={document_type}
                        stake_holder={stake_holder}
                        geography={geography}
                        org={organization.org_name}
                        urban_rural={status}
                        citation={citation}
                        language={language}
                        value_chain={value_chain}
                        description={description}
                        theme={theme.theme_title}
                        keywords={keywords}
                      />
                    )
                  }) :
                  <div className={styles.cont}>
                    <p>No records found.</p>
                  </div>
              }
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default KnowledgeDataCont