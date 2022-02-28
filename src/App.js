import React, { useState } from "react";
import NavBar from "../src/Components/NavBar";

import FooterSection from "./Components/FooterSection";

import MainPage from "./Components/MainPage";

function App() {
  const [productName, setProductName] = useState("Home");
  const SetSelected = (productNameValue) => {
    setProductName(productNameValue);
  };

  return (
    <>
        <NavBar selectedProduct={SetSelected}> </NavBar>
     
      <MainPage  selected={productName} selectedProduct={SetSelected}></MainPage>

      <FooterSection></FooterSection>
    </>
  );
}

export default App;
