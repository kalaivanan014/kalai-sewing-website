import React from "react";
import "../Components/Products.css";
import { jack } from "./JackObject";
import ProductBrand from "./ProductBrand";

export default function JackProducts() {
  return (
    <>
      <div
        className="flexContainer"
        style={{ height: "max-content", margin: "10px" }}
      >
        {jack.map((obj,id) => (
          <ProductBrand key = {id} title={obj.title} desc={obj.desc} image={obj.image} />
        ))}
      </div>
    </>
  );
}
