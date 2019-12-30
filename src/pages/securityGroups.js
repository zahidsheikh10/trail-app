import React, { Component } from "react";
import { Layout, Breadcrumb, Icon, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import Table from "./../components/Table";
import Sidebar from "./../components/Sidebar";
import Foot from "./../components/Basics/Foot";
import Navbar from "./../components/Navbar";
import SecurityGroupTable from "./../components/SecurityGroupTable";

// import { render } from "@testing-library/react";

const { Header, Footer, Sider, Content } = Layout;
function securityGroups() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SecurityGroupTable />
    </>
  );
}

export default securityGroups;
