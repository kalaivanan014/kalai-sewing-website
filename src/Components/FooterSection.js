import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { FcPhoneAndroid } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import { RiMailSendLine } from "react-icons/ri";
import { ImFacebook, ImYoutube2, ImInstagram } from "react-icons/im";
import icon from "../Images/logo1.jpg";

export default function FooterSection() {
  return (
    <div
      style={{
        height: "250px",
        // border: "solid 2px black",
        backgroundColor: "#FFF8DC",
        borderRadius: "10px",
        margin: "10px",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "8px",
          width: "100%",
          backgroundColor: "#D74A15",
          boxShadow: "#D74A15",
        }}
      ></div>
      <Row
        style={{
          margin: "20px",
          color: "#D74A15",
          textShadow: "#BF7440",
          marginTop: "20px",
        }}
      >
        <Col xs={6}>
          <Stack
            direction="vertical"
            gap={2}
            style={{
              height: "60px",
              fontSize: "1.2rem",
              fontStyle: "Candara",
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "20px",
            }}
          >
            <div
              className="d-flex "
              style={{
                fontSize: "2.38rem",
                fontWeight: "bold",
                color: "#138bbc",
                textShadow: "1px 1px #89ddfc",
                border: "3px solid ",
                borderRadius: "15px",
              }}
            >
              <img
                alt=""
                src={icon}
                width="70"
                height="45"
                className="d-inline-block align-center"
                style={{
                  transform: "scale(1.5)",
                  marginRight: "20px",
                }}
              />
              <div>KALAI SEWING MACHINE CENTER</div>
            </div>
          </Stack>
        </Col>
        <Col xs={4}>
          <Stack
            direction="vertical"
            gap={2}
            style={{
              height: "60px",
              fontSize: "1.2rem",
              fontStyle: "Candara",
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "60px",
            }}
          >
            <div>
              <FcPhoneAndroid style={{ height: "40px", width: "35px" }} />
              6369094090,9444104264
            </div>
            <div>
              <GoLocation style={{ height: "40px", width: "25px" }} />
              {"   "}Medavakkam & Sholinganallur
            </div>
            <div>
              <RiMailSendLine style={{ height: "40px", width: "25px" }} />
              kalaisewingmedavakkam@gmail.com
            </div>
          </Stack>
        </Col>
        <Col>
          <Stack
            gap={4}
            direction="horizontal"
            style={{ marginTop: "60px", height: "20px", width: "20px" }}
          >
              <h2>
                <ImFacebook style={{cursor:"pointer"}}  onClick={() => window.open('https://www.facebook.com/pages/category/Community/KALAI-Sewing-Machine-Centre-653479704682255/')}/>
              </h2>
              <h1>
                <ImYoutube2 style={{cursor:"pointer"}}  onClick={() => window.open('https://www.youtube.com/channel/UCxaxZ62cf1ol6MaogRNKqpA/featured')}/>
              </h1>
              <h2>
                <ImInstagram style={{cursor:"pointer"}}  onClick={() => window.open('https://www.facebook.com/pages/category/Community/KALAI-Sewing-Machine-Centre-653479704682255/')} />
              </h2>
          </Stack>
        </Col>
      </Row>
    </div>
  );
}
