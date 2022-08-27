import React from 'react';
import StackedGraph from '../AnalyticsSections/StackedGraph/StackedGraph';
import Statistics from '../AnalyticsSections/Statistics/Statistics';
import TableCont from '../AnalyticsSections/Table/TableCont';
import styles from './Analytics.module.css';

const Analytics = () => {
  return (
    <>
      <section className={styles.container}>
        <Statistics />
        <TableCont />
        <StackedGraph />
      </section>
    </>
  )
}

export default Analytics