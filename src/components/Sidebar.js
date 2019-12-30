import React from "react";
import "./../App.css";
import { Layout, Avatar, Menu, Icon, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import { Table } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

export default function Sidebar() {
  return (
    <div className="App">
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            background: "#d3d3d3"
          }}
        >
          <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
            <Menu.Item key="Dashboard">
              <Link to="/details">Dashboard</Link>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <span>EC2</span>
                </span>
              }
            >
              <Menu.ItemGroup key="EC2">
                <Menu.Item key="Instances">
                  <Link to="/ec2_instances">Instances</Link>
                </Menu.Item>
                <Menu.Item key="Security Groups">
                  <Link to="/securityGroups"> Security Groups</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <span>IAM</span>
                </span>
              }
            >
              <Menu.ItemGroup key="IAM">
                <Menu.Item key="Roles">
                  <Link to="/roles"> Roles</Link>
                </Menu.Item>
                <Menu.Item key="Policies">
                  <Link to="/policies"> Policies</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <span>Lambdas</span>
                </span>
              }
            >
              <Menu.ItemGroup key="Lambdas">
                <Menu.Item key="Lambdas">
                  {" "}
                  <Link to="/lambda">Lambdas Info</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <span>Step Functions</span>
                </span>
              }
            >
              <Menu.ItemGroup key="Step Functions">
                <Menu.Item key="Step Functions">
                  <Link to="/stepFunctions">Step Functions</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
}
