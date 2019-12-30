import React, { Component } from "react";
import { Layout, Breadcrumb, Icon, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import EC2Table from "../components/EC2Table";
import Sidebar from "./../components/Sidebar";
import Foot from "./../components/Basics/Foot";
import Navbar from "./../components/Navbar";

// import { render } from "@testing-library/react";

const { Header, Footer, Sider, Content } = Layout;
function ec2instances() {
  return (
    <>
      <Navbar />

      <Sidebar />

      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "250px", // computed based on child and parent's height
          right: "50px"
        }}
      >
        <EC2Table />
      </div>
    </>
  );
}

export default ec2instances;
