import React from "react";

import Options from "./components/options";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

function formulario() {
  return (
    <>
      <Navbar/>
      <Options/>
      <Footer/>

    </>
  );
}

export default formulario;
