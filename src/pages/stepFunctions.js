import React, { Component } from "react";
import { Layout, Breadcrumb, Icon, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import Table from "./../components/Table";
import Sidebar from "./../components/Sidebar";
import Foot from "./../components/Basics/Foot";
import Navbar from "./../components/Navbar";
import StepFunctionTable from "./../components/StepfunctionTable";

// import { render } from "@testing-library/react";

const { Header, Footer, Sider, Content } = Layout;
function stepFunctions() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        style={{
          position: "absolute",
          top: "100px", // computed based on child and parent's height
          left: "500px",
          padding: "10px -5px"
        }}
      >
        <StepFunctionTable />
      </div>
    </>
  );
}

export default stepFunctions;
