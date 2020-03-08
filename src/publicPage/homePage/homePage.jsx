import React, { Fragment } from "react";
import { Layout, Menu, Breadcrumb, Card } from "antd";

import Home from "../../components/home";
import Men from "../../components/men";

import { Link } from "react-router-dom";

import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment style={{ background: "white" }}>
        <Header style={{ backgroundColor: "dark" }}>
          <h1 style={{ color: "white" }}>
            <b>E-Shop</b>
          </h1>
        </Header>
        <Layout>
          <Header className="header" style={{ backgroundColor: "white" }}>
            <div className="logo" />
            <Menu
              theme="white"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px", textAlign: "center" }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Men</Menu.Item>
              <Menu.Item key="3">Woman</Menu.Item>
              <Menu.Item key="4">Other</Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Home />
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Fragment>
    );
  }
}
