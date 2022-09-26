import React from "react";
import DashboardHeader from "../../components/Dashboard/Header/DashboardHeader";
import SideBar from "../../components/Dashboard/SideBar/SideBar";
import styles from "../../styles/Home.module.css";
import Organization from "../../components/Dashboard/Organization/Organization";
import Layout from "../../components/Sections/Layout/Layout"

const OrganizationPage = () => {
  return (
    <>
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
