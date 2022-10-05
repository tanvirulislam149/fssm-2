import React from "react";
import DashboardHeader from "../../components/Dashboard/Header/DashboardHeader";
import SideBar from "../../components/Dashboard/SideBar/SideBar";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/Sections/Layout/Layout"
import HelpDesk from "../../components/Dashboard/HelpDesk/HelpDesk";

const HelpDeskPage = () => {
  return (
    <>
      <Layout>
        <DashboardHeader />
        <div className={styles.dash_cont}>
          <div>
            <SideBar />
          </div>
          <div>
            <HelpDesk />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HelpDeskPage;
