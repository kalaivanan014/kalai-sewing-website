import React from "react";
import MachineCard from "../Components/MachineCard";
export default function ProductBrand({ title, desc, image }) {
  return (
    <>
      <MachineCard title={title} image={image} desc={desc}></MachineCard>
    </>
  );
}
