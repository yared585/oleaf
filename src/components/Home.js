import React from "react";
import { Button, Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";
import bannerImage from "../images/Chevrolet/suburban1.jpg";
import mercedesImage from "../images/Mercedes/eClass.png";

const { Content } = Layout;

const Home = () => {
  return (
    <Content style={{ padding: "", marginTop: '-56px' }}>
      <div className="home">
        {/* Container for all content */}
        <div style={{ paddingTop: '56px' }}>
          {/* First Row for the first image */}
          <Row justify="center">
            <Col xs={24} sm={20} md={16} lg={12} xl={10}>
              <div className="car">
                <img src={bannerImage} alt="Car 1" style={{ maxWidth: '200%', height: 'auto', marginLeft: "-250px", marginTop: "-49px" }} />
                <div className="overlay-text">
                  <p>Let's start our journey together.</p>
                </div>
              </div>
            </Col>
          </Row>
          {/* Second Row for the service information */}
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={20} md={16} lg={12} xl={10}>
              <div style={{marginTop: "80px"}} className="service">
                <h2 style={{color: "white"}} >OLEAF LLC CHAUFFEURED TRANSPORTATION</h2>
                <p style={{color: "white"}} >
                  provides premier Black car and Black SUV services in Washington DC.
                  Besides rides to the airport, people trust us for all kinds of events
                  like going to hotels, weddings, meetings, and family get-togethers. We
                  make sure to be on time, act professionally, and provide personalized
                  service that goes beyond what you expect, meeting all your needs.
                </p>
              </div>
            </Col>
          </Row>
          {/* Third Row for the second image and its description */}
          <Row style={{marginTop: "80px"}} gutter={[16, 16]} justify="center">
            <Col style={{marginTop: "50px"}}  xs={24} sm={20} md={16} lg={12} xl={10}>
              <div className="car2-text">
                <h2 style={{color: "white"}} > Experience the thrill of the open road with the iconic Benz.</h2>
                <p style={{color: "white"}} >
                  Its powerful engine, sleek design, and agile handling make it a favorite
                  among performance enthusiasts.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <img src={mercedesImage} alt="Car 2" style={{ maxWidth: '100%', height: 'auto' }} />
            </Col>
          </Row>
          {/* Fourth Row for the "Reserve Now" button */}
          <Row justify="center"> 
              <div className="makeReservation" style={{ textAlign: "center", marginTop: "30px" }}>
                <Link to="https://google.com" target="_blank" rel="noopener noreferrer">
                  <Button type="primary">RESERVE NOW</Button>
                </Link>
              </div>   
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default Home;
