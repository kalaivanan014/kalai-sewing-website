import React from "react";
import { Carousel, Stack, Row, Col } from "react-bootstrap";
import cover1 from "../Images/shop10.jpg";
import singerLogoFooter from "../Images/singerLogoFooter.png";
import "../Components/HeaderSection.css";
import ushaLogoFooter from "../Images/ushaLog.png";
import jackMachine from "../Images/jackf4.jpg";
import jukiLogo from "../Images/juki-logo.png";
import jackLogo from "../Images/jackLogo1.png";
import ranew from "../Images/ranew.png";
import classic from "../Images/shop18.jpg";
import industrial from "../Images/shop2.jpg";
import geminyLogo from "../Images/geminyLogo.png";

function HeaderSection({ selectedProduct }) {
  return (
    <Carousel>
      <Carousel.Item className="h-650 ">
        <Row>
          <div
            style={{
              width: "30px",
              backgroundColor: "#89ddfc",
              borderRadius: "15px",
            }}
          ></div>

          <Col className="w-30">
            <img src={cover1} alt="cover"></img>
          </Col>
          <Col>
            <Stack
              direction="vertical"
              style={{ margin: "80px 40px 40px 40px" }}
            >
              <h2>We are authorized dealer of </h2>
              <div style={{ marginLeft: "40px" }}>
                {" "}
                <img
                  alt="singerlogo"
                  src={singerLogoFooter}
                  style={{ height: "100px", width: "250px" }}
                />
              </div>
              <div
                style={{
                  color: "#1E5906",
                  fontFamily: "sans",
                  fontSize: "2.8em",
                  textShadow: "1px 1px gray",
                  marginLeft: "70px",
                }}
              >
                MERRITT
              </div>
              <div>
                <img
                  alt="ushalogo"
                  src={ushaLogoFooter}
                  style={{
                    height: "90px",
                    width: "250px",
                    marginTop: "20px",
                    marginLeft: "50px",
                  }}
                ></img>
              </div>
              <div style={{ marginLeft: "40px" }}>
                {" "}
                <img
                  alt="geminylogo"
                  src={geminyLogo}
                  style={{
                    height: "100px",
                    width: "250px",
                    margin: "20px 20px 20px 10px",
                  }}
                />
              </div>
            </Stack>
          </Col>

          <div
            style={{
              width: "30px",
              backgroundColor: "#89ddfc",
              borderRadius: "15px",
            }}
          ></div>
        </Row>
      </Carousel.Item>

      <Carousel.Item className="h-650 ">
        <Row>
          <div
            style={{
              width: "30px",
              backgroundColor: "#89ddfc",
              borderRadius: "15px",
            }}
          ></div>
          <Col className="w-30">
            <img
              alt="jack"
              src={jackMachine}
              style={{
                margin: "20px 60px 20px 80px",
                height: "500px",
                transform: "scale(1.4)",
              }}
            ></img>
          </Col>
          <Col>
            <Stack
              direction="vertical"
              gap={4}
              style={{ margin: "120px 40px 40px 40px" }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  textShadow: "1px 1px gray",
                }}
              >
                WE ARE DISTRIBUTOR OF
              </div>
              <div style={{ marginLeft: "40px" }}>
                <img
                  alt="juki"
                  src={jukiLogo}
                  style={{
                    height: "50px",
                    width: "350px",
                    margin: "0px 0px 0px 0px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "40px" }}>
                <img
                  alt="jack"
                  src={jackLogo}
                  style={{
                    height: "100px",
                    width: "350px",
                    margin: "0px 0px 0px 0px",
                  }}
                />
              </div>

              <div>
                <img
                  alt="ranew"
                  src={ranew}
                  style={{
                    height: "90px",
                    width: "250px",
                    marginTop: "-10px",
                    marginLeft: "80px",
                  }}
                ></img>
              </div>
            </Stack>
          </Col>
          <div
            style={{
              width: "30px",
              backgroundColor: "#89ddfc",
              borderRadius: "15px",
            }}
          ></div>
        </Row>
      </Carousel.Item>

      <Carousel.Item className="h-650 ">
        <Row>
          <div
            style={{
              width: "30px",
              backgroundColor: "#89ddfc",
              borderRadius: "15px",
            }}
          ></div>
          <Col>
            <img
              alt="calssic"
              src={classic}
              style={{ transform: "scale(0.9)", height: "500px" }}
            ></img>
          </Col>
          <Col>
            <img
              alt="industrial"
              src={industrial}
              style={{ transform: "scale(1)", height: "500px" }}
            />
          </Col>
          <div
            style={{
              width: "30px",
              backgroundColor: "#89ddfc",
              borderRadius: "15px",
            }}
          ></div>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeaderSection;
