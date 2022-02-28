import React from "react";
import { Card } from "react-bootstrap";

export default function MachineCard({ title, desc, image }) {
  return (
    <> 

    <Card style={{ width: "22%", margin: "6px" }}>
      <Card.Img variant="top" src={image}  style={{ width: "100%",
    height: "15vw",
    objectFit: "contain"}} />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}
