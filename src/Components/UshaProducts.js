import React from "react";
import "../Components/Products.css";
import { usha } from "./UshaObject";
import ProductBrand from "./ProductBrand";

export default function UshaProducts() {
  return (
    <>
      <div
        className="flexContainer"
        style={{ height: "max-content", margin: "10px" }}
      >
        {usha.map((obj,id) => (
          <ProductBrand key = {id} title={obj.title} desc={obj.desc} image={obj.image} />
        ))}
      </div>
    </>
  );
}
