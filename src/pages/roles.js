import React, { Component } from "react";
import { Layout, Breadcrumb, Icon, Avatar } from "antd";
import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";
import RolesTable from "../components/RolesTable";

// import { render } from "@testing-library/react";

const { Header, Footer, Sider, Content } = Layout;
function roles() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        style={{
          position: "absolute",
          top: "100px", // computed based on child and parent's height
          left: "600px"
        }}
      >
        <RolesTable />
      </div>
    </>
  );
}

export default roles;
