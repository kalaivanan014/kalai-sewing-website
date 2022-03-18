import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import { RiMailSendLine } from "react-icons/ri";
import { Stack } from "react-bootstrap";

export default function ContactsSection() {
  return (
    <>
      <Stack direction="horizontal" gap={5}>
        <div style={{ marginLeft: "100px", fontWeight: "bold" }}>
          <FcPhoneAndroid
            style={{ height: "60px", width: "35px", left: "30px" }}
          />
          6369094090,9444104264
        </div>
        <div style={{ fontWeight: "bold" }}>
          <GoLocation style={{ height: "40px", width: "25px", left: "30px" }} />
          {"  "} Medavakkam & Sholinganallur
        </div>
        <div style={{ fontWeight: "bold" }}>
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
