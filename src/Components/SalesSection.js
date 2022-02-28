import React from "react";
import { Row, Col, Breadcrumb, Button } from "react-bootstrap";
import sales from "../Images/shop16.jpg";
import sales1 from "../Images/repair.jpg";
import sales2 from "../Images/spares.jpg";

export default function SalesSection({ getProduct }) {
  function onClickProductHandler(product) {
    getProduct(product);
  }
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
          Home
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
              SALES{" "}
            </h2>
            <h3 style={{ marginTop: "30px", fontWeight: "bold" }}>
              {" "}
              Authorized Dealer in SINGER MERRITT and USHA
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
              We Sell All kinds of sewing machines from classic sewing machine
              to Table top ,Fashion maker,Over Lock machines from various brands
              specialized in SINGER,MERRITT,USHA AND GEMINY.{" "}
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#D74A15" }}
                onClick={() => onClickProductHandler("Brands")}
              >
                {" "}
                Brands &rarr;
              </Button>
            </p>
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
              SERVICE{" "}
            </h2>
            <h3 style={{ marginTop: "30px", fontWeight: "bold" }}>
              {" "}
              WE Provide Repair Service for ALL Kinds of Sewing Machine
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
              We have 28 years of Experience no providing repair service for all
              kinds of sewing machines right from classic old machines to new
              Fashion Maker and Table Top Machine for all brands{" "}
            </p>
          </div>
        </Col>
        <Col>
          <img
            alt="service"
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
        <Col>
          <img
            alt="sapres"
            src={sales2}
            style={{
              height: "600px",
              width: "700px",
              borderRadius: "25px",
              transform: "scale(1.01)",
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
              SPARES{" "}
            </h2>
            <h3 style={{ marginTop: "30px", fontWeight: "bold" }}>
              {" "}
              WE SELL SEWING MACHINE ESSENTIALS
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
              We Sell All kinds of sewing machines Spares & MOTORS from classic
              sewing machine to Table top ,Fashion maker,Over Lock machines from
              various brands specialized in SINGER,MERRITT,USHA AND GEMINY.{" "}
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
