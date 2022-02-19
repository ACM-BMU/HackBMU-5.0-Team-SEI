import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { InfoCircleOutlined, BookOutlined } from "@ant-design/icons";

const { Header } = Layout;
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          InvestMint
        </Link>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/info">
                <InfoCircleOutlined className="nav__icon" />
                Info
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/resources">
                {/* <span class="bi-house-door"></span>  */}
                <BookOutlined className="nav__icon" />
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <Layout>
    //   <Header className="nav-container">
    //     <Menu className="menu-container" theme="dark" mode="horizontal">
    //       <Menu.Item className="menu-item" key="1" icon={<HomeOutlined />}>
    //         <Link to="/">Home</Link>
    //       </Menu.Item>
    //       <Menu.Item
    //         className="menu-item"
    //         key="2"
    //         icon={<InfoCircleOutlined />}
    //       >
    //         <Link to="/info">Info</Link>
    //       </Menu.Item>
    //       <Menu.Item className="menu-item" key="3" icon={<BookOutlined />}>
    //         <Link to="/resources">Resources</Link>
    //       </Menu.Item>
    //     </Menu>
    //   </Header>
    // </Layout>
  );
}
