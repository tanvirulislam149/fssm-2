import React, { useState } from 'react';
import styles from './AdvancedSearchResults.module.css';
import TenderCard from '../../Cards/TenderCard/TenderCard';
import CircularProgress from '@mui/material/CircularProgress';

const AdvancedSearchResults = ({ searchData, results, loading }) => {

  return (
    <div>
      {loading ?
        <div className={styles.justify_center}><CircularProgress /></div> :
        results.length ?
          results.map(({ theme, id, status, organization, document_type, citation, description, title, value_chain, keywords, language, stake_holder, geography }) => {
            return (
              <TenderCard
                searchData={searchData}
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
          <div className={styles.empty}>
            <p>No records found.</p>
          </div>
      }
    </div>
  )
}

export default AdvancedSearchResults