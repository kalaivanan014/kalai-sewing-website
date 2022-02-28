import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import sales from "../Images/aboutus.png";
import sales1 from "../Images/mission.png";

export default function AboutUs() {
  return (
    <>
      <Breadcrumb
        style={{
          backgroundColor: "#d6e9ee",
          height: "60px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <Breadcrumb.Item
          href="#"
          style={{ margin: "10px", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          AboutUs
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col>
          <img
            alt="sales"
            src={sales}
            style={{
              height: "600px",
              width: "700px",
              borderRadius: "5px",
            }}
          ></img>
        </Col>

        <Col style={{ backgroundColor: "#d6e9ee", borderRadius: "15px" }}>
          <div
            style={{
              width: "10px",
              height: "600px",
              backgroundColor: "#15a2d7",
              margin: "0",
              position: "absolute",
            }}
          >
            {}
          </div>
          <div style={{ margin: "20px" }}>
            <h2
              style={{
                marginTop: "100px",
                fontWeight: "bolder",
                textDecoration: "underline",
                color: "#D74A15",
              }}
            >
              ABOUT{" "}
            </h2>
            <h3 style={{ marginTop: "30px", fontWeight: "bold" }}>
              {" "}
              We Are Pioneer in Sales and Service on Sewing Machine of various
              brand. we Sell All kinds of sewing Machines Kindly reach us on the
              below mentioned Location. For Bulk orders please email us on the
              below mentioned mail address.
            </h3>
          </div>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col style={{ backgroundColor: "#d6e9ee", borderRadius: "15px" }}>
          <div
            style={{
              width: "10px",
              height: "600px",
              backgroundColor: "#15a2d7",
              margin: "0",
              position: "absolute",
            }}
          >
            {}
          </div>

          <div style={{ margin: "20px" }}>
            <h2
              style={{
                marginTop: "100px",
                fontWeight: "bolder",
                textDecoration: "underline",
                color: "#D74A15",
              }}
            >
              MISSION{" "}
            </h2>
            <h3 style={{ marginTop: "30px", fontWeight: "bold" }}>
              {" "}
              Authorized Dealer in SINGER MERRITT USHA AND GEMINY
            </h3>
            <p
              style={{
                marginTop: "20px",
                fontWeight: "bold",
                fontSize: "1.5rem",
                fontFamily: "Verdana",
                fontStyle: "italic",
              }}
            >
              {" "}
              Our Mission is to attain Customer statisfaction by providing
              quality Sewing machine product and Repair Service{" "}
            </p>
          </div>
        </Col>
        <Col>
          <img
            alt="spares"
            src={sales1}
            style={{
              height: "600px",
              width: "700px",
              borderRadius: "25px",
            }}
          ></img>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <h2 style={{ textAlign: "center" }}> Our Locations</h2>
      </Row>
      <Row>
        <Col>
          {
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.6103804393!2d80.2274093!3d12.8979077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3062a65dc65fcf1!2sKALAI%20SEWING%20MACHINE%20CENTER!5e0!3m2!1sen!2sin!4v1644986682956!5m2!1sen!2sin"
              width="600"
              height="450"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              title="sholinganallur"
            ></iframe>
          }
        </Col>

        <Col>
          {
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13759.152595369103!2d80.19753343250567!3d12.907048406159191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2025f8a1347d299!2sKalai%20sewing%20machine%20-%20medavakkam!5e0!3m2!1sen!2sin!4v1644987447553!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              title="medavakkam"
            ></iframe>
          }
        </Col>
      </Row>
    </>
  );
}
