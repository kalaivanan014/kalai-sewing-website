import React from "react";
import { Row, Col,Breadcrumb } from "react-bootstrap";
export default function ContactUs() {
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

    <div>
      <h2 style={{ textAlign: "center",fontWeight:"bold" }}>Kindly visit our branch for any queries</h2>
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
    </div>
    </>
  );
}
