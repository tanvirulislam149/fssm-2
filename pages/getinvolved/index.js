import React from "react";
import DashboardHeader from "../../components/Dashboard/Header/DashboardHeader";
import SideBar from "../../components/Dashboard/SideBar/SideBar";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/Sections/Layout/Layout"
import HelpDesk from "../../components/Dashboard/HelpDesk/HelpDesk"
import GetInvolved from "../../components/Dashboard/GetInvolved/GetInvolved";
import Head from "next/head";

const GetInvolvedPage = () => {
  return (
    <>
      <Head>
        <title>Get Involved</title>
        <meta name="description" content="SWACHH FSSM Website" />
      </Head>

      <Layout>
        <DashboardHeader />
        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            {/* <HelpDesk /> */}
            <GetInvolved />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GetInvolvedPage;
