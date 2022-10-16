import React from 'react'
import Layout from "../../components/Sections/Layout/Layout"
import DashboardHeader from "../../components/Dashboard/Header/DashboardHeader"
import styles from "../../styles/Home.module.css"
import SideBar from '../../components/Dashboard/SideBar/SideBar'
import DocumentsApprove from '../../components/Dashboard/DocumentsApprove/DocumentsApprove'
import Head from 'next/head'

const DocumentsApprovePage = () => {
  return (
    <>
      <Head>
        <title>Documents Approval</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />
        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <DocumentsApprove></DocumentsApprove>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DocumentsApprovePage;