import React from "react";
import "../Components/Products.css";
import { singer } from "./SingerObject";
import ProductBrand from "./ProductBrand";

export default function SingerProducts() {
  return (
    <>
      <div
        className="flexContainer"
        style={{ height: "max-content", margin: "10px" }}
      >
        {singer.map((obj,id) => (
          <ProductBrand key = {id} title={obj.title} desc={obj.desc} image={obj.image} />
        ))}
      </div>
    </>
  );
}
