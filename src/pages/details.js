import React, { Component } from "react";
import { Layout, Breadcrumb, Icon, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import Table from "./../components/Table";
import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";

// import { render } from "@testing-library/react";

const { Header, Footer, Sider, Content } = Layout;
function details() {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default details;
