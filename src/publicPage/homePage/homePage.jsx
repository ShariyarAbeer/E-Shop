import React, { Fragment } from "react";
import { Tabs, Layout } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";

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
            <b>E-Shop</b>
          </h1>
        </Header>
        <Tabs defaultActiveKey="1" style={{ textAlign: "center" }}>
          <TabPane
            tab={
              <span>
                <AppleOutlined />
                Home
              </span>
            }
            key="1"
          >
            <Home />
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Men
              </span>
            }
            key="2"
          >
            <Men />
          </TabPane>
        </Tabs>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Fragment>
    );
  }
}
