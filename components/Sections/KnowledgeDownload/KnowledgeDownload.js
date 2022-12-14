import React, { useEffect, useState } from 'react';
import KnowledgeSectionNav from '../KnowledgeSectionNav/KnowledgeSectionNav';
import KnowledgeCategories from '../KnowledgeCategories/KnowledgeCategories';
import { getAllKnowledgeRepo, getSubItem } from '../../../services/knowledgeRepoService';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './KnowledgeDownload.module.css';
import pdf from '../../../assets/pdf.png';
import Image from 'next/image';
import DownloadCard from '../../Cards/DownloadCard/DownloadCard';

const KnowledgeDownload = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [route, setRoute] = useState('');

  const router = useRouter();
  const { title, subitem } = router.query;
  const path = router.query.category === 'undefined' ? '1' : router.query.category;

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
        console.log({ z: res })

        const { search } = window.location;
        const id = new URLSearchParams(search).get('id');

        res.data.data.forEach(item => {
          if (item.id === Number(id)) {
            setTenders(item);
            return;
          }
        });
        setLoading(false);
      }
    });
  }, [router.query.category, path, subitem])

  useEffect(() => {
    switch (router.query.category) {
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
        setRoute('NGO???s/Development Partners');
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
  }, [router.query.category])

  return (
    <>
      <div className={styles.container}>
        <section>
          <KnowledgeSectionNav />
          <div className={styles.cont}>

            <div>
              <KnowledgeCategories loading={loading} category={category} />
            </div>
            <div style={{ minHeight: '500px' }}>
              <div className={styles.description}>Home / {route.replace('/', '-')} / {title}</div>
              {
                loading ? <div className={styles.justify_center}><CircularProgress /></div> :
                  <DownloadCard tenders={tenders} />
              }
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default KnowledgeDownload