import React from "react";
import DashboardHeader from "../../components/Dashboard/Header/DashboardHeader";
import SideBar from "../../components/Dashboard/SideBar/SideBar";
import styles from "../../styles/Home.module.css";
import Organization from "../../components/Dashboard/Organization/Organization";
import Layout from "../../components/Sections/Layout/Layout"
import Head from "next/head";

const OrganizationPage = () => {
  return (
    <>
      <Head>
        <title>Organization</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />
        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <Organization></Organization>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OrganizationPage;
