import React, { Fragment } from "react";
import { Tabs, Layout } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import Home from "../../components/home";
import Men from "../../components/men";

import { Link } from "react-router";

import "antd/dist/antd.css";

const { TabPane } = Tabs;
const { Header, Footer } = Layout;

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
          <span class="badge badge-info">E-Shop</span>
          
          </h1>
        </Header>
        <Home />
       
        <Footer style={{ textAlign: "center" }}>
          ©2020 Created by Md.Arif Shariyar
        </Footer>
      </Fragment>
    );
  }
}
