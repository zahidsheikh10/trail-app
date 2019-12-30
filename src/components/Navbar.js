import React from "react";
import "./../App.css";
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button, Dropdown } from "antd";
import Title from "antd/lib/typography/Title";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="./login">Logout</Link>
    </Menu.Item>
  </Menu>
);

const { Header, Footer, Sider, Content } = Layout;

function Navbar() {
  return (
    <div className="Main">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" style={{ float: "right" }}>
              <Avatar style={{ float: "right" }} size={40} icon="user" />{" "}
            </a>
          </Dropdown>

          <Link to="/home">
            <Avatar
              style={{ position: "absolute", right: "60px" }}
              size={40}
              icon="home"
            />
          </Link>
          <Title style={{ color: "white" }} level={3}>
            <Link style={{ color: "white" }} to="/details">
              Landing Zone Dashboard
            </Link>
          </Title>
        </Header>
      </Layout>
    </div>
  );
}
export default Navbar;
