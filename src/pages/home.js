import React, { Component } from "react";
import { Layout, Breadcrumb, Icon, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import Table from "./../components/Table";
import Foot from "./../components/Basics/Foot";
import Navbar from "./../components/Navbar";
// import { render } from "@testing-library/react";

function Home() {
  return (
    <div>
      <Navbar />
      <Foot />
    </div>
  );
}

export default Home;
