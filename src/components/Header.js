import React from "react";
import { Layout, Menu, Button } from "antd";
import { HomeOutlined, CarOutlined, ToolOutlined, PhoneOutlined , UserOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../images/logo/newLogo-modified.png";

const { Header } = Layout;

const HeaderComponent = () => {
  return (

    <Header className="header" style={{ height: "90px", paddingTop: "20px",  position: "relative"}}>
      {/*
      <div className="logo" style={{ float: "left", height: "100%", marginRight: "40px" }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: "150px", width: "130px", paddingBottom: "80px", marginTop: "-5px"}} />
        </Link>
      </div>
      */}
      <Menu theme="dark" mode="horizontal" className="header-links" style={{ display: "flex", justifyContent: "center" }}>
        <Menu.Item key="1" icon={<HomeOutlined />} style={{ fontSize: "16px" }}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CarOutlined />} style={{ fontSize: "16px" }} >
          <Link to="/ViewCars">View cars</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ToolOutlined />} style={{ fontSize: "16px" }}>
          <Link to="/">Service</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PhoneOutlined />} style={{ fontSize: "16px" }}>
          <Link to="/ContactUs">Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="5" className="button-container" style={{ fontSize: "18px" }}> 
          <Button type="primary" href="https://book.mylimobiz.com/v4/oleaf" target="_blank" rel="noopener noreferrer">
            Book your Reservation
          </Button>
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />} style={{ position: "absolute", top: "25px", right: "5px" }}>
        <a href="https://oleafid.web.app/" target="_blank" rel="noopener noreferrer">Admin</a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
