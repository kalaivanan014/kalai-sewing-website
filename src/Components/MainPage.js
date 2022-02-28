import React from "react";
import { Container } from "react-bootstrap";
import SingerProducts from "../Components/SingerProducts";
import UshaProducts from "../Components/UshaProducts";
import Products from "../Components/Products";
import JackProducts from "../Components/JackProducts";
import BreadcrumbData from "../Components/BreadcrumbData";
import ContactsSection from "../Components/ContactsSection";
import SalesSection from "../Components/SalesSection";
import HeaderSection from "../Components/HeaderSection";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import JukiProducts from "./JukiProducts";
import GeminyProducts from "./GeminyProducts";

export default function MainPage({ selected, selectedProduct }) {
  const productHandler = (productName) => {
    selectedProduct(productName);
  };
  return (
    <>
      {selected === "Home" ? <HeaderSection></HeaderSection> : null}
      <Container>
        {selected === "Home" ? <ContactsSection></ContactsSection> : null}
        {!["Home", "AboutUs", "ContactUs"].includes(selected) ? (
          <BreadcrumbData getProduct={productHandler} selected={selected}>
            {" "}
          </BreadcrumbData>
        ) : null}
        {selected === "singer" ? <SingerProducts /> : null}
        {selected === "Brands" ? (
          <Products getProduct={productHandler} />
        ) : null}
        {selected === "usha" ? <UshaProducts /> : null}
        {selected === "geminy" ? <GeminyProducts /> : null}
        {selected === "juki" ? <JukiProducts /> : null}
        {selected === "jack" ? <JackProducts /> : null}
        {selected === "Home" ? (
          <SalesSection getProduct={productHandler}></SalesSection>
        ) : null}
        {selected === "ContactUs" ? <ContactUs /> : null}
        {selected === "AboutUs" ? <AboutUs /> : null}
      </Container>
    </>
  );
}
