import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import { RiMailSendLine } from "react-icons/ri";
import { Stack } from "react-bootstrap";

export default function ContactsSection() {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={5}
        style={{
          height: "60px",
          fontSize: "1.2rem",
          alignItems: "center",
          // border: "2px solid black",
          fontStyle: "Candara",
          fontWeight: "bolder",
          marginBottom: "10px",
          marginTop: "10px",
          backgroundColor: "#FFF8DC",
          borderRadius: "5px",
        }}
      >
        <div style={{ marginLeft: "100px" }}>
          <FcPhoneAndroid
            style={{ height: "60px", width: "35px", left: "30px" }}
          />
          6369094090,9444104264
        </div>
        <div>
          <GoLocation style={{ height: "40px", width: "25px", left: "30px" }} />
          {"  "} Medavakkam & Sholinganallur
        </div>
        <div >
          {" "}
          <RiMailSendLine
            style={{ height: "40px", width: "25px", left: "30px" }}
          />
          kalaisewingmedavakkam@gmail.com
        </div>
      </Stack>
    </>
  );
}
