import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import icon from "../Images/logo1.jpg";
import "../Components/NavBar.css";

export default function NavBar({ selectedProduct }) {
  function onClickProductHandler(product) {
    selectedProduct(product);
  }
  return (
    <>
      <Navbar
        style={{
          height: "120px",
          backgroundColor: "#FFF8DC",
          borderRadius: "5px",
          border: "solid orange 2px",
          margin: "5px",
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-flex "
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#138bbc",
              textShadow: "1px 1px #89ddfc",
              border: "3px solid ",
              borderRadius: "15px",
            }}
            onClick={() => onClickProductHandler("Home")}
          >
            <img
              alt=""
              src={icon}
              width="70"
              height="45"
              className="d-inline-block align-center"
              style={{
                transform: "scale(1.6)",
                marginRight: "20px",
              }}
            />
            <div>KALAI SEWING MACHINE CENTER</div>
          </Navbar.Brand>
          <Nav
            style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#D74A15" }}
          >
            <Nav.Link
              href="#home"
              onClick={() => onClickProductHandler("Home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#ProductBrands"
              onClick={() => onClickProductHandler("Brands")}
            >
              Product Brands
            </Nav.Link>
            <Nav.Link
              href="#ContactUs"
              onClick={() => onClickProductHandler("ContactUs")}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="#AboutUs"
              onClick={() => onClickProductHandler("AboutUs")}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
