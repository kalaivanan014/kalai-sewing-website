import React from "react";
import "../Components/Products.css";
import { GeminyObj } from "./GeminyObject";
import ProductBrand from "./ProductBrand";

export default function GeminyProducts() {
  return (
    <>
      <div
        className="flexContainer"
        style={{ height: "max-content", margin: "10px" }}
      >
        {GeminyObj.map((obj, id) => (
          <ProductBrand
            key={id}
            title={obj.title}
            desc={obj.desc}
            image={obj.image}
          />
        ))}
      </div>
    </>
  );
}
