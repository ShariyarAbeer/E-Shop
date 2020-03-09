import React, { Fragment, Component } from "react";
import { Carousel, Row, Menu, Col, Divider, List, Card } from "antd";
import "antd/dist/antd.css";


import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

function handleClick(e) {
  console.log("click", e);
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Title 1",
          src: "https://images-na.ssl-images-amazon.com/images/I/91bQYhS1yQL._AC_UX500_.jpg"
                  
        },
      
        {
          title: "Title 2",
          src: "https://images-na.ssl-images-amazon.com/images/I/91bQYhS1yQL._AC_UX500_.jpg"
        },
        {
          title: "Title 3",
          src: "https://images-na.ssl-images-amazon.com/images/I/91bQYhS1yQL._AC_UX500_.jpg"
        },
        {
          title: "Title 4",
          src: "https://images-na.ssl-images-amazon.com/images/I/91bQYhS1yQL._AC_UX500_.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col sm={5}>
            
            <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>Men</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="1">P</Menu.Item>
                  <Menu.Item key="2">s</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Iteom 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <AppstoreOutlined />
                    <span>Women</span>
                  </span>
                }
              >
                <Menu.Item key="5">P</Menu.Item>
                <Menu.Item key="6">S</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <SettingOutlined />
                    <span>Other</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col sm={19}>
            <Carousel
              autoplay
              style={{
                textalign: "center",
                height: "400px",
                lineheight: "160px",
                background: "#364d79",
                overflow: "hidden"
              }}
            >
              <div>
                <img
                  style={{ height: "400px", width: "100%" }}
                  src="https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682&w=678&h=381"
                  alt="golf"
                />
              </div>
              <div>
                <img
                  style={{ height: "400px", width: "100%" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Oxford_shoe1.jpg/1200px-Oxford_shoe1.jpg"
                  alt="golf"
                />
              </div>
              <div>
                <img
                  style={{ height: "400px", width: "100%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6WQ2qkQV6A-cXzX-KgTVMRqiRQAiZgaVnHxncYzWYQ6ZV52Hy"
                  alt="golf"
                />
              </div>
              <div>
                <img
                  style={{ height: "400px", width: "100%" }}
                  src="https://images-na.ssl-images-amazon.com/images/I/91bQYhS1yQL._AC_UX500_.jpg"
                  alt="golf"
                />
              </div>
            </Carousel>
          </Col>
        </Row>
        <div>
        
          <h1 style={{margin:30}}><span class="badge badge-danger">HOT DEALS</span></h1>
          <Divider/>
        </div>
        <div style={{ margin: 20 }}>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={this.state.data}
            renderItem={item => (
              
              <List.Item>
                <Card>
                <img
                  style={{ height: "200px", width: "100%" }}
                  src="https://images-na.ssl-images-amazon.com/images/I/91bQYhS1yQL._AC_UX500_.jpg"
                  alt="golf"
                />
                
                
                <Card title={item.title}>Card content</Card>
                </Card>
              </List.Item>
              
            )}
          />
        </div>
      </Fragment>
    );
  }
}
