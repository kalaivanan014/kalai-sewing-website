import React from "react";
import { Carousel, Stack, Row, Col } from "react-bootstrap";
import cover1 from "../Images/fCover.png";
import jackMachine from "../Images/fCover1.png";
import classic from "../Images/fCover2.png";
import geminy from "../Images/Geminy.png";

function HeaderSection({ selectedProduct }) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={cover1}
          style={{ objectFit: "contain", width: "100%" }}
          alt="cover"
        ></img>
      </Carousel.Item>

      <Carousel.Item>
        <img
          alt="jack"
          src={jackMachine}
          style={{ objectFit: "contain", width: "100%" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="geminy"
          src={geminy}
          style={{ objectFit: "contain", width: "100%" }}
        ></img>
      </Carousel.Item>

      <Carousel.Item>
        <img
          alt="calssic"
          src={classic}
          style={{ objectFit: "contain", width: "100%" }}
        ></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeaderSection;
