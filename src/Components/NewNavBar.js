import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Images/mainLogo.png";

export default function NewNavBar({ selectedProduct }) {
  function onClickProductHandler(product) {
    selectedProduct(product);
  }
  return (
    <>
      <Navbar bg="light" variant="light">
        {/* <Container> */}
        <Navbar.Brand
          href="#home"
          onClick={() => onClickProductHandler("Home")}
        >
          <img src={logo} width="700px" height="100px"></img>
        </Navbar.Brand>
        <Nav className="mr-auto" style={{ fontWeight: "bold" }}>
          <Nav.Link href="#home" onClick={() => onClickProductHandler("Home")}>
            Home
          </Nav.Link>
          <Nav.Link
            href="#brands"
            onClick={() => onClickProductHandler("Brands")}
          >
            Product Brands
          </Nav.Link>
          <Nav.Link
            href="#aboutus"
            onClick={() => onClickProductHandler("AboutUs")}
          >
            AboutUs
          </Nav.Link>
          <Nav.Link
            href="#contactus"
            onClick={() => onClickProductHandler("ContactUs")}
          >
            ContactUs
          </Nav.Link>
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}
