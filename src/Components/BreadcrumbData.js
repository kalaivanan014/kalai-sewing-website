import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function BreadcrumbData({ getProduct, selected }) {
  function onClickProductHandler(product) {
    getProduct(product);
  }
  return (
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
        style={{
          margin: "10px 0px 10px 10px",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
        onClick={() => onClickProductHandler("Brands")}
      >
        Products
      </Breadcrumb.Item>
      {selected !== null ? (
        <Breadcrumb.Item
          href="#"
          style={{
            margin: "10px 0px 0px 0px",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {selected}
        </Breadcrumb.Item>
      ) : null}
    </Breadcrumb>
  );
}
