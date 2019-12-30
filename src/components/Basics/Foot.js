import React, { Component } from "react";
import "./../../App.css";
import { Layout, Breadcrumb, Icon, Avatar } from "antd";
import Table from "./../Table";
import Title from "antd/lib/typography/Title";

const { Header, Footer, Sider, Content } = Layout;

function Foot() {
  return (
    <div className="Foot">
      <Layout>
        <Content style={{ padding: "15px 50px" }}>
          <Breadcrumb style={{ margin: "16px 0px" }}>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 510 }}>
            <Table />
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </div>
  );
}

export default Foot;
