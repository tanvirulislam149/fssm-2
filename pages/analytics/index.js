import React from 'react'
import Layout from "../../components/Sections/Layout/Layout"
import DashboardHeader from "../../components/Dashboard/Header/DashboardHeader"
import styles from "../../styles/Home.module.css"
import SideBar from '../../components/Dashboard/SideBar/SideBar'
import AnalyticsPage from '../../components/Dashboard/AnalyticsPage/AnalyticsPage'
import Head from 'next/head'

const DocumentsApprovePage = () => {
  return (
    <>
      <Head>
        <title>Analytics</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />
        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <AnalyticsPage />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DocumentsApprovePage;