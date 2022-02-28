import React from "react";
import jukiLogo from "../Images/juki-logo.png";
import jackLogo from "../Images/jackLogo1.JPG";
import ushaLogoFooter from "../Images/ushaLog.JPG";
import singerLogoFooter from "../Images/singerLogoFooter.JPG";
import geminyLogo from "../Images/geminyLogo.png";
import "../Components/Products.css";

export default function Products({ selected, getProduct }) {
  function onClickProductHandler(product) {
    getProduct(product);
  }
  return (
    <>
      <div
        className="flexContainer"
        style={{ height: "max-content", margin: "20px" }}
      >
        <div
          className="boxShadow"
          onClick={() => onClickProductHandler("singer")}
        >
          <img
            src={singerLogoFooter}
            alt="singerLogoPic"
            style={{
              height: "150px",
              width: "250px",
              margin: "50px 20px 20px 45px",
            }}
          ></img>
        </div>
        <div
          className="boxShadow"
          onClick={() => onClickProductHandler("usha")}
        >
          <img
            src={ushaLogoFooter}
            alt="UshaLogoPic"
            style={{
              height: "100px",
              width: "250px",
              margin: "70px 20px 20px 45px",
            }}
          ></img>
        </div>
        <div
          className="boxShadow"
          onClick={() => onClickProductHandler("geminy")}
        >
          <img
            src={geminyLogo}
            alt="geminyLogoPic"
            style={{
              height: "150px",
              width: "250px",
              margin: "50px 20px 20px 45px",
            }}
          ></img>
        </div>
        <div
          className="boxShadow"
          onClick={() => onClickProductHandler("juki")}
        >
          <img
            src={jukiLogo}
            alt="JukilogoPic"
            style={{
              height: "70px",
              width: "250px",
              margin: "80px 20px 20px 45px",
            }}
          ></img>
        </div>
        <div
          className="boxShadow"
          onClick={() => onClickProductHandler("jack")}
        >
          <img
            src={jackLogo}
            alt="JackLogoPic"
            style={{
              height: "150px",
              width: "250px",
              margin: "50px 20px 20px 45px",
            }}
          ></img>
        </div>
      </div>
    </>
  );
}
