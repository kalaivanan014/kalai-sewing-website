import React from "react";
import "../Components/Products.css";
import { jukiObj } from "./JukiObject";
import ProductBrand from "./ProductBrand";

export default function JukiProducts() {
  return (
    <>
      <div
        className="flexContainer"
        style={{ height: "max-content", margin: "10px" }}
      >
        {jukiObj.map((obj,id) => (
          <ProductBrand key = {id} title={obj.title} desc={obj.desc} image={obj.image} />
        ))}
      </div>
    </>
  );
}
